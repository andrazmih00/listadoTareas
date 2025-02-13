import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2dayComponent } from './day2day.component';

describe('Day2dayComponent', () => {
  let component: Day2dayComponent;
  let fixture: ComponentFixture<Day2dayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2dayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2dayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
