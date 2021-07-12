import { throttle } from './throttle';
import { expect } from 'chai';

describe('throttle basic', () => {
  it('should throttle', () => {
    let currentTime = 0

    const run = (input) => {
      currentTime = 0
      const calls = []

      const func = (arg) => {
        calls.push(`${arg}@${currentTime}`)
      }

      const throttled = throttle(func, 3)
      input.forEach((call) => {
        const [arg, time] = call.split('@');
        console.log('asas');
        setTimeout(() => throttled(arg), time)
      })
      return calls;
    }

    expect(run(['A@0', 'B@2', 'C@3'])).to.equal(['A@0', 'C@3'])
  })
})
