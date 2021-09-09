/**
 * @param {string} str
 * @returns {Number}
 */
const operators = {
  '+': {
    precedence: 1,
    associativity: 0, // left
    calc: (x, y) => x + y,
  },
  '-': {
    precedence: 1,
    associativity: 0, // left
    calc: (x, y) => x - y,
  },
  '*': {
    precedence: 2,
    associativity: 0, // left
    calc: (x, y) => x * y,
  },
  '/': {
    precedence: 2,
    associativity: 0, // left
    calc: (x, y) => x / y,
  },
}

function calculate(str) {
  const rpn = toReversePolishNotation(str);
  console.log(rpn, 'rpn');
  // This will be used as stack for the operands and/or result of operations
  const result = []

  for (const token of rpn) {
    if (!operators[token]) {
      result.push(token)
      continue
    }
    const num2 = result.pop()
    const num1 = result.pop()
    result.push(operators[token].calc(num1, num2))
  }

  // After visiting each token in RPN "result" can only contain one item —
  // the value of the expression
  return result.pop()
}

// Implements shunting yard algorithm (https://en.wikipedia.org/wiki/Shunting-yard_algorithm)
// to transform the expression to Reverse Polish Notation represented as array
// e.g. "1 * (20 - 300)" would be returns as [1, 20, 300, -, *]
function toReversePolishNotation(str) {
  const rpn = []
  const operatorsStack = []

  for (const token of tokenize(str)) {
    if (!Number.isNaN(Number(token))) { // number
      rpn.push(Number(token))
    } else if (operators[token]) {
      const op1 = token
      let op2 = operatorsStack[operatorsStack.length - 1]

      while (op2 && op2 !== `(` && (operators[op2].precedence > operators[op1].precedence
        || operators[op2].precedence === operators[op1].precedence
        && operators[op1].associativity === 0)) {
        rpn.push(operatorsStack.pop())
        op2 = operatorsStack[operatorsStack.length - 1]
      }

      operatorsStack.push(token)
    } else if (token === `(`) {
      operatorsStack.push(token)
    } else if (token === `)`) {
      let op2 = operatorsStack[operatorsStack.length - 1]
      while (op2 && op2 !== `(`) {
        rpn.push(operatorsStack.pop())
        op2 = operatorsStack[operatorsStack.length - 1]
      }
      if (op2 === `(`) {
        operatorsStack.pop()
      }
    }
  }

  while (operatorsStack.length > 0) {
    rpn.push(operatorsStack.pop())
  }

  return rpn
}


function* tokenize(str) {
  let buffer = '';

  for(let i = 0; i < str.length; i++) {
    const char = str[i];

    switch (char) {
      case ' ':
        continue;
      case '+':
      case '-':
      case '*':
      case '/':
      case '(':
      case ')':
        if(buffer != '') {
          yield buffer;
          buffer = '';
        }
        yield char;
        continue;
      default:
        buffer += char;
    }
  }

  if(buffer != '') {
    yield buffer;
  }
}


console.log(calculate('1 * (20 -   300      ) '));
