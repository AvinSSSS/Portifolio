export type ProjectStatus = 'available' | 'building';

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
    slug: 'hub-calculadoras', number: '01',
    title: { pt: 'Hub de Calculadoras', en: 'Useful Calculators Hub' },
    problem: { pt: 'Ferramentas simples costumam estar escondidas em sites lentos e cheios de anúncios.', en: 'Simple tools are often buried in slow, ad-heavy websites.' },
    solution: { pt: 'Três calculadoras diretas para valor-hora, juros compostos e custo de deslocamento.', en: 'Three direct calculators for hourly rates, compound interest and commuting costs.' },
    stack: ['Ionic', 'Angular', 'TypeScript'], status: 'available',
    repositoryUrl: 'https://github.com/AvinSSSS/HubCalculadoras', demoUrl: 'https://avinssss.github.io/HubCalculadoras/',
  },
  {
    slug: 'nfe', number: '02',
    title: { pt: 'Descomplicador de NFe', en: 'NFe Explorer' },
    problem: { pt: 'Pastas com centenas de XMLs tornam uma consulta simples demorada e sujeita a erro.', en: 'Folders with hundreds of XML files make simple checks slow and error-prone.' },
    solution: { pt: 'Aplicativo Windows local para pesquisar, ordenar, revisar e exportar lotes de NF-e com totalizadores e visualização do XML.', en: 'A local Windows app for searching, sorting, reviewing and exporting NFe batches with totals and formatted XML viewing.' },
    stack: ['Delphi', 'VCL', 'XML', 'DUnitX'], status: 'available',
    repositoryUrl: 'https://github.com/AvinSSSS/DescomplicadorNFe',
    caseStudyPath: '/projetos/descomplicador-nfe',
  },
  {
    slug: 'organizador-arquivos', number: '03',
    title: { pt: 'Organizador de Arquivos', en: 'Batch File Organizer' },
    problem: { pt: 'Renomear fotos e documentos manualmente consome tempo e cria inconsistências.', en: 'Renaming photos and documents manually wastes time and creates inconsistencies.' },
    solution: { pt: 'Renomeação em lote com ordem previsível, prévia, validação de nomes e desfazer seguro.', en: 'Batch renaming with predictable ordering, preview, filename validation and safe undo.' },
    stack: ['Delphi', 'VCL', 'DUnitX'], status: 'available',
    repositoryUrl: 'https://github.com/AvinSSSS/OrganizadorArquivos',
    caseStudyPath: '/projetos/organizador-arquivos',
  },
  {
    slug: 'discord-bot', number: '04',
    title: { pt: 'Bot Utilitário para Discord', en: 'Discord Utility Bot' },
    problem: { pt: 'Comunidades pequenas precisam organizar recepção e suporte sem painéis complexos.', en: 'Small communities need to organize onboarding and support without complex dashboards.' },
    solution: { pt: 'Boas-vindas configuráveis e tickets privados com autorização, transcript preservado e monitoramento.', en: 'Configurable welcomes and private tickets with authorization, preserved transcripts and monitoring.' },
    stack: ['Node.js', 'discord.js', 'Docker'], status: 'available', repositoryUrl: 'https://github.com/AvinSSSS/DiscordUtilityBot',
    caseStudyPath: '/projetos/bot-discord',
  },
  {
    slug: 'assistente-laudos', number: '05',
    title: { pt: 'Assistente de Orçamento e Laudo', en: 'Quote & Report Assistant' },
    problem: { pt: 'Prestadores perdem horas transformando anotações em documentos profissionais.', en: 'Service providers spend hours turning notes into professional documents.' },
    solution: { pt: 'Cria laudo revisável local ou com Gemini e exporta um orçamento profissional em PDF.', en: 'Creates an editable local or Gemini-assisted report and exports a professional priced PDF.' },
    stack: ['Python', 'Streamlit', 'Gemini'], status: 'available', repositoryUrl: 'https://github.com/AvinSSSS/AssistenteOrcamentoLaudo',
  },
];
