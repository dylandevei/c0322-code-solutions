/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (index > queue.peek()) {
    const placeholder = queue.dequeue();
    queue.enqueue(placeholder);

  }
  return queue.peek();
}
