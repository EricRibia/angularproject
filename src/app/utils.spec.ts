import { Utils } from './utils';

describe('Utils', () => {
  let utils: Utils;
  beforeEach(() => {
    utils = new Utils();
  });
  it('should create an instance', () => {
    expect(new Utils()).toBeTruthy();
  });

  it('should test array generator func', () => {
    const producedArray = utils.setArrayFromNumber(10);
    expect(producedArray.length).toEqual(10);
  });
});
