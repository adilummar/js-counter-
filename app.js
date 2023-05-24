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

giveaway.textContent = `giveaway ends on ${weekday}, ${months[month]} ${year} ${hours}:${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();

// get future date
function getRemainingtime() {
  const today = new Date().getTime();

  // times in ms
  const cInms = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSec = 1000;

  var days = Math.floor(cInms / oneDay);
  var hours = cInms - days * oneDay;
  hours = Math.floor(hours / oneHour);
  var mins = Math.floor((cInms % oneHour) / oneMinute);
  var sec = Math.floor((cInms % oneMinute) / oneSec);

// grabbing datas
const value = [days,hours,mins,sec]

// adding zero for < 10 
function format(item){
  if(item < 10){
    return item = `0${item}`
  }
  return item 
}

items.forEach((item,index)=>{
  item.innerHTML = format(value[index])
})

}

setInterval(()=>{

  getRemainingtime();
},1000)

