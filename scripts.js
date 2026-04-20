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
{ id: 1, title: "Crazy", author: "LE SSERAFIM", bpm: 130, genre: ["pop"], time: 165, albumCover:"https://upload.wikimedia.org/wikipedia/en/3/35/Crazy_%28Le_Sserafim_album%29.png" },
{ id: 2, title: "En arvil a Paris", author: "Artun Miskciyan", bpm: 132, genre: ["no lyrics"], time: 206, albumCover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/94/8d/15/948d15c8-eeeb-e6d9-1a5f-4935f667721d/198001502545.png/600x600bf-60.jpg"},
{ id: 3, title: "Somewhere in Brooklyn", author: "Bruno Mars", bpm: 130, genre: ["pop"], time: 182, albumCover:"https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png/250px-Bruno_Mars_-_Doo-Wops_%26_Hooligans.png" },
{ id: 4, title: "Die For You", author: "The Weeknd", bpm: 134, genre: ["pop"], time: 260, albumCover: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" },
{ id: 5, title: "That's What I Like", author: "Bruno Mars", bpm: 134, genre: ["pop"], time: 207, albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56eOG7QdtlPpCwqmDTlcDfkhzA1O5ZVxlZQ&s" },
{ id: 6, title: "I Thank God", author: "Maverick City Music", bpm: 130, genre: ["christian"], time: 466, albumCover: "https://i.scdn.co/image/ab67616d0000b27347de3848168a18b4f4b2a283"},
{ id: 7, title: "Beat It", author: "Michael Jackson", bpm: 139, genre: ["pop"], time: 258, albumCover: "https://upload.wikimedia.org/wikipedia/en/8/82/Beat_It.jpg" },
{ id: 8, title: "When Christmas Comes Again", author: "grentperez", bpm: 135, genre:["pop"], time: 197, albumCover:"https://cdn-images.dzcdn.net/images/cover/1a3bfb953afa06843769213568280c63/0x1900-000000-80-0-0.jpg" },
{ id: 9, title: "Nonsense", author: "Sabrina Carpenter", bpm: 139, genre: ["pop"], time: 174, albumCover:"https://cdn-images.dzcdn.net/images/cover/ae372ba023cac79e74c1e3e8b6f7a50b/1900x1900-000000-80-0-0.jpg"},
{ id: 10, title: "Nothing", author: "Bruno Major", bpm: 140, genre: ["pop"], time: 163, albumCover:"https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187"},
{ id: 11, title: "Samba de Verao", author: "Lisa Ono", bpm: 141, genre: ["jazz", "no lyrics"], time: 315, albumCover:"https://i.scdn.co/image/ab67616d0000b2730e3dda14110f3237ccbfe349" },
{ id: 12, title: "Annie (clean)", author: "Wave To Earth", bpm: 148, genre: ["pop"], time: 315, albumCover:"https://i.scdn.co/image/ab67616d00001e025082d980a6ca101771609794" },
{ id: 13, title: "drivers license", author: "Olivia Rodrigo", bpm: 144, genre: ["pop"], time: 242, albumCover:"https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a"},
{ id: 14, title: "Bound 2", author: "Kanye West", bpm: 149, genre: ["pop"], time: 229, albumCover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvrsYYtaoeap6Pw4TIsFvLd5_WrgIXVRacw&s" },
{ id: 15, title: "Gold", author: "wave to earth", bpm: 146, genre: ["pop"], time: 280, albumCover: "https://i.scdn.co/image/ab67616d0000b2735082d980a6ca101771609794" },
{ id: 16, title: "Sleep Well", author: "d4vd", bpm: 148, genre: ["pop"], time: 176, albumCover: "https://i.scdn.co/image/ab67616d0000b273e5ff1941799cd30cb2aa072b"},
{ id: 17, title: "Dolce Nonna", author: "Wayne Jones", bpm: 148, genre: ["no lyrics"], time: 229, albumCover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSIXC8BrR92Q6Py3oyK5F7qfLX8gmO4F_wqQ&s" },
{ id: 18, title: "No Longer Bound", author: "Forrest Frank", bpm: 154, genre: ["christian", "pop"], time: 180, albumCover:"https://i.scdn.co/image/ab67616d0000b273ff6322ab25bd4cb8d7dbbb06" },
{ id: 19, title: "Heart To Heart", author: "Mac DeMarco", bpm: 150, genre: ["pop"], time: 211, albumCover: "https://i.scdn.co/image/ab67616d0000b273fa1323bb50728c7489980672" },
{ id: 20, title: "Shake It Off", author: "Taylor Swift", bpm: 160, genre: ["pop"], time: 219, albumCover: "https://upload.wikimedia.org/wikipedia/en/c/c4/Taylor_Swift_-_Shake_It_Off.png" },
{ id: 21, title: "Happy", author: "Day6", bpm: 160, genre: ["pop"], time: 190, albumCover: "https://i.scdn.co/image/ab67616d0000b2730309970945710645006b9c9e"},
{ id: 22, title: "Mistletoe", author: "Justin Bieber", bpm: 162, genre: ["pop"], time: 183, albumCover: "https://upload.wikimedia.org/wikipedia/en/4/49/Under_the_Mistletoe.jpg" },
{ id: 23, title: "Happy", author: "Pharrell Williams", bpm: 160, genre: ["pop"], time: 233, albumCover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHASfGwZjtLOpOkva5Vuum8KtEg9MHU2I17w&s" },
{ id: 24, title: "Tip Toe", author: "HYBS", bpm: 164, genre: ["pop"], time: 225, albumCover:"https://i.scdn.co/image/ab67616d0000b2733f58c8ae420f64a314d54781" },
{ id: 25, title: "So This Is Love", author: "Emile Pandolfi", bpm: 164, genre: ["no lyrics"], time: 172, albumCover: "https://i.scdn.co/image/ab67616d0000b273ee43f855a60fe501416b2933" },
{ id: 26, title: "How Many Kings", author: "Downhere", bpm: 162, genre: ["christian"], time: 259, albumCover:"https://store.centricitymusic.com/cdn/shop/products/How_Many_Kings_DH_HMK_cover_hi.jpg?v=1415661974" },
{ id: 27, title: "Good 4 You ", author: "Olivia Rodrigo", bpm: 167, genre: ["pop"], time: 178, albumCover:"https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a" },
{ id: 28, title: "Falling Behind", author: "Laufey", bpm: 166, genre: ["pop"], time: 174, albumCover:"https://images.genius.com/1705222f3fd6498ad29f50162feb3d21.1000x1000x1.jpg" },
{ id: 29, title: "God is Good", author: "Forrest Frank", bpm: 170, genre: ["pop", "christian"], time: 208, albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EZHqu1-aV-KkBxo4XhFwLS_A9PDAXv2dyg&s" },
{ id: 30, title: "Cold December Night", author: "Michael Buble", bpm: 167, genre: ["pop"], time: 201, albumCover: "https://i1.sndcdn.com/artworks-07orTdvRbLhm-0-t500x500.jpg" },
{ id: 31, title: "Blinding Lights", author: "The Weeknd", bpm: 171, genre: ["pop"], time: 200, albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL17ceoi3eVASem7KOHrRF92hq1WJhFBV0HA&s" },
{ id: 32, title: "Up", author: "Tauren Wells", bpm: 172, genre: ["christian", "pop"], time: 177, albumCover: "https://images.genius.com/c2918e05c3c7f34d3f84e8cc12e7e50c.1000x1000x1.png" },
{ id: 33, title: "Sunday Morning", author: "Maroon 5", bpm: 176, genre: ["pop"], time: 245, albumCover:"https://i.scdn.co/image/ab67616d0000b27392f2d790c6a97b195f66d51e" },
{ id: 34, title: "If I knew", author: "Bruno Mars", bpm: 176, genre: ["pop"], time: 133, albumCover:"https://upload.wikimedia.org/wikipedia/en/7/77/BrunoMarsUJAlbumCover.png" },
{ id: 35, title: "Follow God", author: "Kanye West", bpm: 180, genre: ["pop"], time: 105, albumCover:"https://cdn-images.dzcdn.net/images/cover/57e636dd1b26e8edce941a8450c10477/500x500.jpg" },
{ id: 36, title: "Dive", author: "Olivia Dean", bpm: 180, genre: ["pop"], time: 201, albumCover:"https://i.scdn.co/image/ab67616d00001e02cac9b52107643faf13a7587b" },
{ id: 37, title: "Gran Vals", author: "Francisco Tarrega", bpm: 185, genre: ["no lyrics"], time: 210, albumCover:"https://i.discogs.com/1QlH1zDa0Ywtm5bj5nXk5cPih7liTbUDNJRe28bzJpY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5ODA5/MTg2LTE3MDgwMDc4/NTQtNTc1Ni5qcGVn.jpeg" },
{ id: 38, title: "Sunflower", author: "Post Malone", bpm: 180, genre: ["pop"], time: 158, albumCover:"https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"},
{ id: 39, title: "Stayed On Him", author: "Terrian", bpm: 180, genre: ["christian"], time: 239, albumCover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFEZdSloutIZeHz3vqZvdpoOeq1zQpeVDLw&s"},
{ id: 40, title: "Animals", author: "Maroon 5", bpm: 190, genre: ["pop"], time: 231, albumCover:"https://i.scdn.co/image/ab67616d0000b273780d065ddd0444fc736b4f16"},
];

let suggestionSongsArr = [];
let setBPM;
let myPlaylist = [];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pace-min").addEventListener("input", updateBPM);
  document.getElementById("pace-sec").addEventListener("input", updateBPM);
  document.getElementById("search-input").addEventListener("input", handleSearch);
  initalDisplayOfSongs();
  updateViewablePlaylist();
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

    if (!isInPlaylist) {
      suggestionSongsArr.push(song);
      displaySongs(song, container);
    }
  }
}

function displaySongs(song, container) {
  let songSec = song.time % 60;
  let songMin = Math.floor(song.time / 60);

  let songSecString = songSec.toString();

  if (songSecString.length < 2) {
    songSecString = "0" + songSecString;
  }

  let songGenreConcant = song.genre.join(" • ");

  container.innerHTML += `
      <div class="suggestion-card">
      <div class="card-album-art">
        <img src="${song.albumCover}" alt="${song.title} album cover" class="album-art-image"/>
      </div>
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
      </div>
   `;
}

//everything to do with the bpm
function calculateBPM() {
  const minTime = document.getElementById("pace-min");
  const secTime = document.getElementById("pace-sec");

  if (minTime.value.length > 2) { minTime.value = minTime.value.slice(0, 2); }
  if (secTime.value.length > 2) { secTime.value = secTime.value.slice(0, 2); }

  console.log(Number(minTime.value));

  if (!Number(minTime.value)) { return null; }

  let minutes = parseInt(minTime.value) || 0;
  let seconds = parseInt(secTime.value) || 0;

  if (minutes > 12 || minutes < 6) { return null; }
  if (seconds > 59 || seconds < 0) { return null; }

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

//everything to do with search
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
  if (songTitleLower.includes(searchInputLower)) { isSongCorrect = true; }

  let isAuthorCorrect = false;
  if (songAuthorLower.includes(searchInputLower)) { isAuthorCorrect = true; }

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

//if user decided to use BPM filer
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

//everything to do with the displaying the playlist
function playlistEmptyState() {
  let container = document.getElementById("playlist-container");
  container.innerHTML = `
    <div class="playlist-empty" role="status" aria-live="polite">
      <div class="playlist-empty__icon-wrap" aria-hidden="true">
        <span class="playlist-empty__icon">♫</span>
      </div>
      <p class="playlist-empty__title">Your playlist is empty</p>
      <p class="playlist-empty__hint">
        Add the songs you want from the list on the left. Click the
        <span class="playlist-empty__plus-demo" aria-hidden="true">+</span>
        button to add it to the playlist.
      </p>
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

  if (myPlaylist.length < 1) {
    playlistEmptyState();
    return;
  }

  container.innerHTML = `
    <div class="playlist-grid-header">
      <span class="col-num">#</span>
      <span class="col-title">Title</span>
      <span class="col-bpm">BPM</span>
      <span class="col-time">🕒</span>
    </div>
  `;

  count = 1;
  for (let song of myPlaylist) {
    let songMin = Math.floor(song.time / 60);
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