//1. declare array of employees & sort them in ascending order (empId)
let emp = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  /*let eIds = emp.map(emp => emp.eId);
  console.log(eIds);
  let ids=eIds.sort();
  console.log(ids);*/
  let eIds2 =emp.sort((emp)=>emp.eId);
  console.log(eIds2);
