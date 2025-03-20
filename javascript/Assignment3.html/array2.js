//2. declare array of employees & sort them in ascending order by name.
let emp = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female'},
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
 /* let names = emp.map(emp => emp.name);
  console.log(names);
  names.sort();
  console.log(names);*/
let names=emp.sort((emp)=>emp.name);
console.log(names);

