import { Injectable } from '@angular/core';
import { StockModel } from '../models/stock-model';
import { throwError as ObservableThrow } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}
  getStocks(): Observable<StockModel[]> {
    return this.http.get<StockModel[]>('/api/stock', {
      headers: new HttpHeaders()
        .set('Authorization', 'MyAuthorizationHeaderValue')
        .set('X-EXAMPLE-HEADER', 'TestValue'),
      params: {
        q: 'test',
        test: 'value',
      },
      observe: 'body',
    });
  }
  getStocksAsResponse(): Observable<HttpResponse<StockModel[]>> {
    return this.http.get<StockModel[]>('/api/stock', {
      observe: 'response',
    });
  }
  getStocksAsEvents(): Observable<HttpEvent<any>> {
    return this.http.get('/api/stock', {
      observe: 'events',
    });
  }
  getStocksAsString(): Observable<string> {
    return this.http.get('/api/stock', {
      responseType: 'text',
    });
  }

  getStocksAsBlob(): Observable<Blob> {
    return this.http.get('/api/stock', {
      responseType: 'blob',
    });
  }

  createStock(stock: StockModel) {
    return this.http.post('/api/stock', stock);
  }

  handleToggleFavorite(stock: StockModel) {
    return this.http.patch<StockModel>('/api/stock/' + stock.code, {
      favorite: !stock.favorite,
    });
  }
}
