import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtividadeGruposComponent } from './atividade-grupos';

describe('AtividadeGruposComponent', () => {
  let component: AtividadeGruposComponent;
  let fixture: ComponentFixture<AtividadeGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeGruposComponent] // standalone
    }).compileComponents();

    fixture = TestBed.createComponent(AtividadeGruposComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
