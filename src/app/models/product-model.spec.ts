import { ProductModel } from './product-model';

describe('ProductModel', () => {
  it('should create an instance', () => {
    expect(new ProductModel('', 0, 0, false, '')).toBeTruthy();
  });
});
