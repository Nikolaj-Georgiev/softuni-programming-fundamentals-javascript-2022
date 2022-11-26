function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day);

    date.setDate(date.getDate() + 1);

    let yearNew = date.getFullYear();
    let monthNew = date.getMonth();
    let dayN = date.getDate();
    let result = `${yearNew}-${monthNew + 1}-${dayN}`
    console.log(result);

}
nextDay(2016, 9, 30);