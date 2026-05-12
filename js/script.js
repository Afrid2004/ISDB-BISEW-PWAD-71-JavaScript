// document.getElementById("myPtag").innerText = "Hello Batch 71";
// // console.log("Hello Batch-71");

// //variables

// // let name = "Hasan";
// // let age = 22;
// // let isStudent = true;

// // document.getElementById("stuInfo").innerText =
// //   `${name} is ${age} years old and he is a Student = ${isStudent}`;
// // console.log(name);

// document.getElementById("submit").addEventListener("click", function () {
//   let stuName = document.getElementById("stuname").value;
//   document.getElementById("info").innerText = `My name is ${stuName}`;
// });

// //form data
// let form = document.getElementById("form"),
//   sname = document.getElementById("sname"),
//   sage = document.getElementById("sage"),
//   semail = document.getElementById("semail"),
//   saddress = document.getElementById("saddress");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let myname = document.getElementById("myname").value,
//     myage = document.getElementById("myage").value,
//     myemail = document.getElementById("myemail").value,
//     myaddress = document.getElementById("myaddress").value;

//   sname.innerText = myname;
//   sage.innerText = myage;
//   semail.innerText = myemail;
//   saddress.innerText = myaddress;
//   e.target.reset();
// });

// let faisal = {
//   firstName: "Faisal",
//   lastName: "Afrid",
//   age: 800,
//   subjects: {
//     bangla: "Selim Vhai",
//     English: "Mokles Vhai",
//     Math: "Quddus Vhai",
//   },
// };
// // console.log(faisal);

// //arithmetic
// let x = 5;
// let y = 6;
// let z = x + y;
// // console.log(`Result is: ${z}`);

// let a = 10;
// // console.log(`result is : ${a+=5}`)

// // console.log(Math.random().toFixed(0));

// let counter = document.getElementById("counter"),
//   count = 0,
//   increment = document.getElementById("increment"),
//   decrement = document.getElementById("decrement"),
//   reset = document.getElementById("reset");

// function operations(operator = 0) {
//   switch (operator) {
//     case "+":
//       count++;
//       counter.innerHTML = count;
//       break;
//     case "-":
//       count--;
//       counter.innerHTML = count;
//       break;
//     default:
//       count = 0;
//       counter.innerHTML = count;
//       break;
//   }
// }

// increment.addEventListener("click", () => operations("+"));
// decrement.addEventListener("click", () => operations("-"));
// reset.addEventListener("click", () => operations());

// document.addEventListener("keypress", (e) => {
//   operations(e.key);
// });

// // let khalid = "Khalid";

// // if(khalid == 'Khalid'){
// //   console.log(`open the door for ${khalid}`);
// // }else{
// //   console.log(`no one`);
// // }

// // let number = 5;
// // if (number > 0) {
// //   console.log(`Positive number is ${number}`);
// // } else if (number < 0) {
// //   console.log(`Negetive number is ${number}`);
// // } else {
// //   console.log(`Zero number is ${number}`);
// // }

// // let result = parseInt(prompt("Enter a number: "));

// // if(result >= 70){
// //   alert('pass')
// // }
// // else{
// //   alert('fail')
// // }

// // let customerName = prompt("Enter your name");
// // let country = prompt("Enter country");
// // let mage = parseInt(prompt("Enter your age"));

// // if (country == "Bangladesh") {
// //   if (mage >= 21) {
// //     console.log("Get the license");
// //   } else {
// //     console.log("Did not get the license");
// //   }
// // } else {
// //   if (mage >= 18) {
// //     console.log("Get the license");
// //   } else {
// //     console.log("Did not get the license");
// //   }
// // }

// let mynumber = document.getElementById("mynumber"),
//   mygrade = document.getElementById("grade"),
//   handleSumbit = document.getElementById("handleSumbit"),
//   resultBtn = document.getElementById("result-btn");

