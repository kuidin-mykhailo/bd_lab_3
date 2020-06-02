import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkudNavigationComponent } from './skud-navigation.component';

describe('SkudNavigationComponent', () => {
  let component: SkudNavigationComponent;
  let fixture: ComponentFixture<SkudNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkudNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkudNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
