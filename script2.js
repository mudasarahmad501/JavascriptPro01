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

// for(let i = 0; i< todo.length; i++){
//     console.log(todo[i].text);
    
// }

// for of
// for(let t of todo){
//     // console.log(t.text);
//     console.log(t.isCompleted);
//     console.log(t.id);
    
// }

// forEach, map, & filter : //
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
//--------------forEeach-----------//
// array ki har 1 value ko x ma store kr raha ha 
// todo.forEach(function(x){
//     console.log(x.text);
    
// })

//--------------Map-----------//
// this gives us an array 
// const todoText = todo.map(function(x){
//     return x.text;
// })
// console.log(todoText);

//--------------Filter-----------//
// this gives us only those elements in which iscompleted = true!
// const todoCompleted = todo.filter(function(x){
//     return x.isCompleted === true;
// }).map(function(x){
//     return x.text;
// })
// console.log(todoCompleted);


/* ------------------------------Conditionals---------------------*/
// const x = 5;
// if (x == 10){
//     console.log('x is 10');
    
// }else if (x>10){
//     console.log('x is greater than 10');
    
// }else{
//     console.log('x is less than 10');
    
// }
// == is use to check only for value but === is use to check value as well as datatype 
// const x = 4;
// const y = 12;
// // if (x < 5 || y >10){
// //     console.log('x is less than 5 and y is greater than 10');
    
// // }
// if (x < 5 && y >10){
//     console.log('x is less than 5 and y is greater than 10');
    
// }

// Ternary Operator //
// x = 12;
// const color = x > 10 ? 'Black' : 'Blue';
// console.log(color);


/* -----------------------------Switches------------------------*/
// -------- the switch statement is used to execute one 
// of many blocks of code based on the value of an expression ---!
// const x = 5;
// const color = x>10 ? 'Black' : 'Red';
// switch(color){
//     case 'Black':
//         console.log('Color is black');
//         break;
//     case 'Red':
//         console.log('Color is Red');
//         break;
//     default:
//         console.log('Color is not Black or Red');
//         break;
            
        
// }



/* -----------------------------Functions------------------------*/
// function addNumbers(x, y){
//     return x+y;
// }

// console.log(addNumbers(5, 10));

// function addNumbers(x,y){
//     console.log(x+y);
    
// }
// addNumbers(5,15);

// --------Arrow Function-------- //
// ---- Arrow functions, introduced in ECMAScript 6 (ES6),
// provide a more concise syntax for writing function
// expressions in JavaScript.---- !

// const addNums = (x, y) =>{
//     return x+y;
// }
// console.log(addNums(5,15));

// const addNums = (x,y) =>  x+y  -- whitout curly brases
// console.log(addNums(5,15));

// const addNums = x => x+5;
// console.log(addNums(12));






