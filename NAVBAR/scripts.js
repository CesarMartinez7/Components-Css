const checkBurger = document.getElementById("navbar-burger");
const navbarList = document.querySelector(".navbar-list");
const header = document.getElementsByTagName("header")


console.log(header.style)

checkBurger.addEventListener("click", () => {
    navbarList.classList.toggle("esconder");
    console.log(navbarList.classList)
});
