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
  readonly playStoreUrl = 'https://play.google.com/store/apps/details?id=br.com.assistenteorcamentolaudo.app';
  readonly currentSlide = signal(0);
  readonly screenshots: Screenshot[] = [
    { src: 'assets/projects/orcamento-laudo/01-login.png', ptTitle: 'Acesso simples e protegido', enTitle: 'Simple, protected access', ptAlt: 'Tela de entrada do aplicativo Orçamento e Laudo', enAlt: 'Quote and Report app sign-in screen' },
    { src: 'assets/projects/orcamento-laudo/02-cadastro.png', ptTitle: 'Cadastro em poucos segundos', enTitle: 'Sign up in seconds', ptAlt: 'Tela de criação de conta do aplicativo', enAlt: 'App account creation screen' },
    { src: 'assets/projects/orcamento-laudo/03-recuperar-senha.png', ptTitle: 'Recuperação de acesso', enTitle: 'Account recovery', ptAlt: 'Janela para recuperar a senha por e-mail', enAlt: 'Email password recovery dialog' },
  ];
  readonly features = [
    { pt: 'Clientes, perfil profissional, logotipo e tabela de preços personalizados', en: 'Clients, professional profile, logo and custom price lists' },
    { pt: 'Orçamentos e laudos offline, com itens, quantidades, valores e histórico', en: 'Offline quotes and reports with items, quantities, amounts and history' },
    { pt: 'PDF profissional e compartilhamento nativo, inclusive pelo WhatsApp', en: 'Professional PDFs and native sharing, including WhatsApp' },
    { pt: 'Comando inteligente por texto ou voz para criar, localizar e gerar relatórios', en: 'Text or voice smart commands to create, find and generate reports' },
    { pt: 'Painel com evolução mensal, situações, ticket médio e valores orçados', en: 'Dashboard with monthly trends, statuses, average ticket and quoted amounts' },
    { pt: 'Premium com mais IA, experiência sem anúncios e assinatura pela Google Play', en: 'Premium with more AI, an ad-free experience and Google Play subscriptions' },
  ];
  readonly results = [
    { ptTitle: 'Atenda com agilidade', enTitle: 'Work faster', ptText: 'Reaproveite clientes, preços e catálogo para montar o próximo documento sem começar do zero.', enText: 'Reuse clients, prices and the catalog to prepare the next document without starting over.' },
    { ptTitle: 'Apresente melhor', enTitle: 'Present better', ptText: 'Personalize e compartilhe PDFs claros que valorizam o diagnóstico, o serviço e o preço.', enText: 'Customize and share clear PDFs that give proper weight to diagnosis, service and price.' },
    { ptTitle: 'Consulte sua rotina', enTitle: 'Understand your work', ptText: 'Acompanhe valores orçados por período, situação e serviço em tabelas ou gráficos.', enText: 'Track quoted amounts by period, status and service through tables or charts.' },
    { ptTitle: 'Trabalhe offline', enTitle: 'Work offline', ptText: 'Clientes, preços e documentos permanecem disponíveis no aparelho durante o atendimento.', enText: 'Clients, prices and documents remain available on the device during service work.' },
  ];

  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
  previousSlide(): void { this.currentSlide.update((index) => (index + this.screenshots.length - 1) % this.screenshots.length); }
  nextSlide(): void { this.currentSlide.update((index) => (index + 1) % this.screenshots.length); }
  goToSlide(index: number): void { this.currentSlide.set(index); }
}
