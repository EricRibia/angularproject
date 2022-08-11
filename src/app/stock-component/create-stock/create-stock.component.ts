import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../models/stock-model';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss'],
})
export class CreateStockComponent implements OnInit {
  public stock: StockModel;
  public confirmed: boolean = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor() {
    this.stock = new StockModel('', '', 0, 0);
  }

  ngOnInit(): void {}

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.prev_price = price;
  }

  createStock(stockForm: { valid: any; value: any }) {
    console.log('stockForm', stockForm.value);
    if (stockForm.valid) {
      console.log('Creating stock', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
