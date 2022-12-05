function equalSums(array) {

    let index = 'no';

    for (let i = 0; i < array.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let l = 0; l < i; l++) {
            sumLeft += array[l];
        }
        for (let r = i + 1; r < array.length; r++) {
            sumRight += array[r];
        }

        if (sumLeft === sumRight) {
            index = i;
        }

    }
    console.log(index);
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);