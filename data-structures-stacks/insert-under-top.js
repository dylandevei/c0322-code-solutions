/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack;
  } else {
    var top = stack.pop();
    stack.push(value);
    stack.push(top);
    stack.print();
    return stack;
  }
}
