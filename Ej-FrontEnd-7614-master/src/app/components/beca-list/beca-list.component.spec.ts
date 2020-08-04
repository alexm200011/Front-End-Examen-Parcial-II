import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaListComponent } from './beca-list.component';

describe('BecaListComponent', () => {
  let component: BecaListComponent;
  let fixture: ComponentFixture<BecaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
