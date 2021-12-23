import { memo } from './memo';
import { expect } from 'chai';

describe('memo', () => {
  it('should memo objects', () => {
    const func = (arg1, arg2) => {
      return arg1 + arg2
    }

    const memoed = memo(func)

    expect(memoed(1, 2)).to.equal(3);
    expect(memoed(1, 2)).to.equal(3);
  });
});
