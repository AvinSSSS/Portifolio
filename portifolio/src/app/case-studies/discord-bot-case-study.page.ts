import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

interface Technique { number: string; ptTitle: string; enTitle: string; ptText: string; enText: string; code: string; }

@Component({ standalone: true, selector: 'app-discord-bot-case-study', templateUrl: './discord-bot-case-study.page.html', styleUrls: ['./nfe-case-study.page.scss'], imports: [IonContent, RouterLink] })
export class DiscordBotCaseStudyPage {
  readonly repositoryUrl = 'https://github.com/AvinSSSS/DiscordUtilityBot';
  readonly techniques: Technique[] = [
    { number: '01', ptTitle: 'Eventos em tempo real', enTitle: 'Real-time events', ptText: 'O bot mantém uma conexão com o Gateway do Discord e reage à entrada de membros e aos slash commands. O roteador central separa cada interação e devolve respostas privadas quando necessário.', enText: 'The bot keeps a connection to the Discord Gateway and reacts to member joins and slash commands. A central router separates each interaction and uses private replies when needed.', code: 'Gateway · Events · InteractionCreate' },
    { number: '02', ptTitle: 'Permissões por menor privilégio', enTitle: 'Least-privilege permissions', ptText: 'Cada ticket nasce como canal privado: somente o autor e a equipe de suporte recebem os acessos necessários. O fechamento também valida cargo e autoria.', enText: 'Each ticket is created as a private channel: only its author and support team receive the required access. Closing also validates role and ownership.', code: 'permissionOverwrites · roles · authorization' },
    { number: '03', ptTitle: 'Estado sem banco de dados', enTitle: 'State without a database', ptText: 'Autor e situação do ticket ficam registrados no tópico do canal. Assim, o bot identifica tickets duplicados e recupera seu estado mesmo depois de reiniciar.', enText: 'Ticket owner and status are stored in the channel topic. This lets the bot detect duplicate tickets and recover state even after a restart.', code: 'ticket-owner:id · status:open|closing' },
    { number: '04', ptTitle: 'Concorrência e recuperação', enTitle: 'Concurrency and recovery', ptText: 'Antes de encerrar um ticket, o estado muda para closing e bloqueia um segundo fechamento. Se o transcript falhar, o estado volta para open e o canal permanece disponível.', enText: 'Before closing a ticket, its state changes to closing and blocks concurrent attempts. If transcript storage fails, it returns to open and the channel remains available.', code: 'closing lock · try/catch · recovery' },
    { number: '05', ptTitle: 'Operação observável', enTitle: 'Observable operation', ptText: 'Endpoints separados informam se o processo HTTP está vivo e se o Discord já está conectado. O encerramento gracioso fecha as conexões durante atualizações do serviço.', enText: 'Separate endpoints report whether the HTTP process is alive and whether Discord is connected. Graceful shutdown closes connections during service updates.', code: '/health · /ready · SIGTERM · Docker' },
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