// handleSumbit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let value = mynumber.value;
//   let grade = "";
//   if (value >= 90) {
//     grade = "Golden A+";
//   } else if (value >= 80) {
//     grade = "A+";
//   } else if (value >= 70) {
//     grade = "A";
//   } else if (value >= 60) {
//     grade = "A-";
//   } else if (value >= 50) {
//     grade = "B";
//   } else if (value >= 40) {
//     grade = "C";
//   } else {
//     grade = "Fail";
//   }
//   mygrade.innerHTML = `Your Grade is: "${grade}", you had obtained ${value} Marks.`;

//   e.target.reset();
// });

// let checkDiv = document.getElementById("check-div"),
//   numForm = document.getElementById("numForm");
// const p = document.createElement("p");
// p.innerHTML = "";

// numForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let firstNumber = parseInt(document.getElementById("firstnum").value),
//     secondNumber = parseInt(document.getElementById("secondnum").value),
//     thirdNumber = parseInt(document.getElementById("thirdnum").value);
//   checkDiv.appendChild(p);
//   if (firstNumber == 0 && secondNumber == 0 && thirdNumber == 0) {
//     p.innerHTML = `Enter positive number`;
//     return;
//   }
//   if (
//     firstNumber == secondNumber &&
//     firstNumber == thirdNumber &&
//     secondNumber == thirdNumber
//   ) {
//     p.innerHTML = `All numbers can't be same.`;
//     return;
//   }
//   if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//     p.innerHTML = `>> ${firstNumber} is greater then ${secondNumber} and ${thirdNumber}`;
//   } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//     p.innerHTML = `>> ${secondNumber} is greater then ${firstNumber} and ${thirdNumber}`;
//   } else {
//     p.innerHTML = `>> ${thirdNumber} is greater then ${firstNumber} and ${secondNumber}`;
//   }
// });

// let time = document.getElementById("time");

// const date = new Date().getDay() + 1;
// let day;
// switch (date) {
//   case 0:
//     day = "Saturday";
//     break;
//   case 1:
//     day = "Sunday";
//     break;
//   case 2:
//     day = "Monday";
//     break;
//   case 3:
//     day = "Tuesday";
//     break;
//   case 4:
//     day = "Wednesday";
//     break;
//   case 5:
//     day = "Thursday";
//     break;

//   default:
//     day = "Friday";
//     break;
// }

// // time.innerHTML = `Today is ${day}`;
// // console.log(date);

// let watch = document.getElementById("watch");
//   let minute = 0;
//   let hour = 0;
//   let seconds;
//   let period;
// setInterval(() => {
//   seconds = new Date().getSeconds();
//   minute = new Date().getMinutes();
//   hour = new Date().getHours();

//   if(seconds < 10){
//     seconds = `0${seconds}`
//   }
//   if(minute < 10){
//     minute = `0${minute}`
//   }
//   if(hour < 10){
//     hour = `0${hour}`
//   }
//   if(hour>=12){
//     period = "PM"
//   }
//   else{
//     period = "AM"
//   }

//   if (hour > 12) {
//     hour = hour - 12;
//   } else if (hour === 0) {
//     hour = 12;
//   }
//   watch.innerHTML = `${hour}:${minute}:${seconds} ${period}`
// }, 1000);

// // for(let i = 2; i<=10; i+=2){
// //     console.log(`${i} I love Bangladesh`);
// // }

// // let input = "",
// // password = "1234";
// // let timesss = 3;

// // while (input != password) {
// //  input = prompt(`Enter your password... (Remaining ${timesss} times)`);
// //  timesss--;
// //  if(timesss == 0){
// //   alert('You have entered wrong password too many times');
// //   break;
// //  }
// // }

// // let foods = [];
// // let input = '';

// // do{
// //   input = prompt('Enter your food name');
// //   if(input != 'exit'){
// //     foods.push(input);
// //   }
// // }while(input != 'exit');

