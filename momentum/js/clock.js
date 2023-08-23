const clock = document.querySelector("h2#clock");
const date = document.querySelector("h3#date");

function getDate(){
    const date_inTimer = new Date();
    const years = String(date_inTimer.getFullYear()).padStart(4, '0');
    const months = String(date_inTimer.getMonth()+1).padStart(2, '0');
    const days = String(date_inTimer.getDate()).padStart(2, '0');
    date.innerText=`${years}.${months}.${days}`     ;
}


function getClock(){
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    clock.innerText=`${hours}:${minutes}`;
}
getDate();
getClock();
setInterval(getClock, 1000);