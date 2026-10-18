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

## Capacidades

| Capacidade | Descrição |
|------------|-------------|
| Dashboard | 6 cards de métricas (Saldo, Receitas, Despesas, Economia, Investimentos, Patrimônio) |
| Fluxo de Caixa | Gráfico de barras (7d/30d) com Recharts ,  Receitas, Despesas, Saldo por período |
| Orçamentos | Orçamentos por categoria com barras de progresso, alertas de estouro |
| Metas | Anéis de progresso com cálculo de economia mensal e contagem regressiva |
| Assistente IA | Chat baseado em regras (getAIResponse) ,  análise de gastos, dicas, projeções |
| Insights | Alertas automáticos: picos de delivery, crescimento patrimonial, breakdown por categoria |
| Transações | Adicionar/editar receitas/despesas com categorias, tags, seletor de data |
| Persistência | localStorage ,  estado sobrevive a reload, zero backend |


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

## Perguntas Frequentes

<details>
<summary><strong>A IA usa LLM?</strong></summary>

Não. A IA é baseada em regras (`getAIResponse`) ,  matching determinístico de palavras-chave. Isso a mantém offline, gratuita e instantânea.

</details>

<details>
<summary><strong>Meus dados são privados?</strong></summary>

Sim. Tudo roda no seu navegador. Dados persistem apenas no localStorage ,  nunca saem da sua máquina.

</details>

<details>
<summary><strong>Posso conectar APIs bancárias reais?</strong></summary>

Não no momento. É um protótipo com dados mock. Integração Open Banking exigiria infraestrutura de backend.

</details>



---

## Documentação

- **Código-Fonte** ,  Navegue pelo diretório `src/` para detalhes de implementação
- **Referência da API** ,  Tipos TypeScript no fonte
- **Diagrama de Arquitetura** ,  Veja [architecture.mermaid](docs/architecture.mermaid) (se presente)
- **Changelog** ,  [CHANGELOG.md](CHANGELOG.md) (se presente)
- **Contribuindo** ,  [CONTRIBUTING.md](CONTRIBUTING.md) (se presente)

## Licença

[MIT](LICENSE) ,  Kelvin Oliveira

---

<div align="center">

**Construído com** · TypeScript + React + Vite + Tailwind

**Autor** · [Kelvin Oliveira](https://github.com/KelvinOliveiraCode) · [Portfolio](https://kelvinoliveiracode.github.io/portfolio/)

</div>