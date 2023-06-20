// console.log('Hello World! This is Himalaya college of Engineering');
// var x ='4564';
// console.log(x);

//  let b = '123';
// console.log(b);

// const a = 234;
// console.log(a);

// // alert("Warning");
// // const age = prompt('How old are you?');
// // console.log(age);

// const isBoss = confirm("Are you the boss");
// console.log(isBoss);

// let x = 2;
// const y = 2;
// if(x==1){
//     console.log("value of x is 1");
// }
// if ( (x=1) || (y = 4))  
// {
//     console.log("Operator tested");
// }
// if(!x){
//     console.log("x is not true");
// }

// console.log('assaa');

// if(x==1){
//     console.log("X is 1");
// }
// else{
//     console.log("x is not 1");
// }
//  let result = x === 1 ? "x is 1" : "x is not 1"; 
//  console.log(result);

// for (let i = 0 ; i<10 ; i++){
//     console.log(i);
// }

// function add(a,b){
//     //return a + b;
//     console.log(a + b);
// }

// add(3,4);
// add(5,6);

// function area(a,b){
//     return a * b;
// }

// area(3,4);
// area(5,4); 

// let data = 1;
// console.log(data);

// const a = 2;
// console.log(a);

// const b = 3;

// console.log(b);

// const c =4;
// console.log(c);

// console.log("hello world");

// const pi = parseFloat( prompt("Set the value of PI"));
// console.log("value of PI is " + pi);

// let a = parseInt(prompt("Enter the first number: ")), 
// b = parseInt(prompt("Enter the second number: "));
// let z = (a + b);

//  if(a==b){
// console.log("The tripled sum is " + 3*z);
//  }
//  else{
   
//     console.log("The sum is " + z);
//  }

//  const c = Number(prompt('Enter a number'));
// if(c%3 == 0 && c%7 == 0){
//     console.log('It is a multiple of both 3 and 7');
// }
// else if(c%3 == 0){
//     console.log('It is a multiple of 3');
// }
// else if(c%7 == 0){
//     console.log('It is a multiple of 7');
// }
// else{
//     console.log('It is not a multiple of 3 or 7');
// }

// console.log(Date());

// const x = Number(prompt('Enter a number'));
// const y = Number(prompt('Enter a number'));
// function cal_mul_div(a, b)
// {
//     console.log(a*b);
//     console.log(a/b);
// }
// cal_mul_div(x, y);

// //temperature in celcius and fahrenheit
// const oldC = Number(prompt('Enter temperature in ℃'));
// const oldF = Number(prompt('Enter temperature in ℉'));
// const newC = ((oldF-32)/9)*5;
// const newF = ((oldC/5)*9)+32;
// console.log(oldC+'℃ is '+newF+'℉');
// console.log(oldF+'℉ is '+newC+'℃');

// //Counting number of vowels in a string
// const f = prompt('Enter a string');
// const countVowels = (str) =>
// {
//     const vowels = 'AaEeIiOoUu';
//     let count = 0;
//     for(const char of str)
//     {
//         if(vowels.includes(char))
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels(f);

// const area = (a,b) =>{
//     let d = a * b;
//     return d;
// }
// area(1,2);
//  console.log(d);

//  const person ={
//     firstname:"balkrishna",
//     lastname:"Ray",
//     fullname: ()=>{
//         return `${person.firstname} ${person.lastname}`;
//     },
//  };
//  const c = person.firstname;
//  const a = person.fullname();
//  console.log(c,a);

 //arrays
//  const arr = ["Saab","Volvo","BMW",{name: "toyota"}];
//  const b = arr[0];
//  console.log(b);
//  const e = arr[arr.length-1];
//  console.log(e);
// console.log(arr.sort());

// const cars = ["Saab","Volvo","ferari","mercedes",{name: "toyota"}];
// const myfunction = (data) => {
//     console.log(data);
// }
// //ES5 from original data
// cars.forEach(myfunction);

// //ES6 make a copy
// cars.map(d=> console.log(d));

//user model
// const user = {
//     firstname: "John",
//     lastname: "Doe",
//     email: "john@gmail.com",
//     phone: "9810294812",
//     password: "13334"

// }
// //user list 
// const { password,phone, ...rest} = user;
// console.log({rest});

// const user1 = ["john","doe","john@gmail.com","98123431"];
// const [first,...change] =user1;
// console.log(change.toString());

// const myfunction = (data) => {
//     console.log("hi there ",data);
// }
// user1.map(myfunction).toString();

const myname = (salutation,name) => {
   if( salutation ==="")
    salutation || "Mr";

    console.log(`${salutation} ${name}`);
};
myname("","BALA");



 


