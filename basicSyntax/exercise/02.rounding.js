function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let output = number.toFixed(precision);

    console.log(parseFloat(output));

}
rounding(3.1415926535897932384626433832795, 2);