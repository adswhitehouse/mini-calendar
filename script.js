// Variables
let dayNumber = document.querySelector(".jsDayNumber");
let day = document.querySelector(".jsDay");
let month = document.querySelector(".jsMonth");
let year = document.querySelector(".jsYear");

// Days array
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Months array
let months = [
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

// Current date
let currentDate = new Date();

// Display current dates
dayNumber.textContent =
  (currentDate.getDate() < 10 ? "0" : "") + currentDate.getDate();
day.textContent = days[currentDate.getDay()];
month.textContent = months[currentDate.getMonth()];
year.textContent = currentDate.getFullYear();
