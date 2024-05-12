function logNumber(num) {
    num = num;
    console.log(num);
    if (num > 0) {
        return logNumber(--num)
    }
    else {
        return true;
    }
}
logNumber(5);