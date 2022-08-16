import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../models/stock-model';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StockService } from '../../services/stock.service';
import { MessgeServiceService } from '../../services/messge-service.service';

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss'],
  providers: [MessgeServiceService],
})
export class CreateStockComponent implements OnInit {
  public stockForm!: FormGroup;
  public stock!: StockModel;
  public message!: { typ: 'success' | 'error'; text: string };

  constructor(
    private stockService: StockService,
    public messageService: MessgeServiceService
  ) {
    this.initializeStock();
    this.message = { typ: 'success', text: '' };
  }

  initializeStock() {
    this.stock = {
      name: '',
      code: '',
      favorite: false,
      exchange: 'NASDAQ',
      price: 0,
      prev_price: 0,
      notablePeople: [],
    };
  }
  ngOnInit(): void {}

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.prev_price = price;
  }
  createStock(stockForm: { valid: any; value: any }) {
    if (stockForm.valid) {
      console.log('Creating stock', this.stock);
      this.stockService.createStock(this.stock).subscribe(
        (resp: any) => {
          console.log('resp', resp);
          this.message!.text = resp.msg;
          this.message!.typ = 'success';
          this.initializeStock();
        },
        (err) => {
          console.log('err', err);
          this.message!.text = err.error.msg;
          this.message!.typ = 'error';
          // this.messageService.message = err.message;
        }
      );
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
