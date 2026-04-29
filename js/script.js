document.getElementById("myPtag").innerText = "Hello Batch 71";
// console.log("Hello Batch-71");

//variables

let name = "Hasan";
let age = 22;
let isStudent = true;

document.getElementById("stuInfo").innerText =
  `${name} is ${age} years old and he is a Student = ${isStudent}`;
// console.log(name);

document.getElementById("submit").addEventListener("click", function () {
  let stuName = document.getElementById("stuname").value;
  document.getElementById("info").innerText = `My name is ${stuName}`;
});

//form data
let form = document.getElementById("form"),
  sname = document.getElementById("sname"),
  sage = document.getElementById("sage"),
  semail = document.getElementById("semail"),
  saddress = document.getElementById("saddress");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let myname = document.getElementById("myname").value,
    myage = document.getElementById("myage").value,
    myemail = document.getElementById("myemail").value,
    myaddress = document.getElementById("myaddress").value;

  sname.innerText = myname;
  sage.innerText = myage;
  semail.innerText = myemail;
  saddress.innerText = myaddress;
  e.target.reset();
});

let faisal = {
  firstName: "Faisal",
  lastName: "Afrid",
  age: 800,
  subjects: {
    bangla: "Selim Vhai",
    English: "Mokles Vhai",
    Math: "Quddus Vhai",
  },
};
// console.log(faisal);

//arithmetic
let x = 5;
let y = 6;
let z = x + y;
// console.log(`Result is: ${z}`);

let a = 10;
// console.log(`result is : ${a+=5}`)

// console.log(Math.random().toFixed(0));

let counter = document.getElementById("counter"),
  count = 0,
  increment = document.getElementById("increment"),
  decrement = document.getElementById("decrement"),
  reset = document.getElementById("reset");

function operations(operator = 0) {
  switch (operator) {
    case "+":
      count++;
      counter.innerHTML = count;
      break;
    case "-":
      count--;
      counter.innerHTML = count;
      break;
    default:
      count = 0;
      counter.innerHTML = count;
      break;
  }
}

increment.addEventListener("click", () => operations("+"));
decrement.addEventListener("click", () => operations("-"));
reset.addEventListener("click", () => operations());

document.addEventListener("keypress", (e) => {
  operations(e.key);
});

// let khalid = "Khalid";

// if(khalid == 'Khalid'){
//   console.log(`open the door for ${khalid}`);
// }else{
//   console.log(`no one`);
// }

let number = 5;
if (number > 0) {
  console.log(`Positive number is ${number}`);
} else if (number < 0) {
  console.log(`Negetive number is ${number}`);
} else {
  console.log(`Zero number is ${number}`);
}

// let result = parseInt(prompt("Enter a number: "));

// if(result >= 70){
//   alert('pass')
// }
// else{
//   alert('fail')
// }

// let customerName = prompt("Enter your name");
// let country = prompt("Enter country");
// let mage = parseInt(prompt("Enter your age"));

// if (country == "Bangladesh") {
//   if (mage >= 21) {
//     console.log("Get the license");
//   } else {
//     console.log("Did not get the license");
//   }
// } else {
//   if (mage >= 18) {
//     console.log("Get the license");
//   } else {
//     console.log("Did not get the license");
//   }
// }

let mynumber = document.getElementById("mynumber"),
  mygrade = document.getElementById("grade"),
  handleSumbit = document.getElementById("handleSumbit"),
  resultBtn = document.getElementById("result-btn");

handleSumbit.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = mynumber.value;
  let grade = "";
  if (value >= 90) {
    grade = "Golden A+";
  } else if (value >= 80) {
    grade = "A+";
  } else if (value >= 70) {
    grade = "A";
  } else if (value >= 60) {
    grade = "A-";
  } else if (value >= 50) {
    grade = "B";
  } else if (value >= 40) {
    grade = "C";
  } else {
    grade = "Fail";
  }
  mygrade.innerHTML = `Your Grade is: "${grade}", you had obtained ${value} Marks.`;

  e.target.reset();
});

let checkDiv = document.getElementById("check-div"),
  numForm = document.getElementById("numForm");
const p = document.createElement("p");
p.innerHTML = "";

numForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstNumber = parseInt(document.getElementById("firstnum").value),
    secondNumber = parseInt(document.getElementById("secondnum").value),
    thirdNumber = parseInt(document.getElementById("thirdnum").value);
  checkDiv.appendChild(p);
  if (firstNumber == 0 && secondNumber == 0 && thirdNumber == 0) {
    p.innerHTML = `Enter positive number`;
    return;
  }
  if (
    firstNumber == secondNumber &&
    firstNumber == thirdNumber &&
    secondNumber == thirdNumber
  ) {
    p.innerHTML = `All numbers can't be same.`;
    return;
  }
  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    p.innerHTML = `>> ${firstNumber} is greater then ${secondNumber} and ${thirdNumber}`;
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    p.innerHTML = `>> ${secondNumber} is greater then ${firstNumber} and ${thirdNumber}`;
  } else {
    p.innerHTML = `>> ${thirdNumber} is greater then ${firstNumber} and ${secondNumber}`;
  }
});

