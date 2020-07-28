import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatWallOfChinaComponent } from './great-wall-of-china.component';

describe('GreatWallOfChinaComponent', () => {
  let component: GreatWallOfChinaComponent;
  let fixture: ComponentFixture<GreatWallOfChinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatWallOfChinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatWallOfChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
