import { expect } from 'chai';
import { curry } from './curry-placeholder';

describe('curry with placeholder', () => {
  const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
  }
  const curriedJoin = curry(join)
  const _ = curry.placeholder

  it('should curry functions with placeholder option', () => {
    expect(curriedJoin(1, 2, 3)).to.equal('1_2_3');
    expect(curriedJoin(_,2)(1, 3)).to.equal('1_2_3');
    expect(curriedJoin(_, _, _)(1)(_, 3)(2)).to.equal('1_2_3');
    expect(curriedJoin(_,_,_,_)(_,2,_)(_,3)(1)).to.equal('1_2_3');
  });
});
