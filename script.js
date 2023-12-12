const hoursEl   = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl    = document.querySelector(".ampm");


function DigitalClock(){

    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    let ampm = "AM";

    if (hh > 12) {
        hh = hh - 12;
        ampm = "PM";
      }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    hoursEl.innerText = hh;
    minutesEl.innerText = mm;
    secondsEl.innerText = ss;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        DigitalClock();
      }, 1000);
}

DigitalClock();