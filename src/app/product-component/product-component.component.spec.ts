import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductModel } from '../models/product-model';

import { ProductComponentComponent } from './product-component.component';
import { By } from '@angular/platform-browser';

describe('ProductComponentComponent', () => {
  let component: ProductComponentComponent;
  let fixture: ComponentFixture<ProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponentComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponentComponent);
    component = fixture.componentInstance;
    component.product = new ProductModel('Test Product', 10000, 5, false);
    fixture.detectChanges();
  });
  it('should create a product card component and render data', () => {
    const nameEl = fixture.debugElement.query(By.css('.product-content h1'));
    expect(nameEl.nativeElement.textContent).toEqual('Test Product');

    const priceEl = fixture.debugElement.query(By.css('.product-footer h3'));
    expect(priceEl.nativeElement.textContent.trim()).toEqual('KSh 10,000');
  });

  describe('product on sale', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ProductComponentComponent);
      component = fixture.componentInstance;
      component.product = new ProductModel('Test Product', 10000, 5, true);
      fixture.detectChanges();
    });
    it('show in sale elements', () => {
      const notOnSaleEl = fixture.debugElement.query(
        By.css('#saleSection button')
      );
      expect(notOnSaleEl.nativeElement.textContent.trim()).toEqual(
        'Add to cart'
      );
      const inCartBtns = fixture.debugElement.query(By.css('.incart-button'));
      expect(inCartBtns).toBeNull();
    });
  });

  describe('product not on sale', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ProductComponentComponent);
      component = fixture.componentInstance;
      component.product = new ProductModel('Test Product', 10000, 5, false);
      fixture.detectChanges();
    });
    it('show not in sale elements', () => {
      const notOnSaleEl = fixture.debugElement.query(
        By.css('#notSaleSection p')
      );
      expect(notOnSaleEl.nativeElement.textContent).toEqual('Not on Sale!');
    });
  });

  describe('trigger add to cart event emitter', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ProductComponentComponent);
      component = fixture.componentInstance;
      component.product = new ProductModel('Test Product', 10000, 5, true);
      fixture.detectChanges();
    });

    it('can trigger event emitter with correct product', () => {
      let cartProduct: ProductModel | undefined;
      component.addToCart.subscribe((product) => (cartProduct = product));
      const addToCartEl = fixture.debugElement.query(
        By.css('#hasQuantity button')
      );
      addToCartEl.triggerEventHandler('click', '');
      expect(cartProduct).toEqual(component.product);
    });
  });
});
