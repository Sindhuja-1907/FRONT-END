let arr1=[10,50,40,20,30];
arr1.sort();
console.log(arr1);
arr1.reverse();
console.log(arr1);

let arr2=['benz','tesla','chevy','bmw'];
arr2.sort();
console.log(arr2);
 
let arr3=[10,109,91,94,93,9,7,6,105,103];
//arr3.sort();
//console.log(arr3);

//how to perform numeric sort
arr3.sort((a,b)=>a-b);//asc order
console.log(arr3);
arr3.sort((a,b)=>b-a);//desc order
console.log(arr3);

let str='I am happy';
let words=str.split(' ');
console.log(words);
let sen=words.join(' ');
console.log(words.join(' '));

let arr=[10,20,30,40,50];
let res=arr.reduce((prev,next)=>{
    console.log(prev,next);
    return prev+next;
    
},0);
console.log(res);

let str2='hello world'; //reverse using reduce only
let revStr=str2.split('').reduce((prev,next)=>
{
    return next+prev;
},'');//initial val is not req
console.log(revStr);

let myStr='entertainment';
let result=myStr.split('').reduce((obj,char)=>
{  
    console.log(obj,char);
    obj[char] = obj[char] ? obj[char] +1 : 1 ;
    return obj;
},{});
console.log(result);