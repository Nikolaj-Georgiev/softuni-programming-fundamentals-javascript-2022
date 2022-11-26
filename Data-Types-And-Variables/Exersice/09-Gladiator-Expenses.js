function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let brokenShields = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            brokenShields++;
            if (brokenShields % 2 === 0) {
                expenses += armorPrice;
            }

        }

    }

    console.log(`Gladiator expenses: ${expenses} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5);