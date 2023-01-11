function doubledReversedNumbers(numbersArray) {

    let result = numbersArray
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse();
    console.log(result.join(' '));

}

doubledReversedNumbers([10, 15, 20, 25]);
doubledReversedNumbers([3, 0, 10, 4, 7, 3]);