
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

function validacion(){
   
    let warnings = ""
    parrafo.innerHTML = ""
        
    if(nombre.value.length == 0){
        nombre.style= "border: red 4px solid"            
        warnings += " // Ingrese su nombre // "
        entrar = true
    }
    if(apellido.value.length == 0){
        apellido.style= "border: red 4px solid"
        warnings += " // Ingrese su apellido // "
        entrar = true
    }
    if(documento.value.length > 9 || documento.value.length < 8 ){
        documento.style= "border: red 4px solid"
        warnings += " // Ingrese un número de documento válido // "
        entrar = true
    }
    if(direccion.value.length == 0){
        direccion.style= "border: red 4px solid"
        warnings += " // Ingrese su dirección //"
        entrar = true
    }
    if(ciudad.value.length == 0){
        ciudad.style= "border: red 4px solid"
        warnings += " // Ingrese lugar de residencia //"
        entrar = true
    }
    if(cp.value.length == 0){
        cp.style= "border: red 4px solid"
        warnings += " // Ingrese un código postal //"
        entrar = true
    }
    if(pais.value.length == 0){
        pais.style= "border: red 4px solid"
        warnings += " // Ingrese su país // "
        entrar = true
    }
    if(telefono.value.length == 0){
        telefono.style= "border: red 4px solid"
        warnings += " // Ingrese su número de teléfono // "
        entrar = true
    }

        /*    if(!regexEmail.test(email.value)){
            warnings += " // El email no es válido // "
            entrar = true
        } */
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado. Recibirá por email sus datos de ingreso"
    }
    return false;
}

/*
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    parrafo.innerHTML = ""
    
    if(nombre.value.length == 0){
        
        warnings += " // Ingrese su nombre // "
        entrar = true
    }
    if(apellido.value.length == 0){
        warnings += " // Ingrese su apellido // "
        entrar = true
    }
    if(documento.value.length > 9 || documento.value.length < 8 ){
        warnings += " // Ingrese un número de documento válido // "
        entrar = true
    }
    if(direccion.value.length == 0){
        warnings += " // Ingrese su dirección //"
        entrar = true
    }
    if(ciudad.value.length == 0){
        warnings += " // Ingrese lugar de residencia //"
        entrar = true
    }
    if(cp.value.length == 0){
        warnings += " // Ingrese un código postal //"
        entrar = true
    }
    if(pais.value.length == 0){
        warnings += " // Ingrese su país // "
        entrar = true
    }
    if(telefono.value.length == 0){
        warnings += " // Ingrese su número de teléfono // "
        entrar = true
    }

    /*    if(!regexEmail.test(email.value)){
        warnings += " // El email no es válido // "
        entrar = true
    } */ /*
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado. Recibirá por email sus datos de ingreso"
    }
}) */