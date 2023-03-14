const year = 1985;
const holidays = [
  "01/01",
  "01/06",
  "02/02",
  "02/17",
  "02/28",
  "06/03",
  "12/06",
  "12/25",
]; // format MM/DD

function countHours(year: number, holidays: string[]) {
  const findHolidays = holidays
    .map((h) => {
      const date = Date.parse(`${h}/${year}`);
      const newDate = new Date(date);
      const dayNumber = newDate.getDay();
      return dayNumber;
    })
    .filter((value) => ![6, 0].includes(value));
  const count = findHolidays.length ? findHolidays.length * 2 : 0;
  return count;
}

const logCountHours = countHours(year, holidays);

console.log(logCountHours);
