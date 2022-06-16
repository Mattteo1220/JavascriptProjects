function addEventListener(){
    let elements = document.getElementsByClassName("dot");
    let elementsArray = Array.from(elements);
    elementsArray.forEach(el => el.addEventListener("mouseover", enlarge, false));
    elementsArray.forEach(el => el.addEventListener("mouseout", reduce, false));
}


function enlarge(el){
    el.currentTarget.style.height = "50px";
    el.currentTarget.style.width = "50px";
}

function reduce(el){
    el.currentTarget.style.height = "25px";
    el.currentTarget.style.width = "25px";
}

