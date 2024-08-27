let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let hours12 = hours % 12 || 12; // 0 becomes 12

    hrs.innerHTML = (hours12<10?"0":"") + hours12;
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

}, 1000);


