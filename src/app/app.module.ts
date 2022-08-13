import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { StockComponentComponent } from './stock-component/stock-component.component';
import { StockItemComponent } from './stock-component/stock-item/stock-item.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { CreateStockComponent } from './stock-component/create-stock/create-stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    StockComponentComponent,
    StockItemComponent,
    ProductListComponentComponent,
    CreateStockComponent,
    CreateProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
