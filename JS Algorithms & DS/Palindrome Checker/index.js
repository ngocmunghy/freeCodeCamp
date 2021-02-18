function palindrome(str) {
  let regex = /\W+|_+/g;
  str = str.replace(regex,"").toLowerCase();
  let tmp = str.split("").reverse().join("");
  return str === tmp;
}

palindrome("eye");