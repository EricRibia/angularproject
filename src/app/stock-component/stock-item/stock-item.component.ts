import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { StockModel } from '../../models/stock-model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent implements OnInit {
  @Input() public stock: StockModel | undefined;
  @Output() public toggleFavorite: EventEmitter<StockModel>;

  constructor() {
    this.toggleFavorite = new EventEmitter<StockModel>();
  }

  ngOnInit(): void {}

  onToggleFavorite() {
    this.toggleFavorite.emit(this.stock);
  }

  changePrice() {
    this.stock!.price += 1;
  }
  get stockObj() {
    if (this.stock) {
      return this.stock;
    } else {
      return new StockModel('', '', 0, 0);
    }
  }
}
