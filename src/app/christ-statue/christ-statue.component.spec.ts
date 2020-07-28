import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristStatueComponent } from './christ-statue.component';

describe('ChristStatueComponent', () => {
  let component: ChristStatueComponent;
  let fixture: ComponentFixture<ChristStatueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristStatueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristStatueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
