import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGeneroComponent } from './crear-genero.component';

describe('CrearGeneroComponent', () => {
  let component: CrearGeneroComponent;
  let fixture: ComponentFixture<CrearGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
