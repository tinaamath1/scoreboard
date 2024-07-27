// setting up timer 
const startingMinutes = 15;
let time = startingMinutes * 60;
let timerInterval;
let periodsPlayed = 1

const timerEl = document.getElementById('timer');
const startButton = document.getElementById('start-timer');
const periodsPlayedEl = document.getElementById('what-period');



function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}
 
function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds :seconds;

    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time --;

    if(time < 0) {
        clearInterval(timerInterval);
        time = startingMinutes * 60;          
        periodsPlayed++;
        periodsPlayedEl.textContent = `${periodsPlayed}`;
    }

    if(periodsPlayed > 4) {
        periodsPlayedEl.style.fontSize = '20px';
        periodsPlayedEl.textContent = 'Game Over!'

    }

}

startButton.addEventListener('click', startTimer)
