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
    { number: '04', ptTitle: 'Rollback em falhas parciais', enTitle: 'Rollback on partial failure', ptText: 'Cada movimentação concluída é registrada imediatamente. Se uma etapa falha, o controller reverte automaticamente o que já foi renomeado, evitando deixar a pasta em um estado intermediário.', enText: 'Every completed move is recorded immediately. If a step fails, the controller automatically rolls back previous renames instead of leaving the folder in a partial state.', code: 'try/except · rollback reverso · consistência do lote' },
    { number: '05', ptTitle: 'Desfazer e exclusão recuperável', enTitle: 'Undo and recoverable deletion', ptText: 'O log UTF-8 permite desfazer a última renomeação em ordem inversa. Quando um item é excluído pela interface, ele segue para a Lixeira do Windows em vez de ser apagado imediatamente.', enText: 'The UTF-8 log can undo the latest rename in reverse order. Files deleted from the interface are sent to the Windows Recycle Bin instead of being erased immediately.', code: '.organizador-undo.tsv · TEncoding.UTF8 · Lixeira' },
  ];
  readonly features = [
    { pt: 'Prefixo, sufixo e substituição sem diferenciar maiúsculas', en: 'Prefix, suffix and case-insensitive replacement' },
    { pt: 'Numeração sequencial em ordem alfabética', en: 'Sequential numbering in alphabetical order' },
    { pt: 'Prévia com arquivos prontos e ignorados', en: 'Preview with ready and skipped file counts' },
    { pt: 'Visualização interna de textos e imagens', en: 'Built-in preview for text files and images' },
    { pt: 'Exclusão confirmada com envio para a Lixeira', en: 'Confirmed deletion through the Windows Recycle Bin' },
    { pt: 'Testes DUnitX do controller e do DataModule', en: 'DUnitX coverage for controller and DataModule behavior' },
  ];
  constructor(readonly language: LanguageService) {}
  isPt(): boolean { return this.language.current() === 'pt'; }
}
