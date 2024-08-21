


document.querySelector("#btn").addEventListener("click",rollDice);


function rollDice(){

document.querySelectorAll("img")[0].classList.add("button-clicked");
document.querySelectorAll("img")[1].classList.add("button-clicked");     

var randomNumber1 = ((Math.random()*6)+1);
randomNumber1 = Math.floor(randomNumber1);


var randomNumber2 = ((Math.random()*6)+1);
randomNumber2 = Math.floor(randomNumber2);

var newattribute1 = ("dice"+ randomNumber1+".png");
var newattribute2 = ("dice"+ randomNumber2+".png") ;
document.querySelectorAll("img")[0].setAttribute("src", newattribute1);
document.querySelectorAll("img")[1].setAttribute("src", newattribute2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is winner.";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 is winner.";
}else{
    document.querySelector("h1").innerHTML = "Drow";
}

setTimeout(remove,1000);

 

var audio = new Audio("Sounds/dice-142528.mp3");
 audio.play();
}

function remove(){

    document.querySelectorAll("img")[0].classList.remove("button-clicked");
    document.querySelectorAll("img")[1].classList.remove("button-clicked"); 
}
   
    


