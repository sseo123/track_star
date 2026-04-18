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

// when it comes to the timer, some chars are allowed ("e", "-", "+", ".")

const musicDB = [
  {
    id: 1,
    title: "test0",
    author: "test00",
    bpm: 150,
    genre: "pop",
    time: 200,
  },
  { id: 2, title: "test1", author: "test11", bpm: 154, genre: "christian" },
  { id: 3, title: "test2", author: "test22", bpm: 150, genre: "jazz" },
  { id: 4, title: "test3", author: "test33", bpm: 152, genre: "pop" },
  { id: 5, title: "test4", author: "test44", bpm: 155, genre: "pop" },
];

let myPlaylist = [];

let setBPM;

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

  setBPM = bpmResult;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pace-min").addEventListener("input", updateBPM);
  document.getElementById("pace-sec").addEventListener("input", updateBPM);
});

//this will be all part of the creating the playlist, search, filter, add, and remove

// this function takes all of the valid songs that match the BPM and append it to an array
function findValidSongs() {
  let validSongArr = [];

  for (let song of musicDB) {
    if (song.bpm >= setBPM - 5 && song.bpm <= setBPM + 5) {
      validSongArr.push(song);
    }
  }
  return validSongArr;
}

// we need a function to create and display all of the cards that are valid
function createCardsForValidSongs() {
  let validSongs = findValidSongs();

  console.log(validSongs);
  let container = document.getElementById("valid-card-container");
  container.innerHTML = "";

  for (let song of validSongs) {
    if (myPlaylist.includes(song)) {
      continue;
    }

    container.innerHTML += `
      <div class="suggestion-card">
        <div class="card-top">
          <div class="card-info">
            <h4 class="card-title">${song.title}</h4>
            <p class="card-author">${song.author} • ${song.genre}</p>
          </div>
          <div class="card-stats">
            <span class="card-bpm">${song.bpm} BPM</span>
            <span class="card-time">${song.time || "3:15"}</span>
          </div>
        </div>
        <button class="add-btn" onclick="addSong(${song.id})">+</button>
      </div> `;
  }
}

//we need a function to find the id of the card that was just added to the playlist
function addSong(songID) {
  for (let song of musicDB) {
    if (songID === song.id) {
      if (myPlaylist.includes(song)) {
        alert("This song already exists!");
        return;
      }
      myPlaylist.push(song);
    }
  }

  updateViewablePlaylist();
  createCardsForValidSongs();
}

function deleteSong(id) {
  let updatedPlaylist = [];

  for (let song of myPlaylist) {
    if (song.id !== id) {
      updatedPlaylist.push(song);
    }
  }
  myPlaylist = updatedPlaylist;
  updateViewablePlaylist();
  createCardsForValidSongs();
}

function updateViewablePlaylist() {
  let container = document.getElementById("playlist-container");
  container.innerHTML = "";

  if (myPlaylist.length > 0) {
    container.innerHTML = `
      <div class="playlist-header">
        <span class="index-col">#</span>
        <span class="title-col">Title</span>
        <span class="bpm-col">BPM</span>
      </div>
    `;
  }

  count = 1;
  for (let song of myPlaylist) {
    container.innerHTML += `
      <div class="song-row">
        <div class="song-index">${count}</div>
        <div class="song-info">
          <h3 class="song-title">${song.title}</h3>
          <p class="song-author">Artist: ${song.author} - ${song.genre}</p>
        </div>
          <div class="song-duration">${song.bpm}</div>
          <div class="song-duration">${song.time}</div>
        <button class="delete-btn" onclick="deleteSong(${song.id})">-</button>
      </div>
    `;
    console.log(song);
    count++;
  }
}

// we need a function to handle the searching for each song after validSongs() is called
// we need a function to handle the filtering for each song after validSongs() is called

// this can be where we call everything to be displayed
// in here we can add and delete
function createPlaylist() {}

// function generatePlaylist(){
//   if (!setBPM) {
//     alert("There is currently no valid BPM. Please set one")
//     return;
//   }
// }
