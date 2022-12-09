function tseamAccount(inputArray) {

    let workArray = [];
    for (let iterator of inputArray) {
        workArray.push(iterator);
    }
    let peshosGames = workArray[0].split(' ');
    let index = 1;
    let command = workArray[index];
    while (command != 'Play!') {

        let tempArray = workArray[index].split(' ');
        switch (tempArray[0]) {

            case 'Install':
                if (!peshosGames.includes(tempArray[1])) {
                    peshosGames.push(tempArray[1]);
                }
                break;

            case 'Update':
                if (peshosGames.includes(tempArray[1])) {
                    peshosGames.splice(peshosGames.indexOf(tempArray[1]), 1);
                    peshosGames.push(tempArray[1]);
                }
                break;

            case 'Expansion':
                let myExpansionArray = tempArray[1].split('-');
                if (peshosGames.includes(myExpansionArray[0])) {
                    let myExpansionString = `${myExpansionArray[0]}:${myExpansionArray[1]}`
                    let gameIndex = peshosGames.indexOf(myExpansionArray[0]);
                    let shiftingArray = [];
                    for (let i = 0; i < peshosGames.length; i++) {
                        shiftingArray.push(peshosGames[i]);
                        if (i == gameIndex) {
                            shiftingArray.push(myExpansionString);
                        }
                    }
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
                }
                break;
        }
        command = workArray[++index];
    }
    console.log(peshosGames.join(' '));
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