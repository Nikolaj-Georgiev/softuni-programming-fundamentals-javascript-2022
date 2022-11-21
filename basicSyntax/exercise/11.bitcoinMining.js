function bitcoinMining(input) {

    let bitcoinBought = 0;
    let firstDayBitcoinBought = 0;
    let goldMoney = 0
    let bitcoin = 11949.16;
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        counter++;
        if ((i + 1) % 3 !== 0 || i === 0) {
            goldMoney += Number(input[i]) * 67.51;
            if (goldMoney >= bitcoin) {
                goldMoney -= bitcoin;
                if (goldMoney >= bitcoin) {
                    let bitcoins = Math.floor(goldMoney / bitcoin);
                    goldMoney -= bitcoin * bitcoins;
                    bitcoinBought += bitcoins;
                }
                if (firstDayBitcoinBought === 0) {
                    firstDayBitcoinBought = counter;
                }
                bitcoinBought++;
            }
        } else {
            goldMoney += Number(input[i]) * 0.7 * 67.51;
            if (goldMoney >= bitcoin) {
                goldMoney -= bitcoin;
                if (goldMoney >= bitcoin) {
                    let bitcoins = Math.floor(goldMoney / bitcoin);
                    goldMoney -= bitcoin * bitcoins;
                    bitcoinBought += bitcoins;
                }
                if (firstDayBitcoinBought === 0) {
                    firstDayBitcoinBought = counter;
                }
                bitcoinBought++;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinBought}`);
    if (firstDayBitcoinBought !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBitcoinBought}`);
    }
    console.log(`Left money: ${goldMoney.toFixed(2)} lv.`);

}
bitcoinMining([3124.15, 504.212, 2511.124]);