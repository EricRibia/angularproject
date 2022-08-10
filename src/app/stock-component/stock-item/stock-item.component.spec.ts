import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StockItemComponent } from './stock-item.component';
import { StockModel } from '../../models/stock-model';

describe('StockItemComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    component.stock = new StockModel('Test Company', 'TC', 100, 50);
    fixture.detectChanges();
  });

  it('should create a stock item component and render data', () => {
    const nameEl = fixture.debugElement.query(By.css('#stock_name'));
    expect(nameEl.nativeElement.textContent).toEqual('Test Company (TC)');
    const priceEl = fixture.debugElement.query(By.css('.success'));
    expect(priceEl.nativeElement.textContent).toEqual('Kes 100.00');
    const favoriteBtn = fixture.debugElement.query(By.css('button'));
    expect(favoriteBtn.nativeElement.textContent).toEqual('Add to Favorite');
    // favoriteBtn.triggerEventHandler('click', null);
    // const nameEl = fixture.debugElement.query(By.css('.stock_name'));
  });

  it('should trigger event emitter on add to favorite', () => {
    let selectedStock: StockModel | undefined;
    component.toggleFavorite.subscribe((stock) => (selectedStock = stock));
    expect(selectedStock).toBeUndefined();
    const favoriteBtn = fixture.debugElement.query(By.css('button'));
    favoriteBtn.triggerEventHandler('click', null);
    expect(selectedStock).toEqual(component.stock);
  });
});
