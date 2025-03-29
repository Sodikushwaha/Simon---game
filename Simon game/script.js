let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
if(started == false) {
    console.log("game is started");
    started = true;
    levelUp();
}
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },350);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },350);
}
function levelUp(){
    userSeq = [];
level++;
h2.innerText = `Level ${level}`;
//random btn choose
let randInd = Math.floor(Math.random()*4);
let ranColor = btns[randInd];
let randBtn = document.querySelector(`.${ranColor}`);

gameSeq.push(ranColor);
console.log(gameSeq);
gameFlash(randBtn);
}

//check
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.background = "red";
        setTimeout(function(){
            document.querySelector("body").style.background = "white";
        },200);
        reset();
    }
}
function btnPress(){

let btn = this;
userFlash(btn);

let userColor = btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
//reset
function reset(){
    started == false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};