/*let str="My name is Sindhuja";
let str1=str.split(' ').reverse().join(' ');
console.log(str1);*/

/*let str="My name is Sindhuja";
let str1=str.split(' ');
for(i=str1.length-1;i>=0;i--)
{
 console.log(str1[i]);
}*/


let str="My name is Sindhuja";
let count = {};
for (let char of str) {
    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}
console.log(count);