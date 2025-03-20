class Student{
    id;
    firstName;
    lastName;
    phone;
    loc;
    course;
   constructor(id,firstName,lastName,phone,location,course)
   {
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;
    this.location=location;
    this.course=course;
   }
}
let std1= new Student(1,'sindhu','mylavarapu',12345,'va','angular');
let std2= new Student(2,'sandeep','mylavarapu',12387,'pa','java');
console.log(std1);
console.log(std2);