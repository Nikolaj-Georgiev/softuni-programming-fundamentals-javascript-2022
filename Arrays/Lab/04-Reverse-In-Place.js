function revInPlace(arr) {

    console.log(arr.reverse().join(' '));

}
revInPlace(['a', 'b', 'c', 'd', 'e']);

function reverseInPlace(array) {

    for (let i = 0; i < array.length / 2; i++) {

        let placeHolder = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = placeHolder;

    }

    console.log(array.join(' '));

}
reverseInPlace(['33', '123', '0', 'dd']);