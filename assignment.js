// Question 1: Grading System

let marks = 85;

if (marks >= 90) {
    console.log("A+");
}
else if (marks >= 80) {
    console.log("A");
}
else if (marks >= 70) {
    console.log("B");
}
else if (marks >= 60) {
    console.log("C");
}
else if (marks >= 50) {
    console.log("D");
}
else {
    console.log("Fail");
}


// Question 2: Even or Odd

let num = 7;

if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}


// Question 3: Multiplication Table

let table = 5;

for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + (table * i));
}


// Question 4: Sum of Natural Numbers

let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum = " + sum);


// Question 5: Largest of Three Numbers

let a = 10;
let b = 20;
let c = 15;

if (a > b && a > c) {
    console.log("Largest Number = " + a);
}
else if (b > a && b > c) {
    console.log("Largest Number = " + b);
}
else {
    console.log("Largest Number = " + c);
}
