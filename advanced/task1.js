function handleEven (number) {
    console.log(`${number} is even`);
}

function handleOdd(number) {
    console.log(`${number} is odd`);
}

function handleNum (number, callBackEven,callbackOdd){
    if (number % 2 === 0 ) {
        callBackEven(number);
    } else {
        callbackOdd(number);
    }     
}

handleNum(12,handleEven,handleOdd);
handleNum(9,handleEven,handleOdd);