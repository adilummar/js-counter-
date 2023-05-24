const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 06, 14, 11, 30, 0);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
var weekday = futureDate.getDay();
weekday = weekdays[weekday];
console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday}, ${months[month]} ${year} ${hours}:${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();
// get future date
function getRemainingtime() {
  const today = new Date().getTime()

  // times in ms 
  const oneDay = 24*60*60*1000;
  const oneHousr = 60*60*1000;
  const oneMinute = 60*1000;
  const oneSec = 1000 
}
