const moment = require("moment");
const { ICalCalendar } = require("ical-generator");

const time = new Date();

// prettier-ignore
const events = [
    { start: time, end: time, date: 'Monday, January 3rd', summary: 'New Year\'s Day', description: '', },
    { start: time, end: time, date: 'Monday, January 17th', summary: 'Martin Luther King, Jr. Day', description: '', },
    { start: time, end: time, date: 'Monday, May 30th', summary: 'Memorial Day', description: '', },
    { start: time, end: time, date: 'Monday, June 20th', summary: 'Juneteenth', description: '', },
    { start: time, end: time, date: 'Monday, July 4th', summary: 'Independence Day', description: '', },
    { start: time, end: time, date: 'Monday, September 5th', summary: 'Labor Day', description: '', },
    { start: time, end: time, date: 'Thursday, November 24th', summary: 'Thanksgiving Day', description: '', },
    { start: time, end: time, date: 'Friday, November 25th', summary: 'Friday Immediately After Thanksgiving Day', description: '', },
    { start: time, end: time, date: 'Friday, December 23rd', summary: 'Christmas Eve', description: '', },
    { start: time, end: time, date: 'Monday, December 26th', summary: 'Christmas Day', description: '', },
    { start: time, end: time, date: 'Friday, December 30th', summary: 'New Year\'s Eve - Observed', description: '', },
];

const calendar = new ICalCalendar();

events.forEach((e) => {
  const d = moment(e.date, "ddd, MMM Do");
  const start = moment(d).startOf("day").add(8, "hours");
  const end = moment(start).add(10, "hours");
  console.log(d, start, end);
  e.start = start;
  e.end = end;
  e.allDay = true;
  calendar.createEvent(e);
});

calendar.save("calendar.ics");
