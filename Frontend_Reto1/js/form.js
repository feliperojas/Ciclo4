/**
 * capturar etiquetas para poder manipular 
 */

const errores = document.getElementsByClassName("err")
const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("entrar")

/**
 * ocultar mensajes de alerta
 */

for(let i=0;i<errores.length;i++){
    errores[i].style.display = "none"
}

email.addEventListener("click",(e)=>{
    e.preventDefault()
    errores[0].style.display="none"
})

password.addEventListener("click",(e)=>{
    e.preventDefault()
    errores[1].style.display="none"
})

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    validar()
    if(validarEmail(email.value) && validarPassword(password.value)){
        alert("validado el formulario")
    }
})

const validar=()=>{
    let val1=validarEmail(email.value)?"none":"block"
    let val2=validarPassword(password.value)?"none":"block"
    errores[0].style.display=val1
    errores[1].style.display=val2
}

/**
 * validar email 
 */
const validarEmail = (email)=>{
var regex = /^([a-z-0-9_\.\-])+\@(([a-z-0-9\-])+\.)+([a-z-0-9]{2,4})+$/;
    return regex.test(email) ? true : false;   
}

 /**
     * valida El Password Mínimo ocho caracteres, al menos una letra mayúscula,
                  una letra minúscula, un número y un carácter especial:
     */

const validarPassword=(password)=>{
   
    var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(password) ? true : false;
}