export class StockModel {
  favorite: boolean = false;
  notablePeople: Person[];

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public prev_price: number,
    public exchange: string = ''
  ) {
    this.notablePeople = [];
  }
}

export class Person {
  name!: string;
  title!: string;
}
