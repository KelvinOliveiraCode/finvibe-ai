<<<<<<< HEAD
# FinVibe AI

![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06b6d4?logo=tailwindcss)

Aplicação de finanças pessoais para registrar receitas e despesas, acompanhar orçamentos e metas, visualizar fluxo de caixa e conversar com um assistente financeiro baseado em regras.

## Problema / Por que existe

Gerenciar finanças pessoais exige lançar cada gasto, entender para onde o dinheiro vai e acompanhar o progresso de metas. A maioria das ferramentas é complexa, exige cadastro ou conexão com contas bancárias. FinVibe AI é um front-end local, sem cadastro e sem backend, para organizar lançamentos, ver totais por categoria e receber sugestões a partir dos próprios dados.

## O que faz

- Registra receitas e despesas com descrição, valor, categoria, data e tags.
- Exibe saldo, receitas totais, despesas totais e economia mensal no Dashboard.
- Mostra fluxo de caixa em gráfico de barras (últimos 7 ou 30 dias) e gastos por categoria em gráfico de pizza.
- Acompanha orçamentos por categoria com barra de progresso e alerta quando o limite é excedido.
- Acompanha metas financeiras com valor alvo, valor atual, prazo e economia necessária por mês.
- Lista notificações (contas próximas do vencimento, metas, orçamento excedido).
- Assistente de IA financeira: responde a perguntas fixas (gastos do mês, oportunidades de economia, prazos de metas, categorias) com base nos dados de demonstração.
- Página de Insights com cálculos automáticos (gasto médio diário, projeção anual, maior categoria de gasto).

Os dados de demonstração incluem, por exemplo, salário de R$ 5.000, aluguel de R$ 1.500 e a meta Reserva de Emergência (R$ 24.000 de R$ 30.000).

## Stack

- React 19 com TypeScript
- Vite (servidor de desenvolvimento e build)
- Tailwind CSS (estilização)
- lucide-react (ícones)
- recharts (gráficos)
- ESLint com TypeScript ESLint

## Como funciona

A aplicação é um único componente React em `src/App.tsx`, com estado mantido em `useState`. Não há backend nem banco de dados: recarregar a página redefine os dados para os valores de demonstração.

O fluxo de uso:

1. Abre o Dashboard com saldo, gráficos e cards de métricas.
2. Clica em "Nova Transação" para adicionar uma receita ou despesa (modal com descrição, valor, categoria, tipo e tags).
3. Navega pelo menu lateral: Dashboard, Orçamentos, Metas, IA Financeira, Insights.
4. Na IA Financeira, digita uma pergunta ou escolhe uma pergunta rápida. As respostas vêm de uma função de regras local (verificação de palavras-chave), não de um modelo de linguagem, e não exigem chave de API.
5. Insights calcula percentuais e projeções a partir das transações atuais.

## Como rodar

Você precisa do Node.js instalado.

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`.

Outros comandos:

- `npm run build` — verifica tipos com TypeScript e gera a build de produção com Vite
- `npm run lint` — executa o ESLint
- `npm run preview` — serve a build de produção localmente

## Estrutura do projeto

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

`src/App.tsx` contém tipos, dados mock, componentes base (`StatCard`, `BudgetItem`, `GoalCard`), páginas (Dashboard, Orçamentos, Metas, IA Financeira, Insights), menu lateral e o componente principal `App`.

## Trade-offs e decisões

- Tudo em um único arquivo `App.tsx`: simples de ler e manter neste porte, mas não escala para equipes grandes.
- Estado em `useState` sem persistência: sem backend, sem cadastro, os dados somem ao recarregar a página.
- IA baseada em regras: previsível, offline e sem chave de API, mas não responde a perguntas fora dos padrões definidos.
- Recharts para gráficos: pacote único de visualização, de uso declarativo.
- Tailwind com classes utilitárias inline: sem arquivos CSS separados por componente.
- Dados mock embutidos: demonstração imediata sem configurar banco ou API.

## Limitações conhecidas

- Sem persistência: transações adicionadas são perdidas ao recarregar a página.
- Sem backend, autenticação ou sincronização entre dispositivos.
- A IA não usa modelo de linguagem; responde apenas a padrões fixos de palavras-chave.
- Sem exportação de transações ou relatórios (CSV, PDF).
- Sem edição ou exclusão de transações depois de salvas.
- Sem testes automatizados.
- Interface em português, com datas e valores formatados em pt-BR em partes da tela.

## Licença

Este repositório não possui arquivo `LICENSE`. Sem uma licença declarada, os direitos padrão de autor se aplicam ao conteúdo.

## Autor

Kelvin
=======
# FinVibe AI — Finanças Pessoais com IA

![linguagem: TypeScript](https://img.shields.io/badge/linguagem-TypeScript-blue)  
![status: concluido](https://img.shields.io/badge/status-concluido-green)  
![licenca: MIT](https://img.shields.io/badge/licenca-MIT-blue)

### Descrição
Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights.

### O que faz
Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights.

### Tecnologias
- React 18
- TypeScript
- IA

### Como usar
Instale as dependências e execute os testes: `npm install && npm test`

### Estrutura
Consulte a árvore do repositório para a organização exata de pastas e arquivos.

### Testes
Não há contagem de testes registrada nesta metadata. Adicione e execute testes apropriados à linguagem (pytest para Python, ./mvnw test para Java, npm test para JavaScript/TypeScript).

### Licença
MIT

### Autor
Kelvin Oliveira — github.com/KelvinOliveiraCode

---

# FinVibe AI — Personal Finance with AI

![language: TypeScript](https://img.shields.io/badge/language-TypeScript-blue)  
![status: concluido](https://img.shields.io/badge/status-concluido-green)  
![license: MIT](https://img.shields.io/badge/license-MIT-blue)

### Description
Personal finance with React, TypeScript and AI: score, goals, budget and insights.

### What it does
Personal finance with React, TypeScript and AI: score, goals, budget and insights.

### Technologies
- React 18
- TypeScript
- IA

### How to use
Install dependencies and run tests: `npm install && npm test`

### Structure
Check the repository tree for the exact folder and file organization.

### Tests
No test count recorded in this metadata. Add and run tests appropriate for the language (pytest for Python, ./mvnw test for Java, npm test for JavaScript/TypeScript).

### License
MIT

### Author
Kelvin Oliveira — github.com/KelvinOliveiraCode
>>>>>>> 19ffcfff79e45ee696b102232e808b274be23d89
