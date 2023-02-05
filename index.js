let h1= document.getElementById("heading");
h1.style.color==="red"

let btn=document.getElementById("btn");


btn.addEventListener("click",()=>{
   ( h1.innerHTML==="Welcome" && h1.style.color==="red")
   ?(h1.innerHTML="Good Morning", h1.style.color="green")
   :(h1.innerHTML="Welcome",h1.style.color="red");

  
})