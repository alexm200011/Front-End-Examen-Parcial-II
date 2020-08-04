import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaListComponent } from './maquinaria-list.component';

describe('MaquinariaListComponent', () => {
  let component: MaquinariaListComponent;
  let fixture: ComponentFixture<MaquinariaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinariaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinariaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
