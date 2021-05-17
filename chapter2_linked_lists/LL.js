console.log('LL')
console.log('')
console.log('')
console.log('')

// before removeDuplicates() I want to build a class up of more trivial functions
// add(value)
// print(node)
// printAll() DONE
// remove(value)
// replace(old,new)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(node) {
    this.head = node;
  }

  add(value) {
    let currentNode = this.head;
    while(currentNode) {
      if(!currentNode.next) {
        currentNode.next = new Node(value);
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  print(value) {
    let output = null;
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.value = value) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
      return 'we dont have that number';
    }
  }

  printAll() {
    let output = [];
    let currentNode = this.head;
    while(currentNode) {
        output.push(currentNode.value);
      if(!currentNode.next) {
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    return output;
  }

}
let headNode = new Node(5)
let myList = new List(headNode);
myList.add(42)
console.log(JSON.stringify(myList,2))
console.log(myList)
console.log('')
console.log('')
console.log('')
