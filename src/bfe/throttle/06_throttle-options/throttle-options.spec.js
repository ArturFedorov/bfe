import { throttle } from './throttle-options';
import { expect } from 'chai';

describe('throttle with leading and trailing options', () => {
  let currentTime = 0

  const run = (input, options = { leading: true, trailing: false }) => {
    currentTime = 0
    const calls = []

    const func = (arg) => {
      calls.push(`${arg}@${currentTime}`)
    }

    const throttled = throttle(func, 3, options)
    input.forEach((call) => {
      const [arg, time] = call.split('@');
      console.log(arg, time, throttled(arg), 'as');
      setTimeout(() => throttled(arg), time);
    })

    console.log(calls, 'cas');
    return calls;
  }

  it('should return first call and not return last by default', () => {
    console.log(run(['A@0', 'B@2', 'C@3']), 'sdcs');
    expect(run(['A@0', 'B@2', 'C@3'])).to.equal(['A@0', 'C@3']);
  })
})