// // console.log(foods);

// // function fullName(firstName, lastName){
// //   document.write(`<h1>Hello, ${firstName} ${lastName}!</h1>`)
// // }
// // fullName("Faisal", "Yousuf")
// // fullName("Fardin", "Ahmed")

// function sum(a=0,b=0){
//   document.write(`<h1>Sum is ${a+b}</h1>`)
// }
// function sub(a=0,b=0){
//   document.write(`<h1>Sub is ${a-b}</h1>`)
// }
// function multiply(a=0,b=0){
//   document.write(`<h1>Multiplication is ${a*b}</h1>`)
// }
// function divide(a=0,b=0){
//   document.write(`<h1>Division is ${a/b}</h1>`)
// }
// function modulas(a=0,b=0){
//   document.write(`<h1>Modulas is ${a%b}</h1>`)
// }

// // sum(55,10)
// // sub(55,5)
// // multiply(5,10)
// // divide(5,2)
// // modulas(360,7);

// // let firstName = prompt("Enter first name: ")
// // let lastName = prompt("Enter first name: ")
// // function greetings(firstName = "", lastName = ""){
// //   return `<h1>Assalamu Alaikum, ${firstName} ${lastName}!</h1>`
// // }

// // document.write(greetings(firstName, lastName));

// // function calculator(a = 0, op = 0, b = 0){
// //   switch(op){
// //     case "+":
// //       return a+ b;
// //       break;
// //     case "-":
// //       return a- b;
// //       break;
// //     case "*":
// //       return a* b;
// //       break;
// //     default:
// //       return a/ b;
// //       break;
// //   }
// // }

// // document.write(calculator(5, "+", 10))

// let formSubmit = document.getElementById("formSubmit"),
// resultBox = document.getElementById("result-box");

// formSubmit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let calcNumber = parseInt(document.getElementById("calcNumber").value),
//   calcOperator = document.getElementById("calcOperator").value,
//   calcSecond = parseInt(document.getElementById("calcSecond").value);
//   resultBox.value = calculate(calcNumber, calcOperator, calcSecond);
// })

// function calculate(calcNumber = 0, calcOperator = 0, calcSecond = 0){
//   switch (calcOperator) {
//     case "+":
//       return calcNumber + calcSecond;
//       break;
//     case "-":
//       return calcNumber - calcSecond;
//       break;
//     case "*":
//       return calcNumber * calcSecond;
//       break;
//     case "/":
//       return calcNumber / calcSecond;
//       break;
//     case "%":
//       return calcNumber * (calcSecond / 100);
//       break;
//     default:
//        return "Invalid Operator";
//       break;
//   }
// }

// // const fullName = (firstName, lastName) => {
// //   return firstName + lastName;
// // }
// // const fullName = (firstName, lastName) => firstName + lastName;

// // console.log(fullName("Faisal", " Yousuf"));

// // function hello(name, callBack){
// //   return `Hello ${name} ${callBack()}`;
// // }

// // let output = hello("Masud", () => {return "valo hoye jaw"})
// // console.log(output);

// // function start() {
// //   setTimeout(() => {
// //     let date = new Date().toLocaleTimeString();
// //     console.log(date);
// //     start();
// //   }, 1000);
// // }

// // start()

// // let cost = parseInt(prompt("Enter cost: "));
// // let discount = cost >= 5000 ? 15/100 :cost >= 150 ? 10/100 : cost >= 50 ? 5/100: 0;
// // let total = cost - cost*discount;

// // discount ? console.log(`Expense is ${cost}TK, Applied discount ${discount * 100}%. Total expenses is: ${Math.floor(total)}TK`) : console.log(`Total expenses is: ${total}TK`);

// // let fruits = ['Mango', 'Banana', 'Watermelon', 'Orange'];
// // console.log('Normal',fruits);

// // fruits.push('Pinapple');
// // console.log('Push',fruits);

