function digitalClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h > 12) {
        h = h - 12;
        session = "PM";
    }
    
    if(h == 0) {
        h = 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let currentTime = h + ":" + m + ":" + s + " " + session;
    document.getElementById("time").innerHTML = currentTime; 
}

setInterval(digitalClock, 1000); 
