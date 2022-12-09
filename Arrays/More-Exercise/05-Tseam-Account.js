function tseamAccount(inputArray) {

    let workArray = [];
    for (let iterator of inputArray) {
        workArray.push(iterator);
    }
    // console.log(workArray);
    let peshosGames = workArray[0].split(' ');
    // console.log(peshosGames);
    let index = 1;
    let command = workArray[index];
    while (command != 'Play!') {

        let tempArray = workArray[index].split(' ');
        switch (tempArray[0]) {

            case 'Install':
                if (!peshosGames.includes(tempArray[1])) {
                    peshosGames.push(tempArray[1]);
                }
                // console.log(peshosGames);
                break;

            case 'Update':
                if (peshosGames.includes(tempArray[1])) {
                    peshosGames.splice(peshosGames.indexOf(tempArray[1]), 1);
                    peshosGames.push(tempArray[1]);
                    // console.log(peshosGames);
                }
                break;

            case 'Expansion':
                let myArray = tempArray[1].split('-');
                if (peshosGames.includes(myArray[0])) {
                    let myLocalString = `${myArray[0]}:${myArray[1]}`
                        // console.log(myArray);
                        // console.log(myLocalString);
                    let gameIndex = peshosGames.indexOf(myArray[0]);
                    // console.log(gameIndex);
                    let shiftingArray = [];
                    for (let i = 0; i <= gameIndex; i++) {
                        shiftingArray.push(peshosGames[i]);
                    }
                    shiftingArray.push(myLocalString);

                    for (let j = gameIndex + 1; j < peshosGames.length; j++) {
                        shiftingArray.push(peshosGames[j]);
                    }
                    // console.log(shiftingArray);
                    peshosGames = shiftingArray;
                }
                break;

            case 'Uninstall':
                if (peshosGames.includes(tempArray[1])) {
                    let removingElementArray = [];
                    for (let el of peshosGames) {
                        if (el != tempArray[1]) {
                            removingElementArray.push(el);
                        }
                    }
                    peshosGames = removingElementArray;
                    // console.log(peshosGames);
                }
                break;
        }
        command = workArray[++index];
    }
    console.log(peshosGames.join(' '));
    // console.log(peshosGames);
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);
tseamAccount(['CS WoW Diablo *%/',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Update Diablo',
    'Uninstall WoW',
    'Install WoW',
    'Expansion *%/-#$^',
    'Install LoL',
    'Play!'
]);