// Select elements for analog clock hands
const hourEnd = document.querySelector('.hour-end');
const minEnd = document.querySelector('.min-end');
const secEnd = document.querySelector('.sec-end');

// Select elements for digital clock
const digitalHour = document.querySelector('.dh');
const digitalMin = document.querySelector('.dm');
const digitalSec = document.querySelector('.ds');

// Function to update the clock
function updateClock() {
    const now = new Date();
    
    // Analog clock calculations
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secDegree = 6*seconds
    const minDegree = 6*minutes;
    const hourDegree = 30*hours+hours/2 ;


    secEnd.style.transform = `rotate(${secDegree}deg)`;
    minEnd.style.transform = `rotate(${minDegree}deg)`;
    hourEnd.style.transform = `rotate(${hourDegree}deg)`;
    
    // Digital clock display
    digitalHour.innerText = (hours < 10 ? '0' : '') + hours + ':';
    digitalMin.innerText = (minutes < 10 ? '0' : '') + minutes + ':';
    digitalSec.innerText = (seconds < 10 ? '0' : '') + seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set clock on page load

