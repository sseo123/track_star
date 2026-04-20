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

//using https://songbpm.com/ to find song BPM

const musicDB = [
  // bpm 130 - 135 (6/5)
  { id: 1, title: "Crazy", author: "LE SSERAFIM", bpm: 130, genre: ["pop"], time: 165 },
  { id: 2, title: "En arvil a Paris", author: "Artun Miskciyan", bpm: 132, genre: ["no lyrics"], time: 206 },
  { id: 3, title: "Somewhere in Brooklyn", author: "Bruno Mars", bpm: 130, genre: ["pop"], time: 182 },
  { id: 4, title: "Die For You", author: "The Weeknd", bpm: 134, genre: ["pop"], time: 260 },
  { id: 5, title: "That's What I Like", author: "Bruno Mars", bpm: 134, genre: ["pop"], time: 207 },
  { id: 6, title: "I Thank God", author: "Maverick City Music", bpm: 130, genre: ["christian"], time: 466 },

  // bpm 135 - 140 (3/5)
  { id: 7, title: "Beat It", author: "Michael Jackson", bpm: 139, genre: ["pop"], time: 258 },
  { id: 8, title: "Off The Grid", author: "Kanye West", bpm: 138, genre:["pop"], time: 339 },
  { id: 9, title: "Nonsense", author: "Sabrina Carpenter", bpm: 139, genre: ["pop"], time: 174 },

  // bpm 140 - 145 (3/5)
  { id: 10, title: "Samba de Verao", author: "Lisa Ono", bpm: 141, genre: ["jazz", "no lyrics"], time: 315 },
  { id: 11, title: "Annie (clean)", author: "Wave To Earth", bpm: 148, genre: ["pop"], time: 315 },
  { id: 12, title: "drivers license", author: "Olivia Rodgrigo", bpm: 144, genre: ["pop"], time: 242 },

  // bpm 145 - 150 (1/5)
  { id: 13, title: "Bound 2", author: "Kanye West", bpm: 149, genre: ["pop"], time: 229 },

  // bpm 150 - 155 (1/5)
  { id: 14, title: "No Longer Bound", author: "Forrest Frank", bpm: 154, genre: ["christian", "pop"], time: 180 },

  // bpm 155 - 160 (2/5)
  { id: 15, title: "Shake It Off", author: "Taylor Swift", bpm: 160, genre: ["pop"], time: 219 },
  { id: 16, title: "Happy", author: "Day6", bpm: 160, genre: ["pop"], time: 190 },

  // bpm 160 - 165 (1/5)
  { id: 17, title: "Happy", author: "Pharrell Williams", bpm: 160, genre: ["pop"], time: 233 },

  // bpm 165 - 170 (3/5)
  { id: 18, title: "Good 4 You ", author: "Olivia Rodgigo", bpm: 167, genre: ["pop"], time: 178 },
  { id: 19, title: "Good Life", author: "Kanye West", bpm: 166, genre: ["pop"], time: 207 },
  { id: 20, title: "God is Good", author: "Forrest Frank", bpm: 170, genre: ["pop", "christian"], time: 208 },

  // bpm 170 - 175 (1/5)
  { id: 21, title: "Bliding Lights", author: "The Weeknd", bpm: 171, genre: ["pop"], time: 200},

  // bpm 175 - 180 (3/5)
  { id: 22, title: "Sunday Morning", author: "Maroon 5", bpm: 176, genre: ["pop"], time: 245},
  { id: 23, title: "Follow God", author: "Kanye West", bpm: 180, genre: ["pop"], time: 105 },
  { id: 24, title: "Dive", author: "Olivia Dean", bpm: 180, genre: ["pop"], time: 201 },

  // bpm 180 - 185 (3/5)
  { id: 25, title: "Gran Vals", author: "Francisco Tarrega", bpm: 185, genre: ["no lyrics"], time: 210 },
  { id: 26, title: "Sunflower", author: "Post Malone", bpm: 180, genre: ["pop"], time: 158 },
  { id: 27, title: "Stayed On Him", author: "Terrian", bpm: 180, genre: ["christian"], time: 239 },

  // bpm 185 - 190 (0/5)

  // bpm 190 - 195 (2/5)
  { id: 28, title: "Animals", author: "Maroon 5", bpm: 190, genre: ["pop"], time: 231 },
  { id: 29, title: "This Love", author: "Maroon 5", bpm: 190, genre: ["pop"], time: 206 },

];


