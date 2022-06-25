const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const documento = document.getElementById("dni")
const direccion = document.getElementById("direc")
const ciudad = document.getElementById("city")
const cp = document.getElementById("cp")
const pais = document.getElementById("pais")
const telefono = document.getElementById("phone")
const email = document.getElementById("email")
const fech_nac = document.getElementById("nacim")
const form = document.getElementById("formu")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    parrafo.innerHTML = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length == 0){
        warnings += "Ingrese su nombre <br>"
        entrar = true
    }
    if(apellido.value.length == 0){
        warnings += "Ingrese su apellido <br>"
        entrar = true
    }
    if(documento.value.length == 0){
        warnings += "Ingrese su número de documento <br>"
        entrar = true
    }
    if(documento.value.length >= 9){
        warnings += "Ingrese un número de documento válido <br>"
        entrar = true
    }
    if(direccion.value.length == 0){
        warnings += "Ingrese su dirección <br>"
        entrar = true
    }
    if(ciudad.value.length == 0){
        warnings += "Ingrese lugar de residencia <br>"
        entrar = true
    }
    if(cp.value.length == 0){
        warnings += "Ingrese un código postal <br>"
        entrar = true
    }
    
    if(pais.value.length = 0){
        warnings += "Ingrese su país <br>"
        entrar = true
    }
    if(telefono.value.length = 0){
        warnings += "Ingrese su número de teléfono <br>"
        entrar = true
    }
    if(fech_nac.value.length = 0){
        warnings += "Ingrese su fecha de nacimiento <br>"
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += "El email no es válido <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado. Recibirá por email sus datos de ingreso"
    }
})