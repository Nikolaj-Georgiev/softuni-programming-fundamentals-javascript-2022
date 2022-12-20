function signCheck(numOne, numTwo, numThree) {
    let workArray = [numOne, numTwo, numThree];
    let result = 'Positive';
    for (let el of workArray) {
        if (el > 0 && result == 'Positive') {
            result = 'Positive';
        } else if (el < 0 && result == 'Negative') {
            result = 'Positive';
        } else {
            result = 'Negative';
        }

    }
    return result;

}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);