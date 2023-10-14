
let score = 0;
let clickCount = 0;


function updateScore() {
    document.getElementById("score").innerHTML = 'score' +score ;
}


function clickCookie() {
    score += 1;
    clickCount += 1;
    updateScore();
}


document.getElementById("cookieButton").addEventListener("click", clickCookie);


