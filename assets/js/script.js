var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var currentHour = moment().format('H');
console.log(currentHour)
