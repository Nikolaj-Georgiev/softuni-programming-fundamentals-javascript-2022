function division(number) {

    let magicNumber = 0;

    if (number % 10 === 0) {
        magicNumber = 10;
    } else if (number % 7 === 0) {
        magicNumber = 7;
    } else if (number % 6 === 0) {
        magicNumber = 6;
    } else if (number % 3 === 0) {
        magicNumber = 3;
    } else if (number % 2 === 0) {
        magicNumber = 2;
    }

    if (magicNumber === 0) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${magicNumber}`);
    }

}
division(150);