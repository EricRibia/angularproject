import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../models/stock-model';
import { StockService } from '../../services/stock.service';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  public stocks$: Observable<StockModel[]> | undefined;
  constructor(
    private stockService: StockService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.fetchStocks();
  }

  fetchStocks() {
    this.stocks$ = this.stockService.getStocks();
  }

  setAuthToken() {
    this.authService.authToken = 'TESTING';
  }

  resetAuthToken() {
    this.authService.authToken = null;
  }
  makeFailingCall() {
    this.stockService.makeFailingCall().subscribe(
      (res) => console.log('Successfully made failing call', res),
      (err) => console.error('Error making failing call', err)
    );
  }
  onToggleFavorite(stock: StockModel) {
    console.log('Favorite for stock', stock, 'was triggered');
    this.stockService
      .handleToggleFavorite(stock)
      .subscribe((resp) => console.log('fav resp', resp));
  }
}
