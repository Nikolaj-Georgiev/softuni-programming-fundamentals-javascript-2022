function loadingBar(number) {

    let percentNumber = number / 10;
    let percentage = '%'.repeat(percentNumber);
    let dots = '.'.repeat(10 - percentNumber);
    let loading = `[${percentage}${dots}]`;

    if (number == 100) {
        return '100% Complete!';
    } else {
        return `${percentNumber}0% ${loading}\nStill loading...`;
    }
}
console.log(loadingBar(30));