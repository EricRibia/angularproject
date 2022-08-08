import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
} from '@angular/core';
import { StockModel } from '../../models/stock-model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent
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
  @Input() public stock: StockModel | undefined;
  @Output() public toggleFavorite: EventEmitter<StockModel>;

  constructor() {
    this.toggleFavorite = new EventEmitter<StockModel>();
  }

  ngOnInit(): void {
    console.log('Stock Item Component - ngOnInit');
  }
  ngAfterViewInit(): void {
    console.log('Stock Item Component - ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Stock Item Component - ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('Stock Item Component - ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Stock Item Component - ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes');
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.stock);
  }

  get stockObj() {
    if (this.stock) {
      return this.stock;
    } else {
      return new StockModel('', '', 0, 0);
    }
  }
}
