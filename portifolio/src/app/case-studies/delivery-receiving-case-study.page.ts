import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

interface Screenshot { src: string; ptTitle: string; enTitle: string; ptAlt: string; enAlt: string; }

@Component({
  standalone: true,
  selector: 'app-delivery-receiving-case-study',
  templateUrl: './delivery-receiving-case-study.page.html',
  styleUrls: ['./nfe-case-study.page.scss', './delivery-receiving-case-study.page.scss'],
  imports: [IonContent, RouterLink],
})
export class DeliveryReceivingCaseStudyPage {
  readonly productUrl = 'https://rotapaga.andreus-vin.chatgpt.site/';
  readonly currentSlide = signal(0);
  readonly screenshots: Screenshot[] = [
    { src: 'assets/projects/rotapaga/screenshots/01-visao-geral-producao.png', ptTitle: 'Visão geral da operação', enTitle: 'Operations overview', ptAlt: 'Tela inicial do RotaPaga com transportadoras, entregas e resumo financeiro', enAlt: 'RotaPaga home screen with carriers, deliveries and financial summary' },
    { src: 'assets/projects/rotapaga/screenshots/02-calendario-geral-producao.png', ptTitle: 'Calendário geral', enTitle: 'Full calendar', ptAlt: 'Calendário do RotaPaga com entregas, previsões e totais por data', enAlt: 'RotaPaga calendar with deliveries, forecasts and totals by date' },
    { src: 'assets/projects/rotapaga/screenshots/03-previsoes-agrupadas-producao.png', ptTitle: 'Previsões agrupadas', enTitle: 'Grouped forecasts', ptAlt: 'Previsões financeiras agrupadas por transportadora e data', enAlt: 'Financial forecasts grouped by carrier and date' },
    { src: 'assets/projects/rotapaga/screenshots/04-detalhes-lancamentos-producao.png', ptTitle: 'Gestão dos lançamentos', enTitle: 'Entry management', ptAlt: 'Detalhes dos lançamentos com situação, baixa parcial e cancelamento', enAlt: 'Entry details with status, partial settlement and cancellation' },
    { src: 'assets/projects/rotapaga/screenshots/05-nova-previsao-calculada-producao.png', ptTitle: 'Novo lançamento calculado', enTitle: 'Calculated new entry', ptAlt: 'Nova previsão com data e valor total calculados automaticamente', enAlt: 'New forecast with automatically calculated date and total' },
    { src: 'assets/projects/rotapaga/screenshots/06-recursos-pro-producao.png', ptTitle: 'Desempenho e metas Pro', enTitle: 'Pro performance and goals', ptAlt: 'Área Pro do RotaPaga para desempenho e metas', enAlt: 'RotaPaga Pro area for performance and goals' },
  ];
  readonly features = [
    { pt: 'Painel por transportadora com volumes, valores e atalhos de lançamento', en: 'Carrier dashboard with volumes, amounts and quick-entry actions' },
    { pt: 'Regras flexíveis que calculam a previsão a partir da data da entrega', en: 'Flexible rules that calculate forecasts from delivery dates' },
    { pt: 'Calendário por data de entrega ou recebimento, com totais mensais e diários', en: 'Calendar by delivery or payment date, with monthly and daily totals' },
    { pt: 'Agrupamentos, busca, filtros e ações individuais em cada lançamento', en: 'Grouping, search, filters and individual actions for each entry' },
    { pt: 'Baixa integral ou parcial, atraso automático, cancelamento e histórico', en: 'Full or partial settlement, automatic delays, cancellation and history' },
    { pt: 'Plano Pro com Excel, metas, desempenho, notificações e uso ilimitado', en: 'Pro plan with Excel, goals, performance, notifications and unlimited usage' },
  ];
  readonly results = [
    { ptTitle: 'Organize entregas', enTitle: 'Organize deliveries', ptText: 'Cada transportadora reúne seus volumes, valores, regra e próximos lançamentos.', enText: 'Each carrier brings together volumes, amounts, rules and upcoming entries.' },
    { ptTitle: 'Preveja o caixa', enTitle: 'Forecast cash flow', ptText: 'Datas e totais calculados transformam a rotina operacional em visão financeira.', enText: 'Calculated dates and totals turn daily operations into financial visibility.' },
    { ptTitle: 'Decida com contexto', enTitle: 'Decide with context', ptText: 'Calendário, indicadores e detalhes mostram o que foi entregue e quando deve entrar.', enText: 'Calendar, indicators and details show what was delivered and when payment is due.' },
    { ptTitle: 'Evolua sem perder dados', enTitle: 'Grow without losing data', ptText: 'O modelo freemium preserva o histórico e libera recursos avançados conforme a operação cresce.', enText: 'The freemium model preserves history and unlocks advanced tools as the operation grows.' },
  ];
  readonly steps = [
    { pt: 'Cadastre a transportadora, o valor padrão e sua regra de recebimento.', en: 'Register the carrier, default amount and receiving rule.' },
    { pt: 'Lance a entrega; o RotaPaga calcula a previsão e o valor total.', en: 'Enter the delivery; RotaPaga calculates the forecast and total amount.' },
    { pt: 'Acompanhe entregas e recebimentos pelo calendário e pelos agrupamentos.', en: 'Track deliveries and receivables through the calendar and grouped views.' },
    { pt: 'Registre a baixa, preserve o histórico e use relatórios e metas no Pro.', en: 'Settle payments, preserve history and use reports and goals with Pro.' },
  ];

  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
  previousSlide(): void { this.currentSlide.update((index) => (index + this.screenshots.length - 1) % this.screenshots.length); }
  nextSlide(): void { this.currentSlide.update((index) => (index + 1) % this.screenshots.length); }
  goToSlide(index: number): void { this.currentSlide.set(index); }
}
