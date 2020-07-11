var min = document.getElementById("mins");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var mintime = sectime = msectime = 0;
var interval;

function timer() {
    msectime++;
    msec.innerHTML = msectime;
    if(msec > 100) {
        sectime++;
        sec.innerHTML = sectime;
        msec = 0;
    }
}

interval = setInterval(timer, 10);