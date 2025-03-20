/*10. WAP to print the occurance of each elements 
    input = [10,20,30,40,50,10,30,50]
	output = {10:2, 20:1, 30:2 , 40:1, 50:2}*/
let a =[10,20,30,40,50,10,30,50];
let count = {};

for (let ele of a) {
    if (count[ele]) {
        count[ele]++;
    } else {
        count[ele] = 1;
    }
}
console.log(count);
