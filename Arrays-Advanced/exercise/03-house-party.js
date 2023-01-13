function houseParty(array) {

    let workArray = array.slice(0);

    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentStringArray = workArray.shift().split(' ');

        if (currentStringArray.length % 2 !== 0) {
            if (!resultArray.includes(currentStringArray[0])) {
                resultArray.push(currentStringArray[0]);
            } else {
                console.log(`${currentStringArray[0]} is already in the list!`);
            }
        } else {
            if (resultArray.includes(currentStringArray[0])) {
                resultArray.splice(resultArray.indexOf(currentStringArray[0]), 1);
            } else {
                console.log(`${currentStringArray[0]} is not in the list!`);
            }
        }
    }

    console.log(resultArray.join('\n'));

}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);