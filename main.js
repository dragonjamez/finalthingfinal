startbtn = document.createElement("button")
startbtn.id = "shop"
startbtn.innerText = "start playing"
shopclosebtn = document.createElement("button")
shopclosebtn.innerText = "close shop"
shopclosebtn.style.visibility = 'hidden'
startbtn.addEventListener("click",() => {
    startbtn.remove()
    if (localStorage.thetimer == "NaN") 
        localStorage.thetimer = 0;
    else {
        localStorage.thetimer++
        timerText.textContent = "you have wasted time for " + localStorage.thetimer + " seconds"
  }
    timerText.textContent = "you have wasted time for " + localStorage.thetimer + " seconds"
    interval = setInterval(timer,1000)
    document.body.appendChild(shopbtn)
    document.body.appendChild(shopclosebtn)
    
})
document.body.appendChild(startbtn)
timerText = document.createElement("timerText")
document.body.appendChild(timerText)
interval = 0 
function timer() {
    if (localStorage.thetimer == "NaN") {
    localStorage.thetimer = 0;
    }
    else {
        localStorage.thetimer++
        timerText.textContent = "you have wasted time for " + localStorage.thetimer + " seconds"
  }
    timerText.textContent = "you have wasted time for " + localStorage.thetimer + " seconds"
}
shopbtn = document.createElement("button")
shopbtn.innerText = "open shop"
function changebg(){
    color = Math.floor(Math.random()* 16777215).toString(16)
    color = "#"+color
    document.body.style.backgroundColor = color
}
class item{
    constructor(name,cost,func){
        this.name = name
        this.cost = cost
        this.button = document.createElement("button")
        this.button.textContent = name
        this.button.addEventListener("click",() =>{
            if ((localStorage.thetimer-cost) > 0){
                localStorage.thetimer = localStorage.thetimer-cost
                func()
            }

        })
    }
}
regularbgchange = new item("background change cheap",10,changebg)
shopbtn.addEventListener("click",()=>{
    shopbtn.style.visibility = 'hidden'
    shopclosebtn.style.visibility = 'visible'
    regularbgchange.button.style.visibility = 'visible'
    document.body.appendChild(regularbgchange.button)
    expensivebgchange = new item("background change expensive",1000)
})
shopclosebtn.addEventListener("click",()=>{
    shopbtn.style.visibility = 'visible'
    shopclosebtn.style.visibility = 'hidden'
    regularbgchange.button.style.visibility = 'hidden'
    expensivebgchange = new item("background change expensive",1000)
})
