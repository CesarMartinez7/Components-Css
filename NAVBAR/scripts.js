
//BUTTON NAVBAR
const navBarList = document.querySelector(".container-list-navbar")
const buttonBurger = document.querySelector(".button-burger");


buttonBurger.addEventListener("click",()=>{
    buttonBurger.classList.toggle("activo")
    changeButtonNavbar()    
});


function changeButtonNavbar() {
    if (navBarList.style.display === "none" || navBarList.style.display === "") {
        navBarList.style.display = "flex";
        navBarList.style.flexDirection = "column";
    } else {
        navBarList.style.display = "none";
    }
}


