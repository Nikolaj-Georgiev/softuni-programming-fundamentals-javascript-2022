function perfectNumber(number) {

    let workNumber = number / 2;
    let sumOfPositiveDividers = 0;

    for (let i = 1; i <= workNumber; i++) {
        if (number % i == 0) {
            sumOfPositiveDividers += i;
        }
    }

    if (sumOfPositiveDividers == number) {
        return "We have a perfect number!";
    } else {
        return "It's not so perfect.";
    }
}
console.log(perfectNumber(1236498));