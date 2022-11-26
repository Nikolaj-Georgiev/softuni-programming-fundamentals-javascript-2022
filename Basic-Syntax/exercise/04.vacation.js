function vacation(peopleCount, groupType, weekDay) {

    let totalPrice = 0;

    switch (groupType) {
        case 'Students':
            switch (weekDay) {
                case 'Friday':
                    totalPrice = peopleCount * 8.45;
                    if (peopleCount >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case 'Saturday':
                    totalPrice = peopleCount * 9.80;
                    if (peopleCount >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case 'Sunday':
                    totalPrice = peopleCount * 10.46;
                    if (peopleCount >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;

            }
            break;
        case 'Business':
            switch (weekDay) {
                case 'Friday':
                    if (peopleCount >= 100) {
                        peopleCount -= 10;
                    }
                    totalPrice = peopleCount * 10.90;
                    break;
                case 'Saturday':
                    if (peopleCount >= 100) {
                        peopleCount -= 10;
                    }
                    totalPrice = peopleCount * 15.60;
                    break;
                case 'Sunday':
                    if (peopleCount >= 100) {
                        peopleCount -= 10;
                    }
                    totalPrice = peopleCount * 16;
                    break;

            }
            break;
        case 'Regular':
            switch (weekDay) {
                case 'Friday':
                    totalPrice = peopleCount * 15;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
                case 'Saturday':
                    totalPrice = peopleCount * 20;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
                case 'Sunday':
                    totalPrice = peopleCount * 22.50;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");