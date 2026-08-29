export type ProjectStatus = 'available' | 'building' | 'planned';

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface PortfolioProject {
  slug: string;
  number: string;
  title: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  stack: string[];
  status: ProjectStatus;
  repositoryUrl?: string;
  demoUrl?: string;
  caseStudyPath?: string;
  downloadUrl?: string;
  imageUrl?: string;
}

export const PROJECTS: PortfolioProject[] = [
  {
    slug: 'assistente-laudos', number: '01',
    title: { pt: 'Orçamento & Laudo', en: 'Quote & Report' },
    problem: { pt: 'Profissionais técnicos perdem tempo organizando clientes, preços, orçamentos e laudos em ferramentas separadas.', en: 'Technical professionals lose time managing clients, prices, quotes and reports across separate tools.' },
    solution: { pt: 'Aplicativo Android offline-first para organizar o atendimento e gerar documentos profissionais no próprio aparelho.', en: 'An offline-first Android app for organizing service work and creating professional documents directly on the device.' },
    stack: ['Ionic', 'Angular', 'Capacitor', 'SQLite'], status: 'building',
    caseStudyPath: '/projetos/orcamento-laudo',
  },
  {
    slug: 'controle-recebimentos', number: '02',
    title: { pt: 'RotaPaga', en: 'RotaPaga' },
    problem: { pt: 'Valores a receber, regras de transportadoras e atrasos se perdem em controles paralelos e conferências manuais.', en: 'Receivables, carrier rules and delays get lost across parallel controls and manual checks.' },
    solution: { pt: 'Controle financeiro de recebimentos com regras automáticas, calendário, histórico e relatórios Excel.', en: 'Financial receiving control with automatic rules, calendar, history and Excel reports.' },
    stack: ['React', 'TypeScript', 'Cloudflare D1', 'Firebase'], status: 'available',
    repositoryUrl: 'https://github.com/AvinSSSS/controle-recebimento-entregadores',
    demoUrl: 'https://rotapaga.andreus-vin.chatgpt.site/',
    caseStudyPath: '/projetos/controle-recebimentos',
  },
  {
    slug: 'hub-calculadoras', number: '03',
    title: { pt: 'Hub de Calculadoras', en: 'Useful Calculators Hub' },
    problem: { pt: 'Ferramentas simples costumam estar escondidas em sites lentos e cheios de anúncios.', en: 'Simple tools are often buried in slow, ad-heavy websites.' },
    solution: { pt: 'Três calculadoras diretas para valor-hora, juros compostos e custo de deslocamento.', en: 'Three direct calculators for hourly rates, compound interest and commuting costs.' },
    stack: ['Ionic', 'Angular', 'TypeScript'], status: 'available',
    repositoryUrl: 'https://github.com/AvinSSSS/HubCalculadoras', demoUrl: 'https://avinssss.github.io/HubCalculadoras/',
  },
  {
    slug: 'nfe', number: '04',
    title: { pt: 'Descomplicador de NFe', en: 'NFe Explorer' },
    problem: { pt: 'Pastas com centenas de XMLs tornam uma consulta simples demorada e sujeita a erro.', en: 'Folders with hundreds of XML files make simple checks slow and error-prone.' },
    solution: { pt: 'Aplicativo Windows local para pesquisar, ordenar, revisar e exportar lotes de NF-e com totalizadores e visualização do XML.', en: 'A local Windows app for searching, sorting, reviewing and exporting NFe batches with totals and formatted XML viewing.' },
    stack: ['Delphi', 'VCL', 'XML', 'DUnitX'], status: 'available',
    repositoryUrl: 'https://github.com/AvinSSSS/DescomplicadorNFe',
    caseStudyPath: '/projetos/descomplicador-nfe',
  },
  {
    slug: 'organizador-arquivos', number: '05',
    title: { pt: 'Organizador de Arquivos', en: 'Batch File Organizer' },
    problem: { pt: 'Renomear fotos e documentos manualmente consome tempo e cria inconsistências.', en: 'Renaming photos and documents manually wastes time and creates inconsistencies.' },
    solution: { pt: 'Renomeação em lote com ordem previsível, prévia, validação de nomes e desfazer seguro.', en: 'Batch renaming with predictable ordering, preview, filename validation and safe undo.' },
    stack: ['Delphi', 'VCL', 'DUnitX'], status: 'available',
    repositoryUrl: 'https://github.com/AvinSSSS/OrganizadorArquivos',
    caseStudyPath: '/projetos/organizador-arquivos',
  },
  {
    slug: 'discord-bot', number: '06',
    title: { pt: 'Bot Utilitário para Discord', en: 'Discord Utility Bot' },
    problem: { pt: 'Comunidades pequenas precisam organizar recepção e suporte sem painéis complexos.', en: 'Small communities need to organize onboarding and support without complex dashboards.' },
    solution: { pt: 'Boas-vindas configuráveis e tickets privados com autorização, transcript preservado e monitoramento.', en: 'Configurable welcomes and private tickets with authorization, preserved transcripts and monitoring.' },
    stack: ['Node.js', 'discord.js', 'Docker'], status: 'available', repositoryUrl: 'https://github.com/AvinSSSS/DiscordUtilityBot',
    caseStudyPath: '/projetos/bot-discord',
  },
];
