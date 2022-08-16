import { Component, OnInit } from '@angular/core';
import { StockModel } from '../models/stock-model';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock-component.component.html',
  styleUrls: ['./stock-component.component.scss'],
})
export class StockComponentComponent implements OnInit {
  public stock: StockModel | undefined;
  constructor() {}

  ngOnInit(): void {
    console.log('App Component - On Init');
  }
}
