/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** print(): traverse & console.log each item. */
  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  /** push(val): add new value to end of list. */
  push(val) {
    let lastNode = new Node(val);

    if (this.head === null) this.head = lastNode;
    if (this.tail !== null) this.tail.next = lastNode;

    this.tail = lastNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newHead = new Node(val);

    if (this.length === 0) {
      this.head = newHead;
      this.length++;
      return;
    }
    if (this.length === 1) {
      this.tail = this.head;
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
      return;
    }
    
    newHead.next = this.head;
    this.head = newHead;

    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {

    let lastI = undefined;

    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      lastI = this.head.val;
      this.head = null;
      this.length--;
      return lastI;
    }

    lastI = this.tail.val;
    this.head.next = null;
    this.tail = null;
    this.length--;
    
    return lastI;
  }

  /** shift(): return & remove first item. */
  shift() {

    let firstI = undefined;

    if (!this.head) {
      return null;
    }

    if (!this.tail) {
      firstI = this.head.val;
      this.head = null;
      this.length--;
      return firstI;
    }

    firstI = this.head.val;

    this.head = this.head.next;

    if (this.length === 2) {
      this.tail = null;
    }
    this.length--;
    
    return firstI;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    
    if (idx < 0 || this.length < idx) {
      return "Index out of range";
    }

    let current = this.head;
    for (let i = 0; i <= this.length; i++) {
      if (i === idx) {
        return current.val;
      }
      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {

    if (idx < 0 || this.length < idx) {
      return "Index out of range";
    }

    const newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head.next;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i <= this.length; i++) {
      if (i + 1 === this.length) {
        this.tail = newNode;
        current.next = newNode;
        return;
      }
      if (i + 1 === idx) {
        newNode.next = current.next.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    const newNode = new Node(val);

    if (idx < 0 || this.length < idx) {
      return "Index out of range";
    }
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }

    let current = this.head;

    for (let i = 1; i <= this.length; i++) {
      if (i === this.length) {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return;
      }
      if (i === idx) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return;
      }
      current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {

    if (idx < 0 || this.length < idx) {
      return "Index out of range";
    }

    let toRemove = undefined;

    if (this.length === 0) {
      toRemove = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return toRemove;
    }

    let current = this.head;
    for (let i = 0; i <= this.length; i++) {
      if (idx === 0) {
        toRemove = current.val;
        current = current.next;
        this.head = current;
        this.length--;
        return toRemove
      }
      if (i === this.length -1) {
        toRemove = current.next.val;
        this.tail = current;
        current.next = null;
        this.length--;
        return toRemove;
      }
      if (i === idx -1) {
        toRemove = current.next.val;
        current.next = current.next.next;
        this.length--;
        return toRemove;
      }
      current = current.next;
    }
  }

  /** average(): return an average of all values in the list */
  average() {

    let total = 0;
    let current = this.head;

    while (current !== null) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
