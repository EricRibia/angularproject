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
    this.stock = new StockModel('', '', 0, 0);
    this.message = { typ: 'success', text: '' };
  }

  ngOnInit(): void {}

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.prev_price = price;
  }
  createStock(stockForm: { valid: any; value: any }) {
    if (stockForm.valid) {
      console.log('Creating stock', this.stock);
      const stockCreated = this.stockService.createStock(this.stock);
      if (stockCreated) {
        this.message!.text =
          'Successfully created stock with stock code: ' + this.stock.code;
        this.message!.typ = 'success';
        this.messageService.message =
          'Successfully created stock with stock code: ' + this.stock.code;
        this.stock = new StockModel('', '', 0, 0);
      } else {
        this.message!.text =
          'Stock with stock code: ' + this.stock.code + ' already exists';
        this.message!.typ = 'error';
        this.messageService.message =
          'Stock with stock code: ' + this.stock.code + ' already exists';
      }
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
