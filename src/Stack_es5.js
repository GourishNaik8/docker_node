import { stack1 } from "../DSA/Stack";

//create an instance of Stack object and performe method actions for es-5 class
const myStack_es5 = new stack1();

myStack_es5.push(1);
myStack_es5.push(2);
myStack_es5.push(3);

console.log(myStack_es5.items);
console.log(myStack_es5.top());
console.log(myStack_es5.pop());
console.log(myStack_es5.top());
console.log(myStack_es5.isEmpty());
console.log(myStack_es5.items);