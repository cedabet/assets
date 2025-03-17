
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css";

    document.head.appendChild(link);

    (function () {
        let lastUrl = location.href;
        let isFirstLoad = true; 
        if (isFirstLoad) {
            loadVipFeatures();
            isFirstLoad = false;
        }
        function checkUrlChange() {
            if (location.href !== lastUrl) {
                lastUrl = location.href;
                handlePageScripts(location.pathname);
            }
        }

        function handlePageScripts(path) {
            setTimeout(function () {
                if (path === "/en/") {
                  /*  alert("Anasayfaya hoş geldiniz!");*/
                    loadVipFeatures();
                } else if (path === "/en/vip") {
                   /* alert("VIP sayfasına hoş geldiniz!");*/
                }
            }, 100);
        }


        new MutationObserver(checkUrlChange).observe(document, { subtree: true, childList: true });
        window.addEventListener('load', function () {
            checkUrlChange();  // Sayfa yüklendikten hemen sonra kontrol et
        });


        const pushState = history.pushState;
        const replaceState = history.replaceState;

        history.pushState = function () {
            pushState.apply(history, arguments);
            checkUrlChange();
        };

        history.replaceState = function () {
            replaceState.apply(history, arguments);
            checkUrlChange();
        };

        window.addEventListener('popstate', checkUrlChange);


        window.addEventListener('load', checkUrlChange);
    })();

    function loadVipFeatures() {
      
        let mainContent = document.getElementById("main-slider");

        if (!mainContent) {

        } else {
           if (document.getElementById("custom-section-9")) {
            return; 
        }

            let customSection = document.createElement("div");
            customSection.id = "custom-section-9";
            customSection.classList.add("section", "custom-section");

            customSection.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 1rem; max-width: 1200px; margin: 0 auto;">
  <h1 style="font-size: 1.875rem; font-weight: bold; margin: 0; color: white;">CedaBet Features</h1>
</div>

<div style="width: 100%; padding: 1rem 1rem 2rem; max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px;">
  <div style="opacity: 0.95;display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; width: 100%;">

    <!-- VIP Feature -->
    <div style="display: flex; flex-direction: column;">
      <a href="/vip" style="display: block; text-decoration: none; height: 100%; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
        <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; border-radius: 0.75rem; height: 100%; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px; background: linear-gradient(to right, rgb(245, 158, 11), rgb(234, 179, 8)); transition: box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 10px 15px rgba(0, 0, 0, 0.1)'" onmouseout="this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)'">
          <div style="display: flex; align-items: center; justify-content: center; width: 3rem; height: 3rem; border-radius: 0.5rem; flex-shrink: 0; background-color: #192430;">
            <i class="fa-solid fa-crown" style="font-size: 1.5rem; color: rgb(234, 179, 8);"></i>
          </div>
          <div style="flex: 1;">
            <h3 style="margin: 0 0 0.25rem 0; font-weight: bold; color: white; font-size: 1.125rem;">VIP Club</h3>
            <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 0.875rem;">Unlock elite rewards and distinctive perks as a valued member!</p>
          </div>
        </div>
      </a>
    </div>

    <!-- Tournament Feature -->
    <div style="display: flex; flex-direction: column;">
      <a href="/tournaments" style="display: block; text-decoration: none; height: 100%; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
        <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; border-radius: 0.75rem; height: 100%; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px; background: linear-gradient(to right, rgb(245, 158, 11), rgb(234, 179, 8)); transition: box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 10px 15px rgba(0, 0, 0, 0.1)'" onmouseout="this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)'">
          <div style="display: flex; align-items: center; justify-content: center; width: 3rem; height: 3rem; border-radius: 0.5rem; flex-shrink: 0; background-color: #192430;">
            <i class="fa-solid fa-trophy" style="font-size: 1.5rem; color: rgb(234, 179, 8);"></i>
          </div>
          <div style="flex: 1;">
            <h3 style="margin: 0 0 0.25rem 0; font-weight: bold; color: white; font-size: 1.125rem;">Tournaments </h3>
            <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 0.875rem;">Join CedaBet contests, beat rivals, win rewards!</p>
          </div>
        </div>
      </a>
    </div>

    <!-- Promotions Feature -->
    <div style="display: flex; flex-direction: column;">
      <a href="/promotions" style="display: block; text-decoration: none; height: 100%; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
        <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; border-radius: 0.75rem; height: 100%; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px; background: linear-gradient(to right, rgb(245, 158, 11), rgb(234, 179, 8)); transition: box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 10px 15px rgba(0, 0, 0, 0.1)'" onmouseout="this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)'">
          <div style="display: flex; align-items: center; justify-content: center; width: 3rem; height: 3rem; border-radius: 0.5rem; flex-shrink: 0; background-color: #192430;">
            <i class="fa-solid fa-gift" style="font-size: 1.5rem; color: rgb(234, 179, 8);"></i>
          </div>
          <div style="flex: 1;">
            <h3 style="margin: 0 0 0.25rem 0; font-weight: bold; color: white; font-size: 1.125rem;">Promotions</h3>
            <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 0.875rem;">Amplify your winnings with daily, weekly, and monthly bonus deals!</p>
          </div>
        </div>
      </a>
    </div>

    <!-- Enhanced RTP Feature -->
    <div style="display: flex; flex-direction: column;">
      <a href="/casino/group/enhanced-rtp" style="display: block; text-decoration: none; height: 100%; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
        <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; border-radius: 0.75rem; height: 100%; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px; background: linear-gradient(to right, rgb(245, 158, 11), rgb(234, 179, 8)); transition: box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 10px 15px rgba(0, 0, 0, 0.1)'" onmouseout="this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)'">
          <div style="display: flex; align-items: center; justify-content: center; width: 3rem; height: 3rem; border-radius: 0.5rem; flex-shrink: 0; background-color: #192430;">
            <i class="fa-solid fa-star" style="font-size: 1.5rem; color: rgb(234, 179, 8);"></i>
          </div>
          <div style="flex: 1;">
            <h3 style="margin: 0 0 0.25rem 0; font-weight: bold; color: white; font-size: 1.125rem;">Elevated RTP</h3>
            <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 0.875rem;">Experience better odds with our exclusive high RTP games.</p>
          </div>
        </div>
      </a>
    </div>

  </div>
</div>

<!-- Mobile-only style -->
<style>
@@media (max-width: 768px) {
  div[style*="grid-template-columns: repeat(4, 1fr)"] {
    display: flex !important;
    overflow-x: auto !important;
    scroll-snap-type: x mandatory !important;
    gap: 1rem !important;
    padding-bottom: 1rem !important;
  }

  div[style*="grid-template-columns: repeat(4, 1fr)"] > div {
    flex: 0 0 85% !important;
    scroll-snap-align: start !important;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  div[style*="grid-template-columns: repeat(4, 1fr)"]::-webkit-scrollbar {
    display: none !important;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  div[style*="grid-template-columns: repeat(4, 1fr)"] {
    -ms-overflow-style: none !important;  /* IE and Edge */
    scrollbar-width: none !important;  /* Firefox */
  }
}
</style>
    `;

            mainContent.appendChild(customSection);
              let customSection10 = document.createElement("div");
        customSection10.id = "custom-section-10";
        customSection10.classList.add("section", "custom-section");

    
        customSection10.innerHTML = `
  <div style="text-align: center; padding: 1.5rem 1rem; max-width: 1200px; margin: 0 auto;">
    <h1 style="font-size: 1.875rem; font-weight: bold; margin: 0; color: white;">CedaBet Premium Features</h1>
  </div>
  <div style="width: 100%; padding: 1rem 1rem 2rem; max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px;">
    <div style="opacity: 0.95; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; width: 100%;">
      
      <!-- Playlist Section -->
      <div class="content">
        <div class="slider-playlist">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://github.com/user-attachments/assets/d80e6b68-b67a-4e27-86ee-e00581883d5c" />
                <h1>Syn Cole</h1>
              </div>
              <div class="swiper-slide">
                <img src="https://github.com/user-attachments/assets/9240f7ff-1b8e-4e62-a2d1-df78b285c7e0" />
                <h1>Clarx & Harddope</h1>
              </div>
              <div class="swiper-slide">
                <img src="https://github.com/user-attachments/assets/6e5ba953-49c5-4634-a1c5-4caf310cba86" />
                <h1>Neffex</h1>
              </div>
              <div class="swiper-slide">
                <img src="https://github.com/user-attachments/assets/a2ca0dfd-e53f-4e79-b8b0-288847e59b9a" />
                <h1>Patrick Patrikios</h1>
              </div>
              <div class="swiper-slide">
                <img src="https://github.com/user-attachments/assets/b286d7ff-52a1-452d-9cd9-5920c937b16e" />
                <h1>Besomorph & Coopex</h1>
              </div>
            </div>
          </div>

          <div class="playlist">
            <div class="playlist-item">
              <img src="https://github.com/user-attachments/assets/d80e6b68-b67a-4e27-86ee-e00581883d5c" alt="" />
              <div class="song">
                <p>Syn Cole</p>
                <p>Feel Good</p>
              </div>
              <p>3:01</p>
              <i class="fa-regular fa-heart like-btn"></i>
            </div>
            <div class="playlist-item">
              <img src="https://github.com/user-attachments/assets/9240f7ff-1b8e-4e62-a2d1-df78b285c7e0" alt="" />
              <div class="song">
                <p>Clarx & Harddope</p>
                <p>Castle</p>
              </div>
              <p>2:38</p>
              <i class="fa-regular fa-heart like-btn"></i>
            </div>
            <div class="playlist-item">
              <img src="https://github.com/user-attachments/assets/6e5ba953-49c5-4634-a1c5-4caf310cba86" alt="" />
              <div class="song">
                <p>Neffex</p>
                <p>Play Dead</p>
              </div>
              <p>3:31</p>
              <i class="fa-regular fa-heart like-btn"></i>
            </div>
            <div class="playlist-item">
              <img src="https://github.com/user-attachments/assets/a2ca0dfd-e53f-4e79-b8b0-288847e59b9a" alt="" />
              <div class="song">
                <p>Patrick Patrikios</p>
                <p>Know Myself</p>
              </div>
              <p>3:23</p>
              <i class="fa-solid fa-heart like-btn"></i>
            </div>
            <div class="playlist-item">
              <img src="https://github.com/user-attachments/assets/b286d7ff-52a1-452d-9cd9-5920c937b16e" alt="" />
              <div class="song">
                <p>Besomorph & Coopex</p>
                <p>Redemption</p>
              </div>
              <p>2:37</p>
              <i class="fa-regular fa-heart like-btn"></i>
            </div>
          </div>
        </div>

        <div style="display:none" class="player">
          <audio id="audioPlayer" src="song-list/AfricanFella-CumbiaDeli.mp3" type="audio/mpeg"></audio>

          <div class="controls">
            <button id="playPauseBtn">
              <i class="fa-solid fa-play" id="playPauseIcon"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Permanent+Marker&display=swap");

:root {
  --light-clr: #e5e5e5;
  --primary-clr: #6490f6;
  --secondary-clr: #c1daff;
  --active-clr: rgba(149, 153, 186, 0.4);
  --player-bg: rgba(5, 9, 51, 0.4);
  --scrollbar-track: rgb(79, 78, 78);
  --scrollbar-thumb: rgb(116, 116, 116);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

h1 {
  font-size: clamp(0.8rem, 3vw, 1rem);
}

p {
  font-size: clamp(0.7rem, 3vw, 1rem);
}

body {
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #001124;
  background-image: url(https://github.com/user-attachments/assets/47953c98-49f4-4a40-8b2f-36543a0dd1a3);
  background-repeat: no-repeat;
  background-size: cover;
}

main {
  position: relative;
  width: 90%;
  height: 90%;
  background: transparent;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  overflow: hidden;
}

main::after,
main::before {
  content: "";
  position: absolute;
  width: 250px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  transition: 5s ease-in-out;
}

main::after {
  top: -3%;
  left: -5%;
  transform: scale(1);
  background-color: #5768af;
}

main:hover::after {
  left: 85%;
  transform: scale(1.2);
  background-color: #a0acbd;
}

main::before {
  bottom: -3%;
  right: -5%;
  transform: scale(1);
  background-color: #ab4c72;
}

main:hover::before {
  right: 85%;
  transform: scale(1.2);
  background-color: #bda5ad;
}

/** CONTENT */

.content {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  place-items: center;
  background: rgba(53, 54, 72, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: inherit;
  box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.2) inset,
    0 1px 0 0 rgba(255, 255, 255, 0.6) inset, 0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 10;
  color: var(--light-clr);
  overflow-y: auto;
  padding: 30px 30px 10px;
}

.content::-webkit-scrollbar {
  width: 7px;
}

.content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.3rem var(--scrollbar-track);
  border-radius: 40px;
  margin: 18px 0;
}

.content::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem var(--scrollbar-thumb);
  background-color: var(--primary-clr);
  outline: none;
  border-radius: 40px;
}

/** PLAYLIST */

.slider-playlist {
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
}

/** Slider */

.swiper {
  width: 300px;
  height: auto;
}

.swiper-slide {
  display: grid;
  grid-template-rows: 4fr 1fr;
  padding: 15px;
  border-radius: 10px;
  background-color: #d3d2d6;
  box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.2) inset,
    0 1px 0 0 rgba(255, 255, 255, 0.6) inset, 0 4px 16px rgba(0, 0, 0, 0.1);
  user-select: none;
}

.swiper-slide img {
  aspect-ratio: 1/1;
  border-radius: 5px;
  margin-bottom: 14px;
  pointer-events: none;
}

.swiper-slide h1 {
  width: max-content;
  font-family: "Permanent Marker", serif;
  letter-spacing: 2px;
  color: #222224;
  text-transform: uppercase;
  transform: rotate(-3deg);
  margin: auto;
}

/** Playlist */

.playlist {
  width: 100%;
}

.playlist-item {
  display: grid;
  grid-template-columns: 15% 65% 15% 5%;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 8px 10px;
  margin-bottom: 15px;
  border-bottom: 2px solid var(--primary-clr);
  color: var(--light-clr);
  cursor: pointer;
  user-select: none;
}

.playlist-item img {
  width: 70%;
  aspect-ratio: 1/1;
  border-radius: 5px;
  overflow: hidden;
}

.playlist-item .song p:nth-child(1) {
  font-weight: 500;
  margin-bottom: 3px;
}

.playlist-item .song p:nth-child(2) {
  font-weight: 300;
  opacity: 0.5;
}

.playlist-item i {
  font-size: 1.2rem;
  color: var(--light-clr);
}

.active-playlist-item {
  background-color: var(--active-clr);
  border-radius: 5px;
}


@media (max-width: 1300px) {
  main {
    width: 90%;
  }

  .swiper {
    width: 270px;
  }
}

@media (max-width: 1100px) {
  .content {
    padding: 40px 20px 20px;
  }

  .swiper {
    width: 240px;
  }

  .slider-playlist {
    grid-template-columns: 50% 50%;
  }
}

@media (max-width: 900px) {
  .content {
    padding: 30px 40px 20px;
    overflow-x: hidden;
  }

  .slider-playlist {
    grid-template-columns: 100%;
  }

  .swiper {
    margin: 30px auto 50px;
  }

  .player {
    width: 110%;
  }

  #volume-range {
    width: 50px;
  }
}

@media (max-width: 580px) {
  .content {
    overflow-x: hidden;
  }

  .swiper {
    width: 220px;
    margin: 20px auto 35px;
  }

  .playlist-item {
    margin-bottom: 10px;
  }

  .player {
    width: 115%;
  }

  .controls {
    column-gap: 15px;
  }

  .controls i {
    font-size: 1.3rem;
  }

  #playPauseBtn {
    width: 40px;
    font-size: 1.2rem;
  }

  .volume i {
    font-size: 0.9rem;
  }

  #volume-range {
    left: 20px;
    top: 6px;
    width: 40px;
  }
}

  </style>
