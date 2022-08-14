import { Injectable } from '@angular/core';
import { StockModel } from '../models/stock-model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  public stocks: StockModel[];
  constructor() {
    this.stocks = [
      new StockModel('Hibinga Manual', 'HM', 100, 80),
      new StockModel('Google Stock', 'G', 500, 490),
      new StockModel('Tesla Stock', 'HM', 350, 400),
      new StockModel('Air B n B', 'ABB', 200, 210),
    ];
  }

  getStocks(): StockModel[] {
    return this.stocks;
  }

  createStock(stock: StockModel) {
    if (this.stocks.find((stk) => stk.code === stock.code)) return false;
    this.stocks.push(stock);
    return true;
  }

  handleToggleFavorite(stock: StockModel) {
    let foundStock = this.stocks.find((stk) => stk.code === stock.code);
    if (foundStock) {
      foundStock.favorite = !foundStock.favorite;
    }
  }
}
