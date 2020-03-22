// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let current = this.head;

    while(current) {
      current = current.next;
      count++;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (this.head === null) return;
    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  insertLast(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = new Node(value);
  }

  getAt(index) {
    if (index === 0) return this.head;

    let current = this.head;
    for (let i = 1; i <= index; i++) {
      if (current) {
        current = current.next;
      }
    }

    return current;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head && this.head.next || null;
    } else {
      const prev = this.getAt(index - 1);

      if (prev) {
        prev.next = prev.next && prev.next.next;
      }
    }
  }

  insertAt(value, index) {
    if (this.head === null || index === 0) {
      this.insertFirst(value);
    } else {

      const prev = this.getAt(index - 1);
      if (prev) {
        prev.next = new Node(value, prev.next);
      } else {
        this.insertLast(value);
      }
    }
  }

  forEach(fn) {
    let current = this.head;
    let index = 0;
    while(current) {
      fn(current, index);
      current = current.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield(current);
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
