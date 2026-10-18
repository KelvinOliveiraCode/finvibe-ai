# finvibe-ai

[![JavaScript/TypeScript](https://img.shields.io/badge/JS-TS-yellow?logo=javascript)](https://www.typescriptlang.org/)   ![status: done](https://img.shields.io/badge/status-done-green)   ![license: MIT](https://img.shields.io/badge/license-MIT-blue)

## Summary

Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights | Personal finance app with React, TypeScript and AI
## Problem / Why it exists

The project addresses a practical scope and automates a task that, done manually, is repetitive and error-prone. The focus is on turning data or processes into reliable output, with readable, testable, and extensible code.
## Architecture

Code files (6):
- `eslint.config.js`
- `postcss.config.js`
- `App.tsx`
- `main.tsx`
- `tailwind.config.js`
- `vite.config.ts`
## Key Dependencies and Libraries

- @eslint/js
- globals
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- typescript-eslint
- eslint/config
- vite
- @vitejs/plugin-react
## What it does

Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights | Personal finance app with React, TypeScript and AI
## How to run

Requirements: Node.js and npm (or yarn/pnpm).

```bash
# install dependencies
npm install

# run in development
npm run dev

# production build
npm run build

# run tests
npm test
```
## Project Structure

- `eslint.config.js`
- `postcss.config.js`
- `App.tsx`
- `main.tsx`
- `tailwind.config.js`
- `vite.config.ts`
## Trade-offs and Technical Decisions

- Single-file component architecture (`App.tsx`): all UI, state, and logic live in one file for deploy simplicity and no complex build.
- Global state via `useState` + `useMemo`: avoids unnecessary Context API for small scope; `useMemo` memoizes expensive aggregations (charts, insights).
- Inline mock data: transactions, budgets, goals, and notifications are TypeScript constants ,  enables prototyping and visual tests without backend.
- Tailwind CSS + custom gradients: inline design system via utility classes; no separate CSS, eases visual maintenance.
- Rule-based financial AI (`getAIResponse`): deterministic keyword responses; no external LLM call, works offline at zero cost.
- Planned `localStorage` persistence: state survives reload; no server, no database.
## Known Limitations

- Fixed mock data; no integration with real banking APIs (Open Banking, Plaid, etc.).
- Rule-based AI (`getAIResponse`); does not use real LLM or embeddings.
- Persistence only in `localStorage` (planned); data lost when switching browser/device.
- No authentication/authorization; single-user local application.
- Charts via `recharts` with static data; no real-time data streaming.
## Tests

```bash
npm test
```
No automated tests detected in scan.
## License

Distributed under the MIT License. See the `LICENSE` file in this repository.
## Author

Kelvin Oliveira ,  https://github.com/KelvinOliveiraCode
Portfolio: https://kelvinoliveiracode.github.io/portfolio/
