import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../models/stock-model';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  public stocks: StockModel[];
  constructor(private stockService: StockService) {
    this.stocks = this.stockService.getStocks();
  }

  ngOnInit(): void {}

  onToggleFavorite(stock: StockModel) {
    console.log('Favorite for stock', stock, 'was triggered');
    this.stockService.handleToggleFavorite(stock);
  }
}
