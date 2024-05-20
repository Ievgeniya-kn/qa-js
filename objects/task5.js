const users = [
{ name: "Peter", email: "peter@gmail.com" },
{ name: "Alice", email: "alice@gmail.com" },
{ name: "Vin", email: "vin@gmail.com" },
]

for (let elements of users) {
    let {name, email} = elements;
    console.log(`name = ${name}, email = ${email}`);
}
