function conversion2(e){
   e.preventDefault()
let Enviar=document.getElementById("Enviar").value
let lado1=parseInt(document.getElementById("lado1").value)
let lado2=parseInt(document.getElementById("lado2").value)
let lado3=parseInt(document.getElementById("lado3").value)

        if (lado1==lado2 && lado2==lado3 && lado1==lado3) {
            alert("su triangulo es un  equilatero")
         }
         else if (lado1!=lado2 && lado2!=lado3 && lado3!=lado1) {
            alert("su triangulo es un escaleno") 
         } 
         else if(lado1==lado2 && lado2==lado3 && lado3!=lado1){
           alert("su triangulo es un isoceles")
         }
         else if (lado1!=lado2 && lado2==lado3 && lado3==lado1){
           alert("su triangulo es isoceles")
         }
         else if(lado1==lado2 && lado2!=lado3 && lado3==lado1){
         alert("su triangulo es isoceles")
         }
         else {
            alert("No dejes campos vacios")
         }
           


}