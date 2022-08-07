export class StockModel {
  favorite: boolean = false;

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public prev_price: number
  ) {}

  isPositiveChange() {
    return this.price >= this.prev_price;
  }
}
