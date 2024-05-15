const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0, negativeCount = 0, zeroCount = 0;

for (element of numbers) {
    if (typeof element === "number") {
        switch (true) {
            case (element > 0): {
                positiveCount++;
                break;
            }
            case (element < 0): {
                negativeCount++;
                break;
            }
            default:
                zeroCount++;
                break;
        }
    }
}

console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел:  ${zeroCount}`);