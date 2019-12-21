class _Node {
  constructor(value, next) {
    this.value = value
    this.next, next
  }
}
class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _node(data, null)
      return this.top
    }

    /* If the stack already has something, then create
       a new node, add data to the new node, and have
       the pointer point to the top */
    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    /* In order to remove the top of the stack, you have to
       point the pointer to the next item and that next
       item becomes the top of the stack */
    const node = this.top
    this.top = node.next
    return node.data
  }

}

class Queue {
 constructor() {
   this.first = null
   this.last = null
 }

 enqueue(data) {
   const node = new _Node(data, null)
   if (this.first === null) {
     this.first = node
   }

   if (this.last) {
     this.last.next = node
   }
   this.last = node
 }

 dequeue() {
   if (this.first === null) {
     return
   }
   const node = this.first
   this.first = this.first.next

   if (node === this.last) {
     this.last = null
   }
   return node.value
 }
}

function mainStack() {
  const treckStack = new Stack()
  treckStack.push('Kirk')
  treckStack.push('Spock')
  treckStack.push('McCoy')
  treckStack.push('Scotty')
  peek(treckStack)
  isEmpty(treckStack)
  display(treckStack.top)
  is_palindrome('dad')
}

function peek(stack) {
  return console.log(stack.top)
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true
  }
  return false
}

function display(top) {
  let currNode = top

  while(currNode.next !== null) {
    console.log(currNode.value)
    currNode = currNode.next
  }
  return console.log(currNode.value)
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  const letterStack = new Stack()
  for (let i = 0; i < s.length; i++) {
    letterStack.push(s[i])
  }
  let reverseWord = ''
  while (!isEmpty(letterStack)) {
    reverseWord += letterStack.pop()
  }
  if (reverseWord === s) {
    return console.log('***', true)
  }
  return console.log('***', false)
}