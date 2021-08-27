// We could replace this interface keyword with type. But there are some differences:
// Differences #1:
// 'interface' can only be used to describe an object
// 'type' on the other hand can be used to describe other custom types like unions
// Differences #2:
// 'interface' can be used as a contract to classes using the keyword 'implements'
// A class can implement multiple interfaces.
// An 'interface' can extend multiple other interfaces
// An 'interface' can also be used to describe a structure of a function
interface Greetable extends Named {
  greet(phrase: string): void;
}

interface Named {
  // You can use the readonly prop in Interfaces to enforce that a certain
  // property should only be set once
  readonly name?: string;
  // You can mark an interface prop as optional by adding the '?' sign
  // methods can also be marked as optional "myMethod?()"
  outputName?: string;
}

class Person implements Greetable {
  name: string;
  age = 33;

  constructor(n: string) {
    this.name = n;
    // if (n) {
    //   this.name = n;
    // }
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

// let user1: Person;

// user1 = {
//   name: 'Pedro',
//   age: 33,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user1.greet('Hi there - I am');

const person1 = new Person('Pedro');
person1.name = 'Lucía'; // devia de ter dado erro...
person1.greet("Hello there, I'm");

// Why should we use Interfaces?
// Interfaces are useful when you want to force a certain class to implement a
// variable or method. Interfaces define a contract with the classes

// You can use interfaces to declare functions too. type however, is the more
// commonly used for this.
interface AddFn {
  (a: number, b: number): number;
}

let addNumbers: AddFn;

addNumbers = (n1: number, n2: number) => {
  return n1 + n2;
};
