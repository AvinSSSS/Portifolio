import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

interface Technique { number: string; ptTitle: string; enTitle: string; ptText: string; enText: string; code: string; }

@Component({ standalone: true, selector: 'app-nfe-case-study', templateUrl: './nfe-case-study.page.html', styleUrls: ['./nfe-case-study.page.scss'], imports: [IonContent, RouterLink] })
export class NfeCaseStudyPage {
  readonly repositoryUrl = 'https://github.com/AvinSSSS/DescomplicadorNFe';
  readonly techniques: Technique[] = [
    { number: '01', ptTitle: 'Leitura resiliente de XML', enTitle: 'Resilient XML parsing', ptText: 'A busca por LocalName aceita documentos com namespaces diferentes. XMLs malformados, campos ausentes, DTDs e arquivos acima de 10 MB são tratados sem interromper o lote.', enText: 'LocalName-based lookup supports different namespaces. Malformed XML, missing fields, DTDs and files over 10 MB are handled without stopping the batch.', code: 'Xml.XMLDoc · LocalName · validação defensiva' },
    { number: '02', ptTitle: 'Interface sempre responsiva', enTitle: 'Always-responsive UI', ptText: 'A leitura ocorre em uma thread anônima, com atualizações sincronizadas de progresso, cancelamento cooperativo e bloqueio de fechamento durante o processamento.', enText: 'Loading runs on an anonymous thread with synchronized progress updates, cooperative cancellation and safe window closing.', code: 'TThread.CreateAnonymousThread · Synchronize' },
    { number: '03', ptTitle: 'Visão derivada dos dados', enTitle: 'Derived data view', ptText: 'Filtro, ordenação e totais operam sobre índices visíveis, preservando a coleção original. A pesquisa altera a visão, não os documentos carregados.', enText: 'Filtering, sorting and totals operate on visible indexes while preserving the source collection. Search changes the view, not the loaded documents.', code: 'TArray<Integer> · QuickSort · totais filtrados' },
    { number: '04', ptTitle: 'Exportação segura', enTitle: 'Safe export', ptText: 'O CSV usa UTF-8, neutraliza células que poderiam virar fórmulas e inclui uma representação compacta do XML. As edições permanecem em memória e nunca sobrescrevem o original.', enText: 'CSV output uses UTF-8, neutralizes formula-like cells and includes compact XML. Edits remain in memory and never overwrite the source file.', code: 'TEncoding.UTF8 · formula injection protection' },
  ];
  readonly features = [
    { pt: 'Pesquisa por fornecedor, CNPJ, número, data, valor e status', en: 'Search by supplier, CNPJ, number, date, value and status' },
    { pt: 'Ordenação crescente e decrescente pelo cabeçalho', en: 'Ascending and descending sorting from grid headers' },
    { pt: 'Visualização formatada e cópia do XML', en: 'Formatted XML viewing and copy action' },
    { pt: 'Edição controlada sem alterar o arquivo original', en: 'Controlled editing without changing the original file' },
    { pt: 'Totalizadores atualizados conforme o filtro', en: 'Summary totals updated with the active filter' },
    { pt: 'Testes DUnitX para leitura, segurança e exportação', en: 'DUnitX tests for parsing, security and export' },
  ];
  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
}
