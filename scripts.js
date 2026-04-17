/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 */

function calculateBPM() {
  const minTime = document.getElementById("pace-min");
  const secTime = document.getElementById("pace-sec");

  if (minTime.value.length > 2) {
    minTime.value = minTime.value.slice(0, 2);
  }
  if (secTime.value.length > 2) {
    secTime.value = secTime.value.slice(0, 2);
  }

  let minutes = parseFloat(minTime.value) || 0;
  let seconds = parseFloat(secTime.value) || 0;

  if (minutes > 12 || minutes < 5) {
    return null;
  }
  if (seconds > 59 || seconds < 0) {
    return null;
  }

  let decimalPace = minutes + seconds / 60;

  if (decimalPace >= 5 && decimalPace <= 12) {
    let targetBPM = 250 - 10 * decimalPace;
    return targetBPM;
  } else {
    return null;
  }
}

function updateBPM() {
  const correctBox = document.getElementById("bpm-result-box");
  const errorBox = document.getElementById("bpm-negative-result-box");
  const bpmDisplay = document.getElementById("bpm-display");

  const minTime = document.getElementById("pace-min").value;
  const secTime = document.getElementById("pace-sec").value;

  if (minTime === "" && secTime === "") {
    correctBox.style.display = "none";
    errorBox.style.display = "none";
    return;
  }

  let bpmResult = calculateBPM();

  if (!(bpmResult === null)) {
    bpmDisplay.innerText = Math.round(bpmResult);
    correctBox.style.display = "block";
    errorBox.style.display = "none";
  } else {
    correctBox.style.display = "none";
    errorBox.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pace-min").addEventListener("input", updateBPM);
  document.getElementById("pace-sec").addEventListener("input", updateBPM);
});
