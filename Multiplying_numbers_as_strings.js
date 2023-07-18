/*
DESCRIPTION:

This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
*/

function multiply(a, b) {
  let arr_a = [],
    arr_b = [];

  for (let i = 0; i < a.length; i++) {
    arr_a.push(Number(a[i]));
  }

  for (let i = 0; i < b.length; i++) {
    arr_b.push(Number(b[i]));
  }

  let arrSum = new Array(arr_a.length + arr_b.length).fill(0);

  for (let i = arr_a.length - 1; i >= 0; i--) {
    for (let j = arr_b.length - 1; j >= 0; j--) {
      let calcArr = arr_a[i] * arr_b[j];
      let digit1 = i + j;
      let digit2 = digit1 + 1;
      let sum = calcArr + arrSum[digit2];

      arrSum[digit1] += Math.floor(sum / 10);
      arrSum[digit2] = sum % 10;
    }
  }

  let result = arrSum.join("").replace(/^0+/gm, "");

  if (result == "") {
    return "0";
  } else {
    return result;
  }
}
