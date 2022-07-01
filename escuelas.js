const formulario = document.getElementById('formulario');
//seleccionamos todos los input de formulario (eso es querySelectorAll)
const inputs = document.querySelectorAll('#formulario input');

//todas las expresiones regulares. objeto expresiones con propiedades
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
//funcion tipo flecha
const validarFormulario = (e) =>{
    //accedemosa los eventos qsuceden en el name q puse dentro de input
    switch(e.target.name){
        //pongo las opciones en caso que el name del input sea.... y se ejecuta el codigo q corresponde
        case "usuario":
            //comprobamos con los valores q tenemos en elobjeto expresiones usuario.si es verdad devuelve true sino false
            //hace el test de comprobacion entre lo q hay en dentro del input y lo q yo puse en expresiones regulares
            if(expresiones.usuario.test(e.target.value)){

            }else{
                document.getElementById("grupo__usuario")//HACER CAMBIOS EN FORMULARIOS QUEDE EN EL VIDEO EN MIN 18:18
            }
        break
        case "nombre":
            if(expresiones.nombre.test(e.target.value))
        break
        case "apellido":
            if(expresiones.apellido.test(e.target.value))
        break
        case "password":
            if(expresiones.password.test(e.target.value))
        break
        case "email":
            if(expresiones.email.test(e.target.value))
        break
        case "phone":
            if(expresiones.phone.test(e.target.value))
        break
    }
}


//por cada input me ejecutes un codigo
inputs.forEach((input) =>{
    //por cada input quiero agregarle un evento cada vez q presiona una tecla va a comprobar los campos
    input.addEventListener("keyup", validarFormulario);
    //tambien comprueba cuando hacen click afuera del formulario
    input.addEventListener("blur", validarFormulario)
    })

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

})

/*
const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const documento = document.getElementById("dni")
const direccion = document.getElementById("direc")
const ciudad = document.getElementById("city")
const cp = document.getElementById("cp")
const pais = document.getElementById("pais")
const telefono = document.getElementById("phone")
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

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado. Recibirá por email sus datos de ingreso"
    }
    return false;
}

*/
