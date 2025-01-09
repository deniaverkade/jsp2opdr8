let box = document.getElementById("box");

let position = 0

window.addEventListener("keydown", function(e){
    if (e.key == "d"){
        console.log("d")
        position = position +1 ;
        box.style.left = position + "px";
    } else if (e.key == "a"){
        console.log("a")
        position = position +1;
        box.style.right = position + "px";
    } else if (e.key == "w"){
        console.log("w")
        position = position +1;
        box.style.bottom = position + "px";
    } else if (e.key == "s"){
        console.log("s")
        position = position +1;
        box.style.top = position + "px";
    }
})


/* Wanneer s of d toets wordt ingedrukt houdt de w en a toets op met werken. Ik krijg geen foutmeldingen in de console wanneer dit gebeurd, dus ik weet momenteel
 niet hoe ik dit moet oplossen */
