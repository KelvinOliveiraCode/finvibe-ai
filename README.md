# finvibe-ai — Painel de finanças pessoais com assistente de IA

![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2-22c55e?style=flat-square&logo=react&logoColor=white)

**finvibe-ai** é um app web de finanças pessoais construído em React 18 + TypeScript com Tailwind CSS, Recharts para visualização de dados e Lucide para iconografia, empacotado pelo Vite 8. A interface é mobile-first, com dark mode em glassmorphism — painéis translúcidos, bordas suaves e hierarquia visual pensada para leitura rápida de números. O projeto nasceu do desafio "Vibe Coding" da DIO: o app inteiro foi gerado a partir de um PRD passado via prompt, e a arquitetura resultante é enxuta por design — estado gerenciado no React, sem backend, dados vivendo localmente no cliente. É um exemplo prático de como um PRD bem especificado se traduz em uma SPA completa e funcional.

---

## 🇧🇷 Português

### O que é

Aplicação de finanças pessoais com dashboard completo, gráficos interativos, controle de orçamento, score financeiro, metas e um assistente financeiro conversacional com IA. Todo o fluxo roda no navegador: não há servidor, banco de dados ou API externa — os dados ficam no estado local do React.

### Funcionalidades

- **Dashboard** — visão consolidada com saldo, receitas, despesas, economia, investimentos e patrimônio em cards de leitura imediata.
- **Gráficos interativos** — Recharts com filtros dinâmicos: fluxo de caixa ao longo do tempo e gastos por categoria, com drill-down por período.
- **Controle de orçamento** — orçamento por categoria com barras de progresso e alertas quando o limite se aproxima ou estoura.
- **Score Financeiro** — pontuação composta por quatro dimensões: organização, controle, economia e investimentos. O score responde às mudanças de hábito registradas no app.
- **Metas** — progresso por meta, cálculo da economia mensal necessária e previsão de conclusão com base no ritmo atual.
- **Assistente financeiro com IA** — interface conversacional que responde perguntas sobre gastos mensais, economia e categorias, e entrega sugestões acionáveis.
- **Insights automáticos** — detecção de tendências de gastos e evolução patrimonial, gerados a partir dos próprios dados do usuário.
- **Tags, notificações e sidebar recolhível** — organização transacional flexível e navegação pensada para telas pequenas.
- **Responsivo** — layout mobile-first que se adapta de smartphone a desktop.

### Arquitetura

```
src/
├── App.tsx        # raiz da aplicação
├── components/    # dashboard, gráficos, orçamento, metas, assistente
├── hooks/        # estado e lógica reutilizável
└── ...
```

A estrutura de `src/` é deliberadamente mínima — o ponto de entrada é um único `App.tsx` que orquestra as telas. O estado vive no React (context e hooks), sem camada de persistência externa: é uma SPA pura, ideal para demonstrar UI de dados sem infraestrutura.

Decisões de stack:

- **React 18** — hooks e context cobrem todo o gerenciamento de estado; nenhuma lib de estado global é necessária nesse escopo.
- **TypeScript** — contratos de dados tipados para transações, categorias, orçamentos e metas; o tipo é a documentação.
- **Tailwind CSS** — utilitários compõem o visual glassmorphism (transparências, blur, bordas arredondadas) sem CSS custom de manter.
- **Recharts** — gráficos declarativos integrados ao ciclo de vida do React.
- **Lucide** — ícones SVG consistentes e tree-shakeables.
- **Vite 8** — dev server instantâneo e build de produção enxuto.

### Dados e estado

Não há camada de dados externa: transações, orçamentos, metas e tags vivem no estado React. Isso mantém o app como uma demonstração fechada e reprodutível — qualquer pessoa que clona o repositório roda a mesma experiência sem configurar chave de API, banco ou variável de ambiente. O assistente de IA e os insights operam sobre os mesmos dados em memória, o que torna o comportamento totalmente determinístico entre recargas.

