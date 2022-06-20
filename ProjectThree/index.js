const oneSecond = 1000;

function showCurrentTime(){
    console.log("setting time...");
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if(seconds <= 9){
        seconds = `0${seconds}`;
    }

    if(minutes <= 9){
        minutes = `0${minutes}`;
    }

    let meridiem = "";
    if(hour >= 12 && hour <= 24){
        meridiem = "PM";
    }
    else{
        meridiem = "AM";
    }

    let clockElement = document.getElementById('clock');
    
    clockElement.innerText = `${hour}:${minutes}:${seconds} ${meridiem}`;
}

setInterval(showCurrentTime, oneSecond);