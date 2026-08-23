import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { LanguageService } from '../core/language.service';

interface Technique { number: string; ptTitle: string; enTitle: string; ptText: string; enText: string; code: string; }

@Component({ standalone: true, selector: 'app-file-organizer-case-study', templateUrl: './file-organizer-case-study.page.html', styleUrls: ['./nfe-case-study.page.scss'], imports: [IonContent, RouterLink] })
export class FileOrganizerCaseStudyPage {
  readonly repositoryUrl = 'https://github.com/AvinSSSS/OrganizadorArquivos';
  readonly techniques: Technique[] = [
    { number: '01', ptTitle: 'Prévia como contrato', enTitle: 'Preview as a contract', ptText: 'Nenhum arquivo é renomeado diretamente a partir dos campos. O controller primeiro produz uma lista imutável de origem, destino e situação para revisão do usuário.', enText: 'No file is renamed directly from form values. The controller first produces an immutable source, target and status list for user review.', code: 'TRenameItem · Preview · validação antes da escrita' },
    { number: '02', ptTitle: 'Nomes seguros no Windows', enTitle: 'Windows-safe filenames', ptText: 'A validação bloqueia caracteres inválidos, nomes reservados, destinos repetidos e arquivos já existentes antes que qualquer operação destrutiva comece.', enText: 'Validation blocks invalid characters, reserved names, duplicate targets and existing files before any destructive operation starts.', code: 'HasInvalidFileName · TDictionary · FileExists' },
    { number: '03', ptTitle: 'Ordem determinística', enTitle: 'Deterministic ordering', ptText: 'Os arquivos são ordenados alfabeticamente antes da numeração. A mesma pasta e as mesmas regras sempre produzem a mesma prévia.', enText: 'Files are sorted alphabetically before numbering. The same folder and rules always produce the same preview.', code: 'TArray.Sort · TComparer<string> · numeração estável' },
    { number: '04', ptTitle: 'Desfazer transacional', enTitle: 'Transactional undo', ptText: 'Cada movimentação concluída é registrada imediatamente em UTF-8. O desfazer valida todos os caminhos e reverte em ordem inversa, reduzindo o risco de colisões.', enText: 'Each completed move is immediately recorded in UTF-8. Undo validates every path and reverts in reverse order, reducing collision risk.', code: '.organizador-undo.tsv · ordem inversa · TEncoding.UTF8' },
  ];
  readonly features = [
    { pt: 'Prefixo, sufixo e substituição sem diferenciar maiúsculas', en: 'Prefix, suffix and case-insensitive replacement' },
    { pt: 'Numeração sequencial em ordem alfabética', en: 'Sequential numbering in alphabetical order' },
    { pt: 'Prévia com arquivos prontos e ignorados', en: 'Preview with ready and skipped file counts' },
    { pt: 'Visualização interna de textos e imagens', en: 'Built-in preview for text files and images' },
    { pt: 'Exclusão individual com confirmação', en: 'Per-file deletion with confirmation' },
    { pt: 'Testes DUnitX do ciclo executar e desfazer', en: 'DUnitX tests for the execute-and-undo cycle' },
  ];
  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
}
