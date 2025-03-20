let cars=['audi','benz','nissan','benz','audi','audi']
let count={};
function repeatedElements(mycar)
{ 
   var count=0;

    for (let brand of cars) {

        if(brand===mycar){
               count++;
        }
    }
    return count;
}

console.log(repeatedElements('audi'));
