import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { StockComponentComponent } from './stock-component/stock-component.component';
import { StockItemComponent } from './stock-component/stock-item/stock-item.component';

@NgModule({
  declarations: [AppComponent, ProductComponentComponent, StockComponentComponent, StockItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
