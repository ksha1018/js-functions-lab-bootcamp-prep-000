// write your code below!
function happyHolidays() {
  console.log('Happy holidays!')
}

function happyHolidaysTo(name) {
  console.log('Happy holidays,' + name +'!')
}

function happyHolidayTo(holiday, name) {
  console.log('Happy,' + holiday +' '+ name + '!')
}

function holidayCountdown(holiday, dy) {
  console.log('It\'s ' + dy +  'days until ' + holiday + '!')
}

happyHolidays()
happyHolidaysTo("David Kwon")
happyHolidayTo("birthday", "David Kwon")
holidayCountdown("birthday", 15)
