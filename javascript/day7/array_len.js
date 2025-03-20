let arr=[10,20,30,40];
console.log(arr);
console.log(arr.length);
delete arr[2];
console.log(arr.length);
console.log(arr,arr[2]);
//splice(position/index,del/count,.....items to insert)
//only del,only insert,both del and in
arr.splice(1,1); //from ind 1 del 2 items 
console.log('after first splice',arr);
arr.toSpliced(1,0,7); //from ind 1 del 2 items 
console.log('after first splice',arr);

arr.splice(1,0,20,30);//only insert
console.log('after second splice',arr);
arr.splice(1,2,25,35);
console.log('after third splice',arr);
