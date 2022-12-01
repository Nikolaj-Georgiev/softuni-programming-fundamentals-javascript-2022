function reverseArrayOfNumbers(number, array) {

    let reversedArray = [];
    let result = '';

    for (let i = 0; i < number; i++) {
        reversedArray[i] = array[number - 1 - i];
        if (i < number - 1) {
            result += reversedArray[i] + ' ';
        } else {
            result += reversedArray[i];
        }

    }

    console.log(result);

}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);

function revArrOfNums(num, arr) {

    let revArr = [];

    for (let i = num - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }

    console.log(revArr.join(' '));

}
revArrOfNums(4, [-1, 20, 99, 5]);