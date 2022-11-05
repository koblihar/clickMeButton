var btn = document.querySelector("a")
let move = true
let tries = 0;
const h1 = document.querySelector("h1")


function btnOnHover() {
    if (move === true) {
        btn.style.top = Math.floor(Math.random() * 80) + "vh"  
        btn.style.left = Math.floor(Math.random() * 80) + "vw" 
        tries += 1
        console.log(tries);
        checkCompletition()
    } else { 
        btn.innerHTML = "you won"
        h1.style.display = "inline-block"
        move = false
        h1.addEventListener("click", function () {move = true; tries = 0; btn.innerHTML = "click me"; h1.style.display = "none";})
    }                      

}

function checkCompletition(params) {
    if (tries >= 200) {
        move = false
    } else {move = true}
}


btn.addEventListener("mouseover", btnOnHover)
btn.addEventListener("touchstart", btnOnHover)