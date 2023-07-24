/*
DESCRIPTION:
Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.
 */

function createPhoneNumber(numbers) {
  let areaCode = numbers.slice(0, 3).join("");
  let prefixCode = numbers.slice(3, 6).join("");
  let lineNum = numbers.slice(6, 10).join("");

  return "(" + areaCode + ") " + prefixCode + "-" + lineNum;
}
