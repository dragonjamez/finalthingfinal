startbtn = document.createElement("button")
startbtn.innerText = "start playing"
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
    
})
document.body.appendChild(startbtn)
timerText = document.createElement("timerText")
document.body.appendChild(timerText)
interval = 0 
shopbtn = document.createElement("button")
shopbtn.innerText = "open shop"
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
class item{
    constructor(name,cost,onetime){
        this.name = name
        this.cost = cost
        this.onetime = onetime
        this.button.innerText = name
    }
    buy(){
       localStorage.thetimer = localStorage.thetimer-cost
    }
}
regularbgchange =new item("background change cheap",100,false)
