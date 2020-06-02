import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkudDetailComponent } from './skud-detail.component';

describe('SkudDetailComponent', () => {
  let component: SkudDetailComponent;
  let fixture: ComponentFixture<SkudDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkudDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkudDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
