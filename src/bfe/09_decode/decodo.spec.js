import { decode } from './decode';
import { expect } from 'chai';

describe('decode', () => {
  it('should decode message', () => {
    expect(decode([
      ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
      ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
      ['G', 'H', 'O', 'E', 'L', 'A', 'D']
    ])).to.equal('IROCLED');
  })
})
