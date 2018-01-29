
var anykey = document.querySelector("h3");

document.onkeypress=function(e){
    window.open("game.html","_self");
}

LoopLight();

function LoopLight(){
    setTimeout(function(){
        anykey.classList.toggle("neon-light");
        LoopLight();
    }, 500);
}

