

const contenedores = document.querySelectorAll(".container")


console.log(contenedores)

console.log(contenedores)
contenedores.forEach(contenedor => {
    contenedor.addEventListener("click",function(e){
        e.stopPropagation()
        if (e.target.style.height == "25vh"){
            e.target.style.height = "fit-content"
        }else if (e.target.style.height = "fit-content"){
            e.target.style.height = "25vh"
        }
        console.log(e.target.style)
    });

    const childrens = document.querySelectorAll(".card-responsive")
    childrens.forEach(children => {
        children.addEventListener("click",(e)=>{
            e.stopPropagation()
        })
    })
})