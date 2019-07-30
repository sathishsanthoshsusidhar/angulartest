import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRegistersComponent } from './list-of-registers.component';

describe('ListOfRegistersComponent', () => {
  let component: ListOfRegistersComponent;
  let fixture: ComponentFixture<ListOfRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
