let box = document.getElementById("box")

let position = 0

const boxcolor=["green", "blue", "yellow", "pink","orange"];

function movecube(){
    position = position+ 20;
    box.style.left = position + "px";

    if (position >= innerWidth){
        position = 0;
    }
}

function colorChange() {
    randomNumber = Math.floor(Math.random() * boxcolor.length);
    console.log(randomNumber);
    box.style.backgroundColor = boxcolor[randomNumber];

}

box.addEventListener("click", colorChange);


setInterval(movecube,100);