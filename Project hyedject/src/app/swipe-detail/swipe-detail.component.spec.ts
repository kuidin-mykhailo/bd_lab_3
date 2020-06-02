import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeDetailComponent } from './swipe-detail.component';

describe('SwipeDetailComponent', () => {
  let component: SwipeDetailComponent;
  let fixture: ComponentFixture<SwipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
