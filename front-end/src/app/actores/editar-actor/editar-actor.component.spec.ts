import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarActorComponent } from './editar-actor.component';

describe('EditarActorComponent', () => {
  let component: EditarActorComponent;
  let fixture: ComponentFixture<EditarActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
