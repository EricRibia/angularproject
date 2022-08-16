import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../models/stock-model';
import { StockService } from '../../services/stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  public stocks$: Observable<StockModel[]> | undefined;
  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stocks$ = this.stockService.getStocks();
  }

  onToggleFavorite(stock: StockModel) {
    console.log('Favorite for stock', stock, 'was triggered');
    this.stockService
      .handleToggleFavorite(stock)
      .subscribe((resp) => console.log('fav resp', resp));
  }
}
