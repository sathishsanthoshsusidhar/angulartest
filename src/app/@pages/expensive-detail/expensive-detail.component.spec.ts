import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensiveDetailComponent } from './expensive-detail.component';

describe('ExpensiveDetailComponent', () => {
  let component: ExpensiveDetailComponent;
  let fixture: ComponentFixture<ExpensiveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensiveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
