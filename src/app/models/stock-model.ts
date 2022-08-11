export class StockModel {
  favorite: boolean = false;

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public prev_price: number,
    public exchange: string = ''
  ) {}
}
