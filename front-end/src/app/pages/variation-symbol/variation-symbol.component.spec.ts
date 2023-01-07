import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationSymbolComponent } from './variation-symbol.component';

describe('VariationSymbolComponent', () => {
  let component: VariationSymbolComponent;
  let fixture: ComponentFixture<VariationSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariationSymbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariationSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
