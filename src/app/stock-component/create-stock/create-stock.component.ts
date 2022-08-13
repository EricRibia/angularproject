import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../models/stock-model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss'],
})
export class CreateStockComponent implements OnInit {
  public stockForm!: FormGroup;
  private stock!: StockModel;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.log('Form control value', this.stock);
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  loadStockFromServer() {
    this.stock = new StockModel('Test ' + counter++, 'TSC', 20, 10);
    let stockModelForForm: Partial<StockModel> = Object.assign({}, this.stock);
    delete stockModelForForm.prev_price;
    delete stockModelForForm.favorite;
    delete stockModelForForm.exchange;
    console.log('stockModelForForm', stockModelForForm);
    this.stockForm.setValue(stockModelForForm);
  }

  resetStockForm() {
    this.stockForm.reset();
  }

  patchStockForm() {
    this.stock = new StockModel('Test ' + counter++, 'TSC', 20, 10);
    this.stockForm.patchValue(this.stock);
  }

  get name() {
    return this.stockForm.get('name');
  }
  get price() {
    return this.stockForm.get('price');
  }
  get code() {
    return this.stockForm.get('code');
  }
}
