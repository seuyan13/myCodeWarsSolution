/*
DESCRIPTION:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN(pin) {
  //check if pin has only 4 or 6 digits.
  if (pin.length === 4 || pin.length === 6) {
    /*regular expression
        ^ => looking for start with number (\d)
        \d => number (0 ~ 9)
        $ => looking for end with number (\d)
        reqular expression.test(string) => return true false
      */
    if (/^\d+$/.test(pin)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
