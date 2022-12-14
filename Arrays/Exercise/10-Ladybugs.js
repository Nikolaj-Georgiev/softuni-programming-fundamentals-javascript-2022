function ladybugs(inputArray) {
    let intFieldSize = Number(inputArray[0]);
    let fieldArray = new Array(intFieldSize).fill(0);

    let ladybugsPositionString = inputArray[1];
    let ladybugsPositionArr = ladybugsPositionString.split(' ');

    for (i = 0; i < ladybugsPositionArr.length; i++) {
        let ladybug = Number(ladybugsPositionArr[i]);
        if (ladybug >= 0 && ladybug < intFieldSize) {
            fieldArray[ladybug] = 1;
        }
    }

    for (let j = 2; j < inputArray.length; j++) {
        let commandArray = inputArray[j].split(' ');
        let position = Number(commandArray[0]);
        let direction = commandArray[1];
        let moveFields = Number(commandArray[2]);
        if ((position + moveFields) <= intFieldSize && (position + moveFields) >= 0 ||
            (position - moveFields) <= intFieldSize && (position - moveFields) >= 0) {
            switch (direction) {
                case 'right':
                    if (position >= 0 && position < intFieldSize) {
                        if (fieldArray[position] != 0) {
                            fieldArray[position] = 0;
                            for (let k = (position + moveFields); k < intFieldSize; k++) {
                                if (fieldArray[k] == 0) {
                                    fieldArray[k] = 1;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                case 'left':
                    if (position >= 0 && position < intFieldSize) {
                        if (fieldArray[position] != 0) {
                            fieldArray[position] = 0;
                            for (let l = (position - moveFields); l < intFieldSize; l--) {
                                if (fieldArray[l] == 0) {
                                    fieldArray[l] = 1;
                                    break;
                                }
                            }
                        }
                    }
                    break;
            }
        } else if (moveFields < 0 || moveFields >= intFieldSize) {

            switch (direction) {
                case 'right':
                    if (position >= 0 && position < intFieldSize) {
                        if (fieldArray[position] != 0) {
                            fieldArray[position] = 0;
                        }
                    }
                    break;
                case 'left':
                    if (position >= 0 && position < intFieldSize) {
                        if (fieldArray[position] != 0) {
                            fieldArray[position] = 0;
                        }
                    }
                    break;
            }
        }

    }

    if (inputArray.length > 2) {
        console.log(fieldArray.join(' '));
    }
}
ladybugs([3, '0 1',
    '0 right 1',
    '1 right 1',
    '0 right 1',
]);
ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'
]);
ladybugs([5, '3',
    '3 left 2',
    '1 left -2',
    '-100 left 2'
]);