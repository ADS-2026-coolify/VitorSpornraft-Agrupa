import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarIdentidade } from './validar-identidade';

describe('ValidarIdentidade', () => {
  let component: ValidarIdentidade;
  let fixture: ComponentFixture<ValidarIdentidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarIdentidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarIdentidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
