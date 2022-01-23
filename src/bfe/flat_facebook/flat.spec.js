import { expect } from 'chai';
import { flat } from './flat';

describe('flat array', () => {
  it('should flat an array when depth is provided', () => {
    expect(flat([1,[2],[3,[4]]])).deep.to.equal([ 1, 2, 3, [ 4 ] ]);
    expect(flat([1,[2],[3,[4]]], 1)).deep.to.equal([ 1, 2, 3, [ 4 ] ]);
    expect(flat([1,[2],[3,[4]]], 2) ).deep.to.equal([1, 2, 3, 4]);
    expect(flat([1,2,[3,4,[5,6,[7,8,[9,10]]]]], Infinity)).deep.to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })
});




