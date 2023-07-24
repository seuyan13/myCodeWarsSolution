/*
DESCRIPTION:
convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, 
but they are not capitalized in the same way he originally typed them. 
*/

String.prototype.toJadenCase = function () {
  let words = this.split(" ");
  words = words.map((str) => str.slice(0, 1).toUpperCase() + str.substr(1));
  return words.join(" ");
};
