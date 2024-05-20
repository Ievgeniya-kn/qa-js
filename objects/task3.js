const car1 = {
    brand: "Volkswagen ",
    model: "Beetle",
    year: 1967
}

const car2 = {
    brand:"Volkswagen ",
    model: "Beetle",
    owner: "Batman",
}
const car3 = {...car1,...car2};
console.log(car3);