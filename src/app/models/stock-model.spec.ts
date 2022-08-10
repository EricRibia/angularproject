import { StockModel } from './stock-model';

describe('StockModel', () => {
  it('should create an instance', () => {
    expect(new StockModel('', '', 0, 0)).toBeTruthy();
  });
});
