function inttoRom(num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symb = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let roman = '';
  
    for (let i = 0; i < val.length; i++) {
      while (num >= val[i]) {
        roman =roman+symb[i];
        num=num-val[i];
      }
    }
    return roman;
  }
  console.log(inttoRom(9));  
  console.log(inttoRom(12)); 
  