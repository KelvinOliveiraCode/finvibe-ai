# FinVibe AI

![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06b6d4?logo=tailwindcss)

Personal finance application to record income and expenses, track budgets and goals, visualize cash flow, and chat with a rule-based financial assistant.

## Problem / Why it exists

Managing personal finances requires logging every expense, understanding where money goes, and tracking progress toward goals. Most tools are complex, require signup, or require connecting bank accounts. FinVibe AI is a local frontend with no signup and no backend to organize entries, view totals by category, and receive suggestions based on your own data.

## What it does

- Records income and expenses with description, amount, category, date, and tags.
- Displays balance, total income, total expenses, and monthly savings on the Dashboard.
- Shows cash flow in a bar chart (last 7 or 30 days) and spending by category in a pie chart.
- Tracks budgets by category with a progress bar and alerts when the limit is exceeded.
- Tracks financial goals with target value, current value, deadline, and required monthly savings.
- Lists notifications (bills nearing due date, goals, exceeded budget).
- Financial AI assistant: answers fixed questions (monthly spending, savings opportunities, goal deadlines, categories) based on demo data.
- Insights page with automatic calculations (average daily spending, annual projection, top spending category).

Demo data includes, for example, a salary of R$ 5,000, rent of R$ 1,500, and the Emergency Reserve goal (R$ 24,000 of R$ 30,000).

## Stack

- React 19 with TypeScript
- Vite (development server and build)
- Tailwind CSS (styling)
- lucide-react (icons)
- recharts (charts)
- ESLint with TypeScript ESLint

## How it works

The application is a single React component in `src/App.tsx`, with state held in `useState`. There is no backend or database: reloading the page resets data to demo values.

Usage flow:

1. Open the Dashboard with balance, charts, and metric cards.
2. Click "New Transaction" to add an income or expense (modal with description, amount, category, type, and tags).
3. Navigate the sidebar menu: Dashboard, Budgets, Goals, Financial AI, Insights.
4. In Financial AI, type a question or pick a quick question. Answers come from a local rules function (keyword check), not a language model, and no API key is required.
5. Insights calculates percentages and projections from current transactions.

## How to run

You need Node.js installed.

```bash
npm install
npm run dev
```

The application opens at `http://localhost:5173`.

Other commands:

- `npm run build` — checks types with TypeScript and generates the production build with Vite
- `npm run lint` — runs ESLint
- `npm run preview` — serves the production build locally

## Project structure

```
finvibe-ai/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.tsx
    ├── index.css
    ├── App.css
    ├── App.tsx
    └── assets/
        ├── hero.png
        ├── react.svg
        └── vite.svg
```

`src/App.tsx` contains types, mock data, base components (`StatCard`, `BudgetItem`, `GoalCard`), pages (Dashboard, Budgets, Goals, Financial AI, Insights), sidebar menu, and the main `App` component.

## Trade-offs and decisions

- Everything in a single `App.tsx` file: simple to read and maintain at this size, but does not scale for large teams.
- State in `useState` without persistence: no backend, no signup, data disappears on page reload.
- Rule-based AI: predictable, offline, no API key required, but does not answer questions outside defined patterns.
- Recharts for charts: single visualization package, declarative use.
- Tailwind with inline utility classes: no separate CSS files per component.
- Embedded mock data: immediate demo without configuring a database or API.

## Known limitations

- No persistence: added transactions are lost on page reload.
- No backend, authentication, or synchronization between devices.
- The AI does not use a language model; it answers only fixed keyword patterns.
- No transaction export or reports (CSV, PDF).
- No editing or deleting transactions after saving.
- No automated tests.
- Interface in Portuguese, with dates and values formatted in pt-BR in parts of the screen.

## License

This repository has no `LICENSE` file. Without a declared license, default copyright applies to the content.

## Author

Kelvin
