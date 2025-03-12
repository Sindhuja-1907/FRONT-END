let a=[10,20];
let b={x:10,y:20};
console.log(typeof a);//obj
console.log(typeof b);//obj

console.log(a instanceof Object);//true
console.log(b instanceof Object);//true
 
console.log(a instanceof Array);//true
console.log(b instanceof Array);//false

console.log(Array.isArray(a));//true
console.log(Array.isArray(b));//false