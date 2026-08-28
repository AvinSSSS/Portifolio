import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

interface PlannedCapability { number: string; ptTitle: string; enTitle: string; ptText: string; enText: string; code: string; }

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
    { pt: 'Cadastro de transportadoras, horários, prazos e bloqueios', en: 'Carrier schedules, deadlines and blocking rules' },
    { pt: 'Previsões com quantidades, valores e regra aplicada', en: 'Expected receipts with quantities, values and applied rules' },
    { pt: 'Estados pendente, recebido, parcial, atrasado e cancelado', en: 'Pending, received, partial, delayed and canceled states' },
    { pt: 'Baixa parcial com novo saldo vinculado automaticamente', en: 'Partial receipt with an automatically linked outstanding balance' },
    { pt: 'Calendário mensal e lista com filtros operacionais', en: 'Monthly calendar and list with operational filters' },
    { pt: 'Exportação da consulta filtrada para Excel', en: 'Filtered report export to Excel' },
  ];
  readonly capabilities: PlannedCapability[] = [
    { number: '01', ptTitle: 'Regras antes da interface', enTitle: 'Rules before interface', ptText: 'O planejamento começa pelo funcionamento de cada transportadora: dias, horários, prazos e impedimentos. A tela será consequência dessas regras, não o contrário.', enText: 'Planning starts with how each carrier operates: days, schedules, deadlines and restrictions. The interface will follow those rules, not define them.', code: 'transportadora · regra · previsão · validação' },
    { number: '02', ptTitle: 'Histórico preservado', enTitle: 'Preserved history', ptText: 'Receber parcialmente ou cancelar não apagará o registro original. Cada mudança manterá motivo, vínculo e saldo para que a operação possa ser conferida depois.', enText: 'Partial receipts and cancellations will not erase the original record. Each change will preserve its reason, link and outstanding balance for later review.', code: 'audit trail · parentId · saldo pendente' },
    { number: '03', ptTitle: 'Cálculo previsível', enTitle: 'Predictable calculation', ptText: 'Quantidade e valor unitário formarão o total de modo determinístico. Recebimentos parciais separarão o que entrou do que ainda precisa ser acompanhado.', enText: 'Quantity and unit price will determine totals predictably. Partial receipts will separate what arrived from what still needs tracking.', code: 'quantidade × valor unitário · saldo' },
    { number: '04', ptTitle: 'Sincronização entre dispositivos', enTitle: 'Cross-device synchronization', ptText: 'A direção técnica prevê autenticação Google e Firebase para manter a agenda atualizada no computador e no celular.', enText: 'The technical direction uses Google authentication and Firebase to keep schedules updated across desktop and mobile.', code: 'Google Auth · Firebase · cache local' },
    { number: '05', ptTitle: 'Consulta que vira relatório', enTitle: 'Search becomes reporting', ptText: 'Os mesmos filtros usados na operação formarão a exportação Excel, evitando divergência entre o que aparece na tela e o que segue para análise.', enText: 'The same filters used operationally will drive the Excel export, preventing differences between on-screen data and reports.', code: 'período · transportadora · status · .xlsx' },
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
