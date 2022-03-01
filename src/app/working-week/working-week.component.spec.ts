import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWeekComponent } from './working-week.component';

describe('WorkingWeekComponent', () => {
  let component: WorkingWeekComponent;
  let fixture: ComponentFixture<WorkingWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
