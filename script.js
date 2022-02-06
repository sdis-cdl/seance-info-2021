// Target date
const countDownDate = new Date("September 21, 2021 19:30:00").getTime();

// Update countdown every second
const x = setInterval(function() {
    let now = new Date().getTime();

    // Date difference in ms
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = days + "j " + hours + "h "
    + minutes + "m " + seconds + "s";

    // Reloads page when countdown is done to trigger redirect
    if (Math.floor(distance/1000) == 0) {
        location.reload();
    }

    // Write some text when countdown is done
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "L'événement commence bientôt, rafraîchissez la régulièrement page";
    }
}, 1000);