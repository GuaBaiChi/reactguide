// import { apiKey } from "./util";
// import asdf
import asdf from "./util"
import * as util from "./util"

export default function App() {
  console.log(asdf)
  console.log(util.abc)
}

// const user = {
//   name: 'Max',
//   age: 34,
//   greet() {
//     console.log("Hello")
//     console.log(this.age)
//   }
// }
// console.log(user.name)
// user.greet()


// type UserProps = {
//   name: string;
//   age: number;
// };

// class User {
//   name: string;
//   age: number;

//   constructor({ name, age }: UserProps) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log('Hi');
//   }
// }

// const aUser = new User({ name: "Manuel", age: 35 });
// console.log(aUser);
// aUser.greet()

// const hobbies = ["sports", "cooking", "reading"]
// console.log(hobbies[0])
// const index = hobbies.findIndex((item) => item === "sports")
// console.log(index)
// const editedHobbies = hobbies.map((item) => item + "!")
// console.log(editedHobbies)

// const editedHobbiesobjects = hobbies.map((item) => ({ text: item }))
// console.log(editedHobbiesobjects)


// 5
// destructuring
// const [firstName, lastName] = ["Max", "Schwarz"]

// property that's pulled out of the object from the alias name
// const { name: userName, age } = {
//   name: "Max",
//   age: 34
// }
// console.log(userName)
// console.log(age)

// descructuring in function parameter lists
// type Order = {
//   id: string;
//   currency: string;
// };

// function storeOrder(order: Order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', order.currency);
// }

// function storeOrder2({ id, currency }: Order) {
//   localStorage.setItem('id', id);
//   localStorage.setItem('currency', currency);
// }

// The spread operator
// const hobbies = ["sports", "cooking"]
// const user = {
//   name: "max",
//   age: 34
// }
// const newHobbies = ["reading"]
// const mergedHobbies = [...hobbies, newHobbies]
// const mergedHobbies2 = [hobbies, newHobbies]
// console.log(mergedHobbies)
// console.log(mergedHobbies2)

// const extendedUser = {
//   isAdmin: true,
//   ...user
// }
// console.log(extendedUser)


// control structures
// if
// const password = prompt('your password')

// if (password === "hello") {
//   console.log("hello works")
// } else if (password === "Hello") {
//   console.log("Hello works")
// } else {
//   console.log("Access not granted")
// }

// // for loop
// const hobbies = ["sports", "cooking"]

// for (const hobby of hobbies) {
//   console.log(hobby)
// }

// 27. manipulating the DOM - not with React
// const list = document.querySelector("ul")
// list?.remove()
// react will instead do it

// 28. functions as values to other functions
// function handleTimeOut() {
//   console.log("Timed out")
// }

// const handleTimeOut2 = () => {
//   console.log("Timed out ...again!")
// }

// setTimeout(handleTimeOut)
// setTimeout(handleTimeOut2, 2000)
// setTimeout(handleTimeOut, 3000)
// setTimeout(() => {
//   console.log('More timing out...')
// }, 4000)

// type GreetFunction = () => void;

// function greeter(greetFn: GreetFunction) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));


// 29. Defining functions inside of functions
// function init() {
//   function greet() {
//     console.log('Hi')
//   }
//   greet()
// }

// can't be called outside of the function
// greet()

// 30 Reference vs Primitive values

let userMessage = "Hello"

