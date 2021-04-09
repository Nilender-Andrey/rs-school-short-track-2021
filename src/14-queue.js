// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    newNode.value = element;
    newNode.next = null;
    newNode.previous = null;
    newNode.tail = this.tail;

    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;

    const del = this.head.value;
    this.head = this.head.next;

    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }
    this.length--;
    return del;
  }
}

module.exports = Queue;
