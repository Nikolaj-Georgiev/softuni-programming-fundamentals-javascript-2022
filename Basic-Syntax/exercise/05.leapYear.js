function leapYear(year) {

    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeapYear) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(1984);