let suggestionSongsArr = [];
let setBPM;
let myPlaylist = [];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pace-min").addEventListener("input", updateBPM);
  document.getElementById("pace-sec").addEventListener("input", updateBPM);
  document.getElementById("search-input").addEventListener("input", handleSearch); 
  initalDisplayOfSongs();
});

function initalDisplayOfSongs() {
  suggestionSongsArr = [];

  let container = document.getElementById("valid-card-container");
  container.innerHTML = "";

  for (let song of musicDB) {
    let isInPlaylist = false;

    for (let i = 0; i < myPlaylist.length; i++) {
      if (myPlaylist[i].id === song.id) {
        isInPlaylist = true;
        break;
      }
    }

    if (!(isInPlaylist)) {
      suggestionSongsArr.push(song);
      displaySongs(song, container);
    }
    
  }
}


function displaySongs(song, container) {
    let songSec = song.time % 60;
    let songMin = Math.floor(song.time / 60)
    
    let songSecString = songSec.toString();
  
    if (songSecString.length < 2) {
      songSecString = "0" + songSecString;
    } 

    let songGenreConcant = song.genre.join(" • ");

    container.innerHTML += `
      <div class="suggestion-card">
      <div class="card-album-art">♪</div>
        <div class="card-top">
          <div class="card-info">
            <h4 class="card-title">${song.title}</h4>
            <p class="card-author">${song.author} • ${songGenreConcant}</p>
          </div>
          <div class="card-stats">
            <span class="card-bpm">${song.bpm || "unassigned"} BPM</span>
            <span class="card-time">Song Duration: ${songMin}:${songSecString}</span>
          </div>
        </div>
        <button class="add-btn" onclick="addSong(${song.id})">+</button>
      </div> `;
}


//-------------------------------
//-------------------------------
//everything to do with the bpm
//-------------------------------
//-------------------------------

function calculateBPM() {
  const minTime = document.getElementById("pace-min");
  const secTime = document.getElementById("pace-sec");

  if (minTime.value.length > 2) {
    minTime.value = minTime.value.slice(0, 2);
  }
  if (secTime.value.length > 2) {
    secTime.value = secTime.value.slice(0, 2);
  }

  console.log(Number(minTime.value));

  if (!Number(minTime.value)) {
    return null;
  }

  let minutes = parseInt(minTime.value) || 0;
  let seconds = parseInt(secTime.value) || 0;

  if (minutes > 12 || minutes < 6) {
    return null;
  }
  if (seconds > 59 || seconds < 0) {
    return null;
  }

  //formula from https://katierunsthis.wordpress.com/2011/09/10/speed-training-by-bpm-beats-per-minute/
  let decimalPace = minutes + seconds / 60;

  if (decimalPace >= 6 && decimalPace <= 12) {
    let targetBPM = 250 - 10 * decimalPace;
    return targetBPM;
  }

  return null;
}

function updateBPM() {
  const correctBox = document.getElementById("bpm-result-box");
  const errorBox = document.getElementById("bpm-negative-result-box");
  const bpmDisplay = document.getElementById("bpm-display");

  let minTime = document.getElementById("pace-min").value;
  let secTime = document.getElementById("pace-sec").value;

  if (minTime === "" && secTime === "") {
    correctBox.style.display = "none";
    errorBox.style.display = "none";
    return;
  }

  let bpmResult = calculateBPM();

  if (!(bpmResult === null)) {
    bpmDisplay.innerText = Math.round(bpmResult);
    correctBox.style.display = "";
    errorBox.style.display = "none";
  } else {
    correctBox.style.display = "none";
    errorBox.style.display = "";
  }

  setBPM = bpmResult;
  console.log(setBPM);
}


//-------------------------------
//-------------------------------
//everything to do with search
//-------------------------------
//-------------------------------
function makeLowercase(text) {
  let res;
  res = text.toLowerCase();
  return res;
}

function searchForMatch(songTitle, songAuthor, searchInput) {
  const songTitleLower = makeLowercase(songTitle);
  const songAuthorLower = makeLowercase(songAuthor);
  const searchInputLower = makeLowercase(searchInput);

  let isSongCorrect = false;
  if (songTitleLower.includes(searchInputLower)) {
    isSongCorrect = true;
  }

  let isAuthorCorrect = false;
  if (songAuthorLower.includes(searchInputLower)) {
    isAuthorCorrect = true;
  }

  return isSongCorrect || isAuthorCorrect;
}

