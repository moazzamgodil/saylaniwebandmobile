var hourdisp = document.getElementById("hours");
var mindisp = document.getElementById("mins");
var secdisp = document.getElementById("sec");
var hour = 1;
var min = 1;
var sec = 0;
var interval;

function timer() {
    sec++;
    secdisp.innerHTML = sec;
    if (sec > 59) {
        mindisp.innerHTML = min;
        min++;
        sec = 0;
    }
    else if (min > 59) {
        hourdisp.innerHTML = hour;
        hour++;
        min = 0;
    }

}

function start() {
    interval = setInterval(timer, 1000);
    document.getElementById("start").style.display = "none";
    document.getElementById("pause").style.display = "inline-block";
}

function pause() {
    clearInterval(interval);
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("pause").style.display = "none";
}

function reset() {
    clearInterval(interval);
    hour = min = sec = 0;
    hourdisp.innerHTML = hour;
    mindisp.innerHTML = min;
    secdisp.innerHTML = sec;
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("pause").style.display = "none";
}