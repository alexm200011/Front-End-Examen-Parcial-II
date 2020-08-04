import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaFormComponent } from './beca-form.component';

describe('BecaFormComponent', () => {
  let component: BecaFormComponent;
  let fixture: ComponentFixture<BecaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
