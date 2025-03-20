
let str='abcxyz';
function nextElement(str) {
  let res = '';
  for (let ele of str) {
    if (ele === 'z') {
      res = res+'a';
    } else if (ele === 'Z') {
      res =res+ 'A';
    } else {
      res = res+ String.fromCharCode(ele.charCodeAt(0) + 1);
    }
  }
  return res;
}

console.log(nextElement(str)); 
