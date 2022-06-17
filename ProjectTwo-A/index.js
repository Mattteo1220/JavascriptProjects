
const root = document.querySelector("html");

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Following extra cursor element
const cursor_follower = document.createElement("div");
cursor_follower.classList.add("cursor", "cursor_follower");
root.appendChild(cursor_follower);

root.addEventListener("mousemove", (e) => {
    setPosition(cursor_follower, e);
    setPosition(cursor, e);
});

function setPosition(element, e){
    element.style.transform = `translate3d(${e.clientX}px,${e.clientY}px, 0)`;
}

