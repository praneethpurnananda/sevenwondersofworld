import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajmahalComponent } from './tajmahal.component';

describe('TajmahalComponent', () => {
  let component: TajmahalComponent;
  let fixture: ComponentFixture<TajmahalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajmahalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajmahalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
