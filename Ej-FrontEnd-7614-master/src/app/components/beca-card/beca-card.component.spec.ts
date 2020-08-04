import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaCardComponent } from './beca-card.component';

describe('BecaCardComponent', () => {
  let component: BecaCardComponent;
  let fixture: ComponentFixture<BecaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
