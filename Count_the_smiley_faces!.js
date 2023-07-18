/*
DESCRIPTION:

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces:  ;( :> :} :]
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const regexSmile = /[:;][-~]?[)D]/;

  if (arr.length != 0) {
    const countSmileyFace = arr
      .map((i) => {
        return regexSmile.test(i) ? 1 : 0;
      })
      .reduce((a, b) => a + b, 0);
    return countSmileyFace;
  } else {
    return 0;
  }
}
