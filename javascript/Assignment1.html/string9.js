/*WAP to remove special character from a string
input:- 'hello@#hi&'
output:- 'hellohi'*/


let str='hello@#hi&';
s1=str.replace(/[^a-zA-Z0-9]/g,'');
console.log(s1);

