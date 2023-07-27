import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortfolioComponent } from './client-portfolio.component';

describe('ClientPortfolioComponent', () => {
  let component: ClientPortfolioComponent;
  let fixture: ComponentFixture<ClientPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPortfolioComponent]
    });
    fixture = TestBed.createComponent(ClientPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
