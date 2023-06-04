// acceder al boton para abrir el modal
let btnmodal= document.getElementById("btn")
// acceder a la ventana modal
let ventana=document.getElementById("ventana")
// acceder al boton cerrar ventana modal
let close=document.querySelector(".cerrar");

//mostrar la ventana modal  al hacer click
btnmodal.addEventListener("click",()=>{
    ventana.style.display="block";
})
//cerrar la ventana  modal
close.addEventListener("click",()=>{
    ventana.style.display="none";
})
//cerrar con un click en cualquier lugar
 ventana.addEventListener("click",(onblur)=>{
    ventana.style.display="none";
 })



