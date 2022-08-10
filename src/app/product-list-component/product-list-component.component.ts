import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss'],
})
export class ProductListComponentComponent implements OnInit {
  public products: ProductModel[] | undefined;
  public cart_items: { code: string; number: number }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = [
      new ProductModel('Eames Chair', 300000, 4, false, 'assets/eames'),
      new ProductModel('Burrow Chair', 50000, 5, true, 'assets/burrow'),
      new ProductModel('Dora Chair', 30000, 2, true, 'assets/dora'),
    ];
  }

  private changeProductQuantity(product: ProductModel, decrement: boolean) {
    if (!this.products) return;
    const product_in_products_index = this.products.findIndex(
      (prd) => prd.code === product.code
    );
    if (decrement) {
      this.products[product_in_products_index]['quantity'] =
        this.products[product_in_products_index]['quantity'] - 1;
    } else {
      this.products[product_in_products_index]['quantity'] =
        this.products[product_in_products_index]['quantity'] + 1;
    }
  }

  handleToggleOnSale(product: ProductModel, index: number) {
    this.products![index]['onSale'] = !this.products![index]['onSale'];
  }

  handleAddToCart(product: ProductModel) {
    const item_found = this.cart_items.find(
      (item) => item.code === product.code
    );
    if (item_found) {
      this.cart_items = this.cart_items.map((item) => {
        if (item.code === item_found.code) {
          this.changeProductQuantity(product, true);
          return { code: item.code, number: item.number + 1 };
        } else {
          return item;
        }
      });
    } else {
      this.cart_items.push({
        code: product.code,
        number: 1,
      });
      this.changeProductQuantity(product, true);
    }
  }

  handleRemoveFromCart(product: ProductModel) {
    const item_found = this.cart_items.find(
      (item) => item.code === product.code
    );
    if (item_found) {
      if (item_found.number > 1) {
        this.cart_items = this.cart_items.map((item) => {
          if (item.code === item_found.code) {
            return { code: item.code, number: item.number - 1 };
          } else {
            return item;
          }
        });
        this.changeProductQuantity(product, false);
      } else {
        this.cart_items = this.cart_items.filter(
          (item) => item.code !== item_found.code
        );
        this.changeProductQuantity(product, false);
      }
    }
  }

  get cart() {
    return this.cart_items
      .map((item) => item.number)
      .reduce((counter, current) => counter + current, 0);
  }

  checkProductInCart(product: ProductModel): boolean | number {
    const in_cart = this.cart_items.find((item) => item.code === product.code);
    if (in_cart) return in_cart.number;
    return false;
  }
}
