// alert('Hello Mudasar');

// Variables 
// there are three types of variables like var, let and const
// * var is function and globaly scroped and can be redeclared 
// * let is block scoped can't be redeclared but can updated
// * const is block scoped can't be redeclared and updated



// Data Types 

// there are six datatypes in javascript
// String, boolean, number, null , undefined, BigInt

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// String Concetination
// const name = 'AhmadZahid';
// const age = 25;

// old way
// console.log('My name is ' + name + ' and my age is ' + age);
// modern way (templete string or templete literals)
// console.log(`My name is ${name} and my age is ${age}`);
// const hello = `My name is ${name} and my Age is ${age}`
// console.log(hello)

// console.log(name.length);
// console.log(name.toUpperCase());
// substring(start-index, end-index - 1)
// console.log(name.substring(0, 5).toUpperCase());
// console.log(name.split(''));  gives us an array of splitted letters
// const s = 'computer, laptop, mouse, keyboard, mobile';
// console.log(s.split(', '));


/* -----------------------------Arrays------------------------------- */

// arrays are variables that hold multiple values //
// const number = new Array(1,2,3,4,5);
// console.log(number);
// const fruits = ['apple', 'orange', 'mango', 'banana'];
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[4]);
// fruits[6] = 'grapes';
// fruits.push('grapes');
// fruits.pop();
//fruits.unshift('grapes')  // add eliment on the start of an array
//fruits.shift(); // remove element from the start of an array
// console.log(fruits);
// console.log(Array.isArray(fruits));
// const fruits = ['apple', 'orange', 'mango', 'banana'];
// //console.log(Array.isArray('apple')); // this give us false because we pass it a string not a aray
// console.log(fruits.indexOf('mango')); // ans = 2


/* -----------------------------Object Litterals------------------------------- */
// const person = {
//     name: 'Mudasar',
//     lastName: 'Zahid',
//     age: 25,
//     hobbies: ['cricket', 'book reading', 'BedMinton'],
//     adress: {
//         town: 'RachnaTown',
//         street: 4,
//         city: 'Lahore',
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.name, person.lastName);
// console.log(person.hobbies[0]);
// console.log(person.adress);
// console.log(person.adress.city);

// ---------------- Destructuring-------------
/* Destructuring in JavaScript allows you to unpack values
 from arrays or properties from objects into distinct variables. 
 This makes it easier to work with complex data structures and 
 extract necessary values in a concise and readable way. */
// const { name, lastName } = person; //pulling out values from object person//
// console.log(name);
// console.log(lastName);
// const {name, lastName, adress: {city}} = person;
// console.log(city);

// const person = {
//     name: 'Mudasar',
//     lastName: 'Zahid',
//     age: 25,
//     hobbies: ['cricket', 'book reading', 'BedMinton'],
//     adress: {
//         town: 'RachnaTown',
//         street: 4,
//         city: 'Lahore',
//     }
// }

// can also renaming variables in destructuring //
// like this//
// const {'name': fullName, 'lastName': fatherName, 'age': umar} = person;
// console.log(umar);
// console.log(fullName);
// console.log(fatherName);
// Default Values:
// If the property does not exist in the object, you can assign a default value. like this:
// const person = {
//     name: 'Mudasar',
//     lastName: 'Zahid',
//     age: 25,
//     marks: ['book reading', 'driving'],
// }
// console.log(person);
// const {name, lastName, age, height= 5.4} = person;
// console.log(person);
// Rest Properties:
// You can collect the remaining properties into a new object using the rest operator `...`
// const {name, ...rest} = person;
// console.log(name);
// console.log(rest);
// Combining with Arrays:
// Destructuring can be combined with arrays for more complex structures.

// const data = {
//     name: 'Mudasar',
//     lastName: 'Zahid',
//     age: 25,
//     marks: [40, 80, 75],
// }
// const {name , lastName, age, marks: [math, science, english]} = data;
// console.log(name);
// console.log(lastName);
// console.log(age);
// console.log(math);
// console.log(science);
// console.log(english);

// const todo = [
//     {
//         id: 1,
//         text: 'Take out Trash',
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true,
//     },
//     {
//         id: 3,
//         text: 'Going to Picnic',
//         isCompleted: false,
//     }
// ];
// console.log(todo[1].text);
/* --------------------------------------Json------------------------*/ 
//----- JSON (JavaScript Object Notation) is a lightweight data interchange format 
// that's easy for humans to read and write, and easy for machines to parse and generate. 
// It's widely used for transmitting data in web applications, typically between a server 
// and a client. In JavaScript, working with JSON is straightforward thanks to the
//  built-in JSON object. -------!
// const todo = [
//     {
//         id: 1,
//         text: 'Take out Trash',
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true,
//     },
//     {
//         id: 3,
//         text: 'Going to Picnic',
//         isCompleted: false,
//     }
// ];
// // javascript object to Json conversion //
// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

/*--------------------------------Loops-------------------------*/
//  For Loop //

// for(let i=1; i<=10; i++){
//     // console.log(i);
//     console.log(`forLoop number : ${i}`);
    
// }

// While Loop //
// let i = 0;
// while(i<=10){
//     console.log(`whileLoop number : ${i}`);
//     i++;
// }





















