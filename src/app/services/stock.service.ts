import { Injectable } from '@angular/core';
import { StockModel } from '../models/stock-model';
import { throwError as ObservableThrow } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { Observable } from 'rxjs';

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

  getStocks(): Observable<StockModel[]> {
    return ObservableOf(this.stocks);
  }

  createStock(stock: StockModel) {
    if (this.stocks.find((stk) => stk.code === stock.code)) {
      return ObservableThrow({
        message: `Stock with code ${stock.code} already exists`,
      });
    }
    this.stocks.push(stock);
    return ObservableOf({
      message: `Stock with code ${stock.code} successfully created`,
    });
  }

  handleToggleFavorite(stock: StockModel) {
    let foundStock = this.stocks.find((stk) => stk.code === stock.code);
    if (foundStock) {
      foundStock.favorite = !foundStock.favorite;
      return ObservableOf({
        message: `Stock with code ${stock.code} successfully toggled`,
        data: foundStock,
      });
    } else {
      return ObservableThrow({
        message: `Stock with code ${stock.code} not found`,
      });
    }
  }
}
