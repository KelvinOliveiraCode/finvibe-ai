# finvibe-ai

![JavaScript/TypeScript](https://img.shields.io/badge/JS-TS-yellow?logo=javascript)   ![status: concluido](https://img.shields.io/badge/status-concluido-green)   ![licenca: MIT](https://img.shields.io/badge/licenca-MIT-blue)

## Resumo

Aplicacao web em JavaScript/TypeScript. Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights | Personal finance app with React, TypeScript and AI

## Problema / por que existe

O projeto entrega uma interface ou utilitario web para um recorte especifico, com foco em navegador como ambiente de execucao e sem dependencia de servidor proprio.

## Arquitetura

- Camada de apresentacao: componentes e paginas que renderizam a interface.
- Camada de logica: funcoes e hooks que processam dados e estado.
- Comunicacao: requisicoes HTTP a APIs externas ou dados locais, quando aplicavel.

O build e feito com Vite (ou ferramenta equivalente), gerando arquivos estaticos prontos para hospedagem.

## Tecnologias

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

- Sem CI configurado neste repositorio.

Nenhum teste automatizado detectado na varredura.

## O que faz

Finanças pessoais com React, TypeScript e IA: score, metas, orçamento e insights | Personal finance app with React, TypeScript and AI

## Como rodar

Requisitos: Node.js e npm (ou yarn/pnpm).

```
# instalar dependencias
npm install

# rodar em desenvolvimento
vite

# build para producao
tsc -b && vite build

# rodar testes
pytest
```

## Estrutura do projeto

- src/ (7 arquivo(s))
- public/ (2 arquivo(s))
- .gitignore, eslint.config.js, index.html, LICENSE, package-lock.json, package.json, postcss.config.js, README.en.md, README.md, tailwind.config.js e mais 4


## Trade-offs e decisões

- Build estatico: facil de hospedar (GitHub Pages, Vercel, Netlify) sem servidor.
- Dependencias minimas para reduzir superficie de manutencao.
- Navegador como unico ambiente de execucao necessario.

## Limitações conhecidas

- Funciona no navegador; depende de conexao a internet para recursos externos.
- Nenhum teste automatizado detectado.


## Testes

```
pytest
```

## Licença

Distribuído sob a licenca MIT. Consulte o arquivo `LICENSE` do repositorio.

## Autor

Kelvin Oliveira, https://github.com/KelvinOliveiraCode
Portfolio: https://kelvinoliveiracode.github.io/portfolio/
