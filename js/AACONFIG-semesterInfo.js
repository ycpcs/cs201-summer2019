
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("05/21/2019 4:00:00"),
    lastDayOfSemester:  new Date("08/15/2019 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Memorial Day",    new Date("05/27/2019"),  new Date("05/27/2019")),
        new VacationDays("4th of July",    new Date("07/01/2019"), new Date("07/05/2019")),
        new VacationDays("July Vacation",    new Date("07/15/2019"), new Date("07/19/2019")),
    ]
};
