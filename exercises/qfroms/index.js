// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.data = new Stack();
    this.aux = new Stack();
  }

  add(value) {
    this.data.push(value);
  }

  remove() {
    while(this.data.peek()) {
      this.aux.push(this.data.pop());
    }

    const toReturn = this.aux.pop();
    while(this.aux.peek()) {
      this.data.push(this.aux.pop());
    }

    return toReturn;
  }

  peek() {
    while(this.data.peek()) {
      this.aux.push(this.data.pop());
    }

    const toReturn = this.aux.peek();
    while(this.aux.peek()) {
      this.data.push(this.aux.pop());
    }

    return toReturn;
  }
}

module.exports = Queue;
