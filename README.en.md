
# finvibe-ai

![language: JavaScript/TypeScript](https://img.shields.io/badge/language-JS-TS-yellow?logo=javascript)   ![status: done](https://img.shields.io/badge/status-done-green)   ![license: MIT](https://img.shields.io/badge/license-MIT-blue)

## Summary

Web application in JavaScript/TypeScript. Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights | Personal finance app with React, TypeScript and AI

## Problem / why it exists

The project delivers a web interface or utility for a specific scope, with focus on the browser as runtime and no dependency on its own server.

## Architecture

- Presentation layer: components and pages that render the interface.
- Logic layer: functions and hooks that process data and state.
- Communication: HTTP requests to external APIs or local data, when applicable.

The build is done with Vite (or equivalent tool), generating static files ready for hosting.

## Technologies

- JavaScript / TypeScript
- lucide-react
- react
- react-dom
- recharts
- @eslint/js
- @types/node
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- autoprefixer
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals

- No CI configured in this repository.

No automated tests detected in the scan.

## What it does

Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights | Personal finance app with React, TypeScript and AI

## How to run

Requirements: Node.js and npm (or yarn/pnpm).

```
# install dependencies
npm install

# run in development
vite

# production build
tsc -b && vite build

# run tests
pytest
```

## Project structure

- src/ (7 arquivo(s))
- public/ (2 arquivo(s))
- .gitignore, eslint.config.js, index.html, LICENSE, package-lock.json, package.json, postcss.config.js, README.en.md, README.md, tailwind.config.js e mais 4


## Trade-offs and decisions

- Static build: easy to host (GitHub Pages, Vercel, Netlify) without a server.
- Minimal dependencies to reduce maintenance surface.
- Browser as the only runtime required.

## Known limitations

- Runs in the browser; depends on internet connection for external resources.
- No automated tests detected.


## Tests

```
pytest
```

## License

Distributed under the MIT License. See the `LICENSE` file in this repository.

## Author

Kelvin Oliveira, https://github.com/KelvinOliveiraCode
Portfolio: https://kelvinoliveiracode.github.io/portfolio/
