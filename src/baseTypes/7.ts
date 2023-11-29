/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
};

const weekend = {
  sunday: Day.SUNDAY,
  saturday: Day.SATURDAY,
}

function isWeekend() {
  if (Day.SUNDAY === weekend.sunday || Day.SATURDAY === weekend.saturday) {
    return "yes"
  }
  return "no"
}