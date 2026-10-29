import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qrcodes } from './qrcodes';

describe('Qrcodes', () => {
  let component: Qrcodes;
  let fixture: ComponentFixture<Qrcodes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qrcodes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qrcodes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
