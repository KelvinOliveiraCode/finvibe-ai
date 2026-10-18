# finvibe-ai

<div align="center">

[English](README.en.md) · **Português (Brasil)**

</div>

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![React 18](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/) [![MIT License](https://img.shields.io/badge/License-MIT-f4c430?style=flat-square)](LICENSE)

### Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights

---

## O que é

Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights

---

## Início Rápido

```bash
# Clone e entre
git clone https://github.com/KelvinOliveiraCode/<repo>.git
cd <repo>

# Instale dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Execute os testes
npm test
```

## Como funciona

Arquitetura de componente em arquivo único (`App.tsx`): toda a UI, estado e lógica vivem em um arquivo para simplicidade de deploy e build zero-config.

Decisões arquiteturais principais:
- **Estado global** via `useState` + `useMemo` (evita overhead do Context API)
- **Agregações memoizadas** para gráficos e insights
- **Dados mock in-line** como constantes TypeScript para prototipagem sem backend
- **IA baseada em regras** (`getAIResponse`) ,  determinística, offline, custo zero

---

## Capabilities

| Capability | Description |
|------------|-------------|
| Dashboard | 6 metric cards (Balance, Income, Expense, Savings, Investments, Net Worth) |
| Cash Flow | Bar chart (7d/30d) with Recharts ,  Income, Expense, Net per period |
| Budget Tracking | Category budgets with progress bars, over/under alerts |
| Goal Management | Progress rings with monthly savings calculation & deadline countdown |
| AI Assistant | Rule-based chat (getAIResponse) ,  spending analysis, savings tips, projections |
| Insights | Auto-generated alerts: delivery spikes, net worth growth, category breakdown |
| Transactions | Add/edit income/expense with categories, tags, date picker |
| Persistence | localStorage ,  state survives reload, zero backend |


---

## Showcase

### Financial Dashboard Architecture

- **Single-file React** (`App.tsx`): 1286 lines, zero build config beyond Vite
- **State**: `useState` + `useMemo` for all aggregations (charts, insights, scores)
- **AI**: Deterministic `getAIResponse` ,  keyword rules, offline, zero LLM cost
- **Charts**: Recharts (Bar, Line, Pie) with custom Tailwind theming
- **Icons**: lucide-react tree-shaken, custom SVG gradients

[Explore App.tsx](src/App.tsx)

---

## FAQ

<details>
<summary><strong>Does the AI use an LLM?</strong></summary>

No. The AI is rule-based (`getAIResponse`) ,  deterministic keyword matching. This keeps it offline, free, and instant.

</details>

<details>
<summary><strong>Is my data private?</strong></summary>

Yes. Everything runs in your browser. Data persists only in localStorage ,  never leaves your machine.

</details>

<details>
<summary><strong>Can I connect real bank APIs?</strong></summary>

Not currently. This is a prototype with mock data. Open Banking integration would require backend infrastructure.

</details>



---

## Documentation

- **Source Code** ,  Browse the `src/` directory for implementation details
- **API Reference** ,  TypeScript types in source
- **Architecture Diagram** ,  See [architecture.mermaid](docs/architecture.mermaid) (if present)
- **Changelog** ,  [CHANGELOG.md](CHANGELOG.md) (if present)
- **Contributing** ,  [CONTRIBUTING.md](CONTRIBUTING.md) (if present)

## License

[MIT](LICENSE) ,  Kelvin Oliveira

---

<div align="center">

**Built with** · TypeScript + React + Vite + Tailwind

**Author** · [Kelvin Oliveira](https://github.com/KelvinOliveiraCode) · [Portfolio](https://kelvinoliveiracode.github.io/portfolio/)

</div>