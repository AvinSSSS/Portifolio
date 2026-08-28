import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

@Component({
  standalone: true,
  selector: 'app-delivery-receiving-case-study',
  templateUrl: './delivery-receiving-case-study.page.html',
  styleUrls: ['./nfe-case-study.page.scss', './delivery-receiving-case-study.page.scss'],
  imports: [IonContent, RouterLink],
})
export class DeliveryReceivingCaseStudyPage {
  readonly repositoryUrl = 'https://github.com/AvinSSSS/controle-recebimento-entregadores';
  readonly features = [
    { pt: 'Veja com antecedência tudo o que precisa ser recebido', en: 'See everything expected to arrive ahead of time' },
    { pt: 'Identifique atrasos sem conferir mensagens e planilhas', en: 'Spot delays without checking messages and spreadsheets' },
    { pt: 'Registre recebimentos parciais sem perder o saldo', en: 'Record partial receipts without losing the balance' },
    { pt: 'Consulte o histórico e o motivo de cada cancelamento', en: 'Review history and the reason behind every cancellation' },
    { pt: 'Filtre a rotina por período, transportadora e situação', en: 'Filter operations by period, carrier and status' },
    { pt: 'Leve a mesma visão da tela para um relatório Excel', en: 'Take the same on-screen view into an Excel report' },
  ];
  readonly results = [
    { ptTitle: 'Antecipe problemas', enTitle: 'Anticipate problems', ptText: 'Atrasos e bloqueios ganham visibilidade antes de afetarem o restante da operação.', enText: 'Delays and restrictions become visible before they affect the rest of the operation.' },
    { ptTitle: 'Controle cada saldo', enTitle: 'Control every balance', ptText: 'Uma baixa parcial separa o recebido do pendente sem apagar a previsão original.', enText: 'A partial receipt separates delivered and outstanding amounts without erasing the original schedule.' },
    { ptTitle: 'Responda com evidências', enTitle: 'Answer with evidence', ptText: 'Histórico, situação e motivos permanecem disponíveis para conferência.', enText: 'History, status and reasons remain available for review.' },
    { ptTitle: 'Ganhe tempo na análise', enTitle: 'Save analysis time', ptText: 'A consulta filtrada se transforma em Excel sem remontar a informação manualmente.', enText: 'Filtered results become an Excel report without manually rebuilding the information.' },
  ];
  readonly roadmap = [
    { pt: 'Detalhar as regras operacionais das transportadoras', en: 'Detail carrier operating rules' },
    { pt: 'Definir telas, calendário e relatório Excel', en: 'Define screens, calendar and Excel report' },
    { pt: 'Implementar cadastros, previsões e baixas', en: 'Build records, schedules and receipt flows' },
    { pt: 'Validar com dados reais antes da publicação', en: 'Validate with real data before release' },
  ];
  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
}
