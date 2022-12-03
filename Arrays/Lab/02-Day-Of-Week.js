function dayOfWeek(numberDay) {

    let day = '';
    switch (numberDay) {
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
            break;
        default:
            day = 'Invalid day!';
            break;
    }

    console.log(day);
}
dayOfWeek(11);

function dayOfWeekArray(nDay) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Invalid day!'];

    if (nDay > 0 && nDay < 8) {
        console.log(daysOfWeek[nDay - 1]);
    } else {
        console.log(daysOfWeek[daysOfWeek.length - 1]);
    }
}
dayOfWeekArray(11);