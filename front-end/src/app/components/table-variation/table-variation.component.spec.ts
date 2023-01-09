import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVariationComponent } from './table-variation.component';

describe('TableVariationComponent', () => {
  let component: TableVariationComponent;
  let fixture: ComponentFixture<TableVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVariationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
