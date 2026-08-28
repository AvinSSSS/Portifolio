import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

interface Screenshot { src: string; ptTitle: string; enTitle: string; ptAlt: string; enAlt: string; }
interface Technique { number: string; ptTitle: string; enTitle: string; ptText: string; enText: string; code: string; }

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
  readonly techniques: Technique[] = [
    { number: '01', ptTitle: 'Offline-first com SQLite', enTitle: 'Offline-first with SQLite', ptText: 'Clientes, preços, orçamentos e laudos permanecem no dispositivo e continuam acessíveis sem depender de uma conexão constante.', enText: 'Clients, prices, quotes and reports remain on the device and stay accessible without requiring a constant connection.', code: 'Capacitor SQLite · dados por usuário · operação local' },
    { number: '02', ptTitle: 'Privacidade por arquitetura', enTitle: 'Privacy by architecture', ptText: 'Nome, documento, endereço e valores não são enviados ao Gemini. Quando autorizado, somente os campos técnicos necessários seguem para a API.', enText: 'Names, documents, addresses and prices are never sent to Gemini. When authorized, only the required technical fields reach the API.', code: 'consentimento explícito · dados mínimos · secrets no servidor' },
    { number: '03', ptTitle: 'Identidade e recuperação', enTitle: 'Identity and recovery', ptText: 'O Firebase Authentication protege o acesso com e-mail, Google e recuperação de senha, enquanto os dados profissionais continuam armazenados no aparelho.', enText: 'Firebase Authentication protects access through email, Google and password recovery while professional data remains stored on the device.', code: 'Firebase Auth · Google Sign-In · reset por e-mail' },
    { number: '04', ptTitle: 'Documentos determinísticos', enTitle: 'Deterministic documents', ptText: 'Valores e totais são calculados pela aplicação. O texto do laudo pode ser revisado antes de o PDF ser gerado e compartilhado.', enText: 'Prices and totals are calculated by the app. Report text can be reviewed before the PDF is generated and shared.', code: 'pdfmake · revisão humana · compartilhamento nativo' },
    { number: '05', ptTitle: 'Serviço protegido e mensurável', enTitle: 'Protected, measurable service', ptText: 'Uma API FastAPI protege a chave do Gemini, valida identidade, controla cotas e diferencia falhas reais de gerações consumidas.', enText: 'A FastAPI service protects the Gemini key, validates identity, controls quotas and distinguishes actual failures from consumed generations.', code: 'FastAPI · App Check · rate limit · quotas' },
    { number: '06', ptTitle: 'Caminho para a Play Store', enTitle: 'Play Store delivery path', ptText: 'O projeto inclui aplicativo Android nativo via Capacitor, geração de AAB, testes automatizados e integração preparada para recursos da Google Play.', enText: 'The project includes a Capacitor-powered native Android app, AAB generation, automated tests and integration prepared for Google Play capabilities.', code: 'Android · AAB · Play Billing · CI' },
  ];

  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
  previousSlide(): void { this.currentSlide.update((index) => (index + this.screenshots.length - 1) % this.screenshots.length); }
  nextSlide(): void { this.currentSlide.update((index) => (index + 1) % this.screenshots.length); }
  goToSlide(index: number): void { this.currentSlide.set(index); }
}
