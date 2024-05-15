const firstArray = ['apple', 'pear', 'banana'];
const secondArray = ['watermelon', 'melon', 'grapes'];

const concatArrays = firstArray.concat(secondArray);
console.log(concatArrays);

const spreadArrays = [...firstArray, ...secondArray];
console.log(spreadArrays);