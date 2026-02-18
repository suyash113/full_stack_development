// // 1. The Base Factory (Parent-ish)
// const createUser = (name) => {
//   const sayHello = () => console.log(`Hello, I'm ${name}`);
//   return { name, sayHello };
// };

// // 2. The Specialized Factory (Child-ish)
// const createPlayer = (name, level) => {
//   // Create a user object first
//   const user = createUser(name);

//   // Add new specific functionality
//   const increaseLevel = () => console.log(`${name} is now level ${level + 1}`);

//   // Combine them: "Take everything in user, and add increaseLevel"
//   return {user, increaseLevel };
// };

// // --- Execution ---
// const myPlayer = createPlayer("Link", 1);

// myPlayer.sayHello();      // Inherited from user: "Hello, I'm Link"
// myPlayer.increaseLevel(); // Player specific: "Link is now level 2"

const createUser = (name) => {
  const sayHello = () => console.log(`Hello, I'm ${name}`);
  return { name, sayHello };
};

const createPlayer = (name, level) => {
  // 1. Create the base "user" object
  const user = createUser(name);

  // 2. Create an object with the new "player" specific methods
  const playerMethods = {
    increaseLevel: () => console.log(`${name} is now level ${level + 1}`)
  };

  // 3. Merge them into a brand new empty object {}
  return Object.assign({}, user, playerMethods);
};

// --- Execution ---
const myPlayer = createPlayer("Link", 1);
myPlayer.sayHello();      // "Hello, I'm Link"
myPlayer.increaseLevel(); // "Link is now level 2"