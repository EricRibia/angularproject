// export class StockModel {
//   favorite: boolean = false;
//   notablePeople: Person[];
//
//   constructor(
//     public name: string,
//     public code: string,
//     public price: number,
//     public prev_price: number,
//     public exchange: string = ''
//   ) {
//     this.notablePeople = [];
//   }
// }

export interface StockModel {
  name: string;
  code: string;
  price: number;
  prev_price: number;
  exchange?: string;
  notablePeople: Person[];
  favorite?: boolean;
}
export interface Person {
  name: string;
  title: string;
}
// export class Person {
//   name!: string;
//   title!: string;
// }
