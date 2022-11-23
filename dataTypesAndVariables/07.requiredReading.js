function requiredReading(bookPages, pagesPerHour, daysForReading) {

    let totalHoursForTheBook = Number(bookPages / pagesPerHour);
    let dailyReadingHours = totalHoursForTheBook / daysForReading;

    console.log(dailyReadingHours);

}
requiredReading(212,
    20,
    2
);