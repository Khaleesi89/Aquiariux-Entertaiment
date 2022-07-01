/*
const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const formu = document.getElementById("formu")
const parrafo = document.getElementById("warnings")

formu.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    parrafo.innerHTML = ""
    if(usuario.value.length == 0){
        usuario.style= "border: red 3px solid"
        warnings += "Ingrese su usuario <br>"
        entrar = true
    }
    if(password.value.length < 8 || password.value.length > 8){
        password.style= "border: red 3px solid"
        warnings += "Password Inválido <br>"
        entrar = true
    }
    
    if(entrar){
        parrafo.innerHTML = warnings
    }
})
*/


        function datosObligatorios(){
            //CREA TRES VARIABLES Y UN ARRAY
            let arrayDatosValidar, datosCorrectos
            arrayDatosValidar = [];
            const parrafo = document.getElementById("warnings");
            //EN EL ARRAY GUARDA TODOS LOS DATOS INGRESADOS POR EL USUARIO EN LOS INPUT
            arrayDatosValidar["nombre"] = document.getElementById("nombre");
            arrayDatosValidar["apellido"] = document.getElementById("apellido");
            arrayDatosValidar["dni"] = document.getElementById("dni");
            arrayDatosValidar["fechaNac"] = document.getElementById("fechaNac");
            arrayDatosValidar["telefono"] = document.getElementById("phone");
            arrayDatosValidar["email"] = document.getElementById("email");
            
            //RECORRE TODO EL ARRAY GUARDADO
            for(const index in arrayDatosValidar){
                //index es como se llama el campo donde esta guardado en el array
                if(validarDato(arrayDatosValidar[index].value, index)){

                    //SEGUN SI ES TRUE O FALSE CAMBIA LA CLASE EN EL CSS Q TIENE Q SE LLAMA OBLIGATORIO Y CORRECTO
                    arrayDatosValidar[index].classList.remove("erroneo");//QUITA LA MARCA DE ERRONEO
                    arrayDatosValidar[index].classList.add("correcto");//PONE EL CORRECTO
                    datosCorrectos = true;
                }else{
                    arrayDatosValidar[index].classList.add("erroneo");//HACE VICEVERSA
                    arrayDatosValidar[index].classList.remove("correcto");
                    datosCorrectos = false;
                }
            }
       
    


        function validarDato(dato, tipo){ ///valida segun el tipo de dato que se ingreso
            let expresionRegular, verificacion;
            expresionRegular = {
                nombre: /^[a-zA-Z]{3,30}/,
                email: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.\w+/,
                telefono: /^[0-9]{0,10}$/};
            switch(tipo){
                case "nombre":
                    if(expresionRegular.nombre.test(dato)){
                        verificacion = true;
                    }else{
                        verificacion = false;
                        
                    }
                break;

                case "apellido":
                    if(expresionRegular.nombre.test(dato)){
                        verificacion = true;
                    }else{
                        verificacion = false;
                    }
                break;
                case "email":
                    if((expresionRegular.email.test(dato)) && !(dato == localStorage.getItem("email"))){
                        verificacion = true;
                    }else{
                        verificacion = false;
                    }
                break;

                case "fechaNac":
                    if(validarFecha(dato)){
                        verificacion = true;
                    }else{
                        verificacion = false;
                    }
                break;

                case "telefono":
                    if(expresionRegular.telefono.test(dato)){
                        verificacion = true;
                    }else{
                        verificacion = false;
                    }
                break;
            }
            return verificacion;
        }


        //VALIDACION FECHA

        function esBisiesto(anio){
            if ((anio % 4 == 0) && (anio % 100 != 0) || (anio % 400 == 0)){
                bisiesto = true;
            }else{
                bisiesto = false;
            }
            return bisiesto;
        }

        //la fecha ingresa como una string
        function validarFecha(fecha){
            let anio, mes, dia
            anio = fecha.substring(0,4); //del string 0 hasta el 4 se gguarda en anio 
            mes = fecha.substring(5,7);//del string 5 al 7 el mes
            dia = fecha.substring(8,11); //del string se guarda el dia
            if(fecha == ""){
                fechaValida = false;
            }else{
                anio = parseInt(anio);//con parseInt convierte string en numeros
                mes = parseInt(mes);
                dia = parseInt(dia);
                //hace las cmparaciones...si lo ingresado en dia es mayor a 30 para mese 4 6 9 y 11 dara falso porq esos meses tienen 30 dias
                if((dia > 30) && ((mes == 4) || (mes == 6) || (mes == 9) || (mes == 11) )){
                    fechaValida = false;
                    //para la siguiente si es hasta 31 se fija los meses q tienen 31 dias y si no se cumple da false
                }else if((dia > 31) && ((mes == 1) || (mes == 3) || (mes == 5) || (mes == 7) || (mes == 8) || (mes == 10) || (mes == 12))){
                    fechaValida = false;
                    //para validar el mes de febreero q tiene menos dias y suele ser bisiesto cada 4 años
                }else if( (mes == 2) && (dia > 28) && (!esBisiesto(anio))){
                    fechaValida = false;
                }else{
                    //si cumple con todo, es true
                    fechaValida = true;
                }
            }
            return fechaValida;
        }
    }
