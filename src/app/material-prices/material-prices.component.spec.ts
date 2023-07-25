import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPricesComponent } from './material-prices.component';

describe('MaterialPricesComponent', () => {
  let component: MaterialPricesComponent;
  let fixture: ComponentFixture<MaterialPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialPricesComponent]
    });
    fixture = TestBed.createComponent(MaterialPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
