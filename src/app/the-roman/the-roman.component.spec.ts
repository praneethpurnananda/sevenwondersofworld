import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRomanComponent } from './the-roman.component';

describe('TheRomanComponent', () => {
  let component: TheRomanComponent;
  let fixture: ComponentFixture<TheRomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
