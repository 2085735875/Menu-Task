const cl = console.log;

const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

const bar2 = document.getElementById("bar2");
const nav2 = document.getElementById("nav2");

const onClick = () => {
    nav.classList.toggle("d-none")
}


bar.addEventListener("click", onClick)

const onClick2 = () => {
    nav2.classList.toggle("d-none")
}


bar2.addEventListener("click", onClick2)



