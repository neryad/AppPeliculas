import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceActoresComponent } from './indice-actores.component';

describe('IndiceActoresComponent', () => {
  let component: IndiceActoresComponent;
  let fixture: ComponentFixture<IndiceActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
