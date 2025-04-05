function start() {
    var homebox = document.getElementById("homebox")
    window.localStorage.setItem("overs", homebox?.value)
    window.location.href = "score.html"
}
function dot(event) { dottfsnw() }
function one(event) {
    let scoreboard = document.querySelector(".scoreboard")
    let currentscore = parseInt(scoreboard.textContent)
    scoreboard.textContent = currentscore + 1
    dottfsnw()
}
function two(event) {
    let scoreboard = document.querySelector(".scoreboard")
    let currentscore = parseInt(scoreboard.textContent)
    scoreboard.textContent = currentscore + 2
    dottfsnw()
}
function three(event) {
    let scoreboard = document.querySelector(".scoreboard")
    let currentscore = parseInt(scoreboard.textContent)
    scoreboard.textContent = currentscore + 3
    dottfsnw()
}
function four(event) {
    let scoreboard = document.querySelector(".scoreboard")
    let currentscore = parseInt(scoreboard.textContent)
    scoreboard.textContent = currentscore + 4
    dottfsnw()
}
function six(event) {
    let scoreboard = document.querySelector(".scoreboard")
    let currentscore = parseInt(scoreboard.textContent)
    scoreboard.textContent = currentscore + 6
    dottfsnw()
}
function nb(event) {
    let overslot = document.querySelectorAll(".over>div")
    for (var i = 0; i < overslot.length; i++) {
        if (overslot[i].textContent == "") {
            overslot[i].textContent = "NB"
            let newbox = document.createElement("div")
            let ov = document.querySelector(".over")
            newbox.innerHTML = ""
            ov.append(newbox)
            break
        }
    }
}
function w(event) {
    let overslot = document.querySelectorAll(".over>div")
    for (var i = 0; i < overslot.length; i++) {
        if (overslot[i].textContent == "") {
            overslot[i].textContent = "W"
            let newbox = document.createElement("div")
            let ov = document.querySelector(".over")
            newbox.innerHTML = ""
            ov.append(newbox)
            break
        }
    }
}
function next() {
    let num = document.querySelector(".num")
    var overs = window.localStorage.getItem("overs")
    let allbutton = document.querySelector(".allbutton")
    allbutton.style.display = "block"
    num.textContent = parseInt(num.textContent) + 1
    if (parseInt(num.textContent) === parseInt(overs)) {
        alert("over finished.......if(isFirstHalf)go to Start second Half.............else:click 'End match'button")
    }
    else {
       refresh()
    }
}
function second() {
    var sb = document.querySelector(".scoreboard")
    var tar = document.querySelector(".targetboard")
    tar.textContent = parseInt(sb.textContent) + 1
    sb.textContent = "0"
    let num = document.querySelector(".num")
    num.textContent = "0"
    refresh()
}
function end() {
    var sb = document.querySelector(".scoreboard")
    var tar = document.querySelector(".targetboard")
    if (parseInt(sb.textContent) > parseInt(tar.textContent)) {
        alert("Batting team win...........")
    }
    else if (parseInt(sb.textContent) == parseInt(tar.textContent)) {
        alert("Match is draw...........")
    }
    else {
        alert("Bowling team win...........")
    }
}
function hidden(overslot) {
    if (overslot[overslot.length - 1]?.textContent != "") {
        let allbutton = document.querySelector(".allbutton")
        allbutton.style.display = "none"
        setTimeout(() => {
            alert("current over is finished.......Go to next over")

        }, [1000])
    }

}
function dottfsnw() {
    let overslot = document.querySelectorAll(".over>div")
    for (var i = 0; i < overslot.length; i++) {
        if (overslot[i].textContent == "") {
            overslot[i].textContent = event.target.textContent
            break
        }
    }
    hidden(overslot)
}
function refresh(){
    var classover = document.querySelector(".over")
classover.parentElement.remove()
var newdiv = document.createElement("div")
var inner = document.querySelector(".inner")
newdiv.innerHTML = " <div class='over'><div></div><div></div><div></div><div></div><div></div><div></div></div>"
inner.append(newdiv)
}
    

