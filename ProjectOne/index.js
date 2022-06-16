var c,ctx;
const colors = ["blue", "red", "green", "yellow"];
onload=setInterval(randomize, 1000);

function randomize(){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    var rr = Math.ceil((20*Math.random())+5);
    var rx = Math.ceil(290*Math.random());
    var ry = Math.ceil(290*Math.random());
    drawCircle(rx, ry, rr);
}

function drawCircle(rx, ry, rr){
    var colorPicker = Math.ceil(4 * Math.random() - 1);
    ctx.strokeStyle = colors[colorPicker];
    ctx.beginPath();
    ctx.arc(rx, ry, rr, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
}