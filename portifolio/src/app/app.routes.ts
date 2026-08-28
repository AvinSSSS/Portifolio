import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'projetos/descomplicador-nfe',
    loadComponent: () => import('./case-studies/nfe-case-study.page').then((m) => m.NfeCaseStudyPage),
  },
  {
    path: 'projetos/organizador-arquivos',
    loadComponent: () => import('./case-studies/file-organizer-case-study.page').then((m) => m.FileOrganizerCaseStudyPage),
  },
  {
    path: 'projetos/bot-discord',
    loadComponent: () => import('./case-studies/discord-bot-case-study.page').then((m) => m.DiscordBotCaseStudyPage),
  },
  {
    path: 'projetos/orcamento-laudo',
    loadComponent: () => import('./case-studies/quote-report-case-study.page').then((m) => m.QuoteReportCaseStudyPage),
  },
  {
    path: 'projetos/controle-recebimentos',
    loadComponent: () => import('./case-studies/delivery-receiving-case-study.page').then((m) => m.DeliveryReceivingCaseStudyPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
