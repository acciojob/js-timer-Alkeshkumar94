// Function to format the date and time as day/month/year, hours:minutes:seconds
function updateTime() {
  const date = new Date();
  
  // Get individual date and time components
  const day = String(date.getDate());
  const month = String(date.getMonth()); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());
  
  // Format the date and time
  const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
  
  // Display the formatted date and time in the <p> tag
  document.getElementById("timer").innerText = formattedTime;
}

// Call updateTime every second
setInterval(updateTime, 1000);

// Call it once to display the timer immediately when the page loads
updateTime();
