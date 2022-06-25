const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const formu = document.getElementById("formu")
const parrafo = document.getElementById("warnings")

formu.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    parrafo.innerHTML = ""
    if(usuario.value.length == 0){
        warnings += "Ingrese su usuario <br>"
        entrar = true
    }
    if(password.value.length < 8 || password.value.length > 8){
        warnings += "Password Inválido <br>"
        entrar = true
    }
    
    if(entrar){
        parrafo.innerHTML = warnings
    }
})
