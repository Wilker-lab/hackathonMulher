import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicoesPageComponent } from './instituicoes-page.component';

describe('InstituicoesPageComponent', () => {
  let component: InstituicoesPageComponent;
  let fixture: ComponentFixture<InstituicoesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituicoesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
