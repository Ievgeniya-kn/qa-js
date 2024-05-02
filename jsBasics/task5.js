function roundToTwoAfterDot(number) {
    return Math.round(number * 100) / 100;
}

// task 5.1
let circleRadius = 4.5;
let circleSquare = roundToTwoAfterDot(2 * Math.PI * circleRadius);

console.log(`Square of circle with radius ${circleRadius} is ${circleSquare}`);

// task 5.2
let length = 5;
let width = 12.5
let rectangleSquare = roundToTwoAfterDot(length * width);

console.log(`Square of rectangle is ${rectangleSquare}`);

// task 5.3
let radius = 4.5;
let height = 8;
let cylinderVolume = roundToTwoAfterDot(Math.PI * Math.pow(radius, 2) * height);

console.log(`Volume of cylinder is ${cylinderVolume}`);