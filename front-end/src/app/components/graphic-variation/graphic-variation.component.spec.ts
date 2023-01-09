import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicVariationComponent } from './graphic-variation.component';

describe('GraphicVariationComponent', () => {
  let component: GraphicVariationComponent;
  let fixture: ComponentFixture<GraphicVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicVariationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
