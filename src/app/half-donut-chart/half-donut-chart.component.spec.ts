import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfDonutChartComponent } from './half-donut-chart.component';

describe('HalfDonutChartComponent', () => {
  let component: HalfDonutChartComponent;
  let fixture: ComponentFixture<HalfDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalfDonutChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HalfDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
