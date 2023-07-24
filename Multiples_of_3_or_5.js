/*
DESCRIPTION:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once. 
*/

function solution(number) {
  let result = 0,
    multiples_3 = 0,
    multiples_5 = 0;
  let arr = [];
  for (let i = 1; i < number; i++) {
    multiples_3 = 3 * i;
    multiples_5 = 5 * i;
    if (multiples_3 < number) {
      arr.push(multiples_3);
    }
    if (multiples_5 < number) {
      arr.push(multiples_5);
    }
  }

  //remove duplicate number
  let newArr = [...new Set(arr)];

  for (let i = 0; i < newArr.length; i++) {
    result += newArr[i];
  }
  return result;
}
