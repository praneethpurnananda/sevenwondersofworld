import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachuPicchuComponent } from './machu-picchu.component';

describe('MachuPicchuComponent', () => {
  let component: MachuPicchuComponent;
  let fixture: ComponentFixture<MachuPicchuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachuPicchuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachuPicchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
