# 💻 Portfólio — Andreus Vinicius

[![Deploy](https://github.com/AvinSSSS/Portifolio/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/AvinSSSS/Portifolio/actions/workflows/deploy-pages.yml)
[![Ionic](https://img.shields.io/badge/Ionic-8-3880FF?logo=ionic)](https://ionicframework.com/)
[![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular)](https://angular.dev/)

Vitrine profissional bilíngue de **Andreus Vinicius**, desenvolvedor focado em soluções ágeis, automação de rotinas e ferramentas práticas.

🌐 **Site publicado:** [avinssss.github.io/Portifolio](https://avinssss.github.io/Portifolio/)

## ✨ O que você encontra aqui

- Apresentação profissional em português e inglês.
- Experiência, competências e processo de trabalho.
- Catálogo tipado de cinco projetos com links para seus repositórios.
- Acesso ao Hub de Calculadoras publicado em seu próprio projeto.
- Layout responsivo, tema escuro, acessibilidade e animações discretas.
- SEO, Open Graph e fallback de rotas para GitHub Pages.

## 🚀 Projetos

| Projeto | Stack | Situação |
|---|---|---|
| [Hub de Calculadoras](https://github.com/AvinSSSS/HubCalculadoras) | Ionic, Angular, TypeScript | MVP online |
| [Descomplicador de NFe](https://github.com/AvinSSSS/DescomplicadorNFe) | Delphi, VCL, XML, DUnitX | Aplicativo desktop funcional |
| [Organizador de Arquivos](https://github.com/AvinSSSS/OrganizadorArquivos) | Delphi, VCL, Windows | Código do MVP |
| [Bot Utilitário para Discord](https://github.com/AvinSSSS/DiscordUtilityBot) | Node.js, discord.js, Docker | Código do MVP |
| [Assistente de Orçamento e Laudo](https://github.com/AvinSSSS/AssistenteOrcamentoLaudo) | Python, Streamlit, Gemini | Código do MVP |

## 🛠️ Desenvolvimento local

Requisitos: Node.js 22+ e npm 11+.

```bash
cd portifolio
npm ci
npm start
```

A aplicação ficará disponível em `http://localhost:4200`.

### Build e testes

```bash
cd portifolio
npx ng build --configuration production --base-href /Portifolio/
npx ng test --watch=false --browsers=ChromeHeadless
```

## 🗂️ Estrutura

```text
Portifólio/
├── .github/workflows/       # Publicação no GitHub Pages
├── portifolio/src/app/      # Aplicação Ionic/Angular
│   ├── core/                 # Idioma e modelo dos projetos
│   ├── home/                 # Vitrine profissional
│   └── home/                 # Vitrine e catálogo de projetos
```

Os repositórios dos projetos ficam separados em `D:\Fontes\Projetos`.

## 🔐 Privacidade

O portfólio não coleta dados pessoais. As ferramentas interativas são mantidas e publicadas em seus próprios projetos.

## 📌 Antes da versão final

- Substituir o e-mail e o endereço genérico do LinkedIn.
- Adicionar currículo, imagem Open Graph e estudos de caso revisados.
- Publicar releases e demonstrações dos demais MVPs.

---

## 🇬🇧 English

Bilingual professional portfolio built with Ionic 8 and Angular 20. It showcases Andreus Vinicius' experience, working process and five practical automation projects. Run it with `npm ci && npm start` inside `portifolio`, or visit the [live website](https://avinssss.github.io/Portifolio/).
