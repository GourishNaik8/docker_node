//constructor function for stack with methos push, pop, top, and isEmpty in es5 */
export function Stack_es5() {
  this.items = [];
}

Stack_es5.prototype.push = function(item) {
  this.items.push(item);
};

Stack_es5.prototype.pop = function() {
  return this.items.pop();
};

Stack_es5.prototype.top = function() {
  return this.items[this.items.length - 1];
};

Stack_es5.prototype.isEmpty = function() {
  return this.items.length === 0;
}; 

// function stack in es6 format

export default class Stack_es6 {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  top() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

//export stack class as module to use in another file