`;
const playlistItems = document.querySelectorAll(".playlist-item");
const likeBtns = document.querySelectorAll(".like-btn");
const audioPlayer = document.getElementById("audioPlayer");
const volumeRange = document.getElementById("volume-range");
const progressBar = document.getElementById("progress-bar");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

let currentSongIndex = 2;
let isSongLoaded = false;

const songs = [
  "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/SynCole-FeelGood.mp3",
  "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/HarddopeClarx-Castle.mp3",
  "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/PlayDead-NEFFEX.mp3",
  "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/KnowMyself-PatrickPatrikios.mp3",
  "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/BesomorphCoopex-Redemption.mp3",
];

var swiper = new Swiper(".swiper", {
  effect: "cards",
  cardsEffect: {
    perSlideOffset: 9,
    perSlideRotate: 3,
  },
  grabCursor: true,
  speed: 700,
  initialSlide: 2,
});

swiper.on("slideChange", () => {
  const newIndex = swiper.realIndex;
  if (newIndex !== currentSongIndex) {
    currentSongIndex = newIndex;
    updatePlayPauseIcon(true);
  }
});

function updateSwiperToMatchSong(index) {
  if (swiper.activeIndex !== index) {
    swiper.slideTo(index);
  }
}

function updatePlaylistHighlight(index) {
  playlistItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active-playlist-item");
    } else {
      item.classList.remove("active-playlist-item");
    }
  });
}

function loadAndPlaySong(index) {
  audioPlayer.src = songs[index];
  updatePlaylistHighlight(index);
  updateSwiperToMatchSong(index);
  isSongLoaded = true;
}

function pauseSong() {
  audioPlayer.pause();
  updatePlayPauseIcon(false);
}

function playSong() {
  audioPlayer.play();
  updatePlayPauseIcon(true);
}

function togglePlayPause() {
  if (!isSongLoaded) {
    loadAndPlaySong(currentSongIndex);
    isSongLoaded = true;
  } else if (audioPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function updatePlayPauseIcon(isPlaying) {
  if (isPlaying) {
    playPauseIcon.classList.add("fa-pause");
    playPauseIcon.classList.remove("fa-play");
  } else {
    playPauseIcon.classList.add("fa-play");
    playPauseIcon.classList.remove("fa-pause");
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadAndPlaySong(currentSongIndex);
  swiper.slideTo(currentSongIndex);
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadAndPlaySong(currentSongIndex);
  swiper.slideTo(currentSongIndex);
}

playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentSongIndex = index;
    loadAndPlaySong(index);
  });
});

playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

audioPlayer.addEventListener("loadedmetadata", () => {
  progressBar.max = audioPlayer.duration;
  progressBar.value = audioPlayer.currentTime;
});

audioPlayer.addEventListener("timeupdate", () => {
  if (!audioPlayer.paused) {
    progressBar.value = audioPlayer.currentTime;
  }
});

progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = progressBar.value;
});

progressBar.addEventListener("change", () => {
  playSong();
});

volumeRange.addEventListener("input", () => {
  var newVolume = volumeRange.value;
  audioPlayer.volume = newVolume / 100;
});

audioPlayer.addEventListener("ended", nextSong);

shuffleBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * songs.length);

  if (randomIndex !== currentSongIndex) {
    currentSongIndex = randomIndex;
    loadAndPlaySong(currentSongIndex);
  } else {
    const nextRandomIndex = (randomIndex + 1) % songs.length;
    currentSongIndex = nextRandomIndex;
    loadAndPlaySong(currentSongIndex);
  }
});

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    likeBtn.classList.toggle("fa-regular");
    likeBtn.classList.toggle("fa-solid");
  });
});



        mainContent.appendChild(customSection10);
        }

    }

