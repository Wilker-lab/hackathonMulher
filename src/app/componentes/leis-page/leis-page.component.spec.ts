import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisPageComponent } from './leis-page.component';

describe('LeisPageComponent', () => {
  let component: LeisPageComponent;
  let fixture: ComponentFixture<LeisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
