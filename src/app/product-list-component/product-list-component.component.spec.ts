import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponentComponent } from './product-list-component.component';
import { ProductComponentComponent } from '../product-component/product-component.component';
import { By } from '@angular/platform-browser';

describe('ProductListComponentComponent', () => {
  let component: ProductListComponentComponent;
  let fixture: ComponentFixture<ProductListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponentComponent, ProductComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('toggle on sale button', () => {
    const toggleOnSaleEl = fixture.debugElement.query(
      By.css('.product-image button')
    );
    expect(toggleOnSaleEl).toBeTruthy();
    toggleOnSaleEl.triggerEventHandler('click', '');
    expect(component.products![0]['onSale']).toEqual(true);
  });

  it('add to cart and remove from function', () => {
    expect(component.products![0]['quantity']).toEqual(4);
    for (let i = 1; i <= 4; i++) {
      component.handleAddToCart(component.products![0]);
    }
    expect(component.cart).toEqual(4);
    expect(component.products![0]['quantity']).toEqual(0);

    for (let i = 1; i <= 4; i++) {
      component.handleRemoveFromCart(component.products![0]);
    }
    expect(component.products![0]['quantity']).toEqual(4);
    expect(component.cart).toEqual(0);
  });

  it('change product quantity function', () => {
    for (let i = 1; i <= 4; i++) {
      component['changeProductQuantity'](component.products![0], true);
    }
    expect(component.products![0]['quantity']).toEqual(0);
  });
});

// add to cart
// remove from cart
//toggle on sale
