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
| [Organizador de Arquivos](https://github.com/AvinSSSS/OrganizadorArquivos) | Delphi, VCL, DUnitX | Aplicativo desktop funcional |
| [Bot Utilitário para Discord](https://github.com/AvinSSSS/DiscordUtilityBot) | Node.js, discord.js, Docker | Bot funcional e testado |
| [Assistente de Orçamento e Laudo](https://github.com/AvinSSSS/AssistenteOrcamentoLaudo) | Python, Streamlit, Gemini | Aplicação funcional e testada |

## 🛠️ Desenvolvimento local

Requisitos: Node.js 22 compatível com as dependências do lockfile, npm e Chrome para Karma/Jasmine. A CLI Angular fixada em [package-lock.json](portifolio/package-lock.json) aceita Node `^20.19.0 || ^22.12.0 || >=24.0.0` e npm `^6.11.0 || ^7.5.6 || >=8.0.0`; npm 11 não é obrigatório. Nesta revisão foram usados Node 22.17.1 e npm 10.9.2.

```bash
cd portifolio
npm ci
npm start
```

Execute os comandos a partir de `portifolio/`, tanto no checkout principal quanto em um worktree; a raiz do repositório não contém manifesto npm. `npm ci` instala as versões do lockfile. A aplicação ficará disponível em `http://localhost:4200`.

### Build e testes

Ainda em `portifolio/`, no PowerShell:

```powershell
$env:CHROME_BIN = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
npm.cmd test -- --watch=false --browsers=ChromeHeadless
npm.cmd run build -- --configuration production --base-href /Portifolio/
npm.cmd run lint
```

Ajuste `CHROME_BIN` ao executável instalado; fora do Windows, use `npm` e a sintaxe de variável de ambiente do seu shell. O build grava `portifolio/www/` e usa produção por padrão. `npm start` usa desenvolvimento; [angular.json](portifolio/angular.json) substitui `src/environments/environment.ts` por `environment.prod.ts` no build de produção. Ambos definem apenas `production`; o fluxo web local não exige `.env` ou credenciais. Android/iOS exigem SDKs e validação separados.

Os oito arquivos `*.spec.ts` em `portifolio/src/app/` contêm nove casos Jasmine: criação dos componentes/páginas, propriedades dos estudos de caso e navegação dos carrosséis de Orçamento e Laudo/RotaPaga. As fixtures são instâncias locais via TestBed, com `provideRouter([])` onde necessário; não é preciso cadastrar dados, iniciar banco ou acessar os produtos apresentados. URLs são conferidas como texto. Isso não valida links remotos, tradução completa, acessibilidade, navegação real nem os aplicativos descritos.

Limitação verificada nesta revisão: `npm run lint` retorna oito erros existentes — sete de `@angular-eslint/prefer-inject` e um de `@angular-eslint/no-empty-lifecycle-method` no cabeçalho. O comando permanece como verificação, sem afirmar que o lint passa.

Para uma conferência manual com dados sintéticos, use um perfil de navegador de teste, alterne PT/EN, visite os estudos de caso e avance/retorne os carrosséis. A preferência usa a chave `andreus-portfolio-language` do armazenamento local; sem valor `en`, o idioma inicial é português. Essa conferência manual não é coberta pelos testes de criação.

## 🗂️ Estrutura

```text
Portifólio/
├── .github/workflows/       # Publicação no GitHub Pages
├── portifolio/src/app/      # Aplicação Ionic/Angular
│   ├── core/                 # Idioma e modelo dos projetos
│   ├── home/                 # Vitrine profissional
│   ├── components/header/    # Componente de cabeçalho
│   ├── case-studies/         # Páginas dos estudos de caso e carrosséis
│   └── app.routes.ts        # Rotas carregadas sob demanda e fallback
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
