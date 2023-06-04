function conversion(p)
{   p.preventDefault()
let temp=document.getElementById("temp").value
let op1=document.getElementById("op1").value
let op2=document.getElementById("op2").value
 //f a k
if (op1=="F" && op2=="K") {
    resultado=(temp-32)*5/9 + 273.15
    alert(resultado.toFixed())
}
// f a c
else if (op1=="F" && op2=="C") {
    resultado=(temp-32)*5/9
    alert(resultado.toFixed())
}
 // c a k
else if (op1=="C" && op2=="K") {
    resultado=temp+273.15
    alert(resultado)
} 
 // c a f
else if (op1=="C" && op2=="F") {
    resultado=(temp*9/5)+32
        alert(resultado.toFixed())
} 
 // k a c
else if (op1=="K" && op2=="C"){
    resultado=temp-273.15
    alert(resultado.toFixed())
}
else if (op1=="K" && op2=="F"){
   resultado=(temp-273.15)*9/5 + 32
   alert (resultado.toFixed()) 
}
else{
    alert("sss")
}

//caf

}




