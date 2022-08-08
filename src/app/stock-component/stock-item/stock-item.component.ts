import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { StockModel } from '../../models/stock-model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent {
  @Input() public stock: StockModel | undefined;
  @Output() public toggleFavorite: EventEmitter<StockModel>;

  // projection article - https://medium.com/claritydesignsystem/ng-content-the-hidden-docs-96a29d70d11b
  constructor() {
    this.toggleFavorite = new EventEmitter<StockModel>();
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
