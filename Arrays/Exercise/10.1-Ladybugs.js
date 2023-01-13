function ladyBug(arr) {
    let fieldSize = arr[0];
    let field = new Array(fieldSize).fill(0);
    let ladyBugsPositions = arr[1].split(" ");
    for (let l = 0; l < ladyBugsPositions.length; l++) {
        if (ladyBugsPositions[l] >= 0 && ladyBugsPositions[l] < fieldSize) {
            field[ladyBugsPositions[l]] = 1;
        }
    }
    let commands = [];
    for (let i = 2; i < arr.length; i++) {
        commands.push(arr[i]);
    }
    for (let j = 0; j < commands.length; j++) {
        let command = commands[j].split(" ");
        let ladyBugIndex = +command[0];
        if (field[ladyBugIndex] !== 1 || ladyBugIndex > fieldSize || ladyBugIndex < 0) {
            continue;
        } else {
            field[ladyBugIndex] = 0;
        }
        let direction = command[1];
        let flyLength = +command[2];
        switch (direction) {
            case "right":
                ladyBugIndex += flyLength;
                if (ladyBugIndex < fieldSize && ladyBugIndex >= 0) {
                    if (field[ladyBugIndex] !== 1) {
                        field[ladyBugIndex] = 1;
                    } else {
                        ladyBugIndex += flyLength;
                        if (ladyBugIndex < fieldSize && ladyBugIndex >= 0) {
                            field[ladyBugIndex] = 1;
                        }
                    }
                }
                break;
            case "left":
                ladyBugIndex -= flyLength;
                if (ladyBugIndex < fieldSize && ladyBugIndex >= 0) {
                    if (field[ladyBugIndex] !== 1) {
                        field[ladyBugIndex] = 1;
                    } else {
                        ladyBugIndex -= flyLength;
                        if (ladyBugIndex < fieldSize && ladyBugIndex >= 0) {
                            field[ladyBugIndex] = 1;
                        }
                    }
                }
                break;
        }
    }
    console.log(field.join(" "));
}
ladyBug([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'
]);