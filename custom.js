
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
        return;
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
                                <h3 style="margin: 0 0 0.25rem 0; font-weight: bold; color: white; font-size: 1.125rem;">Tournaments</h3>
                                <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 0.875rem;">Join CedaBet contests, beat rivals, win rewards!</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>`;

        mainContent.appendChild(customSection);

        // Yeni custom-section-10 ekleniyor
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
`;


        // custom-section-10'ı custom-section-9'un altına ekliyoruz
        mainContent.appendChild(customSection10);
    }
}


    


