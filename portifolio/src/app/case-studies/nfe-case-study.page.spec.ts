import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NfeCaseStudyPage } from './nfe-case-study.page';

describe('NfeCaseStudyPage', () => {
  it('should create and expose the repository URL', async () => {
    await TestBed.configureTestingModule({ imports: [NfeCaseStudyPage], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(NfeCaseStudyPage);
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.repositoryUrl).toContain('AvinSSSS/DescomplicadorNFe');
  });
});
