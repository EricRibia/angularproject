import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../models/stock-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss'],
})
export class CreateStockComponent implements OnInit {
  public stock: StockModel;
  public confirmed: boolean = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  public nameControl = new FormControl();
  public stockForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
  });
  constructor() {
    this.stock = new StockModel('', '', 0, 0);
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form control value', this.stockForm.value);
  }
}
