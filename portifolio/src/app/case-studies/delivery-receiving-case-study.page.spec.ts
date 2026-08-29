import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DeliveryReceivingCaseStudyPage } from './delivery-receiving-case-study.page';

describe('DeliveryReceivingCaseStudyPage', () => {
  it('creates the RotaPaga product page with live access and screenshots', async () => {
    await TestBed.configureTestingModule({ imports: [DeliveryReceivingCaseStudyPage], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(DeliveryReceivingCaseStudyPage);
    const page = fixture.componentInstance;
    expect(page).toBeTruthy();
    expect(page.productUrl).toContain('rotapaga.andreus-vin.chatgpt.site');
    expect(page.screenshots.length).toBe(5);
    expect(page.features.length).toBe(6);
  });

  it('loops through the product screenshots', async () => {
    await TestBed.configureTestingModule({ imports: [DeliveryReceivingCaseStudyPage], providers: [provideRouter([])] }).compileComponents();
    const page = TestBed.createComponent(DeliveryReceivingCaseStudyPage).componentInstance;

    page.previousSlide();
    expect(page.currentSlide()).toBe(4);

    page.nextSlide();
    expect(page.currentSlide()).toBe(0);

    page.goToSlide(2);
    expect(page.currentSlide()).toBe(2);
  });
});
