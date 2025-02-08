function updateClock() {
    const clockElement = document.getElementById("digital-clock");
    
    // Get the current time
    const now = new Date();
    
    // Get the hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zero if minutes or seconds are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Format the time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Display the time on the page
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
