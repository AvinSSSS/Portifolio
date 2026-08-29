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
    { src: 'assets/projects/rotapaga/screenshots/01-transportadoras-regras.png', ptTitle: 'Transportadoras e regras', enTitle: 'Carriers and rules', ptAlt: 'Cadastro de transportadoras e suas regras de recebimento no RotaPaga', enAlt: 'RotaPaga carrier records and receiving rules' },
    { src: 'assets/projects/rotapaga/screenshots/02-previsoes-agrupadas.png', ptTitle: 'Previsões agrupadas', enTitle: 'Grouped forecasts', ptAlt: 'Consulta de previsões de recebimento agrupadas', enAlt: 'Grouped receiving forecast view' },
    { src: 'assets/projects/rotapaga/screenshots/03-detalhes-do-agrupamento.png', ptTitle: 'Detalhes e ações', enTitle: 'Details and actions', ptAlt: 'Detalhes de recebimentos pendentes com baixa parcial e cancelamento', enAlt: 'Pending receipt details with partial settlement and cancel actions' },
    { src: 'assets/projects/rotapaga/screenshots/04-visao-geral-calendario.png', ptTitle: 'Indicadores e calendário', enTitle: 'Indicators and calendar', ptAlt: 'Visão geral financeira e calendário mensal do RotaPaga', enAlt: 'RotaPaga financial overview and monthly calendar' },
    { src: 'assets/projects/rotapaga/screenshots/05-nova-previsao-calculada.png', ptTitle: 'Previsão calculada', enTitle: 'Calculated forecast', ptAlt: 'Formulário de nova previsão com data e valor calculados', enAlt: 'New forecast form with calculated date and value' },
  ];
  readonly features = [
    { pt: 'Regras automáticas para cada transportadora', en: 'Automatic rules for each carrier' },
    { pt: 'Previsão calculada a partir da data da entrega', en: 'Forecast calculated from the delivery date' },
    { pt: 'Valores, quantidades e itens com erro no mesmo registro', en: 'Amounts, quantities and error items in one record' },
    { pt: 'Baixa parcial, cancelamento e histórico preservado', en: 'Partial settlement, cancellation and preserved history' },
    { pt: 'Indicadores financeiros, calendário e agrupamentos', en: 'Financial indicators, calendar and grouped records' },
    { pt: 'Busca, filtros e exportação para Excel', en: 'Search, filters and Excel export' },
  ];
  readonly results = [
    { ptTitle: 'Antecipe datas', enTitle: 'Know dates early', ptText: 'As regras calculam quando cada valor deve entrar e deixam exceções visíveis.', enText: 'Rules calculate when each amount should arrive and make exceptions visible.' },
    { ptTitle: 'Enxergue o aberto', enTitle: 'See what is open', ptText: 'Indicadores mostram pendências, atrasos, recebidos e valor ainda a receber.', enText: 'Indicators show pending, delayed, received and outstanding amounts.' },
    { ptTitle: 'Preserve o histórico', enTitle: 'Preserve history', ptText: 'Baixas parciais e cancelamentos mantêm a origem e o motivo de cada alteração.', enText: 'Partial settlements and cancellations retain the source and reason for every change.' },
    { ptTitle: 'Informe com rapidez', enTitle: 'Report faster', ptText: 'A mesma consulta filtrada pode ser levada para um arquivo Excel.', enText: 'The same filtered view can be exported to an Excel file.' },
  ];
  readonly steps = [
    { pt: 'Cadastre a transportadora e defina sua regra de recebimento.', en: 'Register the carrier and define its receiving rule.' },
    { pt: 'Informe a entrega; o RotaPaga calcula a previsão e o total.', en: 'Enter the delivery; RotaPaga calculates the forecast and total.' },
    { pt: 'Acompanhe o calendário, os indicadores e os agrupamentos.', en: 'Follow the calendar, indicators and grouped records.' },
    { pt: 'Confirme, baixe parcialmente, cancele ou exporte o relatório.', en: 'Confirm, partially settle, cancel or export the report.' },
  ];

  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
  previousSlide(): void { this.currentSlide.update((index) => (index + this.screenshots.length - 1) % this.screenshots.length); }
  nextSlide(): void { this.currentSlide.update((index) => (index + 1) % this.screenshots.length); }
  goToSlide(index: number): void { this.currentSlide.set(index); }
}
