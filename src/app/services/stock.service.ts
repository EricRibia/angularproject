import { Injectable } from '@angular/core';
import { StockModel } from '../models/stock-model';
import { throwError as ObservableThrow } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}
  getStocks(): Observable<StockModel[]> {
    return this.http.get<StockModel[]>('/api/stock');
  }
  createStock(stock: StockModel) {
    return this.http.post('/api/stock', stock);
  }

  makeFailingCall() {
    return this.http.get('/api/fail');
  }

  handleToggleFavorite(stock: StockModel) {
    return this.http.patch<StockModel>('/api/stock/' + stock.code, {
      favorite: !stock.favorite,
    });
  }
}
