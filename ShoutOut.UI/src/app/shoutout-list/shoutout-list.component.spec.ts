import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutoutListComponent } from './shoutout-list.component';

describe('ShoutoutListComponent', () => {
  let component: ShoutoutListComponent;
  let fixture: ComponentFixture<ShoutoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoutoutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
