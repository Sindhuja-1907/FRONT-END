/*7. WAP to print Credit-card number
   input:- '1111222233334444'
   output:- '1111-2222-3333-4444'*/
 let num= '1111222233334444';
 let newnum = num.slice(0, 4)+'-'+num.slice(4, 8)+'-'+num.slice(8, 12)+'-'+num.slice(12);
 console.log(newnum);