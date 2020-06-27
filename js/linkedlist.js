const { assertEq } = require('./test');

class LinkedList {
  head;
  constructor(data = null) {
    this.head = new Node(data);
  }

  insertHead(data) {
    if (this.head.data === null) {
      this.head = new Node(data);
    } else {
      let temp = this.head;
      this.head = new Node(data, temp);
    }
  }

  // Inserts node at a position or at the end if position is not provided
  insertNode(data, position = null) {
    if (this.head.data === null) {
      this.insertHead(data);
      return;
    }
    let current = this.head;
    if (position === null) {
      while (current !== null) {
        if (current.next === null) {
          current.next = new Node(data);
          break;
        }
        current = current.next;
      }
    } else {
      let index = 1;
      while (current.next !== null) {
        if (index === position) {
          let next = current.next;
          current.next = new Node(data, next);
          break;
        }
        current = current.next;
        index += 1;
      }
    }
  }

  // delete node at position
  deleteNode(position) {
    let index = 1;
    let current = this.head;
    while (current.next !== null) {
      if (index === position) {
        current.next = current.next.next;
      }
      current = current.next;
      index++;
    }
  }

  // Getting a node at an index from the back in O(n)
  deleteNodeFromBack(position = 0) {
    let pointer1 = this.head;
    let index = 0;
    let pointer2 = null;
    while (pointer1.next !== null) {
      if (index === position + 1) {
        pointer2 = this.head;
      }
      if (pointer2 !== null) {
        pointer2 = pointer2.next;
      }
      pointer1 = pointer1.next;
      index++;
    }
    // delete node
    pointer2.next = pointer2.next.next;
  }

  // apply fn to every node, mutating the nodes
  map(fn) {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (fn(current.data, index)) {
        current.data = fn(current.data, index);
      }
      // console.log(current.data);
      current = current.next;
      index++;
    }
  }

  reverse() {
    let current = this.head;
    while (current) {
      this.head = current;
      let nextNode = this.head.next;
      current.next = nextNode;
      this.head.next = current;
      current = nextNode;
    }
  }
  sort(fn) {
    let pointer1 = this.head;
    while (pointer1) {
      let pointer2 = this.head;
      while (pointer2) {
        if (fn(pointer1.data, pointer2.data)) {
          pointer1.swap(pointer2);
        }
        pointer2 = pointer2.next;
      }
      pointer1 = pointer1.next;
    }
  }
}
class Node {
  data;
  next;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  swap(other) {
    let temp = this.data;
    this.data = other.data;
    other.data = temp;
  }
}
module.exports = {
  Node,
  LinkedList
};

// !!! TEST
const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
const testList = new LinkedList();
for (let data of testArr) {
  testList.insertNode(data);
}
// testList.deleteNodeFromBack(2);
// testList.map(c => console.log(c));
testList.sort((a, b) => a > b);
testList.map(c => console.log(c));
