
// //  ** Converting  Temperatures
// // * Celsisus-to-Fahrenheit formula:
// //  F= C x 1.8 + 32
// //
// /** */

// let celsius = 10;
// let fahrenheit = celsius * 1.8 +32
// console.log(fahrenheit)

// /* answer :50 */

// let bool = '1' === 1
// console.log(bool)

// console.log("hello world");
// console.log("hello, " + "David"); // joins into one  string

// let subscribed = false
// let loggedIn= true
// if ( subscribed=== true) {
//     console.log('show the video')
// }
// else if(loggedIn === true) {
//     console.log('tell user to upgrade their subscription')
// }
// else {
//     console.log('tell user to log into account')
// }


// let cash = 50;
// let price = 40;
// let difference = cash - price;

// if (cash > price) {
//   console.log(`You paid extra. Here's $${difference} change.`);
// } else if (cash === price) {
//   console.log("You paid the exact amount, have a nice day.");
// } else {
//   console.log(`Not enough money, you still owe $${difference * -1}.`);
// }

// let cash = 50;
// let price = 40;
// let isStoreOpen = true;

// if (cash >= price || isStoreOpen === true) {
//     console.log('print the receipt')
// }

// let  val = "";

// if (val) {
//     console.log(!!val)
// }
// else {
//     console.log (!!val)
// }

// let hot = true;
// hot ? console.log('weather is hot outside') : console.log('weather is cold') 

// let subscribed = true;
// let loggedIn = true;

// let str= subscribed |! loggedIn ? 'show the video' : 'hide the video'

// loops 

// DRY = don't repeat yourself 

// let count = 1;
// while (count <= 100) {
//   console.log(count);
//   count = count + 1;
// }

//  for loop
// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
// }


//  Write a for-loop that loops through 1 to 20 
//  If the number is divisible by 3, print "Frontend"
//  If the number is divisible by 5, print "Simplified"
//  If the number is divisible by 3 and 5, print "Frontend Simplified"
//  If the number is *not* divisible by either 3 or 5, print the number
//  1 -> 1
// 2 -> 2
//  3 -> "Frontend"
//  4 -> 4
//  5 -> "Simplified"
// ....
// 15 -> "Frontend Simplified"
// ...
// 20 -> "Simplified"


// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i} front end simplify`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} front end`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} simplified`);
//     } else {
//       console.log(`${i}`);
//     }
//   }

//    Print out every character from the string: "Frontend Simplified"

//   const string = "front end simplified";
// for (let i = 0; i < string.length; i++) {
//   console.log(string[i]);
// }


// Function defintion
// function welcomePersonToFES(firstName,lastName) {
//     console.log(`Welcome to Frontend Simplifed,${firstName} ${lastName}`);
   

// }

// // call the function
// welcomePersonToFES('David, Bragg');
// welcomePersonToFES('John', 'Doe');
// welcomePersonToFES('Mitri');

// function fn(){
//     return 'my return'
//     console.log('my function')
// }

// console.log(fn());

// function sumofTwoNumbers(num1,num2){
//     return num1 + num2
// }


// // console.log(sumofTwoNumbers(10,10));  


// Create a function that converts Celsius to Fahrenheit
// Celsius to Fahrenheit formula:
// F = C X 1.8 + 32

// @example
// convertCelsiusToFahrenheir(0) -> 32
// converCelsiusToFahrenheit(10) -> 50
// converCelsiusToFahrenheit(30) -> 86

// function converCelsiusToFahrenheit(celsius) {
//     let fahrenheit = celsius * 1.8 + 32
//     return fahrenheit
// }

// console.log(converCelsiusToFahrenheit(0))
// console.log(converCelsiusToFahrenheit(10))
// console.log(converCelsiusToFahrenheit(30))

// function converFahrenheitToCelsius(fahrenheit) {
   
//     return celsius
// }

// console.log(converFahrenheitToCelsius(0))

// const converCelsiusToFahrenheit =(celsius) => {
//     return celsius * 1.8 + 32
// }
// console.log(converFahrenheitToCelsius(0))

// Arrays

// let arr =[20,30,40,50,100,]


// console.log(arr[0])
// console.log(arr[arr.length-1])

// add element onto end of the array
arr.push(200)

console.log(arr);

// // [20,30,40]
// let newArr = arr.filter((element) => {
//    return (element < 50)
  
// })

// console.log(newArr)


let newArr = arr.filter(element => element < 50)

// Filter out all 'FAIL elements in an array
// without using the Array.filter method
// ['A+', 'A' , ' FAIL'] => ['A+', 'A']

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter(element => element !== 'FAIL' )  

// console.log(goodGrades)



// for (let i = 0; i < grades.length; ++i) {
//     console.log(grades[i]);
// }

// // Create a new empty array called 'goodGrades'
// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = []

//  for (let i= 0; i < grades.length; ++i) {
//    if (grades[i] !== 'FAIL'){
//     goodGrades.push(grades[i]);
//    }
//  }
//  console.log(goodGrades)

//  let arr = [1,4,9,16]

// let newArray= arr.map(element =>{
//     console.log(element)
//     return undefined;
//  })
//  console.log(newArray)

//  tuen each element in an array of dollars into cents

// let dollars = [1,5,10,3];
// let cents = dollars.map(element => element * 100)

// console.log(cents)

// create new 'cents' array
let cents = []
//  loop over every element in 'dollars'
 for (let i=0; i < dollars.length; ++i) {
    cents.push(dollars[i] * 100);
    // mulitply the element by 100
    //  add this element onto 'cents' array
 }
//  console log cents
console.log(cents);

//objects

// let user = {
//    username: 'David',
//    email: 'david@frontendsimplified.com',
//    subscriptionStatus: 'VIP',
//    discord:'David Bragg#001',
//    lessonsCompleted: [0, 1]
// }
// console.log(user,username[0]);

// console.log(user.subscriptionStatus);
// console.log(user.lessonsCompleted.map(element => element * 2));

// array of objects

let users = [
   {
     username: "David",
     email: "David@frontendsimplified.com",
     password: "test123",
     subscriptionStatus: "VIP",
     discordId: "DavidBragg0001",
     lessonsCompleted: [0, 1],
   },
   {
     username: "Matri",
     email: "matri@frontify.com",
     password: "matri123",
     subscriptionStatus: "VIP",
     discordId: "Matri0001",
     lessonsCompleted: [0, 1, 2, 3],
   },
 ];

 function login(email, password) {
   for (let i = 0; i < users.length; i++) {
     if (users[i].email === email) {
       if (users[i].password === password) {
         console.log("Log the user in, the details are correct");
       } else {
         console.log("Password is incorrect, try again");
       }
       return;
     }
   }
   console.log("could not find an email that matches");
 }


login('david@frontendsimplified','test124')

//  Create a register function that accepts:
// username
// email
// passo