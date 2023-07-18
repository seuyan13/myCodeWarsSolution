/*
DESCRIPTION:

In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
*/

function alphabetPosition(text) {
  text = text.toLowerCase();
  text = text.replace(/[^\w]/g, "");

  let arr = [];

  for (let i = 0; i < text.length; i++) {
    let n = text[i].charCodeAt(0) - 96;
    if (n > 0) {
      arr.push(n);
    }
  }
  text = arr.join(" ");
  return text;
}
