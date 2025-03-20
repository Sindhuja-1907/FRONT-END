let s= ['sindhu','sri','vysh'];
console.log(s[0]);
//Iterate Array elements
/*for loop
for-in(ES-6)
for-of(ES-6)*/
let cars=['benz','tesla','RR'];
for(let i=0;i<cars.length;i++)
{
    console.log(cars[i]);
}
console.log('**********');

//for in
for(ind in cars)
{
    console.log(cars[ind]);
}
console.log('**********');
//for-of
for(car in cars)
    {
        console.log(car);
    }
console.log('**********');
//forEach()
cars.forEach((val,ind,arr)=>{
console.log(val,ind,arr);
})