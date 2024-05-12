function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number' || isNaN(numerator) || isNaN(denominator))
        throw new Error("Error: At least one of parameter isn't a number");
    if (denominator === 0)
        throw new Error("Denominator can't be equal 0");
    return (numerator / denominator);
}

function tryCatchErrors(callBack, ...options) {
    try {
        console.log(callBack(...options));
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Робота завершена");
    }
}
tryCatchErrors(divide, 10, 0);
tryCatchErrors(divide, 15, 3);
tryCatchErrors(divide, 'abc', 10);
tryCatchErrors(divide, NaN, 10);