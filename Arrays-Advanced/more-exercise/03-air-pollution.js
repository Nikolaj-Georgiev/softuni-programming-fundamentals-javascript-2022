function pollution(matrix, commands) {

    let matrixOfSofia = matrix.map(string => string.split(' ').map(x => x = Number(x)));

    for (let c = 0; c < commands.length; c++) {
        let actionArr = commands[c].split(' ');
        let action = actionArr[0];
        let value = Number(actionArr[1]);

        switch (action) {
            case 'breeze':
                for (let el = 0; el < matrixOfSofia[value].length; el++) {
                    if ((matrixOfSofia[value][el] - 15) < 0) {
                        matrixOfSofia[value][el] = 0;
                    } else {
                        matrixOfSofia[value][el] -= 15;
                    }
                }
                break;
            case 'gale':
                for (let i = 0; i < 5; i++) {
                    if ((matrixOfSofia[i][value] - 20) < 0) {
                        matrixOfSofia[i][value] = 0
                    } else {
                        matrixOfSofia[i][value] -= 20;
                    }
                }
                break;
            case 'smog':
                for (let row = 0; row < 5; row++) {
                    for (let col = 0; col < 5; col++) {
                        matrixOfSofia[row][col] += value;
                    }
                }
                break;
        }

    }

    let result = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrixOfSofia[row][col] >= 50) {
                result.push(`[${row}-${col}]`);
            }
        }
    }

    if (result.length > 0) {
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }

}

pollution([
    '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'
], ['breeze 1', 'gale 2', 'smog 25']);

pollution([
    '5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'
], ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);

pollution([
    '5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'
], ['breeze 1', 'gale 2', 'smog 35']);