let str = 'entertainment';
let count = {};

for (let ele of str) {
    if (count[ele]) {
        count[ele]++;
       // console.log(count[ele]);
    } else {
        count[ele] = 1;
       // console.log(count[ele]);
    }
}
console.log(count);