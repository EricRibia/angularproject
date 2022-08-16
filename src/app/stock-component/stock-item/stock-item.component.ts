import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { StockModel } from '../../models/stock-model';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent {
  @Input() public stock!: StockModel;

  // projection article - https://medium.com/claritydesignsystem/ng-content-the-hidden-docs-96a29d70d11b
  constructor(private stockService: StockService) {}

  onToggleFavorite() {
    this.stockService.handleToggleFavorite(this.stock).subscribe((resp) => {
      console.log('toggle resp', resp);
      this.stock.favorite = !this.stock.favorite;
    });
  }
}
