function snowball(bunnies) {

    // let bombBunnies = bunnies.pop().split(' ').map(x => x.split(',').map(x => Number(x)));
    // let hangarMatrix = bunnies.map(x => x.split(' ').map(x => Number(x)));

    let snowballTotalDamage = 0;
    let killsCount = 0;

    let hangarMatrix = [];
    for (let i = 0; i < bunnies.length - 1; i++) {
        let tempArr = bunnies[i].split(' ');
        let localArr = [];
        for (let hui = 0; hui < tempArr.length; hui++) {
            let stringToNumber = Number(tempArr[hui]);
            localArr.push(stringToNumber);
        }
        tempArr = localArr.slice(0);
        hangarMatrix.push(tempArr);
    }

    let bombBunnies = [];
    let tempBombArr = bunnies[bunnies.length - 1].split(' ');

    for (let j = 0; j < tempBombArr.length; j++) {
        let tempElement = tempBombArr[j].split(',');
        let row1 = Number(tempElement[0]);
        let col1 = Number(tempElement[1]);
        tempElement[0] = row1;
        tempElement[1] = col1;
        bombBunnies.push(tempElement);
    }



    for (let k = 0; k < bombBunnies.length; k++) {
        let bombRow = bombBunnies[k][0];
        let bombCol = bombBunnies[k][1];
        let bombDamage = hangarMatrix[bombRow][bombCol];

        if (bombDamage <= 0) {
            continue;
        }

        let startBoomRow = Math.max(0, bombRow - 1);
        let endBoomRow = Math.min(bombRow + 1, hangarMatrix.length - 1);
        for (let boomRow = startBoomRow; boomRow <= endBoomRow; boomRow++) {

            let startBoomCol = Math.max(0, bombCol - 1);
            let endBoomCol = Math.min(bombCol + 1, hangarMatrix[boomRow].length - 1);

            for (let boomCol = startBoomCol; boomCol <= endBoomCol; boomCol++) {
                hangarMatrix[boomRow][boomCol] -= bombDamage;
            }
        }

        snowballTotalDamage += bombDamage;
        killsCount++;
    }

    for (let l = 0; l < hangarMatrix.length; l++) {
        for (let m = 0; m < hangarMatrix[l].length; m++) {
            let bunny = hangarMatrix[l][m];
            if (bunny > 0) {
                snowballTotalDamage += bunny;
                killsCount++;
            }
        }

    }

    console.log(snowballTotalDamage);
    console.log(killsCount);
}

snowball([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);
console.log('---------------------------');
snowball([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'
]);