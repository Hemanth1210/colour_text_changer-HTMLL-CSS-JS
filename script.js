function set(){
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(45deg,silver,red)"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "Come to the party";
    }),400);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(90deg,green,yellow)"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "Welcome to the party";
    }),800);
    setTimeout((()=> {
        document.body.style.background="linear-gradient(90deg,pink,white)"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "This is the private party";
    }),1200);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(90deg,yellow,silver)"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "Lets go  tripin my maserati";
    }),1600);
}
  
setInterval(set,1200)