// // fruits.unshift('Grapes');
// // console.log('Unshift',fruits);

// // document.write(fruits.join('-').toLowerCase())

// // console.log(users);
// // console.log('Printing numbers from 1 - 50');
// // for(let i = 1; i<=50; i++){
// //   console.log(i);
// // }

// // console.log('Printing even numbers from 2 - 100');
// // for(let i = 2; i<=100 ; i+=2){
// //    console.log(i);
// // }

// // console.log('Printing odd numbers from 1 - 99');
// // for(let i = 1; i<=100 ; i+=2){
// //    console.log(i);
// // }

// // console.log('Printing numbers from 100 - 1');
// // for(let i = 100; i>=1 ; i--){
// //    console.log(i);
// // }

// // let num = parseInt(prompt("Enter a number for multiplication table:"))
// // console.log(`Printing multiplication table of ${num}`);
// // for(let i = 1; i<= 10; i++){
// //    console.log(`${num} x ${i} = ${num*i}`);
// // }

// // console.log('Printing the sum of numbers from 1 - 10');
// // let sums = 0;
// // for(let i = 1; i<=10 ; i++){
// //   console.log(`${sums} + ${i} = ${sums+=i}`);
// // }
// // console.log(`-------- Sum is ${sums} ----------`);

// // let factorial = parseInt(prompt("Enter a factorial number"));
// // console.log(`Printing factorial of ${factorial}`);
// // let fact = 1;
// // for(let i = factorial; i>=1 ; i--){
// //   fact = fact * i;
// //   console.log(fact);
// // }
// // console.log(`-------- Factorial is ${fact} ----------`);

// // function isPrime(number){
// //   if(number < 2){
// //     return false;
// //   }
// //   for(let i = 2; i<number; i++){
// //     if(number%2 == 0){
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// // let num = (parseInt(prompt("Enter a number...")));
// // if(isPrime(num)){
// //   console.log(`${num} is a prime number`);
// // }
// // else{
// //   console.log(`${num} is not a prime number`);
// // }

// const myName = "Faisal Afrid";
// const[first,second] = myName.split(" ");
// console.log(first[0] + (second? second[0] : ""));

// function handlePrime(){
//   let result = document.querySelector(".resultIn");
//   let inputvalue = document.querySelector("#number").value;
//   if(inputvalue < 2){
//     return result.innerHTML = `Number must be greater than or equal to 2`;
//   }
//   for(let i = 2; i<inputvalue; i++){
//     if(inputvalue%i == 0){
//       return result.innerHTML = `${inputvalue} is not a prime number`
//     }
//   }
//   return result.innerHTML = `${inputvalue} is a prime number`
// }
// let fruitShow = document.querySelector(".fruitShow"),
//   name = document.getElementById("name"),
//   link = document.getElementById("link"),
//   price = document.getElementById("price"),
//   desc = document.getElementById("desc"),
//   form = document.getElementById("form");
// let fruits = [
//   {
//     id: 1,
//     name: "Watermelon",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgj8y34p2WopNyKJG7qKvB1hfjJjYdWcV6Iw&s",
//     price: "450",
//     description: "Favourite",
//   },
//   {
//     id: 2,
//     name: "Orange",
//     image:
//       "https://www.health.com/thmb/OZgW2YQtFb9qJ3PbySNei3YdgPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp5e95690asrw300_Medium_934585-e870449543284eed8aa4be52fc09a4ed.jpg",
//     price: "350",
//     description: "My Favourite Fruit",
//   }
// ];

