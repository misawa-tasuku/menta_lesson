'use strict';

console.clear();
{
  const year = 2020;
  const month = 4;

  function getCalenderHead(){
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDate();

    for (let i = 0; i < n; i++){
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  function getCalenderBody(){
    const dates = [];
    const lastDates = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDates; i++){
      // dates.push(i);
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    // console.log(dates);
    return dates;
  }
}
function getCalenderTail(){
  const dates = [];
  const lastDay = new Date(year, month + 1, 0).getDay();

  for (let i = 1; i < 7 - lastDay; i++){
    dates.push({
      date: 1,
      isToday: false,
      isDisabled: true,
    });
  }
  // console.log(dates);
  return dates
}
function createCalender(){
  const dates = [
    ...getCalenderHead(),
    ...getCalenderBody(),
    ...getCalenderTail(),
  ];
  const weeks = [];
  const weeksCount = dates.length / 7;

  for (let i = 0; i < weeksCount; i++){
    weeks.push(dates.splice(0, 7))
  }
  console.log(weeks);
}
createCalender();
// getCalenderTail();
// getCalenderBody();
// getCalenderHead();
}