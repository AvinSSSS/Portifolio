import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DeliveryReceivingCaseStudyPage } from './delivery-receiving-case-study.page';

describe('DeliveryReceivingCaseStudyPage', () => {
  it('creates the planned project page with roadmap and documentation', async () => {
    await TestBed.configureTestingModule({ imports: [DeliveryReceivingCaseStudyPage], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(DeliveryReceivingCaseStudyPage);
    const page = fixture.componentInstance;
    expect(page).toBeTruthy();
    expect(page.repositoryUrl).toContain('controle-recebimento-entregadores');
    expect(page.roadmap.length).toBe(4);
    expect(page.features.length).toBe(6);
  });
});
