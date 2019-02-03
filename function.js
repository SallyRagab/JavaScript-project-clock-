function moveHands() {
  with (new Date()) {
    h = 30 * ((getHours() % 12) + getMinutes() / 60); // 30 degrees hour
    m = 6 * getMinutes(); // six degrees every minute
    s = 6 * getSeconds(); // six degrees every second

    // setting the rotate CSS attribute to these degree values
    document.getElementById('second').style.cssText =
    "-webkit-transform:rotate("+ s + "deg);";
    document.getElementById('minute').style.cssText =
    "-webkit-transform:rotate("+ m + "deg);";
    document.getElementById('hour').style.cssText =
    "-webkit-transform:rotate("+ h + "deg);";

  setTimeout(moveHands, 1000); //calling the function every second
  }
}
  window.onload = moveHands; // setting the function to run when the page loads
