import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSobreComponent } from './slide-sobre.component';

describe('SlideSobreComponent', () => {
  let component: SlideSobreComponent;
  let fixture: ComponentFixture<SlideSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideSobreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
