class Node {
  constructor(value, color) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 2 * value;
    this.color = color;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(value, color) {
    const node = new Node(value, color);
    if (!this.top) {
      this.top = node;
      this.bottom = node;
      this.size++;
    } else {
      node.next = this.top;
      this.top = node;
      this.size++;
    }
  }

  peek() {
    return this.top.value;
  }

  pop() {
    let deleted;
    if (this.top) {
      deleted = this.top;
      this.top = this.top.next;
      this.size--;
    }
    deleted.next = null;
    return deleted;
  }

  traverse() {
    let list = [];
    let currentNode = this.top;

    while (currentNode) {
      list.push(currentNode);
      currentNode = currentNode.next;
    }

    return list;
  }
}

export default Stack;

// const too = new Stack();
// too.push(10);
// too.push(20);
// too.push(30);
// console.log(too.pop());
// console.log(too.traverse());
// console.log(too.top);