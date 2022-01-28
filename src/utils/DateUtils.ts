import { format, getDaysInMonth } from "date-fns"

export function getMonthDays(date: Date) {
  return Array.from({ length: getDaysInMonth(date) }, (x, i) => i + 1)
}

function addDays(date: Date, days: number) {
  date.setDate(date.getDate() + days)
  return date
}

export function getDatesBetween(startDate: Date, endDate: Date): Array<Date> {
  var dateArray = new Array()
  var currentDate = new Date(startDate.getTime())
  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate))
    currentDate = addDays(currentDate, 1)
  }
  return dateArray
}

export function getDayLabelsBetween(
  startDate: Date,
  endDate: Date
): Array<string> {
  return getDatesBetween(startDate, endDate).map(date => format(date, "d"))
}
