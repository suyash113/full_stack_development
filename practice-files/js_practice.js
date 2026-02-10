function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read    
    this.info = function (){
        return this.title + "by" + this.author + ", " + this.pages + " pages" + ", " + this.read
    }
}

const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")
console.log(thehobbit.info())

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(this.name)
//   };
// }

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'
    

// const user = {
//   name: "Suyash"
// };

// console.log(user.name);

// console.log(user.toString());

// const user = { name: "Suyash" };

// console.log(user.__proto__);

