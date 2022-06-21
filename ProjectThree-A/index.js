var timer = document.getElementById("timer");
let minute = 10;
let seconds = 0;

timer.innerText = `${minute}:0${seconds}`;


function countDown(){
    if(seconds == 00){
        minute -= 1;
        seconds = 60;
    }
    seconds -= 1;

    if(seconds < 10){
        seconds = `0${seconds}`;
    }

    if(minute == 0 && seconds == 00){
        minute = 10;
        seconds == 00;
    }
    timer.innerText = `${minute}:${seconds}`;
}

const oneSecond = 1000;
setInterval(countDown, oneSecond);