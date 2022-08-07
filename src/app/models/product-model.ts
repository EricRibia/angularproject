export class ProductModel {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public onSale: boolean
  ) {}

  changeProductQuantity(amount: number, increase: boolean) {
    if (increase) {
      this.quantity += amount;
    } else {
      if (this.quantity === 0) return;
      this.quantity -= amount;
    }
  }
}