// //create products
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let newFruit = {
//     id: fruits.length + 1,
//     name: e.target.name.value,
//     image: e.target.link.value,
//     price: e.target.price.value,
//     description: e.target.desc.value,
//   };
//   fruits.push(newFruit);
//   allProducts();
//   console.log(fruits);
//   e.target.reset();
// });

// //read products
// function allProducts() {
//   let html = "";
//   fruits.forEach((fruit) => {
//     html += `
//     <div class="col-lg-6 mb-3">
//             <div class="div ">
//               <div class="image">
//                 <img src="${fruit.image}" class="w-100" alt="image" />
//               </div>
//               <div class="p-3">
//                 <div>
//                   <h3>${fruit.name}</h3>
//                   <p>
//                     ${fruit.description}
//                   </p>
//                   <h3>${fruit.price}TK</h3>
//                 </div>
//                 <div>
//                   <button class="btn btn-dark">Buy Now</button>
//                   <button class="btn btn-danger" onclick="hanndleDelete(${fruit.id})">Delete</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//     `;
//   });
//   fruitShow.innerHTML = html;
// }
// allProducts();

//update products

// fruits = fruits.map((fruit) => {
//   if (fruit.id == 5) {
//     return { ...fruit, name: "Watermelon" };
//   }
//   return fruit;
// });

//delete products
// function hanndleDelete(id) {
//   fruits = fruits.filter((fruit) => {
//     return fruit.id != id;
//   });
//   allProducts();
//   console.log(fruits);
// }


// let form = document.getElementById("form");

// form.addEventListener("submit" , (e) => {
//   e.preventDefault();
//   let name = form.name.value;
//   let email = form.email.value;
//   let city = form.city.value;
//   let genders = form.gender;
//   let selectedGender = "";
//   let subjects = form.subject;
//   let selectedSubjects = [];
//   let message = form.message.value;

//   for(gender of genders){
//     if(gender.checked){
//       selectedGender = gender.value;
//     }
//   }
//   for(subject of subjects){
//     if(subject.checked){
//       selectedSubjects.push(subject.value);
//     }
//   }
//   selectedSubjects.join(", ")
//   console.log({
//     name,
//     email,
//     city,
//     gender : selectedGender,
//     subjects : selectedSubjects,
//     message
//   });

//   let win = window.open("", "_blank", "width: 300, height: 300");
//   win.document.write(
//     `<html>
//     <head>
//       <style>
//         @media print {
//           button {
//             display: none !important;
//           }
//         }
//       </style>
//       <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
//       crossorigin="anonymous"
//     />
//     </head>
//     <body>
//       <h1 class="text-primary">Name: ${name}</h1>
//       <h1>Email: ${email}</h1>
//       <h1>City: ${city}</h1>
//       <h1>Gender: ${selectedGender}</h1>
//       <h1>Subject: ${selectedSubjects}</h1>
//       <h1>Message: ${message}</h1>
//       <button onclick="print()">Print</button>
//     </body>
//   </html>`);
//   win.document.close()
// })                                                                      

/*====================
=========OOP==========
====================*/

//constructor
// class BluePrint{
//   constructor(firstName, lastName, age, student){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.student = student;
//   }
//   fullName() {
//      return `${this.firstName} ${this.lastName}`
//   }
// }

// let khalid = new BluePrint("Khalid", "Hasan", 20, true);
// let Rayhan = new BluePrint("Sheikh", "Rayhan", 20, true);

// console.log(khalid);
// console.log(Rayhan);


// class Calculator{
//   constructor(aValue, bValue){
//     this.a = aValue;
//     this.b = bValue;
//   }
//   add(a = 0,b = 0){
//     return this.a + this.b;
//   }
//   sub(a = 0,b = 0){
//     return this.a - this.b;
//   }
//   mul(a = 1, b = 1){
//     return this.a * this.b;
//   }
//   div(a =1 ,b =1){
//     return this.a / this.b;
//   }
// }

// let cal = new Calculator(5,10);

// console.log('Sum: ', cal.add());
// console.log('Sub: ', cal.sub(5,10));
// console.log('Multiplication: ', cal.mul(5,10));
// console.log('Divide: ', cal.div(5,10));


// class Car{
//   constructor(name, price, brand, image){
//     this.carName = name;
//     this.carPrice = price;
//     this.carBrand = brand;
//     this.carImage = image;
//   }
// }

// let Toyota = new Car('Toyota Corolla' , 24500, 'Toyota', 'https://react-car-verse.vercel.app/images/toyota-corolla.jpg');

// console.log(Toyota);


//inheritance
// class Animal{
//   constructor(nameValue, ageValue, habitantValue){
//     this.name = nameValue;
//     this.age = ageValue;
//     this.habitant = habitantValue;
//   }
//   speak(speakValue){
//     return `${this.name} speakes in ${speakValue}`;
//   }
// }

// let dog = new Animal("BoB", 15, "Land");
// console.log(dog);
// console.log(dog.speak("Bark"));


// class Human extends Animal{
//   constructor(nameValue, ageValue, habitantValue, locationValue, countryValue){
//     super(nameValue, ageValue, habitantValue);
//     this.location = locationValue;
//     this.country = countryValue;
//   }
// }

// const Afrid = new Human('Afrid' , 22, 'Land', 'Feni', 'Bangladesh');
// console.log(Afrid);
// console.log(Afrid.speak("Bengali, English"));

//polimorphism
// class myAnimals extends Animal{
//   constructor(nameValue, ageValue, habitantValue, colorValue, foodValue){
//     super(nameValue, ageValue, habitantValue);
//     this.color = colorValue;
//     this.food = foodValue;
//   }
//   speak(value){
//     return `${this.name} walk in the morning. ${this.name} speaks in ${value}`
//   }
// }

// let Animals = new myAnimals('Birds', 2, 'Air', 'Black', 'Dal');
// console.log(Animals);
// console.log(Animals.speak("Kiwi"));



//abstraction
// class Car{
//   constructor(name, price, brand, image){
//     this.carName = name;
//     this.carPrice = price;
//     this.carBrand = brand;
//     this.carImage = image;
//   }

//   //abstraction
//   engineStart(){
//     console.log(`Engine Started`);
//     this.spark();
//     this.injectFuel();
//     this.piston();
//   }
//   spark(){
//     console.log(`Cark Spark`);
//   }
//   injectFuel(){
//     console.log(`fuel Injected`);
//   }
//   piston(){
//     console.log(`turened on piston`);
//   }
// }

// let Toyota = new Car('Toyota Corolla' , 24500, 'Toyota', 'https://react-car-verse.vercel.app/images/toyota-corolla.jpg');

// console.log(Toyota);
// Toyota.engineStart();


//destructering
// let person = {
//   firstName : "MD Faisal",
//   lastName : "Yousuf Afrid",
//   age : 22,
//   isStudent: true,
//   hobbies: ["Coding","Playing Cricket"],
//   address: {
//     street : "M/22, Anandanagar, Merul Badda",
//     city : "Dhaka",
//     zip : 1212
//   },
//   fullname : function(){
//     return this.firstName + " " + this.lastName;
//   }
// }
// console.log(person);
// const {firstName, lastName, age, address:{street, city}} = person;









// document.write(`
//     <h3>Firstname: ${firstName}</h3>
//     <h3>Lastname: ${lastName}</h3>
//     <h3>Fullname: ${person.fullname()}</h3>
//     <h3>Age: ${age}</h3>
//     <h3>Address: ${street}, ${city}</h3>
//   `)


//todo list
//  let form = document.getElementById("form"),
//  list = document.getElementById("list"),
//  listSL = 0;

//  form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const title = e.target.title.value;
//   listSL++;
//   const li = document.createElement("li");
//   li.setAttribute("class", "list-group-item d-flex align-items-center justify-content-between");
//   li.innerHTML = `${listSL}. ${title} <button onclick="deleteTodo(this)" class="btn btn-danger py-1">Delete</button>`;
//   list.appendChild(li);
//   e.target.reset();
//  })

//   function deleteTodo(btn){
//     btn.parentElement.remove();
//   }



  
