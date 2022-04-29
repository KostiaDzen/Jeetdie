// TIME
// Set the date we're counting down to
var countDownDate = new Date("May 25, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =  `<div class="item__time">
    <div class="item__num">${days}</div><div class="item__text">DAYS</div></div>` +
    `<div class="item__time">
    <div class="item__num">${hours}</div><div class="item__text">HOURS</div></div>` +
    `<div class="item__time">
    <div class="item__num">${minutes}</div><div class="item__text">MINUTES</div></div>` +
    `<div class="item__time">
    <div class="item__num">${seconds}</div><div class="item__text">SECONDS</div></div>`;
    
    //+ hours + minutes + seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);