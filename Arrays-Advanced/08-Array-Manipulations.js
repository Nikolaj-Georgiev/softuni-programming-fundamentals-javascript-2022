function arrayManipulator(input) {

    let workArr = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        let localArr = input[i].split(' ');
        switch (localArr[0]) {
            case 'Add':
                workArr.push(Number(localArr[1]));
                // console.log(workArr);
                break;
            case 'Remove':
                let tempArr = workArr.filter(x => x !== Number(localArr[1]));
                workArr = tempArr.slice();
                // console.log(workArr);
                break;
            case 'RemoveAt':
                workArr.splice(Number(localArr[1]), 1);
                // console.log(workArr);
                break;
            case 'Insert':
                workArr.splice(Number(localArr[2]), 0, Number(localArr[1]));
                // console.log(workArr);
                break;

            default:
                break;
        }
    }

    console.log(workArr.join(' '));

}

arrayManipulator(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);
arrayManipulator(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]);