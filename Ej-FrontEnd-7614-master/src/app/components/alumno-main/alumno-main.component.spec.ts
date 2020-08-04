import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoMainComponent } from './alumno-main.component';

describe('AlumnoMainComponent', () => {
  let component: AlumnoMainComponent;
  let fixture: ComponentFixture<AlumnoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
