const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const pais = document.getElementById("pais")
const telefono = document.getElementById("phone")
const email = document.getElementById("email")
const parrafo = document.getElementById("warnings")

function validacion(){
     /* 
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    */
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
/*
    if(!expReg.test(email.value)){
        email.style= "border: red 4px solid"
        warnings += " // El email no es válido // "
        entrar = true
    } 
    */
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado. Recibirá por email sus datos de ingreso"
    }
    return false;
}

