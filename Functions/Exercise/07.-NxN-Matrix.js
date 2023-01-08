function NxNMatrix(number) {

    let matrix = [];

    for (let i = 0; i < number; i++) {
        let row = [];

        for (let i = 0; i < number; i++) {
            row.push(number);
        }

        matrix.push(row.join(' '));
    }

    return matrix.join('\n');
}
console.log(NxNMatrix(6));