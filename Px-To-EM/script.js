document.addEventListener("DOMContentLoaded",()=>{
    const entry = document.getElementById("input")
    const resultado = document.getElementById("resultado")

    
    entry.placeholder = "20"
    entry.focus()
    entry.addEventListener("input",(e) =>{
        resultado.textContent = e.target.value * 0.063
        if (resultado.textContent === "NaN"){
            resultado.textContent = "Inserte Digitos"
        }  
    })

    
})


