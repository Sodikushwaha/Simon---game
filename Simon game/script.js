let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let startGameBtn = document.getElementById("start-game-btn");

document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

// Start game on button click (Mobile)
startGameBtn.addEventListener("click", function () {
    if (started === false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});


// Flash effect for game sequence
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 350);
}

// Flash effect for user click
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 350);
}

// Level up function to add a new sequence

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Randomly choose a color from the button array

    let randInd = Math.floor(Math.random() * 4);
    let ranColor = btns[randInd];
    let randBtn = document.querySelector(`#${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

// Check if the user's sequence is correct

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br>Press any key to start`;

        document.querySelector("body").style.background = "red";
        setTimeout(function () {

            document.querySelector("body").style.background = "white";
        }, 200);
        reset();
    }
}

// Handle button press by user

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

// Add event listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset the game after Game Over

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};
