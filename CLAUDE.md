# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Czech history quiz app for kids. Static site (vanilla HTML/CSS/JS), no build step, hosted on GitHub Pages. Firebase Realtime Database for leaderboard/badges/XP sync across devices.

## Development

No build, no bundler, no tests. Open `index.html` in a browser or serve with any static server. To bump version after deploy, update `version.json` — the update-checker polls it every 60s and shows a toast when it changes.

## Architecture

All JS modules use IIFEs exposing global vars. **Script load order matters** — both HTML pages load scripts in this dependency chain:

```
TEST_REGISTRY (js/tests/index.js)
  → Stats (js/stats.js)        — localStorage wrapper for XP, scores, mistakes
    → Badges (js/badges.js)    — badge definitions, award logic (depends on TEST_REGISTRY + Stats)
      → Fire (js/firebase.js)  — Firebase sync: leaderboard, XP, badges, mistakes (depends on Stats)
        → app.js OR test-runner.js
```

**Two pages, one test engine:**
- `index.html` → dashboard (app.js): renders test cards from TEST_REGISTRY, nickname bar, sidebar with badges + real-time leaderboard
- `test.html?test=<id>[&mode=mistakes]` → test runner (test-runner.js): dynamically loads question file via `<script>` injection, reads the global `QUESTIONS` array

**Data lives in two places:**
- localStorage (`history-practice-stats`): canonical local stats — XP, per-test scores, mistake lists
- Firebase (`/leaderboard/{nickname}`): cross-device sync — XP, badges, totalAttempts, mistakes. Bidirectional sync uses "higher value wins" strategy.

**Session persistence:** In-progress test state is saved to localStorage after each answer so refreshing/navigating away resumes the test.

## Adding a New Test

1. Create `js/tests/your-test-id.js` — must set a global `var QUESTIONS = [...]` array
2. Add entry to `TEST_REGISTRY` in `js/tests/index.js` with `id`, `title`, `description`, `icon`, `accent`, `file`
3. Dashboard auto-renders from the registry. A `perfect-<id>` badge is auto-generated.

## Question Format

```js
{
  question: "Question text in Czech",
  options: ["Option A", "Option B", "Option C"],  // exactly 3 options
  correct: 0,  // 0-based index of correct answer
  explanation: "Shown after answering"
}
```

Both question order and option order are shuffled each attempt. Mistakes are tracked by `question` text (used as unique key).

## Conventions

- All UI text in Czech
- No ES6+ — uses `var`, `function`, no arrow functions, no template literals (browser compat)
- Firebase keys encode nicknames replacing `. $ # [ ] /` with `_` (one-way)
- XP system: 10 XP per correct answer + streak bonus (streak × 5 XP). Levels = totalXp / 500.
