let solicitud =document.getElementById("solicitud").value
function inicio (){
    solicitud =document.getElementById("solicitud").value
}

let cambio =document.getElementById("cambio")
function funcion1(){
    cambio.innerHTML=`<p> los caracteres de la palabra son`+solicitud.length+`</p>` 
}
function funcion2(){
    cambio.innerHTML=`<p> en mayuscula la palabra se ve asi `+solicitud.toUpperCase()+`</p>`
} 
function funcion3(){
    cambio.innerHTML=`<p> en  minuscula la palabra es `+solicitud.toLowerCase()+`</p>`
}
function funcion4(){
    cambio.innerHTML=`<p> el primer caracter de la palabra es `+solicitud.charAt()+`</p>`
}
       



