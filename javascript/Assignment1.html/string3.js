3. /*WAP to print the first non-repeated character in a string
   input:- 'entertainment'
   output:- r*/
   /*let a = 'entertainment';
   let nrpc=a.split("");
   console.log(nrpc);
   for(i=0;i<nrpc.length;i++)
   {
      if (a.indexOf(nrpc[i]) === a.lastIndexOf(nrpc[i])){
         console.log(nrpc[i]);
         break;
      }
   }*/
  function nrpcfun(a)
  {
   let nrpc=a.split("");
   console.log(nrpc);
   for(i=0;i<nrpc.length;i++)
   {
      if (a.indexOf(nrpc[i]) === a.lastIndexOf(nrpc[i])){
         console.log(nrpc[i]);
         break;
      }
   }
}
let r = nrpcfun('entertainment');
       