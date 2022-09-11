// using ES6 repeat method
function repeatStr(n, s) {
 if (n > 0)
    return s.repeat(n);
  else
    return "";
}

// using recursion
function repeatStr(s, n) {
  if(n < 0) 
    return "";
  if(n === 1) 
    return s;
  else 
    return s + repeatStr(s, n - 1);
}
repeatStr("abc", 3);

// using while loop
function repeatStr(s, n) {
  var repeatedString = "";
  while (n > 0) {
    repeatedString += s;
    n--;
  }
  return repeatedString;
}
repeatStr("abc", 3);