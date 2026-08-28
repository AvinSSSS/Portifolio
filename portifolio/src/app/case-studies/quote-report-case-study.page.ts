import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

interface Screenshot { src: string; ptTitle: string; enTitle: string; ptAlt: string; enAlt: string; }

@Component({
  standalone: true,
  selector: 'app-quote-report-case-study',
  templateUrl: './quote-report-case-study.page.html',
  styleUrls: ['./nfe-case-study.page.scss', './quote-report-case-study.page.scss'],
  imports: [IonContent, RouterLink],
})
export class QuoteReportCaseStudyPage {
  readonly currentSlide = signal(0);
  readonly screenshots: Screenshot[] = [
    { src: 'assets/projects/orcamento-laudo/01-login.png', ptTitle: 'Acesso simples e protegido', enTitle: 'Simple, protected access', ptAlt: 'Tela de entrada do aplicativo Orçamento e Laudo', enAlt: 'Quote and Report app sign-in screen' },
    { src: 'assets/projects/orcamento-laudo/02-cadastro.png', ptTitle: 'Cadastro em poucos segundos', enTitle: 'Sign up in seconds', ptAlt: 'Tela de criação de conta do aplicativo', enAlt: 'App account creation screen' },
    { src: 'assets/projects/orcamento-laudo/03-recuperar-senha.png', ptTitle: 'Recuperação de acesso', enTitle: 'Account recovery', ptAlt: 'Janela para recuperar a senha por e-mail', enAlt: 'Email password recovery dialog' },
  ];
  readonly features = [
    { pt: 'Clientes e dados profissionais organizados no aparelho', en: 'Clients and professional details organized on the device' },
    { pt: 'Tabela de preços personalizada para cada rotina de trabalho', en: 'Custom price lists for each professional workflow' },
    { pt: 'Orçamentos e laudos técnicos no mesmo atendimento', en: 'Quotes and technical reports in the same workflow' },
    { pt: 'PDF profissional pronto para salvar e compartilhar', en: 'Professional PDF ready to save and share' },
    { pt: 'Texto manual ou sugestão opcional com Gemini', en: 'Manual text or optional Gemini-assisted drafts' },
    { pt: 'Dados comerciais e pessoais mantidos localmente', en: 'Business and personal data kept locally' },
  ];
  readonly results = [
    { ptTitle: 'Mais agilidade', enTitle: 'Move faster', ptText: 'Reaproveite clientes e preços para montar o próximo atendimento sem começar do zero.', enText: 'Reuse clients and prices to prepare the next job without starting over.' },
    { ptTitle: 'Melhor apresentação', enTitle: 'Look professional', ptText: 'Entregue um PDF claro que valoriza o diagnóstico, o serviço e o preço apresentado.', enText: 'Deliver a clear PDF that gives proper weight to the diagnosis, service and price.' },
    { ptTitle: 'Tudo organizado', enTitle: 'Stay organized', ptText: 'Mantenha clientes, orçamentos e laudos reunidos no aparelho usado durante o trabalho.', enText: 'Keep clients, quotes and reports together on the device used in the field.' },
    { ptTitle: 'Menos retrabalho', enTitle: 'Reduce rework', ptText: 'Revise o texto e os itens antes de compartilhar, evitando refazer documentos em outras ferramentas.', enText: 'Review text and line items before sharing instead of rebuilding documents elsewhere.' },
  ];

  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
  previousSlide(): void { this.currentSlide.update((index) => (index + this.screenshots.length - 1) % this.screenshots.length); }
  nextSlide(): void { this.currentSlide.update((index) => (index + 1) % this.screenshots.length); }
  goToSlide(index: number): void { this.currentSlide.set(index); }
}
