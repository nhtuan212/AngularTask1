import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranttChartsComponent } from './grantt-charts.component';

describe('GranttChartsComponent', () => {
  let component: GranttChartsComponent;
  let fixture: ComponentFixture<GranttChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranttChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranttChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
