/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
  let reversed = false;

  return {
    toBe: (expected) => {
      const isExpected = reversed ? !Object.is(expected, input) : Object.is(expected, input);

      if(!isExpected) {
        throw new Error();
      }
    },
    get not() {
      reversed = true;
      return this;
    }
  }
}
