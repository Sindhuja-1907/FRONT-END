4. /*WAP to print a string in title case
	input:- 'this is javascript class'
   output:- 'This Is Javascript Class'*/
 
let s = 'this is javascript class';
let ar1=s.split(" ");
 for(i=0;i<ar1.length;i++)
 { 
   ar1[i]=ar1[i].charAt(0).toUpperCase() + ar1[i].slice(1).toLowerCase();
 }
 ar1.join(" ");
console.log(ar1);