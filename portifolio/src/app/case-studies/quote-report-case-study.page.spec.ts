import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { QuoteReportCaseStudyPage } from './quote-report-case-study.page';

describe('QuoteReportCaseStudyPage', () => {
  it('creates the page and cycles through the screenshots', async () => {
    await TestBed.configureTestingModule({ imports: [QuoteReportCaseStudyPage], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(QuoteReportCaseStudyPage);
    const page = fixture.componentInstance;
    expect(page).toBeTruthy();
    expect(page.screenshots.length).toBe(3);
    page.nextSlide();
    expect(page.currentSlide()).toBe(1);
    page.previousSlide();
    expect(page.currentSlide()).toBe(0);
    page.previousSlide();
    expect(page.currentSlide()).toBe(2);
  });
});
