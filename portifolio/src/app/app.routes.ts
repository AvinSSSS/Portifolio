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
    path: '**',
    redirectTo: '',
  },
];
