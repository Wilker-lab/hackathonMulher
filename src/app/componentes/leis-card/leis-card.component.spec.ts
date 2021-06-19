import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisCardComponent } from './leis-card.component';

describe('LeisCardComponent', () => {
  let component: LeisCardComponent;
  let fixture: ComponentFixture<LeisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
