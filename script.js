//  accesing the buttons 
let startBtn = document.getElementById('str-btn');
let stopBtn = document.getElementById('stp-btn');
let resetBtn = document.getElementById('rest-btn');

//  intialinzing all timing values 
let msec = 0;
let sec = 0;
let min = 0;
let timerId = null;
//  accesing all timing sections 
let msecElement = document.getElementById('msec');
let secElement = document.getElementById('sec');
let minElement = document.getElementById('min');

//  eventlistner to starttimng 
startBtn.addEventListener('click', () => {
    if (timerId !== null) {
        clearInterval(timerId);
    }

    timerId = setInterval(startTimer, 10);

});
//  stop button when we click  it will clear the interval 

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
});

// resetBtn  all the value will reset to 0; and again call the updatedisplay


resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    msec = 0;
    sec = 0;
    min = 0;
    updateDisplay();
});
//  timer to run every 10ms 
function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
    }
    if (sec === 60) {
        sec = 0;
        min++;
    }
    updateDisplay();
}
//  displaying the values 
function updateDisplay() {
    let mString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    msecElement.innerHTML = `${mString}:ms`;
    secElement.innerHTML = `${secString}:sec`;
    minElement.innerHTML = `${minString}min:`;
}
