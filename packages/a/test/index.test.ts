import { test } from '../src/index';

describe('test', () => {
  it('get test return', () => {
    expect(test()).toEqual('Hello World');
  });
});
