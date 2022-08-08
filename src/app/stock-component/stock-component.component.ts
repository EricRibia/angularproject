import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
} from '@angular/core';
import { StockModel } from '../models/stock-model';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock-component.component.html',
  styleUrls: ['./stock-component.component.scss'],
})
export class StockComponentComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  public stock: StockModel | undefined;
  constructor() {}

  ngOnInit(): void {
    this.stock = new StockModel('Test Stock Company', 'TSC', 85, 80);
    console.log('App Component - On Init');
  }
  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }
  ngDoCheck(): void {
    console.log('App Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Changes - ', changes);
  }

  handleToggleFavorite() {
    this.stock!['favorite'] = !this.stock!['favorite'];
  }
}
