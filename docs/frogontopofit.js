var countDownDate = new Date("Dec 27, 2022 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        document.getElementById("add-to-calendar").remove();
    } else {

        // Display the result in the element with id="demo"
        document.getElementById("day-timer").innerHTML = days + " days";
        document.getElementById("hour-timer").innerHTML = hours + " hours";
        document.getElementById("minute-timer").innerHTML = minutes + " minutes";
        document.getElementById("second-timer").innerHTML = seconds + " seconds";
    }
}, 1000);