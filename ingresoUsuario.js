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


function abrirEmergente(){
    var overlay = document.getElementById("overlay")
    var popup = document.getElementById("popup")
    var btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.addEventListener('load', function(){
	    overlay.classList.add('active');
	    popup.classList.add('active');
    });

    btnCerrarPopup.addEventListener('click', function(e){
	    e.preventDefault();
	    overlay.classList.remove('active');
	    popup.classList.remove('active');
    });


}
