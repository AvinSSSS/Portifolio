import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DiscordBotCaseStudyPage } from './discord-bot-case-study.page';

describe('DiscordBotCaseStudyPage', () => {
  it('creates the page with the repository link and techniques', async () => {
    await TestBed.configureTestingModule({ imports: [DiscordBotCaseStudyPage], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(DiscordBotCaseStudyPage);
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.repositoryUrl).toContain('DiscordUtilityBot');
    expect(fixture.componentInstance.techniques.length).toBe(5);
  });
});
