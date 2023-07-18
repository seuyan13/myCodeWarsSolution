/*
DESCRIPTION:

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
*/

function zero(check) {
  //using if - else
  if (check) {
    return check(0);
  } else {
    return 0;
  }

  return check ? check(0) : 0;
}

function one(check) {
  //using ternary operator
  return check ? check(1) : 1;
}

function two(check) {
  return check ? check(2) : 2;
}
function three(check) {
  return check ? check(3) : 3;
}
function four(check) {
  return check ? check(4) : 4;
}
function five(check) {
  return check ? check(5) : 5;
}
function six(check) {
  return check ? check(6) : 6;
}
function seven(check) {
  return check ? check(7) : 7;
}
function eight(check) {
  return check ? check(8) : 8;
}
function nine(check) {
  return check ? check(9) : 9;
}

function plus(num1) {
  return function (num2) {
    return num1 + num2;
    //console.log(num1+num2);
  };
}

function minus(num1) {
  return function (num2) {
    return num2 - num1;
    //console.log(num2 - num1);
  };
}

function times(num1) {
  return function (num2) {
    return num1 * num2;
    //console.log(num1*num2);
  };
}

function dividedBy(num1) {
  return function (num2) {
    return Math.floor(num2 / num1);
    //console.log(Math.floor(num2/num1));
  };
}
