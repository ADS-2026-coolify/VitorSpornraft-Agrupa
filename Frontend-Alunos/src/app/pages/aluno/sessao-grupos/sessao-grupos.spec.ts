import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoGrupos } from './sessao-grupos';

describe('SessaoGrupos', () => {
  let component: SessaoGrupos;
  let fixture: ComponentFixture<SessaoGrupos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoGrupos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessaoGrupos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
