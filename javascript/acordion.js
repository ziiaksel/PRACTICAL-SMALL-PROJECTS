const accordionPlus = document.querySelectorAll(".plus");
const content = document.querySelectorAll(".acordion1");
accordionPlus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const text =
      eo.target.parentElement.parentElement.querySelectorAll(".acordion")[0];
    text.classList.toggle("plus-open");
    text.style.height = `${text.scrollHeight}px`;
    if (text.classList.contains("plus-open")) {
      eo.target.innerText = "-";
    } else {
      eo.target.innerText = "+";
    }
  });
});

//time and date
/*
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;

  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Friday";
    break;

  case 6:
    day = "Saturday";
}
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let m = month[m.getMonth()]
document.getElementById("date").innerHTML = `${day} ${m}  `;

*/
const timeFunction = (params) => {
  const date = new Date()
let dateReadable = date.toDateString()
document.getElementById("date").innerHTML = `${dateReadable}<br><br>`

//hours minute sec
const h = new Date();
let hour = h.getHours();
let min = h.getMinutes()
let sec = h.getSeconds()
if (sec<10) {
  sec= `0${sec} `
} 

if (min<10) {
  min= `0${min} `
} 
if (hour<10) {
  hour= `0${hour} `
} 
const time = document.getElementById("hour")
time.innerHTML = `${hour} : ${min} : ${sec}`  


}


setInterval(() => {
  timeFunction()
}, 1000);
