import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponentComponent } from './stock-component.component';
import { StockModel } from '../models/stock-model';
import { StockItemComponent } from './stock-item/stock-item.component';
import { By } from '@angular/platform-browser';

describe('StockComponentComponent', () => {
  describe('Simple, No Angular Unit Test', () => {
    it('should have a stock on component initialization', () => {
      const stockComponent = new StockComponentComponent();
      expect(stockComponent.stock).toBeUndefined();
      stockComponent.ngOnInit();
      expect(stockComponent.stock).toEqual(
        new StockModel('Test Stock Company', 'TSC', 85, 80)
      );
    });

    it('should toggle stock favorite', () => {
      const stockComponent = new StockComponentComponent();
      stockComponent.ngOnInit();
      expect(stockComponent.stock!.favorite).toBeFalsy();
      stockComponent.handleToggleFavorite();
      expect(stockComponent.stock!.favorite).toBeTruthy();
      stockComponent.handleToggleFavorite();
      expect(stockComponent.stock!.favorite).toBeFalsy();
    });
  });

  describe('angular aware tests', () => {
    let component: StockComponentComponent;
    let fixture: ComponentFixture<StockComponentComponent>;
    //create a testbed - load all required components and compile them
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [StockComponentComponent, StockItemComponent],
      }).compileComponents();
    });

    //fixture and component instantiation
    beforeEach(() => {
      fixture = TestBed.createComponent(StockComponentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should load all elements with correct data on the stock item component', () => {
      //show title
      const pageTitle = fixture.debugElement.query(By.css('h1'));
      expect(pageTitle.nativeElement.textContent.trim()).toEqual(
        'Welcome to the Stock Market App!'
      );

      //show input data
      const nameEl = fixture.debugElement.query(By.css('#stock_name'));
      expect(nameEl.nativeElement.textContent.trim()).toEqual(
        'Test Stock Company (TSC)'
      );
      const priceEl = fixture.debugElement.query(By.css('#stock_price'));
      expect(priceEl.nativeElement.textContent).toEqual('Kes 85.00');

      //check trigger buttons
      const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
      expect(addToFavoriteBtnEl).toBeDefined();
    });
  });
  // stock_name -id - Test Stock Company (TSC)
  // stock_price - id - 85
  // button - el -
  // let component: StockComponentComponent;
  // let fixture: ComponentFixture<StockComponentComponent>;
  //
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ StockComponentComponent ]
  //   })
  //   .compileComponents();
  // });
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(StockComponentComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
