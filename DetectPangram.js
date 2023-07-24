/*
DESCRIPTION:
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
  string = string.toLowerCase();

  let letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (string[i].match(letters[j])) {
        letters = letters.replace(letters[j], "");
      }
    }
  }
  if (letters.length == 0) {
    return true;
  } else {
    return false;
  }
}
