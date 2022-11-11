let btn = document.querySelector("a")
let move = true
let num = 1
let h1 = document.querySelector("h1")
let yes = document.querySelector(".yes")
let no = document.querySelector(".no")

//
function btnOnHover() {
    if (num != 10 && num < 50) {
        btn.style.marginTop = Math.floor(Math.random() * 90) + "vh"  
        btn.style.marginLeft = Math.floor(Math.random() * 90) + "vw"  
        num += 1
    } else if (num === 10) {
        h1.style.display = "inline-block"
        yes.addEventListener("click", yesf)
        yes.addEventListener("touchstart", yesf)
        no.addEventListener("click", nof)
        yes.addEventListener("touchstart", nof)
    }
    else {
        window.open("http://femboy.in/bambula", '_blank')
    }                  

}

function yesf() {
    location.reload()
            window.open("https://www.youtube.com/watch?v=OgZzUJud3Q4", '_blank')    
}

function nof() {
    num += 1
            h1.style.display = "none"
}

btn.addEventListener("mouseover", btnOnHover)
btn.addEventListener("touchstart", btnOnHover)