import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShoutoutComponent } from './create-shoutout.component';

describe('CreateShoutoutComponent', () => {
  let component: CreateShoutoutComponent;
  let fixture: ComponentFixture<CreateShoutoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShoutoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShoutoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
