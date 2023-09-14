let count = 0;


let countEl = document.getElementById("count-el")


let saveEl = document.getElementById("save-el")

let resetEl =document.getElementById("reset-el")

console.log(countEl)



function increment()
{
    count += 1
    countEl.innerText = count
}

function save()
{
    let countstr = count + "-"
    saveEl.innerText += countstr
    countEl.textContent = 0
    count=0
}

function reset()
{ 

    count=0

}