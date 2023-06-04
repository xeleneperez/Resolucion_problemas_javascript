//acceder a un formulario

let form=document.getElementById("validacion")
//Establecer reglas de validacion
let fe1=document.querySelector("#nodoc .feedback")

let fe2=document.querySelector("#camponombre .feedback")

const $number=/^[0-9]{1,15}/
const $textos=/^[A-Za-zñÑáÁ]{1,50}/
const $correo=/^[([A-Za-z+@+.])]/

//validacion de formulario
form.nodoc.addEventListener('input',(e)=>{
    e.preventDefault();
    //test si la cadena de valor coincide con la cadena que defines en number
if($number.test(e.target.value)){
    //console.log(e.target.value)
    form.nodoc.setAttribute("class","success")
    fe1.style.setProperty("visibility","hidden")
    fe1.style.setProperty("opacity","0")
}
else{
    form.nodoc.setAttribute("class","error")
    fe1.textContent=" solo púede digitar valores minimos de 1"
    fe1.style.setProperty("opacity","1")
    fe1.style.setProperty("visibility","visible")
}
})
//formulario2
form.nombre.addEventListener('input',(e)=>{
    e.preventDefault();
    if($textos.test(e.target.value)){
        //console.log(e.target.value)
        form.nombre.setAttribute("class","success")
        fe2.style.setProperty("visibility","hidden")
        fe2.style.setProperty("opacity","0")
    }
    else{
        form.nombre.setAttribute("class","error")
        fe2.textContent=" solo púede digitar textos con mayusculas A-Z"
        fe2.style.setProperty("opacity","1")
        fe2.style.setProperty("visibility","visible")
    }
   
})

