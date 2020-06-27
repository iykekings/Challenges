class Node {
  data;
  next;
  prev;
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
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
      temp.prev = this.head;
    }
  }

  // Inserts node at a position or at the end if position is not provided
  insertNode(data, position = null) {
    let node = new Node(data);
    if (this.head.data === null) {
      this.insertHead(data);
      return;
    }
    let current = this.head;
    if (position === null) {
      while (current !== null) {
        if (current.next === null) {
          node.prev = current;
          current.next = node;
          break;
        }
        current = current.next;
      }
    } else {
      let index = 1;
      while (current.next !== null) {
        if (index === position) {
          // node.prev = current
          node.prev = current;
          if (current.next) {
            // node.next = current.next.next
            node.next = current.next;
            // set current.next.prev to node if it exists
            node.next.prev = node;
          }
          // set current.next to node
          current.next = node;
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
}

// !!! TEST
const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
const testList = new DoublyLinkedList();
for (let data of testArr) {
  testList.insertNode(data);
}
// testList.map(c => c ** 2);
// testList.map(c => c ** 0.5);
testList.insertNode(66, 2);
// testList.deleteNodeFromBack(2);
testList.map(c => console.log(c));
