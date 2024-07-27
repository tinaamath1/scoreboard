
// setting up scoreboard
let zeroEl = document.getElementById('zero-el');
let zeroElGuest = document.getElementById('zero-el-guest');
let count = 0;
let countGuest = 0; 

function updateScoreboard(){ 
    zeroEl.textContent = count; 
    zeroElGuest.textContent = countGuest; 
    
    if (count > countGuest){
        zeroEl.style.color = '#FAF6F6'
        zeroElGuest.style.color = '#6B7280'
    } else if (count < countGuest) {
        zeroEl.style.color = '#6B7280'
        zeroElGuest.style.color = '#FAF6F6'
    } else {
        zeroEl.style.color = '#FAF6F6'
        zeroElGuest.style.color = '#FAF6F6'
    }
    
}

// home team functions 
function point() {
    count += 1
    zeroEl.textContent = count;
    updateScoreboard();
}

function twoPoint() {
    count += 2
    zeroEl.textContent = count;
    updateScoreboard();
}

function threePoint() {
    count += 3
    zeroEl.textContent = count;
    updateScoreboard();
}

// guest team functions 
function pointGuest() {
    countGuest += 1
    zeroElGuest.textContent = countGuest;
    updateScoreboard();
}

function twoPointGuest() {
    countGuest += 2
    zeroElGuest.textContent = countGuest;
    updateScoreboard();
}

function threePointGuest() {
    countGuest += 3; 
    zeroElGuest.textContent = countGuest;
    updateScoreboard();
}

function resetGame(){
    count = 0; 
    countGuest = 0; 
    zeroEl.textContent = count; 
    zeroElGuest.textContent = countGuest;
    updateScoreboard();
}

