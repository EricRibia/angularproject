import * as uuid from 'uuid';

export class ProductModel {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public onSale: boolean,
    public img_url: string = '',
    public code: string = uuid.v4()
  ) {}
}
