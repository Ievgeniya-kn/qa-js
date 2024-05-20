const person = {
    firstName: "Bill",
    lastName: "Murray",
    age: 73,
}
person.email = "bill.murray@gmail.com";
delete person.age;
console.log(person);