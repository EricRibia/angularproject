import { Component, EventEmitter, OnInit } from '@angular/core';
import { StockModel } from '../models/stock-model';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock-component.component.html',
  styleUrls: ['./stock-component.component.scss'],
})
export class StockComponentComponent implements OnInit {
  public stocks: Array<StockModel> | undefined;
  private counter: number = 1;
  constructor() {}

  ngOnInit(): void {
    this.stocks = [
      new StockModel('Test Company', 'TC', 120, 90),
      new StockModel('Second Company', 'SC', 177, 90),
      new StockModel('Tesla Plc', 'TP', 54, 12),
      new StockModel('Riqo Corp', 'RC', 130, 100),
    ];
  }

  handleToggleFavorite(event: StockModel, index: number) {
    this.stocks![index]['favorite'] = !this.stocks![index]['favorite'];
  }
  changeStockObject() {
    // This will update the value in the stock item component
    // Because we are creating a new reference for the stock input
    if (this.stocks)
      this.stocks[1] = new StockModel(
        'Test Stock Company - ' + this.counter++,
        'TSC',
        85,
        80
      );
  }
  changeStockPrice() {
    // This will not
    // because it is
    // not check for
    if (this.stocks) this.stocks[1].price += 10;
  }
}
