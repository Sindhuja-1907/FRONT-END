const word = 'hello world';
const str = word.toUpperCase(); 
const count = {};

for (const char of str) {
  if (char !== ' ') { 
    count[char] = (count[char] || 0) + 1;
  }
}

let maxChar = '';
let maxCount = 0;
for (const char in count) {
  if (count[char] > maxCount) {
    maxCount =count[char];
    maxChar = char;
  }
}

console.log(maxChar);
