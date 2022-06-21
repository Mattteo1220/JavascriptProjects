const oneSecond = 1000;
var wakeUpTime,wakeUpIndex = 8;
var lunchTime,lunchTimeIndex = 12;
var napTime, napTimeIndex = 16;

var partyTime;
const regularImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
const partyTimeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
const goodMorningImage = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
const wakeUpTimeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
const lunchTimeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
const napTimeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
const sleepingKitty = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";

var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var napTimeSelector = document.getElementById('napTimeSelector');

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

function updatePage(){
    var currentHour = new Date().getHours();

    var image = regularImage;
    var messageText = "";
    var lolCatImage = document.getElementById("lolcatimage");
    var timeevent = document.getElementById("timeevent");

    if(currentHour == wakeUpTime){
        image = goodMorningImage;
        messageText = "Good Morning!";
    }

    if(currentHour == lunchTime){
        image = lunchTimeImage;
        messageText = "Good Afternoon!";
    }

    if(currentHour == napTime){
        image = napTimeImage;
        messageText = "Sleep Tight!";
    }

    if(currentHour == partyTime){
        image = partyTimeImage;
        messageText = "Let's Party!";
    }

    timeevent.innerText = messageText;
    lolCatImage.setAttribute("src", image);

    showCurrentTime();
}
updatePage();

setInterval(updatePage, oneSecond);

function wakeUpEvent(){
    wakeUpTime = parseInt(wakeUpTimeSelector.value);
    wakeUpTimeSelector.options[wakeUpIndex].removeAttribute("selected");
    wakeUpIndex = wakeUpTime;
    wakeUpTimeSelector.options[wakeUpTimeSelector.selectedIndex].setAttribute("selected", true);
}

function lunchEvent(){
    lunchTime = parseInt(lunchTimeSelector.value);
    lunchTimeSelector.options[lunchTimeIndex].removeAttribute("selected");
    lunchTimeIndex = lunchTime;
    lunchTimeSelector.options[lunchTimeSelector.selectedIndex].setAttribute("selected", true);
}

function napEvent(){
    napTime = parseInt(napTimeSelector.value);
    napTimeSelector.options[napTimeIndex].removeAttribute("selected");
    napTimeIndex = napTime;
    napTimeSelector.options[napTimeSelector.selectedIndex].setAttribute("selected", true);
}

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);

var partyTimeBtn = document.getElementById("partytime");

function partyEvent(){
    if(partyTime < 0){
        partyTime = new Date().getHours();
        partyTimeBtn.innerText = "Party Over";
        partyTimeBtn.style.backgroundColor = "#0A8DAB";
        partyTimeBtn.style.color = "black";
    }
    else{
        partyTime = -1;
        partyTimeBtn.innerText = "Party Time!";
        partyTimeBtn.style.backgroundColor = "#222";
        partyTimeBtn.style.color = "white";
    }
}

partyTimeBtn.addEventListener("click", partyEvent);
partyEvent();