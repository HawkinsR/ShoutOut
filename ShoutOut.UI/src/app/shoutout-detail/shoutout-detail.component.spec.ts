import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutoutDetailComponent } from './shoutout-detail.component';

describe('ShoutoutDetailComponent', () => {
  let component: ShoutoutDetailComponent;
  let fixture: ComponentFixture<ShoutoutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoutoutDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
