let interval;
let timer;
let isTimerRunning = false;

function startTimer() {
    if (isTimerRunning) {
        return; // Do nothing if the timer is already running
    }

    const hours = parseInt(document.getElementById("hours").value) || 0;
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;

    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalTimeInSeconds > 0) {
        const font = document.getElementById("font").value;
        const color = document.getElementById("color").value;

        clearInterval(interval); // Clear any existing intervals

        let currentTime = totalTimeInSeconds;

        updatePreview(currentTime);

        interval = setInterval(function () {
            updatePreview(currentTime);

            if (currentTime <= 0) {
                clearInterval(interval);
                isTimerRunning = false;
            } else {
                currentTime--;
            }
        }, 1000);

        hideMenu(); // Hide the menu when the timer starts
        isTimerRunning = true;

        applyStyles(font, color); // Apply font and color styles to the timer preview
    }
}

function updatePreview(currentTime) {
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const seconds = currentTime % 60;

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    const timerPreview = document.getElementById("timerPreview");
    timerPreview.textContent = formattedTime;
}

function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

function hideMenu() {
    const menu = document.querySelector('.input-container');
    menu.style.display = 'none';
}

function applyStyles(font, color) {
    const timerPreview = document.getElementById("timerPreview");
    timerPreview.style.fontFamily = font;
    timerPreview.style.color = color;
}
