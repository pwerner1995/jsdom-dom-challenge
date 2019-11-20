let counter = document.getElementById("counter")

let currCount = 0;

let body = document.querySelector("body")

let ul = document.querySelector("ul")

let pause = document.querySelector("#pause")

let likeHash = {}

let clock = setInterval(setTime, 1000);

function setTime(){
    currCount ++;
    counter.innerText = currCount
}

function likeTime(like){
    if (!likeHash[`${currCount}`]){
        likeHash[`${currCount}`] = 1
    }else if (likeHash[`${currCount}`]){
        likeHash[`${currCount}`] ++;
    }
    like.innerHTML = `${currCount} has been liked ${likeHash[`${currCount}`]} times.`
    
}

body.addEventListener("click", function(e){
    if(e.target.id === "minus"){
        currCount = parseInt(currCount) - 1
        counter.innerHTML = currCount
    }else if(e.target.id === "plus"){
        currCount = parseInt(currCount) + 1
        counter.innerHTML = currCount
    }else if(e.target.innerHTML === "resume"){
        clock = setInterval(setTime, 1000)
        pause.innerHTML = "pause"
    }else if(e.target.id === "pause"){
        clearInterval(clock)
        pause.innerHTML = "resume"
    }else if(e.target.dataset.purpose === "like"){
        if(ul.querySelector(`[data-id= "${currCount}"]`)){
            let like = ul.querySelector(`[data-id= "${currCount}"]`)
            likeTime(like)
            
        }else{
            let like = document.createElement("li")
            like.dataset.id = `${currCount}`
            likeTime(like)
            ul.appendChild(like)
        }
    }
        
    
})


let form = document.querySelector("form")

form.addEventListener("submit", function(e){
    let list = document.getElementById("list")
    let comment = form.querySelector("#comment-input")
    let submit = form.querySelector("#submit")
    let newComment = document.createElement("p")
    newComment.innerText = comment.value
    list.appendChild(newComment)
    e.preventDefault();
})



