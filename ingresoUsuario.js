const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const formu = document.getElementById("formu")

formu.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    if(password.value.length < 8){
        warnings += "Password Inválido / Intente nuevamente <br>"
        entrar = true
    }
})
