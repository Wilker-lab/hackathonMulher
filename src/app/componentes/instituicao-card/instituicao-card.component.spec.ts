import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoCardComponent } from './instituicao-card.component';

describe('InstituicaoCardComponent', () => {
  let component: InstituicaoCardComponent;
  let fixture: ComponentFixture<InstituicaoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituicaoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
