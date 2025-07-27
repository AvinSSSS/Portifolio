import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'calculator',
    loadComponent: () => import('./pages/calculator/calculator.page').then( m => m.CalculatorPage)
  },
  {
    path: 'date-converter',
    loadComponent: () => import('./pages/date-converter/date-converter.page').then( m => m.DateConverterPage)
  },
];
