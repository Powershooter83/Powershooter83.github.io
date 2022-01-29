// document.getElementById("underTitle").innerHTML = 'test';

window.onload = function (){
    updateTime();
}

function updateTime(){
    let date = new Date();
    let options = { month: "long",
        day: "numeric", hour: "2-digit", minute: "2-digit",
        second: "2-digit"
    };
    document.getElementById('underTitle').innerText =
        date.toLocaleTimeString("de-de", options);

}

setInterval(updateTime, 1000);