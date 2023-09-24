import { stack2 } from "../DSA/Stack";
//create an instance of Stack object and performe method actions for es-6 class
const myStack_es6 = new stack2();

myStack_es6.push(3);
myStack_es6.push(2);
myStack_es6.push(1);

console.log(myStack_es6.items);
console.log(myStack_es6.top());
console.log(myStack_es6.pop());
console.log(myStack_es6.top());
console.log(myStack_es6.isEmpty());
console.log(myStack_es6.items);