function checkOrder(available, ordered) {
    switch (true) {
        case available < ordered: return ("Your order is too large, we don’t have enough goods.");
        case ordered === 0: return ("Your order is empty");
        case available > ordered: return ("Your order is accepted");
        default:
            return ("Unexpected case: please contact support");
    }
}

console.log(checkOrder(10, 2));
console.log(checkOrder(10, 20));
console.log(checkOrder(10, 0));
console.log(checkOrder(10, 10));