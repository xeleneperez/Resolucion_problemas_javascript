window.addEventListener("load", function(){
    // eventos para botones 
    //evento click
    document.getElementById("hombre").addEventListener("click", function(){
        document.getElementById("saludo").innerHTML= "el genero que ha seleccionado ha sido hombre";
    })
    document.getElementById("mujer").addEventListener("click", function(){
        document.getElementById("saludo").innerHTML= "el genero que ha seleccionado ha sido mujer";
    })
    // evento doble click
    document.getElementById("enviar").addEventListener("dblclick", function(){
        document.getElementById("saludo").innerHTML= "hola buenos dias/tardes";
    })
    // maouse over si se pasa encima el mouse
    document.getElementById("envio").addEventListener("mouseover", function(){
        document.getElementById("saludo").innerHTML= "usted esta en el index";
    })
  //mouseout
    document.getElementById("b2").addEventListener("mouseout", function(){
        document.getElementById("saludo").innerHTML= "usted esta en el index";
    })
    //eventos para caja de texto 
    // keyup
    document.getElementById("caja").addEventListener("keyup", function(){
        document.getElementById("saludo").innerHTML= "gracias";
    })
    //focus
    document.getElementById("caja2").addEventListener("focus", function(){
        document.getElementById("saludo").innerHTML= "ingrese su nombre";
    })
    //blur al seleccionar una caja de texto
    document.getElementById("caja3").addEventListener("blur", function(){
        document.getElementById("saludo").innerHTML= "este es el blur";
    })
    //listas desplegables 
    //change cada vez que hay un cambio 
    document.getElementById("opciones").addEventListener("change", function(){
        document.getElementById("saludo").innerHTML= "gracias por su eleccion";
    })
    
});

