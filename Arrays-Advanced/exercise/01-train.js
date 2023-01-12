function train(array) {

    let wagons = array.shift().split(' ').map(Number);
    let maxPassengers = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');

        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
        } else {

            for (let j = 0; j < wagons.length; j++) {
                let passengersToSeat = Number(command[0]) + wagons[j]
                if (passengersToSeat <= maxPassengers) {
                    wagons.splice(wagons.indexOf(wagons[j]), 1, passengersToSeat);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
])