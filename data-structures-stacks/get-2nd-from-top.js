/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const top = stack.pop();
  const second = stack.peek();
  stack.push(top);
  return second;
}