function handleSearch() {
  let searchInput = document.getElementById("search-input");
  let userSearch = searchInput.value;

  let container = document.getElementById("valid-card-container");
  let cards = container.getElementsByClassName("suggestion-card");

  for (let i = 0; i < suggestionSongsArr.length; i++) {
    let song = suggestionSongsArr[i];
    let card = cards[i];

    if (searchForMatch(song.title, song.author, userSearch)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}


//-------------------------------
//-------------------------------
//if user decided to use filter
//1. BPM Filter
//2. Genre Filter
//-------------------------------
//-------------------------------

function findBPMMatchingSongs() {
  let tempArr = [];

  for (let song of musicDB) {
    if (song.bpm >= setBPM - 5 && song.bpm <= setBPM + 5) {
      tempArr.push(song);
    }
  }
  return tempArr;
}

function displayBPMFilteredSongs() {
  if (!setBPM) {
    alert("There is currently no valid BPM. Please set one");
    return;
  }

  let validSongs = findBPMMatchingSongs();

  let container = document.getElementById("valid-card-container");
  container.innerHTML = "";

  suggestionSongsArr = [];

  for (let song of validSongs) {
    if (myPlaylist.includes(song)) {
      continue;
    }

    displaySongs(song, container);

    suggestionSongsArr.push(song);
  }
}

function clearBPMFilter() {
  const minInput = document.getElementById("pace-min");
  const secInput = document.getElementById("pace-sec");

  minInput.value = "";
  secInput.value = "";

  setBPM = null;

  const correctBox = document.getElementById("bpm-result-box");
  const errorBox = document.getElementById("bpm-negative-result-box");
  correctBox.style.display = "none";
  errorBox.style.display = "none";

  initalDisplayOfSongs();
}

//-------------------------------
//-------------------------------
//everything to do with the displaying the playlist
//-------------------------------
//-------------------------------


function playlistEmptyState() {
  let container = document.getElementById("playlist-container");
  container.innerHTML = "";

  container.innerHTML = `
    <div class="playlist-grid-header">
      <span class="col-num">#</span>
      <span class="col-title">Title</span>
      <span class="col-bpm">BPM</span>
      <span class="col-time">🕒</span>
    </div>
    <hr class="playlist-divider" />

    <div>
      currently no songs are selected
    </div>
  `;
  
}

function rerenderSongCards() {
  let container = document.getElementById("valid-card-container");
  container.innerHTML = "";

  for (let song of suggestionSongsArr) {
    displaySongs(song, container);
  }
}

function addSong(songID) {
  for (let song of suggestionSongsArr) {
    if (songID === song.id) {
      if (myPlaylist.includes(song)) {
        alert("This song is already in the playlist!");
        return;
      }
      myPlaylist.push(song);
    }
  }

  suggestionSongsArr = suggestionSongsArr.filter((song) => song.id !== songID);

  updateViewablePlaylist();
  rerenderSongCards();
}

function deleteSong(songID) {
  let tempArr = [];

  for (let song of myPlaylist) {
    if (song.id !== songID) {
      tempArr.push(song);
    } else if (song.id === songID) {
      suggestionSongsArr.push(song);
    }
  }
  myPlaylist = tempArr;

  suggestionSongsArr.sort((a, b) => a.id - b.id);

  updateViewablePlaylist();
  rerenderSongCards();
}

function updateViewablePlaylist() {
  let container = document.getElementById("playlist-container");
  container.innerHTML = "";

  container.innerHTML = `
    <div class="playlist-grid-header">
      <span class="col-num">#</span>
      <span class="col-title">Title</span>
      <span class="col-bpm">BPM</span>
      <span class="col-time">🕒</span>
    </div>
    <hr class="playlist-divider" />
  `;

  if (myPlaylist.length < 1) {
    playlistEmptyState();
    return;
  }

  count = 1;
  for (let song of myPlaylist) {
    let songMin = Math.floor(song.time / 60)
    let songSec = song.time % 60;

    let songSecString = songSec.toString();
  
    if (songSecString.length < 2) {
      songSecString = "0" + songSecString;
    } 


    let songGenreConcant = song.genre.join(" • ");

    container.innerHTML += `
      <div class="song-row">
        <div class="song-index">${count}</div>
        <div class="song-info">
          <h3 class="song-title">${song.title}</h3>
          <p class="song-author">Artist: ${song.author} • ${songGenreConcant}</p>
        </div>
          <button class="delete-btn" onclick="deleteSong(${song.id})">-</button>
          <div class="song-duration">${song.bpm} BPM</div>
          <span class="song-duration">${songMin}:${songSecString}</span>
      </div>
    `;
    console.log(song);
    count++;
  }
}