O desafio "Vibe Coding" da DIO pediu exatamente isso: um PRD escrito com precisão, passado via prompt, e um app completo saindo do outro lado. O resultado é a prova de que a qualidade do prompt/PRD — escopo, features, hierarquia de informação, tom visual — determina a qualidade do app gerado.

### Como rodar

```bash
npm install
npm run dev
```

O dev server sobe em `http://localhost:5173`. Para preview do build de produção:

```bash
npm run build
npm run preview
```

### Decisões técnicas

- **Sem backend por design** — o desafio "Vibe Coding" da DIO pedia um app gerado via prompt a partir de um PRD; manter tudo client-side simplifica o deploy e isola a demonstração de UI/IA.
- **Dark mode glassmorphism** — o tema escuro com efeito vidro foi escolhido para dar identidade visual forte sem custo de performance: tudo via utilitários Tailwind.
- **Mobile-first** — finanças pessoais se consultam no celular; o layout prioriza uma coluna e expande conforme a viewport.

---

## 🇺🇸 English

### What it is

A personal finance web app with a full dashboard, interactive charts, budget control, a financial score, goals, and a conversational AI assistant. Everything runs in the browser: no server, no database, no external API — data lives in React's local state.

### Features

- **Dashboard** — consolidated view with balance, income, expenses, savings, investments, and net worth in at-a-glance cards.
- **Interactive charts** — Recharts with dynamic filters: cash flow over time and spending by category, with period drill-down.
- **Budget control** — per-category budgets with progress bars and alerts when a limit is close to or over budget.
- **Financial Score** — composite score across four dimensions: organization, control, savings, and investments. The score reacts to changes in the habits tracked in the app.
- **Goals** — per-goal progress, required monthly savings, and completion forecast based on current pace.
- **AI financial assistant** — conversational interface answering questions about monthly spending, savings, and categories, plus actionable suggestions.
- **Automatic insights** — spending trend detection and net-worth evolution generated from the user's own data.
- **Tags, notifications, collapsible sidebar** — flexible transaction organization and navigation built for small screens.
- **Responsive** — mobile-first layout scaling from smartphone to desktop.

### Architecture

```
src/
├── App.tsx        # application root
├── components/    # dashboard, charts, budget, goals, assistant
├── hooks/         # reusable state and logic
└── ...
```

The `src/` structure is deliberately minimal — a single `App.tsx` entry point orchestrates the screens. State lives in React (context and hooks) with no external persistence layer: a pure SPA, well suited for showcasing data UI without infrastructure.

Stack decisions:

- **React 18** — hooks and context handle all state management; no global state library needed at this scope.
- **TypeScript** — typed data contracts for transactions, categories, budgets, and goals; the types are the documentation.
- **Tailwind CSS** — utilities compose the glassmorphism look (transparency, blur, rounded borders) without custom CSS to maintain.
- **Recharts** — declarative charts wired into React's lifecycle.
- **Lucide** — consistent, tree-shakeable SVG icons.
- **Vite 8** — instant dev server and lean production build.

### Running it

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`. For a production build:

```bash
npm run build
```

### Technical decisions

- **No backend by design** — the DIO "Vibe Coding" challenge called for an app generated from a PRD via prompt; keeping everything client-side simplifies deployment and keeps the UI/AI demonstration isolated.
- **Glassmorphism dark mode** — the dark glass theme was chosen to deliver a strong visual identity at zero performance cost: pure Tailwind utilities.
- **Mobile-first** — personal finance gets checked on the phone; the layout leads with a single column and expands with the viewport.

---

## Autor

**Kelvin Oliveira**

- GitHub: [KelvinOliveiraCode](https://github.com/KelvinOliveiraCode)
- LinkedIn: [kelvin-oliveira-0282033b4](https://www.linkedin.com/in/kelvin-oliveira-0282033b4/)

## Licença

Distribuído sob a licença MIT. Consulte o arquivo de licença do repositório para detalhes.
