/*6. WAP to print Account number
   input:- '12345678987'
   output:- '12*******87'*/
let a='123456789';
function anum(a){
    return a.replace(a.slice(2,-2),'*');
}
console.log(anum(a));