let countEl =document.getElementById("count-el")
let saveEl =document.getElementById("saveEl")
let count = 0
function increment(){
    count +=  1
    countEl.innerText=count
}

function save() {
    let countP = count + " - "
    saveEl.textContent += countP
    countEl.textContent =0
    count =0
}
 

