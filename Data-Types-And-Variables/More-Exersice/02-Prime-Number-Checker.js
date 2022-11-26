function primeNumberChecker(number) {

    let isPrime = true;
    let squareRootOfNumber = Math.floor(Math.sqrt(number));

    for (let i = 2; i <= squareRootOfNumber; i++) {
        if (number < 2) {
            isPrime = false;
            break;
        }
        if (number % i == 0) {
            isPrime = false;
        } else {
            isPrime = true;
        }
    }
    if (number < 2 || number > Number.MAX_SAFE_INTEGER) {
        isPrime = false;

    }
    console.log(isPrime);
}
primeNumberChecker(1);

function isPrime(n) {
    if (n < 2) return false;

    /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **/

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++) {
        if (n % i == 0) {
            console.log(false);
        }
    }

    console.log(true);
}

function isItPrime(num) {

    let isNumPrime = false;

    if (num < 2) {
        isNumPrime = false;
    } else if ((num % 1 === 0 && num % num === 0 && num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) || num === 2 || num === 3 || num === 5) {
        isNumPrime = true;
    }

    console.log(isNumPrime);

}
isItPrime(390);