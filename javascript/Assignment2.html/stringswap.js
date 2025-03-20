let str= 'Hello World';
let newstr = '';

for (let i = 0; i < str.length; i++) {
  let s = str[i];
  if (s === s.toUpperCase()) {
    newstr =newstr+s.toLowerCase();
  } else {
    newstr=newstr+s.toUpperCase();
  }
}

console.log(newstr);