import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpListComponent } from './yelp-list.component';

describe('YelpListComponent', () => {
  let component: YelpListComponent;
  let fixture: ComponentFixture<YelpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