let time = document.getElementById("time");

const date = new Date().getDay() + 1;
let day;
switch (date) {
  case 0:
    day = "Saturday";
    break;
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;

  default:
    day = "Friday";
    break;
}

time.innerHTML = `Today is ${day}`;
console.log(date);

let watch = document.getElementById("watch");
  let minute = 0;
  let hour = 0;
  let seconds;
  let period;
setInterval(() => {
  seconds = new Date().getSeconds();
  minute = new Date().getMinutes();
  hour = new Date().getHours();

  if(seconds < 10){
    seconds = `0${seconds}`
  }
  if(minute < 10){
    minute = `0${minute}`
  }
  if(hour < 10){
    hour = `0${hour}`
  }
  if(hour>=12){
    period = "PM"
  }
  else{
    period = "AM"
  }

  if (hour > 12) {
    hour = hour - 12;
  } else if (hour === 0) {
    hour = 12;
  }
  watch.innerHTML = `${hour}:${minute}:${seconds} ${period}`
}, 1000);


// for(let i = 2; i<=10; i+=2){
//     console.log(`${i} I love Bangladesh`);
// }

// let input = "",
// password = "1234";
// let timesss = 3;

// while (input != password) {
//  input = prompt(`Enter your password... (Remaining ${timesss} times)`);
//  timesss--;
//  if(timesss == 0){
//   alert('You have entered wrong password too many times');
//   break;
//  }
// }

// let foods = [];
// let input = '';

// do{
//   input = prompt('Enter your food name');
//   if(input != 'exit'){
//     foods.push(input);
//   }
// }while(input != 'exit');

// console.log(foods);

// function fullName(firstName, lastName){
//   document.write(`<h1>Hello, ${firstName} ${lastName}!</h1>`)
// }
// fullName("Faisal", "Yousuf")
// fullName("Fardin", "Ahmed")


function sum(a=0,b=0){
  document.write(`<h1>Sum is ${a+b}</h1>`)
}
function sub(a=0,b=0){
  document.write(`<h1>Sub is ${a-b}</h1>`)
}
function multiply(a=0,b=0){
  document.write(`<h1>Multiplication is ${a*b}</h1>`)
}
function divide(a=0,b=0){
  document.write(`<h1>Division is ${a/b}</h1>`)
}
function modulas(a=0,b=0){
  document.write(`<h1>Modulas is ${a%b}</h1>`)
}


// sum(55,10)
// sub(55,5)
// multiply(5,10)
// divide(5,2)
// modulas(360,7);

// let firstName = prompt("Enter first name: ")
// let lastName = prompt("Enter first name: ")
// function greetings(firstName = "", lastName = ""){
//   return `<h1>Assalamu Alaikum, ${firstName} ${lastName}!</h1>`
// }

// document.write(greetings(firstName, lastName));


// function calculator(a = 0, op = 0, b = 0){
//   switch(op){
//     case "+":
//       return a+ b;
//       break;
//     case "-":
//       return a- b;
//       break;
//     case "*":
//       return a* b;
//       break;
//     default:
//       return a/ b;
//       break;
//   }
// }

// document.write(calculator(5, "+", 10))



let formSubmit = document.getElementById("formSubmit"),
resultBox = document.getElementById("result-box");


formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let calcNumber = parseInt(document.getElementById("calcNumber").value),
  calcOperator = document.getElementById("calcOperator").value, 
  calcSecond = parseInt(document.getElementById("calcSecond").value);
  resultBox.value = calculate(calcNumber, calcOperator, calcSecond);
})

function calculate(calcNumber = 0, calcOperator = 0, calcSecond = 0){
  switch (calcOperator) {
    case "+":
      return calcNumber + calcSecond;
      break;
    case "-":
      return calcNumber - calcSecond;
      break;
    case "*":
      return calcNumber * calcSecond;
      break;
    case "/":
      return calcNumber / calcSecond;
      break;
    case "%":
      return calcNumber * (calcSecond / 100);
      break;
    default:
       return "Invalid Operator";
      break;
  }
}

// const fullName = (firstName, lastName) => {
//   return firstName + lastName;
// }
// const fullName = (firstName, lastName) => firstName + lastName;

// console.log(fullName("Faisal", " Yousuf"));

// function hello(name, callBack){
//   return `Hello ${name} ${callBack()}`;
// }

// let output = hello("Masud", () => {return "valo hoye jaw"})
// console.log(output);


// function start() {
//   setTimeout(() => {
//     let date = new Date().toLocaleTimeString();
//     console.log(date);
//     start();
//   }, 1000);
// }

// start()

let cost = parseInt(prompt("Enter cost: "));
let discount = cost >= 5000 ? 15/100 :cost >= 150 ? 10/100 : cost >= 50 ? 5/100: 0;
let total = cost - cost*discount;

discount ? console.log(`Expense is ${cost}TK, Applied discount ${discount * 100}%. Total expenses is: ${Math.floor(total)}TK`) : console.log(`Total expenses is: ${total}`);

