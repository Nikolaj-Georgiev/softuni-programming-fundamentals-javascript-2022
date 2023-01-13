function test() {
    let myArray = tempArray[1].split('-');
    if (peshosGames.includes(myArray[0])) {
        let myLocalString = `${myArray[0]}:${myArray[1]}`
            // console.log(myArray);
            // console.log(myLocalString);
        let gameIndex = peshosGames.indexOf(myArray[0]);
        // console.log(gameIndex);
        let shiftingArray = [];
        for (let i = 0; i <= peshosGames.length; i++) {

            for (let j = 0; j <= peshosGames.length; j++)
                if (i == gameIndex + 1) {
                    shiftingArray.push(myLocalString);
                } else {
                    if (shiftingArray.includes(myLocalString)) {
                        shiftingArray.push(peshosGames[gameIndex + i - 1]);
                    } else {
                        shiftingArray.push(peshosGames[i]);
                    }
                }
        }
        // console.log(shiftingArray);
        peshosGames = shiftingArray;
    }

}
test();