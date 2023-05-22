const StartTime = () => {
    setTimeout(StartTime, 500)
    let curDate = new Date();
    console.log(curDate);
    let time = curDate.getHours();

    if (time > 0 && time < 12) {
        document.getElementById("ajtime").innerHTML = 'Good Morning';
        document.getElementById("ajtime").style.color = 'green';
    }
    else if (time >= 12 && time < 20) {
        document.getElementById("ajtime").innerHTML = 'Good Afternoon';
        document.getElementById("ajtime").style.color = 'red';
    }
    else {
        document.getElementById("ajtime").innerHTML = 'Good Night';
        document.getElementById("ajtime").style.color = 'blue';
    }

    document.getElementById('timemenu').innerHTML = curDate
}