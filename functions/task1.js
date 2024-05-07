function calculateRectangleSquareDeclaration(height, wight) {
    const squareRectangle = height * wight;
    return squareRectangle;
}

const squareRectangleExpression = function (height, width) {
    return height * width;
}

const squareRectangleArrowFunction = (height, width) => {
    return height * width;
}

console.log(`Function declaration: square= ${calculateRectangleSquareDeclaration(5, 10)}`); 
console.log(`Function expression: square= ${squareRectangleExpression(5, 10)}`); 
console.log(`Arrow function: square= ${squareRectangleArrowFunction(5, 10)}`); 