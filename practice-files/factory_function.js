// This is a global variable
let globalAge = 23;

// This is a function - and hey, a curly brace indicating a block
function printAge(age) {
  // This is a function scoped variable
  var varAge = 34;

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block: the if's block
    const constAge = age * 2;
    console.log("constAge is",constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // outside its scope
//   console.log("constAge is",constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
// console.log(varAge);



function makeAddingFunction(firstNumber) {
  // firstNumber is scoped anywhere within makeAddingFunction,
  // including returnedFunction
  // any variables declared here will also be accessible within returnedFunction
    
  // we don't need to name the returned function
  // this is just to reference more easily in explanation
  return function(secondNumber) {
    // secondNumber is scoped only within returnedFunction
    return firstNumber + secondNumber;
  }
}

const add5 = makeAddingFunction(5);
console.log(makeAddingFunction(5)(2)); // 7


// constructor--------------------------------
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  console.log("Hi, I am " + this.name);
};

const u1 = new User("Suyash");
const u2 = new User("Aman");

console.log(u1.sayHi())
console.log(u2.sayHi())

console.log(u1.sayHi === u2.sayHi);

console.log(u1.hasOwnProperty("sayHi"));

// factory function---------------------------
function createUser(name) {
  return {
    name,
    sayHi() {
      console.log("Hi, I am " + name);
    }
  };
}

const u3 = createUser("Suyash");
const u4 = createUser("Aman");


console.log(u3.sayHi())
console.log(u4.sayHi())

console.log(u3.sayHi === u4.sayHi);

console.log(u3.hasOwnProperty("sayHi"));