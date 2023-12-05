/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  SUNDAY = "weekend",
  MONDAY = "weekday",
  TUESDAY = "weekday",
  WEDNESDAY = "weekday",
  THURSDAY = "weekday",
  FRIDAY = "weekday",
  SATURDAY = "weekend",
};

function isWeekend(day: Day): boolean {
  return day === "weekend"
}