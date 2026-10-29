import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarSessao } from './entrar-sessao';

describe('EntrarSessao', () => {
  let component: EntrarSessao;
  let fixture: ComponentFixture<EntrarSessao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrarSessao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrarSessao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
