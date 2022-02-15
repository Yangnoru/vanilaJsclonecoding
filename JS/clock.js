const clock = document.querySelector("h2#clock");


/* 아래 hour.minute.seconds는 typeof 찍어보면 number임 */

function getclock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML=`${hour}:${minute}:${seconds}`;
};

getclock();
setInterval(getclock, 1000)