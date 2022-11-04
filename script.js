let btn = document.querySelector("button")
let move = true

function btnOnHover() {
    if (move === true) {
        btn.style.marginTop = Math.floor(Math.random() * 1000) + "px"  
        btn.style.marginLeft = Math.floor(Math.random() * 1000) + "px"  

        move = false
    } else {
        btn.style.marginTop = Math.floor(Math.random() * 1000) + "px"  
        btn.style.marginLeft = Math.floor(Math.random() * 1000) + "px"  
        move = true
    }                      

}

btn.addEventListener("mouseover", btnOnHover)