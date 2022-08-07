import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Utils } from '../utils';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss'],
})
export class ProductComponentComponent implements OnInit {
  private _product: ProductModel | undefined;
  public _cart: number = 0;
  public utils = new Utils();
  constructor() {}

  ngOnInit(): void {
    const ar = this.utils.setArrayFromNumber(10);
    console.log('ar', ar);
    this._product = new ProductModel('Eames Chair', 295000, 5, true);
  }

  get product(): ProductModel {
    if (this._product) {
      return this._product;
    } else {
      return new ProductModel('', 0, 0, false);
    }
  }

  get cart() {
    return this._cart;
  }

  addToCart() {
    this._product?.changeProductQuantity(1, false);
    this._cart += 1;
  }

  removeFromCart() {
    this._product?.changeProductQuantity(1, true);
    this._cart -= 1;
  }

  isProductOnSale(): boolean {
    return !!this._product?.onSale;
  }

  toggleOnSale() {
    this._product!.onSale = !this._product!.onSale;
  }
}
