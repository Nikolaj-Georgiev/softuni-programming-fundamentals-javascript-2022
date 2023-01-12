function negativePositiveNumbers(arrayOfNumberStrings) {

    let resultArray = [];

    for (const el of arrayOfNumberStrings) {
        if (el < 0) {
            resultArray.unshift(el);
        } else {
            resultArray.push(el);
        }
    }

    for (const iterator of resultArray) {
        console.log(iterator);
    }

    // console.log(resultArray.join('\n'));
}
negativePositiveNumbers(['7', '-2', '8', '9']);