let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "pink", "green"];

let started = false;
let level = 0;

let startBtn = document.querySelector(".colorbtn");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let simon = document.querySelector(".simon-game");
let resetBtn = document.querySelector(".reset-btn");


startBtn.addEventListener("click", function () {
    if (started == false) {
        started = true;
        levelUp();
    };
});

function flashCard(btn) {
    btn.classList.add("white");
    setTimeout(function () {
        btn.classList.remove("white");
    }, 150);
};

function levelUp() {
    userSeq = [];
    level++;
    console.log("Level is " + level);
    h1.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 3);
    let randomColor = btns[random];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    flashCard(randomBtn);
    console.log(gameSeq);
};

function checkColor(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        };
        console.log("Correct");
    } else {
        console.log("Incorrect");

        h1.innerHTML = `Game Over your score was <b>${level}</b>`;
        body.style.background = "red";
        setTimeout(function () {
            body.style.background = "white";
        }, 150);
        simon.style.display = "none";
        resetBtn.style.display = "block";
    };
};
resetBtn.addEventListener("click", function () {
    reset();
    resetBtn.style.display = "none";
    simon.style.display = "flex";
});

function reset() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    setTimeout(() => {
        started = true;
        levelUp();
    }, 500);
};

function btnPress() {
    let btn = this;
    flashCard(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    console.log(userSeq);
    checkColor(userSeq.length - 1);
};

let allBtn = document.querySelectorAll(".btn")
for (const btn of allBtn) {
    btn.addEventListener("click", btnPress);
};