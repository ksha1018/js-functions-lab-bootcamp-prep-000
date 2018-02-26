// write your code below!
function happyHolidays() {
  return 'Happy holidays!';
}

function happyHolidaysTo(name) {
  return 'Happy holidays, ${name}!';
}

function happyHolidayTo(holiday, name) {
  return 'Happy, ${holiday}, ${name}!';
}

function holidayCountdown(holiday, dy) {
  'It\'s  ${dy} days until ${holiday}!';
}

happyHolidays();
happyHolidaysTo("David Kwon");
happyHolidayTo("birthday", "David Kwon");
holidayCountdown("birthday", 15);
