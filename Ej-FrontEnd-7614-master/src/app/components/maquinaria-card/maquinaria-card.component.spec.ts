import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaCardComponent } from './maquinaria-card.component';

describe('MaquinariaCardComponent', () => {
  let component: MaquinariaCardComponent;
  let fixture: ComponentFixture<MaquinariaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinariaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinariaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
