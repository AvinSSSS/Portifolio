import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let savedLanguage: string | null;
  let savedDocumentLanguage: string;

  beforeEach(async () => {
    savedLanguage = localStorage.getItem('andreus-portfolio-language');
    savedDocumentLanguage = document.documentElement.lang;
    localStorage.removeItem('andreus-portfolio-language');
    await TestBed.configureTestingModule({ imports: [HomePage], providers: [provideRouter([])] }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (savedLanguage === null) {
      localStorage.removeItem('andreus-portfolio-language');
    } else {
      localStorage.setItem('andreus-portfolio-language', savedLanguage);
    }
    document.documentElement.lang = savedDocumentLanguage;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates accessible names with the visible language without recreating the page', () => {
    const page: HTMLElement = fixture.nativeElement;
    const toggle = page.querySelector<HTMLButtonElement>('button.language')!;
    const expectLanguage = (lang: string, labels: string[], projectsText: string) => {
      expect(document.documentElement.lang).toBe(lang);
      ['.brand', 'nav', 'button.language', '.code-card', '.skills'].forEach((selector, index) => {
        expect(page.querySelector(selector)?.getAttribute('aria-label'))
          .withContext(selector).toBe(labels[index]);
      });
      expect(page.querySelector('nav a[href="#projetos"]')?.textContent).toBe(projectsText);
    };

    expectLanguage('pt-BR', ['Andreus Vinicius — início', 'Navegação principal', 'Mudar para inglês', 'Resumo profissional', 'Tecnologias'], 'Projetos');
    toggle.click();
    fixture.detectChanges();
    expectLanguage('en', ['Andreus Vinicius — home', 'Main navigation', 'Switch to Portuguese', 'Professional summary', 'Technologies'], 'Projects');
    toggle.click();
    fixture.detectChanges();
    expectLanguage('pt-BR', ['Andreus Vinicius — início', 'Navegação principal', 'Mudar para inglês', 'Resumo profissional', 'Tecnologias'], 'Projetos');
  });
});
