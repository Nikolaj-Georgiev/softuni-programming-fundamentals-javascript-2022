function dungeonestDark(inputArray) {

    let roomsArray = inputArray[0].split('|');
    let hitPoints = 100;
    let coins = 0;
    let bestedRoomsCounter = 0;

    for (const iterator of roomsArray) {
        bestedRoomsCounter++;
        let currentRoomArray = [];
        currentRoomArray = iterator.split(' ');
        if (currentRoomArray[0] !== 'potion' && currentRoomArray[0] !== 'chest') {
            let monsterName = currentRoomArray[0];
            let monstersAttack = Number(currentRoomArray[1]);
            hitPoints -= monstersAttack;
            if (hitPoints <= 0) {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestedRoomsCounter}`);
                break;
            } else {
                console.log(`You slayed ${monsterName}.`);
            }
        } else if (currentRoomArray[0] === 'potion') {
            let potion = Number(currentRoomArray[1]);
            let healing = Number(hitPoints) + potion;
            if (healing > 100) {
                healing = potion - (healing - 100);
                hitPoints = 100;
            } else {
                healing = potion;
                hitPoints += potion;
            }
            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${hitPoints} hp.`);
        } else if (currentRoomArray[0] === 'chest') {
            let foundCoins = Number(currentRoomArray[1]);
            coins += foundCoins;
            console.log(`You found ${foundCoins} coins.`);
        }
    }

    if (hitPoints > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hitPoints}`);
    }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);