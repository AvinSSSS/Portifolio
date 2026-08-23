import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FileOrganizerCaseStudyPage } from './file-organizer-case-study.page';

describe('FileOrganizerCaseStudyPage', () => {
  it('should create and expose the repository URL', async () => {
    await TestBed.configureTestingModule({ imports: [FileOrganizerCaseStudyPage], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(FileOrganizerCaseStudyPage);
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.repositoryUrl).toContain('AvinSSSS/OrganizadorArquivos');
  });
});
