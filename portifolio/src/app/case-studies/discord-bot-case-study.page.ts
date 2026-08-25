import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

interface Technique { number: string; ptTitle: string; enTitle: string; ptText: string; enText: string; code: string; }

@Component({ standalone: true, selector: 'app-discord-bot-case-study', templateUrl: './discord-bot-case-study.page.html', styleUrls: ['./nfe-case-study.page.scss'], imports: [IonContent, RouterLink] })
export class DiscordBotCaseStudyPage {
  readonly repositoryUrl = 'https://github.com/AvinSSSS/DiscordUtilityBot';
  readonly relevance = [
    { pt: 'Transformar necessidades de uma comunidade em fluxos digitais objetivos', en: 'Turn community needs into clear digital workflows' },
    { pt: 'Compreender servidores, canais, cargos e membros como domínio do produto', en: 'Understand servers, channels, roles and members as the product domain' },
    { pt: 'Integrar eventos assíncronos e APIs sem comprometer a experiência', en: 'Integrate asynchronous events and APIs without compromising experience' },
    { pt: 'Aplicar permissões mínimas e proteger conteýo gerado por usuários', en: 'Apply least privilege and protect user-generated content' },
    { pt: 'Prever concorrência, falhas de rede e recuperação do estado', en: 'Anticipate concurrency, network failures and state recovery' },
    { pt: 'Entregar um serviço testável, monitorável e pronto para produção', en: 'Deliver a testable, observable and production-ready service' },
  ];
  readonly techniques: Technique[] = [
    { number: '01', ptTitle: 'Domínio do ecossistema Discord', enTitle: 'Discord ecosystem knowledge', ptText: 'O projeto demonstra entendimento de servidores, canais, cargos, membros, Gateway e intents. Essa base permite escolher os eventos corretos e evitar acessos que a solução não precisa.', enText: 'The project demonstrates knowledge of servers, channels, roles, members, the Gateway and intents. This foundation enables the right events to be selected without requesting unnecessary access.', code: 'GatewayIntentBits · Events · Client' },
    { number: '02', ptTitle: 'Permissões por menor privilégio', enTitle: 'Least-privilege permissions', ptText: 'Cada ticket nasce como canal privado: somente o autor e a equipe de suporte recebem os acessos necessários. O fechamento também valida cargo e autoria.', enText: 'Each ticket is created as a private channel: only its author and support team receive the required access. Closing also validates role and ownership.', code: 'permissionOverwrites · roles · authorization' },
    { number: '03', ptTitle: 'Estado sem banco de dados', enTitle: 'State without a database', ptText: 'Autor e situação do ticket ficam registrados no tópico do canal. Assim, o bot identifica tickets duplicados e recupera seu estado mesmo depois de reiniciar.', enText: 'Ticket owner and status are stored in the channel topic. This lets the bot detect duplicate tickets and recover state even after a restart.', code: 'ticket-owner:id · status:open|closing' },
    { number: '04', ptTitle: 'Concorrência e recuperação', enTitle: 'Concurrency and recovery', ptText: 'Antes de encerrar um ticket, o estado muda para closing e bloqueia um segundo fechamento. Se o transcript falhar, o estado volta para open e o canal permanece disponível.', enText: 'Before closing a ticket, its state changes to closing and blocks concurrent attempts. If transcript storage fails, it returns to open and the channel remains available.', code: 'closing lock · try/catch · recovery' },
    { number: '05', ptTitle: 'Prontidão para produção', enTitle: 'Production readiness', ptText: 'Endpoints distinguem processo ativo de bot conectado, enquanto Docker, desligamento gracioso, validação de configuração e CI tornam a entrega repetível e monitorável.', enText: 'Endpoints distinguish a live process from a connected bot, while Docker, graceful shutdown, configuration validation and CI make delivery repeatable and observable.', code: '/health · /ready · SIGTERM · Docker · CI' },
  ];
  readonly features = [
    { pt: 'Boas-vindas automáticas em canal configurável', en: 'Automatic welcomes in a configurable channel' },
    { pt: 'Tickets privados sem duplicidade por usuário', en: 'Private tickets with duplicate prevention' },
    { pt: 'Fechamento restrito ao autor ou à equipe', en: 'Closing restricted to the author or support team' },
    { pt: 'Transcript cronológico das últimas 100 mensagens', en: 'Chronological transcript of the latest 100 messages' },
    { pt: 'Sugestões com votação por reações', en: 'Suggestions with reaction-based voting' },
    { pt: 'Healthchecks, Docker, testes e integração contínua', en: 'Healthchecks, Docker, tests and continuous integration' },
  ];
  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
}
