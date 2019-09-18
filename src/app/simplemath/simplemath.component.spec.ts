import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplemathComponent } from './simplemath.component';

describe('SimplemathComponent', () => {
  let component: SimplemathComponent;
  let fixture: ComponentFixture<SimplemathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplemathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplemathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
