let arr1=[10,20];
let arr2= arr1;
//it is a refernec copy
//same ref is stored in arr2 (not recommended)

console.log('arr1',arr1);
console.log('arr2',arr2);
let arr3=[10,20,[30,31]];
let arr4= [...arr3];
arr4.push(40,50);
arr4[2].push(32,33);
console.log('arr3',arr3);
console.log('arr4',arr4);
let arr3=[10,20,[30,31]];
let arr4= [...arr3];
arr4.push(40,50);
arr4[2].push(32,33);
console.log('arr3',arr3);
console.log('arr4',arr4);
