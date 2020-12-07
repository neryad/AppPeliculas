import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceCinesComponent } from './indice-cines.component';

describe('IndiceCinesComponent', () => {
  let component: IndiceCinesComponent;
  let fixture: ComponentFixture<IndiceCinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceCinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
