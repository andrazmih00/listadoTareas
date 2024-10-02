import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2dayAddComponent } from './day2day-add.component';

describe('Day2dayAddComponent', () => {
  let component: Day2dayAddComponent;
  let fixture: ComponentFixture<Day2dayAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2dayAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2dayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
