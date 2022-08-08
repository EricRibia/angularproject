import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Utils } from '../utils';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponentComponent implements OnInit {
  @Input() product: ProductModel | undefined;
  @Input() product_in_cart: boolean | number = false;
  @Output() toggleOnSale: EventEmitter<ProductModel>;
  @Output() addToCart: EventEmitter<ProductModel>;
  @Output() removeFromCart: EventEmitter<ProductModel>;
  public utils = new Utils();
  constructor() {
    this.toggleOnSale = new EventEmitter<ProductModel>();
    this.addToCart = new EventEmitter<ProductModel>();
    this.removeFromCart = new EventEmitter<ProductModel>();
  }

  ngOnInit(): void {
    console.log('product', this.product);
  }

  onToggleOnSale() {
    this.toggleOnSale.emit(this.product);
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  onRemoveFromCart() {
    this.removeFromCart.emit(this.product);
  }

  isProductOnSale(): boolean {
    return !!this.product?.onSale;
  }

  get product_data() {
    if (this.product) {
      return this.product;
    } else {
      return new ProductModel('', 0, 1, false, '');
    }
  }
}
