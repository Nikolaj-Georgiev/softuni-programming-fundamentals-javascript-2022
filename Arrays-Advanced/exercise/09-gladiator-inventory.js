function gladiatorInventory(inputArr) {

    let inventoryArr = inputArr.shift().split(' ');

    for (let i = 0; i < inputArr.length; i++) {
        let commandArr = inputArr[i].split(' ');
        let command = commandArr[0];
        let item = commandArr[1];

        switch (command) {
            case 'Buy':
                if (!inventoryArr.includes(item)) {
                    inventoryArr.push(item);
                }
                break;
            case 'Trash':
                if (inventoryArr.includes(item)) {
                    let filteredArr = inventoryArr.filter(x => x !== item);
                    inventoryArr = filteredArr.slice(0);
                }
                break;
            case 'Repair':
                if (inventoryArr.includes(item)) {
                    let index = inventoryArr.indexOf(item);
                    let splicedItem = inventoryArr.splice(index, 1).join('');
                    inventoryArr.push(splicedItem);
                }
                break;
            case 'Upgrade':
                let tempArr = item.split('-');
                let upgradedItem = tempArr[0];
                let upgrade = tempArr[1];
                if (inventoryArr.includes(upgradedItem)) {
                    inventoryArr.splice((inventoryArr.indexOf(upgradedItem) + 1), 0, `${upgradedItem}:${upgrade}`);
                }
                break;
        }

    }

    console.log(inventoryArr.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);
console.log('---------');
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]);