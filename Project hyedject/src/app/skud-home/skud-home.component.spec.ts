import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkudHomeComponent } from './skud-home.component';

describe('SkudHomeComponent', () => {
  let component: SkudHomeComponent;
  let fixture: ComponentFixture<SkudHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkudHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkudHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
