import { debounce } from './debounce';
import { expect } from 'chai';

describe('debounce', () => {
  it('should delay function execution', () => {
    let currentTime = 0;

    const run = (input) => {
      currentTime = 0;
      const calls = [];

      const func = (arg) => {
        calls.push(`${arg}@${currentTime}`);
      }

      const debounced = debounce(func, 3)
      input.forEach((call) => {
        const [arg, time] = call.split('@');
        setTimeout(() => debounced(arg), time);
      })
      return calls;
    };

    expect(run(['A@0', 'B@2', 'C@3'])).to.equal(['C@5']);
  });
});
