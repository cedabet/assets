
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
        }

    }

