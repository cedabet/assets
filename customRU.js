
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css";

    document.head.appendChild(link);

    (function () {
        let lastUrl = location.href;
        let isFirstLoad = true;
        if (isFirstLoad) {
            loadVipFeatures();
            setTimeout(loadh2Title, 1000);   
		addMenuElement();
		  addMenuElementTwo();
		    setTimeout(updateCopyrightYear, 1000);   
	 setTimeout(createSigninModal, 2000);  
            var sportspath = window.location.pathname;
            if (sportspath === "/en/sportsbook") {
                var sidebar = document.getElementById("sidebar");
                sidebar.className = "";
                sidebar.classList.add("sidebar", "active");
            }
            isFirstLoad = false;
        }

      

        var sidebarBtn = document.querySelector(".sidebar__btn");

        sidebarBtn.addEventListener("click", function () {
            var sportspath2 = window.location.pathname;
            if (sportspath2 === "/en/sportsbook") {
                var sidebar = document.getElementById("sidebar");

                if (sidebar.className.indexOf("active") !== -1) { // 'active' sınıfı yoksa

                    sidebar.className = ""; // Tüm sınıfları temizle
                    sidebar.classList.add("sidebar", "active"); // 'sidebar' ve 'active' sınıflarını ekle
                } else {

                    sidebar.className = ""; // Tüm sınıfları temizle
                    sidebar.classList.add("sidebar"); // Sadece 'sidebar' sınıfını ekle
                }

            }
        });

     

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
	        setTimeout(loadh2Title, 1000);   
		    addMenuElement();
		    addMenuElementTwo();
		      setTimeout(updateCopyrightYear, 1000);  

		  
            } else if (path === "/en/vip") {
                /* alert("VIP sayfasına hoş geldiniz!");*/
            }

            else if (path === "/en/sportsbook") {
                var sportspath = window.location.pathname;
                if (sportspath === "/en/sportsbook") {
                    var sidebar = document.getElementById("sidebar");
                    sidebar.className = "";
                    sidebar.classList.add("sidebar", "active");
                }
             

            }




        }, 1000);
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

function createSigninModal() {
     const lastModalTime = localStorage.getItem('modalShownTime');
     const dontShowAgain = localStorage.getItem('dontShowModalAgain'); // Kullanıcı "Tekrar Gösterme" butonuna tıklayıp tıklamadığını kontrol ediyoruz
     const currentTime = new Date().getTime();
 
     // Eğer kullanıcı modalı 1 saatten daha önce gördüyse veya "Tekrar Gösterme" butonuna tıkladıysa, tekrar göstermiyoruz
     if ((lastModalTime && currentTime - lastModalTime < 3600000) || dontShowAgain) {
         return;
     }
 
     const modalHTML = `
     <div class="modal fade show modal-fade modal--sign" id="signin-modal" tabindex="-1" aria-labelledby="signin-modal" style="display: block; background-color: rgba(0, 0, 0, 0.8); max-width: unset !important; padding-left: unset !important;">
         <div class="modal-dialog modal-dialog-centered">
             <div style="max-width: 636px!important;" class="modal-content">
                 <div class="modal__content" style="text-align: center; max-width: unset!important; padding-left: unset!important; padding: 0 0 17px 0; padding: 0;">
                     <!-- Kapatma butonu -->
                     <button id="dontShowAgainBtn" class="modal__close" type="button" style="position: absolute; top: 10px; right: 10px; background: transparent; border: none; color: white; font-size: 48px;">×</button>
                     <a href="/promotion/hit-1000x-wins-on-pragmatic-play-games">
                     	<img src="https://cedabet.github.io/assets/images/sl10Banner.jpg" alt="Dikey Resim" style="/* height: 600px; */ width: 100%; margin: 0 auto; display: block;">
                     </a>
       
                 </div>
             </div>
         </div>
     </div>
     `;
 
     // Modal'ı body'nin sonuna ekliyoruz
     document.body.insertAdjacentHTML("beforeend", modalHTML);
 
     // Modal'ı gösterme işlevi
     const modal = document.getElementById("signin-modal");
     const closeButton = modal.querySelector(".modal__close");
     const dontShowAgainButton = modal.querySelector("#dontShowAgainBtn");
 
     // Modal dışına tıklanarak kapatılacak işlev
     function closeModal() {
         modal.style.display = "none";
         // Modal kapandığında, modal gösterildiği zamanı kaydediyoruz
         localStorage.setItem('modalShownTime', currentTime);
     }
 
     // Modal'ı otomatik olarak aç
     setTimeout(() => {
         modal.style.display = "block";
     }, 1000); // 1 saniye sonra açılır
 
     // Modal dışına tıklanırsa kapanma işlevi
     modal.addEventListener("click", function(event) {
         // Modal içerisine tıklanmazsa
         if (event.target === modal) {
             closeModal();
         }
     });
 
     // Kapatma butonuna tıklandığında modalı kapat
     closeButton.addEventListener("click", closeModal);
 
     // "Tekrar Gösterme" butonuna tıklandığında yapılacaklar
     dontShowAgainButton.addEventListener("click", function() {
         // Modalı bir daha 1 saat boyunca göstermemek için localStorage'a kaydediyoruz
         localStorage.setItem('dontShowModalAgain', true);
         closeModal(); // Modalı kapat
     });
 }
 
 
 
 function updateCopyrightYear() {
     const copyrightElement = document.querySelector(".footer__copyright");
 
     if (copyrightElement) {
         const currentYear = new Date().getFullYear();
         copyrightElement.textContent = ""; 
         copyrightElement.textContent = "© CEDABET.COM, " + currentYear;
     }
 }
 
 
 function addMenuElement() {
   const sidebarNav = document.querySelector('.sidebar__nav.sidebar__nav--border');
 
   if (!sidebarNav) {
     return;
   }
 
   const uid = 'custom-item-menu'; 
 
 
   const existingElement = document.getElementById(uid);
 
   if (existingElement) {
     return;
   }
 
   const newLi = document.createElement('li');
   newLi.id = uid; 
 
   const newAnchor = document.createElement('a');
   newAnchor.href = '/en/casino/group/table-games';
 
   const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
   svgIcon.classList.add('svg-icon');
   const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
   use.setAttribute('href', '/static/media/sprite.6b179d63884598e512b15f3dd0296663.svg#table-games');
   svgIcon.appendChild(use);
 
 
   const span = document.createElement('span');
   span.textContent = 'New';
 
 
   newAnchor.appendChild(svgIcon);
   newAnchor.appendChild(document.createTextNode(' Table Games'));
   newAnchor.appendChild(span);
 
   newLi.appendChild(newAnchor);
 
   sidebarNav.appendChild(newLi);
 }
 
 function addMenuElementTwo() {
   
     const sidebarLinks = document.querySelector(".sidebar__links");
     const sidebarLinksSmall = document.querySelector(".sidebar__links-small");
 
 
     if (sidebarLinksSmall) {
         const elementId = 'promotions-link-small'; 
 
         const existingMenu = document.getElementById(elementId);
         if (!existingMenu) {
             const newHTMLSmall = `
                 <a id="${elementId}" class="sidebar__link-small sidebar__link-small--purple" href="/en/casino" style="background: url('https://cedabet.github.io/assets/images/promotionBtn.jpg') left center / cover no-repeat;"></a>
             `;
             sidebarLinksSmall.insertAdjacentHTML("beforeend", newHTMLSmall); 
         }
     }
 
 
     if (sidebarLinks) {
         const elementId = 'promotions-link'; // Büyük link için id
 
         // Aynı id'ye sahip bir öğe zaten var mı diye kontrol ediyoruz
         const existingMenu = document.getElementById(elementId);
         if (!existingMenu) {
             const newHTML = `
                 <div style="width: 100%;">
                     <a id="${elementId}" class="sidebar__link sidebar__link--casino" href="/promotions" style="
                         background: url('https://cedabet.github.io/assets/images/promotionBtn.jpg') left center / cover no-repeat;
                         width: 100%;
                         margin-bottom: 17px;
                         margin-top: -10px;
                         box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
                     ">
                         <span>Promotion</span>
                     </a>
                 </div>
             `;
             sidebarLinks.insertAdjacentHTML("afterend", newHTML);
         }
     }
 }




function loadh2Title() {
    const sectionTitleElements = document.querySelectorAll('.section__title');

    sectionTitleElements.forEach(title => {
        let url = '';

        if (title.textContent.trim().includes('Top Games')) {
            url = '/en/casino/group/lobby';
        }
        if (title.textContent.trim().includes('Popular Games')) {
            url = '/en/casino/group/new-releases';
        }
        if (title.textContent.trim().includes('New Releases')) {
            url = '/en/casino/group/new-releases';
        }
        if (title.textContent.trim().includes('High RTP')) {
            url = '/en/casino/group/enhanced-rtp';
        }
        if (title.textContent.trim().includes('Buy Bonus')) {
            url = '/en/casino/group/bonus-buy';
        }

        if (url) {
            const newLink = document.createElement('a');
            newLink.href = url;
            newLink.textContent = `See All`;
            newLink.style.background = 'rgba(55, 162, 221, 0.13)'; 
            newLink.style.padding = '5px 12px 5px 12px';
            newLink.style.borderRadius = '4px';
            newLink.style.fontSize = '12px';
            newLink.style.color = 'white'; 
            newLink.style.border = '1px solid rgba(41, 154, 217, 0.33)'; 

            title.insertAdjacentElement('afterend', newLink);
        }
    });
}


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
            let customSection2 = document.createElement("div");
            customSection2.id = "custom-section-4";
            customSection2.classList.add("section", "custom-section");
            let customSection3 = document.createElement("div");
            customSection3.id = "custom-section-5";
            customSection3.classList.add("section", "custom-section");
            let customSection4 = document.createElement("div");
            customSection4.id = "custom-section-6";
            customSection4.classList.add("section", "custom-section");
            let customSection5 = document.createElement("div");
            customSection5.id = "custom-section-7";
            customSection5.classList.add("section", "custom-section");

            customSection.innerHTML = `
       <div class="container">

     <div id="sports-section" style="position: relative; width: 100%; margin: 0 auto; background-color: #17368d; background-image: linear-gradient(to right, #8a1818, #b92020); border-radius: 16px; padding: 40px; color: white; font-family: Arial, sans-serif; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); box-sizing: border-box; margin-bottom: 44px;">

    <div id="content-wrapper" style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      max-width: 60%;
      position: relative;
      z-index: 2;
    ">
      <div>
        <h1 id="main-heading" style="font-size: 2rem; font-weight: 800; line-height: 1.1; margin-bottom: 20px; margin-top: 0; max-width: 800px;">
          Join the excitement by betting on the biggest highlights in sports.
        </h1>
      </div>

      <!-- Compact Card Design for Icons Section -->
      <div id="icons-section" style="margin-top: 30px;">
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <!-- Sports -->
          <a href="#" class="category-card" style="flex: 1; min-width: 110px; background-color: #b51f1f; border-radius: 8px; padding: 10px 12px; text-decoration: none; color: white; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); border-left: 3px solid #ffffff; display: flex; align-items: center;">
            <div class="category-icon" style="
              font-size: 24px;
              margin-right: 10px;
              transition: all 0.3s ease;
            ">⚽</div>
            <div>
              <div style="
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                line-height: 1.2;
              ">Sports</div>
              <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.6);
              ">All leagues</div>
            </div>
          </a>

          <!-- Esports -->
          <a href="#" class="category-card" style="flex: 1; min-width: 110px; background-color: #b51f1f; border-radius: 8px; padding: 10px 12px; text-decoration: none; color: white; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); border-left: 3px solid #3a9fff; display: flex; align-items: center;">
            <div class="category-icon" style="
              font-size: 24px;
              margin-right: 10px;
              transition: all 0.3s ease;
            ">🎮</div>
            <div>
              <div style="
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                line-height: 1.2;
              ">Esports</div>
              <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.6);
              ">Top tournaments</div>
            </div>
          </a>

          <!-- Live Streams -->
          <a href="#" class="category-card" style="flex: 1; min-width: 110px; background-color: #b51f1f; border-radius: 8px; padding: 10px 12px; text-decoration: none; color: white; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); border-left: 3px solid #ff3a6f; display: flex; align-items: center;">
            <div class="category-icon" style="
              font-size: 24px;
              margin-right: 10px;
              transition: all 0.3s ease;
            ">▶️</div>
            <div>
              <div style="
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                line-height: 1.2;
              ">Live Streams</div>
              <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.6);
              ">Watch live</div>
            </div>
          </a>

          <!-- Boosted Odds -->
          <a href="#" class="category-card" style="flex: 1; min-width: 110px; background-color: #b51f1f; border-radius: 8px; padding: 10px 12px; text-decoration: none; color: white; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); border-left: 3px solid #ffcc00; display: flex; align-items: center;">
            <div class="category-icon" style="
              font-size: 24px;
              margin-right: 10px;
              transition: all 0.3s ease;
            ">⚡</div>
            <div>
              <div style="
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                line-height: 1.2;
              ">Boosted Odds</div>
              <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.6);
              ">Better payouts</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Explore button with original gold gradient -->
      <div style="margin-top: 40px; width: 100%;">
        <a id="explore-button" href="#" style="
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-size: 200% 200%;
          color: #0f1923;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 800;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          position: relative;
          border: none;
          box-sizing: border-box;
	  background-color: rgb(255, 229, 0);
box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgb(255, 135, 25) 0px 0px 15px inset;
        ">
          <span style="position: relative; z-index: 2;">EXPLORE SPORTS SECTION</span>
          <span class="button-arrow" style="
		    display:none;
            margin-left: 12px;
            font-size: 18px;
            transition: transform 0.3s ease;
            position: relative;
            z-index: 2;
          ">→</span>
          <span style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(0, 0, 0, 0.1);
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          "></span>
        </a>
      </div>
    </div>

    <!-- Astronaut Image with Soccer Ball -->
    <div id="image-wrapper" style="position: absolute; right: -68px; bottom: 0px; top: 0; display: flex; align-items: center; justify-content: flex-end; width: 50%; z-index: 1;">
      <img id="astronaut-image" src="https://cedabet.github.io/assets/images/soccer-astro.png" alt="Astronaut holding soccer ball" style="max-height: 410px; max-width: 100%; object-fit: contain; bottom: 0px; position: absolute;">
    </div>
  </div>

  <script>
    // Responsive handling
    function adjustForScreenSize() {
      const section = document.getElementById('sports-section');
      const contentWrapper = document.getElementById('content-wrapper');
      const heading = document.getElementById('main-heading');
      const iconsSection = document.getElementById('icons-section');
      const imageWrapper = document.getElementById('image-wrapper');
      const astronautImage = document.getElementById('astronaut-image');
      const categoryCards = document.querySelectorAll('.category-card');
      const exploreButton = document.getElementById('explore-button');

      if (window.innerWidth <= 768) {
        // Mobile styles
        section.style.padding = '30px 20px';
        contentWrapper.style.maxWidth = '100%';
        heading.style.fontSize = '1.8rem';

        // Move image to the top on mobile
        section.style.display = 'flex';
        section.style.flexDirection = 'column';

        imageWrapper.style.position = 'relative';
        imageWrapper.style.width = '100%';
        imageWrapper.style.height = '250px';
        imageWrapper.style.marginBottom = '20px';
        imageWrapper.style.order = '1';
        imageWrapper.style.alignItems = 'center';
        imageWrapper.style.justifyContent = 'center';

        contentWrapper.style.order = '2';

        astronautImage.style.position = 'relative';
        astronautImage.style.maxHeight = '250px';
        astronautImage.style.margin = '0 auto';
        astronautImage.style.display = 'block';
        astronautImage.style.bottom = 'auto';

        // Fix button width for mobile
        exploreButton.style.width = '100%';
        exploreButton.style.boxSizing = 'border-box';

        // Adjust cards for mobile
        if (window.innerWidth <= 480) {
          categoryCards.forEach(card => {
            card.style.minWidth = 'calc(50% - 5px)';
            card.style.flex = '0 0 calc(50% - 5px)';
          });

          // Smaller text and padding for very small screens
          exploreButton.style.fontSize = '13px';
          exploreButton.style.padding = '12px 16px';

          // Hide arrow on very small screens if text is too long
          if (window.innerWidth < 360) {
            document.querySelector('.button-arrow').style.display = 'none';
          } else {
            document.querySelector('.button-arrow').style.display = 'inline';
          }
        }
      } else {
        // Desktop styles - reset to original
        section.style.padding = '40px';
        section.style.display = 'block';
        contentWrapper.style.maxWidth = '60%';
        contentWrapper.style.order = 'initial';
        heading.style.fontSize = '2.5rem';

        imageWrapper.style.position = 'absolute';
        imageWrapper.style.width = '50%';
        imageWrapper.style.marginBottom = '0';
        imageWrapper.style.order = 'initial';
        imageWrapper.style.height = 'auto';
        imageWrapper.style.alignItems = 'center';
        imageWrapper.style.justifyContent = 'flex-end';

        astronautImage.style.position = 'absolute';
        astronautImage.style.maxHeight = '500px';
        astronautImage.style.margin = '0';
        astronautImage.style.bottom = '0px';

        // Reset button for desktop
        exploreButton.style.width = 'auto';
        exploreButton.style.fontSize = '15px';
        exploreButton.style.padding = '14px 28px';
        document.querySelector('.button-arrow').style.display = 'inline';

        // Reset cards for desktop
        categoryCards.forEach(card => {
          card.style.minWidth = '110px';
          card.style.flex = '1';
        });
      }
    }

    // Run on load and resize
    window.addEventListener('load', adjustForScreenSize);
    window.addEventListener('resize', adjustForScreenSize);

    // Initial call
    adjustForScreenSize();
</script>
   </div>`;

		customSection3.innerHTML = `
<style>
    .steps-section {
    display:none;
        position: relative;
        width: 100%;
        background: linear-gradient(to bottom, #0a0e17, #101725);
        border-radius: 13px;
        padding: 20px 20px 40px 20px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        margin: 20px 0 26px 0;
    }

    .steps-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 0 auto;
    }

    .step {
        display: flex;
        align-items: center;
    }

    .step-number {
        color: #D4AF37; /* Gold color */
        font-size: 32px;
        font-weight: 700;
        margin-right: 15px;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    }

    .step-text {
        color: white;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.5px;
    }

    .divider {
        display: none;
        width: 80px;
        height: 1px;
        background: linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.5), rgba(212, 175, 55, 0.1));
        margin: 0 10px;
    }

    .button-container {
        position: absolute;
        bottom: -20px; /* Adjusted to account for smaller button */
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
    }

    .join-button {
        background: linear-gradient(to right, #7A0000, #C70039); /* Deep burgundy/maroon gradient */
        color: white;
        border: none;
        padding: 10px 30px; /* Reduced padding to make button smaller */
        font-size: 16px; /* Reduced font size */
        font-weight: 600;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(199, 0, 57, 0.5);
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
    }

    .join-button:hover {
        box-shadow: 0 6px 20px rgba(199, 0, 57, 0.7);
    }

    /* Media queries for responsive design */
    @@media (min-width: 768px) {
        .steps-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 0;
        }

        .divider {
            display: block;
        }

        .step-text {
            font-size: 14px;
        }

        .steps-section {
            padding: 28px 40px 40px 40px;
        }
    }
</style>

<div class="container" style="border: none;">
    <div style="/* background-color: #0c1016; */ color: white; padding: 30px 20px; position: relative; font-family: Arial, sans-serif; width: 100%; border: none;">
  <!-- Gold vertical line on the left -->
  
  
  <!-- Steps container -->
  <div style="display: flex; justify-content: space-around; align-items: center; margin-bottom: 40px; flex-wrap: wrap;">
    <!-- Step 1 -->
    <div style="display: flex; align-items: center; margin: 10px 0;">
      <span style="color: #00c8ff; font-size: 28px; font-weight: bold; margin-right: 10px;">01</span>
      <span style="font-size: 18px; color: #ffffff;">Register an account</span>
    </div>
    
    <!-- Divider line -->
    <div style="width: 100px; height: 1px; background-color: #1e3a5a; margin: 0 10px;"></div>
    
    <!-- Step 2 -->
    <div style="display: flex; align-items: center; margin: 10px 0;">
      <span style="color: #00c8ff; font-size: 28px; font-weight: bold; margin-right: 10px;">02</span>
      <span style="font-size: 18px; color: #ffffff;">Make a Deposit &amp; Play</span>
    </div>
    
    <!-- Divider line -->
    <div style="width: 100px; height: 1px; background-color: #1e3a5a; margin: 0 10px;"></div>
    
    <!-- Step 3 -->
    <div style="display: flex; align-items: center; margin: 10px 0;">
      <span style="color: #00c8ff; font-size: 28px; font-weight: bold; margin-right: 10px;">03</span>
      <span style="font-size: 18px; color: #ffffff;">Get 10% Weekly Cashback</span>
    </div>
  </div>
  
  <!-- Join Now button -->
  <div style="text-align: center;">
    <a href="/en?modal=register"><button style="background-color: #00a8ff; color: white; border: none; border-radius: 30px; padding: 12px 40px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 0 15px rgba(0, 168, 255, 0.5);">JOIN NOW</button></a>
  </div>
</div>`;

		customSection5.innerHTML=`
<div class="container-fluid">
    <div class="slider-container">

        <div class="blue-accent-left"></div>
        <div class="blue-accent-right"></div>


        <div class="edge-fade-left"></div>
        <div class="edge-fade-right"></div>

        <div class="logo-slider" id="logoSlider">
            <div class="logo-slide" id="logoSlide">

            </div>
        </div>
    </div>
</div>
`;
function initSlider() {
   const logos = [
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmaticplay.svg", alt: "Pragmatic Play", url: "/en/providers/pragmaticplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Evolution%20Gaming.svg", alt: "Evolution", url: "/en/providers/evolution" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmatic-live-light.svg", alt: "Pragmatic Live", url: "/en/providers/pragmaticlive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hacksaw.svg", alt: "HackSaw Gaming", url: "/en/providers/hacksaw" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/egt.svg", alt: "EGT", url: "/en/providers/egt" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/NoLimitCity.svg", alt: "No Limit City", url: "/en/providers/nolimitcity" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netent.svg", alt: "Netent", url: "/en/providers/netent" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ezugi.svg", alt: "Ezugi", url: "/en/providers/ezugi" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amusnet.svg", alt: "Amusnet", url: "/en/providers/egt-interactive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1x2gaming.svg", alt: "1x2 Gaming", url: "/en/providers/1x2gaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/5men.svg", alt: "5men", url: "/en/providers/5men" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/endorphina.svg", alt: "Endorphina", url: "/en/providers/endorphina" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mrslotty.svg", alt: "MrSlotty", url: "/en/providers/mrslotty" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amatic.svg", alt: "Amatic", url: "/en/providers/amatic" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Tiger%20Gaming.svg", alt: "Red Tiger", url: "/en/providers/redtiger" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/softswiss.svg", alt: "BGAMING", url: "/en/providers/bgaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg", alt: "Booming Games", url: "/en/providers/booming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1spin4win.svg", alt: "1spin4win", url: "/en/providers/1spin4win" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/avatarux.svg", alt: "AvatarUX", url: "/en/providers/avatarux" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/belatra.svg", alt: "Belatra", url: "/en/providers/belatra" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/beterlive.svg", alt: "Beter.Live", url: "/en/providers/beterlive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/evoplay.svg", alt: "Evoplay Entertainment", url: "/en/providers/evoplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gamezix.svg", alt: "Gamzix", url: "/en/providers/gamzix" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/igtech.svg", alt: "iGTech", url: "/en/providers/igtech" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/playson.svg", alt: "Playson", url: "/en/providers/playson" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mascot.svg", alt: "Mascot Gaming", url: "/en/providers/mascotgaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mancala.svg", alt: "Mancala Gaming", url: "/en/providers/mancala" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/onlyplay.svg", alt: "OnlyPlay", url: "/en/providers/onlyplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/oryx.svg", alt: "ORYX", url: "/en/providers/oryx" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/platipus.svg", alt: "Platipus", url: "/en/providers/platipus" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/popiplay.svg", alt: "Popiplay", url: "/en/providers/popiplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/quickspin.svg", alt: "Quickspin", url: "/en/providers/quickspin" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/reevo.svg", alt: "Reevo", url: "/en/providers/reevo" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/slotmill.svg", alt: "Slotmill", url: "/en/providers/slotmill" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/smartsoft.svg", alt: "SmartSoft", url: "/en/providers/smartsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spadegaming.svg", alt: "Spadegaming", url: "/en/providers/spadegaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spribe.svg", alt: "Spribe", url: "/en/providers/spribe" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/thunderkick.svg", alt: "Thunderkick", url: "/en/providers/thunderkick" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tomhorn.svg", alt: "Tom Horn", url: "/en/providers/tomhornnative" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/truelab.svg", alt: "Truelab", url: "/en/providers/truelab" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/turbogames.svg", alt: "Turbo Games", url: "/en/providers/turbogames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betradar%20Virtual%20sports.svg", alt: "BetRadar VS", url: "/en/providers/betradarvs" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/betsoft.svg", alt: "BetSoft", url: "/en/providers/betsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CQ9.svg", alt: "CQ9", url: "/en/providers/cq9" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/habanero.svg", alt: "Habanero", url: "/en/providers/habanero" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "Leander", url: "/en/providers/leander" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leap.svg", alt: "Leap", url: "/en/providers/leap" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Live%20Games.svg", alt: "Live Games", url: "/en/providers/livegames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/luckystreak.svg", alt: "Lucky Streak", url: "/en/providers/luckystreak" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Playtech%20slots.svg", alt: "PlayTech", url: "/en/providers/playtech" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/SA%20Gaming.svg", alt: "SA Gaming", url: "/en/providers/sagaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Vivo%20Gaming.svg", alt: "Vivo Gaming", url: "/en/providers/vivogaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/yggdrasil.svg", alt: "YGG Drasil", url: "/en/providers/yggdrasil" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Pocket%20Games%20Soft.svg", alt: "PGSoft", url: "/en/providers/pgsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/golden%20hero.svg", alt: "Golden Hero", url: "/en/providers/goldenhero" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fugaso.svg", alt: "Fugaso", url: "/en/providers/fugaso" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/originals.svg", alt: "Ebetlab", url: "/en/providers/ebetlab" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imageinelive.svg", alt: "Imagine Live", url: "/en/providers/imagine-live" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imoon.svg", alt: "Imoon", url: "/en/providers/imoon" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/InOut.svg", alt: "InOut", url: "/en/providers/inout" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Jiliasia.svg", alt: "Jiliasia", url: "/en/providers/jiliasia" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Zeus%20Play.svg", alt: "Zeus Play", url: "/en/providers/zeus-play" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Peter%20And%20Sons.svg", alt: "Peter And Sons", url: "/en/providers/peter-and-sons" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/topspin.svg", alt: "TopSpin", url: "/en/providers/topspin" },
            { alt: "Popok", url: "/en/providers/popok" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg", alt: "Bet Games", url: "/en/providers/betgames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "Raw Games", url: "/en/providers/rawgames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "YGR Games", url: "/en/providers/ygrgames" }
        ];

    const logoSlide = document.getElementById('logoSlide');
    const logoSlider = document.getElementById('logoSlider');


    if (!logoSlide || !logoSlider) {
  
        return;
    }
    
    logos.forEach(logo => {
        const logoItem = document.createElement('div');
        logoItem.className = 'logo-item';

        const link = document.createElement('a');
        link.href = logo.url;

        if (logo.src) {
            const img = document.createElement('img');
            img.src = logo.src;
            img.alt = logo.alt;
            img.loading = 'lazy';
            link.appendChild(img);
        } else {
            const textSpan = document.createElement('span');
            textSpan.textContent = logo.alt;
            link.appendChild(textSpan);
        }

        logoItem.appendChild(link);
        logoSlide.appendChild(logoItem);
    });

    const clone = logoSlide.cloneNode(true);
    logoSlider.appendChild(clone);

    const animationDuration = logos.length * 1.5;
    logoSlider.style.animationDuration = animationDuration + 's';

    logoSlider.addEventListener('mouseenter', () => {
        logoSlider.style.animationPlayState = 'paused';
    });

    logoSlider.addEventListener('mouseleave', () => {
        logoSlider.style.animationPlayState = 'running';
    });
}

setTimeout(initSlider, 100);




/*customSection2.innerHTML = `
<div class="container">
    <div class="position-relative m-auto mt-lg-4">
        <div class="landing casino overflow-hidden position-relative rounded-4 p-3 px-md-5 py-md-4">
            <div class="landing-inner position-relative text-white p-2 p-sm-4">
                <div class="d-block mb-2 mb-sm-3 mb-lg-5">
                    <h1 class="fw-bold lh-sm mb-0">Countless ways to achieve big wins with thousands of exciting games.</h1>
                </div>
                <div class="d-block">
                    <div class="landing-image-mobile mx-auto d-block d-lg-none">
                        <img class="w-100 h-100" src="https://cedabet.github.io/assets/images/sticker.webp" alt="Casino Character">
                    </div>
                    <div class="details px-4 py-3 rounded-3 d-flex justify-content-start justify-content-md-evenly gap-3 gap-md-4 overflow-x-scroll mb-4 mb-sm-5 flex-wrap flex-sm-nowrap">
                        <div class="item d-flex align-items-center gap-3">
                            <i class="fa-solid fa-fire fs-2"></i>
                            <a href="casino/group/new-releases" class="d-block">
                                <span class="icon-text fw-bold text-nowrap">New Releases</span>
                            </a>
                        </div>
                        <div class="item d-flex align-items-center gap-3">
                            <i class="fa-solid fa-rocket fs-2"></i>
                            <a href="casino/group/enhanced-rtp" class="d-block">
                                <span class="icon-text fw-bold text-nowrap">High RTP</span>
                            </a>
                        </div>
                        <div class="item d-flex align-items-center gap-3">
                            <i class="fa-solid fa-dice fs-2"></i>
                            <a href="live-casino" class="d-block">
                                <span class="icon-text fw-bold text-nowrap">Live Casino</span>
                            </a>
                        </div>
                        <div class="item d-flex align-items-center gap-3">
                            <i class="fa-solid fa-trophy fs-2"></i>
                            <a href="tournaments" class="d-block">
                                <span class="icon-text fw-bold text-nowrap">Tournaments</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="d-block text-end text-lg-start pt-2 pt-sm-0">
                    <a href="javascript:void(0);" class="landing-button d-inline-block align-middle rounded-3 text-center" data-href="casino">Explore the Casino Section</a>
                </div>
            </div>
        </div>
        <div class="landing-image position-absolute bottom-0 ps-4 pt-4 d-none d-lg-block">
            <img class="w-100 h-100 pe-none" src="https://cedabet.github.io/assets/images/sticker.webp" alt="Casino Character">
        </div>
    </div>

</div>
`*/
		customSection4.innerHTML = `

<style>
    /* New button hover animation */
    @@keyframes buttonShine {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }

    #explore-button:hover {
        transform: translateY(-2px);
    }

        #explore-button:hover .button-arrow {
            transform: translateX(4px);
        }

    /* Floating animation for icons */
    @@keyframes float {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-3px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    .category-card:hover .category-icon {
        animation: float 2s ease-in-out infinite;
    }

    .category-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
</style>


<div class="container">
    <div id="casino-section" style="position: relative; width: 100%; margin: 0 auto; background-color: #080808; background-image: linear-gradient(118deg, #091820, rgb(9, 24, 32) 21.85%, #6db3f5); border-radius: 16px; padding: 40px; color: white; font-family: Arial, sans-serif; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); box-sizing: border-box; margin-top: 0px; margin-bottom: 44px;overflow: hidden;">
        <div id="content-wrapper" style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      max-width: 60%;
      position: relative;
      z-index: 2;
    ">
            <div>
                <h1 id="main-heading" style="font-size: 2rem; font-weight: 800; line-height: 1.1; margin-bottom: 20px; margin-top: 0;">
                    Endless opportunities to win big with thousands of thrilling games.
                </h1>
            </div>

            <!-- Compact Card Design for Icons Section -->
            <div id="icons-section" style="margin-top: 30px;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <!-- New Releases -->
                    <a href="#" class="category-card" style="flex: 1; min-width: 110px; background-color: #102532; border-radius: 8px; padding: 10px 12px; text-decoration: none; color: white; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); border-left: 3px solid #ff5e3a; display: flex; align-items: center;">
                        <div class="category-icon" style="
              font-size: 24px;
              margin-right: 10px;
              transition: all 0.3s ease;
            ">🔥</div>
                        <div>
                            <div style="
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                line-height: 1.2;
              ">New Releases</div>
                            <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.6);
              ">Latest games</div>
                        </div>
                    </a>

                    <!-- High RTP -->
                    <a href="#" class="category-card" style="flex: 1; min-width: 110px; background-color: #102532; border-radius: 8px; padding: 10px 12px; text-decoration: none; color: white; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); border-left: 3px solid #3a9fff; display: flex; align-items: center;">
                        <div class="category-icon" style="
              font-size: 24px;
              margin-right: 10px;
              transition: all 0.3s ease;
            ">🚀</div>
                        <div>
                            <div style="
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                line-height: 1.2;
              ">High RTP</div>
                            <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.6);
              ">Best payouts</div>
                        </div>
                    </a>

                    <!-- Live Casino -->
                    <a href="#" class="category-card" style="flex: 1; min-width: 110px; background-color: #102532; border-radius: 8px; padding: 10px 12px; text-decoration: none; color: white; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); border-left: 3px solid #fb2d2d; display: flex; align-items: center;">
                        <div class="category-icon" style="
              font-size: 24px;
              margin-right: 10px;
              transition: all 0.3s ease;
            ">🎲</div>
                        <div>
                            <div style="
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                line-height: 1.2;
              ">Live Casino</div>
                            <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.6);
              ">Real dealers</div>
                        </div>
                    </a>

                    <!-- Tournament -->
                    <a href="#" class="category-card" style="flex: 1; min-width: 110px; background-color: #102532; border-radius: 8px; padding: 10px 12px; text-decoration: none; color: white; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); border-left: 3px solid #ffcc00; display: flex; align-items: center;">
                        <div class="category-icon" style="
              font-size: 24px;
              margin-right: 10px;
              transition: all 0.3s ease;
            ">🏆</div>
                        <div>
                            <div style="
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                line-height: 1.2;
              ">Tournament</div>
                            <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.6);
              ">Compete &amp; win</div>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Redesigned button with fixed responsive width -->
            <div style="margin-top: 40px; width: 100%;">
                <a id="explore-button" href="#" style="
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-size: 200% 200%;
          color: #0f1923;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 800;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          position: relative;
          border: none;
          box-sizing: border-box;background-color: rgb(255, 229, 0);
box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgb(255, 135, 25) 0px 0px 15px inset;
        ">
                    <span style="position: relative; z-index: 2;">EXPLORE CASINO SECTION</span>
                    <span class="button-arrow" style="
		    display:none;
            margin-left: 12px;
            font-size: 18px;
            transition: transform 0.3s ease;
            position: relative;
            z-index: 2;
          ">→</span>
                    <span style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(0, 0, 0, 0.1);
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          "></span>
                </a>
            </div>
        </div>

        <div id="image-wrapper" style="position: absolute; right: -185px; bottom: -34px; top: 0; display: flex; align-items: center; justify-content: flex-end; width: 55%; z-index: 1;">
            <img id="astronaut-image" src="https://cedabet.github.io/assets/images/spin.png " alt="Astronaut with flames" style="max-height: 500px; max-width: 100%; object-fit: contain; bottom: 0px; position: absolute;">
        </div>
    </div>

    <script>
                    // Responsive handling
                    function adjustForScreenSize() {
                        const section = document.getElementById('casino-section');
                        const contentWrapper = document.getElementById('content-wrapper');
                        const heading = document.getElementById('main-heading');
                        const iconsSection = document.getElementById('icons-section');
                        const imageWrapper = document.getElementById('image-wrapper');
                        const astronautImage = document.getElementById('astronaut-image');
                        const categoryCards = document.querySelectorAll('.category-card');
                        const exploreButton = document.getElementById('explore-button');

                        if (window.innerWidth <= 768) {
                            // Mobile styles
                            section.style.padding = '30px 20px';
                            contentWrapper.style.maxWidth = '100%';
                            heading.style.fontSize = '1.5rem';

                            // Move image to the top on mobile
                            section.style.display = 'flex';
                            section.style.flexDirection = 'column';

                            imageWrapper.style.position = 'relative';
                            imageWrapper.style.width = '100%';
                            imageWrapper.style.height = '250px';
                            imageWrapper.style.marginBottom = '20px';
                            imageWrapper.style.order = '1';
                            imageWrapper.style.alignItems = 'center';
                            imageWrapper.style.justifyContent = 'center';

                            contentWrapper.style.order = '2';

                            astronautImage.style.position = 'relative';
                            astronautImage.style.maxHeight = '250px';
                            astronautImage.style.margin = '0 auto';
                            astronautImage.style.display = 'block';
                            astronautImage.style.bottom = 'auto';

                            // Fix button width for mobile
                            exploreButton.style.width = '100%';
                            exploreButton.style.boxSizing = 'border-box';

                            // Adjust cards for mobile
                            if (window.innerWidth <= 480) {
                                categoryCards.forEach(card => {
                                    card.style.minWidth = 'calc(50% - 5px)';
                                    card.style.flex = '0 0 calc(50% - 5px)';
                                });

                                // Smaller text and padding for very small screens
                                exploreButton.style.fontSize = '13px';
                                exploreButton.style.padding = '12px 16px';

                                // Hide arrow on very small screens if text is too long
                                if (window.innerWidth < 360) {
                                    document.querySelector('.button-arrow').style.display = 'none';
                                } else {
                                    document.querySelector('.button-arrow').style.display = 'inline';
                                }
                            }
                        } else {
                            // Desktop styles - reset to original
                            section.style.padding = '40px';
                            section.style.display = 'block';
                            contentWrapper.style.maxWidth = '60%';
                            contentWrapper.style.order = 'initial';
                            heading.style.fontSize = '2rem';

                            imageWrapper.style.position = 'absolute';
                            imageWrapper.style.width = '50%';
                            imageWrapper.style.marginBottom = '0';
                            imageWrapper.style.order = 'initial';
                            imageWrapper.style.height = 'auto';
                            imageWrapper.style.alignItems = 'center';
                            imageWrapper.style.justifyContent = 'flex-end';

                            astronautImage.style.position = 'absolute';
                            astronautImage.style.maxHeight = '500px';
                            astronautImage.style.margin = '0';
                            astronautImage.style.bottom = '0px';

                            // Reset button for desktop
                            exploreButton.style.width = 'auto';
                            exploreButton.style.fontSize = '15px';
                            exploreButton.style.padding = '14px 28px';
                            document.querySelector('.button-arrow').style.display = 'inline';

                            // Reset cards for desktop
                            categoryCards.forEach(card => {
                                card.style.minWidth = '110px';
                                card.style.flex = '1';
                            });
                        }
                    }

                    // Run on load and resize
                    window.addEventListener('load', adjustForScreenSize);
                    window.addEventListener('resize', adjustForScreenSize);

                    // Initial call
                    adjustForScreenSize();
    </script>
</div>

    <script>
                    // Responsive handling
                    function adjustForScreenSize() {
                        const section = document.getElementById('casino-section');
                        const contentWrapper = document.getElementById('content-wrapper');
                        const heading = document.getElementById('main-heading');
                        const iconsSection = document.getElementById('icons-section');
                        const imageWrapper = document.getElementById('image-wrapper');
                        const astronautImage = document.getElementById('astronaut-image');
                        const categoryCards = document.querySelectorAll('.category-card');
                        const exploreButton = document.getElementById('explore-button');

                        if (window.innerWidth <= 768) {
                            // Mobile styles
                            section.style.padding = '30px 20px';
                            contentWrapper.style.maxWidth = '100%';
                            heading.style.fontSize = '1.5rem';

                            // Move image to the top on mobile
                            section.style.display = 'flex';
                            section.style.flexDirection = 'column';

                            imageWrapper.style.position = 'relative';
                            imageWrapper.style.width = '100%';
                            imageWrapper.style.height = '250px';
                            imageWrapper.style.marginBottom = '20px';
                            imageWrapper.style.order = '1';
                            imageWrapper.style.alignItems = 'center';
                            imageWrapper.style.justifyContent = 'center';

                            contentWrapper.style.order = '2';

                            astronautImage.style.position = 'relative';
                            astronautImage.style.maxHeight = '250px';
                            astronautImage.style.margin = '0 auto';
                            astronautImage.style.display = 'block';
                            astronautImage.style.bottom = 'auto';

                            // Fix button width for mobile
                            exploreButton.style.width = '100%';
                            exploreButton.style.boxSizing = 'border-box';

                            // Adjust cards for mobile
                            if (window.innerWidth <= 480) {
                                categoryCards.forEach(card => {
                                    card.style.minWidth = 'calc(50% - 5px)';
                                    card.style.flex = '0 0 calc(50% - 5px)';
                                });

                                // Smaller text and padding for very small screens
                                exploreButton.style.fontSize = '13px';
                                exploreButton.style.padding = '12px 16px';

                                // Hide arrow on very small screens if text is too long
                                if (window.innerWidth < 360) {
                                    document.querySelector('.button-arrow').style.display = 'none';
                                } else {
                                    document.querySelector('.button-arrow').style.display = 'inline';
                                }
                            }
                        } else {
                            // Desktop styles - reset to original
                            section.style.padding = '40px';
                            section.style.display = 'block';
                            contentWrapper.style.maxWidth = '60%';
                            contentWrapper.style.order = 'initial';
                            heading.style.fontSize = '2rem';

                            imageWrapper.style.position = 'absolute';
                            imageWrapper.style.width = '50%';
                            imageWrapper.style.marginBottom = '0';
                            imageWrapper.style.order = 'initial';
                            imageWrapper.style.height = 'auto';
                            imageWrapper.style.alignItems = 'center';
                            imageWrapper.style.justifyContent = 'flex-end';

                            astronautImage.style.position = 'absolute';
                            astronautImage.style.maxHeight = '500px';
                            astronautImage.style.margin = '0';
                            astronautImage.style.bottom = '0px';

                            // Reset button for desktop
                            exploreButton.style.width = 'auto';
                            exploreButton.style.fontSize = '15px';
                            exploreButton.style.padding = '14px 28px';
                            document.querySelector('.button-arrow').style.display = 'inline';

                            // Reset cards for desktop
                            categoryCards.forEach(card => {
                                card.style.minWidth = '110px';
                                card.style.flex = '1';
                            });
                        }
                    }

                    // Run on load and resize
                    window.addEventListener('load', adjustForScreenSize);
                    window.addEventListener('resize', adjustForScreenSize);

                    // Initial call
                    adjustForScreenSize();
    </script>
</div>`
                  mainContent.appendChild(customSection3);
		mainContent.appendChild(customSection4);
		
		mainContent.appendChild(customSection5);
		//   mainContent.appendChild(customSection2);
		 mainContent.appendChild(customSection);
addButtonsToSlider();
        }

    }


function addButtonsToSlider() {
  const slideImages = document.querySelectorAll('.slide-image')
  
  slideImages.forEach(image => {
    // Create a button element
    const button = document.createElement('button')
    button.className = 'header__signup slider_btn'
    button.type = 'button'
    button.textContent = 'Show Details'
    
    // Apply all the styles with gold colors
    button.style.cssText = `
position: absolute;
text-transform: unset; right: 1em;
bottom: 2em; margin-right: 5px; 
letter-spacing: 0.5px; 
color: rgba(255, 255, 255, 0.95); 
height: 33px !important;
padding-left: 11px !important; 
padding-right: 12px !important;
border-radius: 4px !important;
background: rgb(233, 172, 17) !important; 
box-shadow: none !important; font-size: 9pt;
      
    `
    
    // Get the parent slide div to properly position the button
    const slideDiv = image.closest('.slide')
    if (slideDiv) {
      // Make sure the slide div has position relative for absolute positioning to work
      if (getComputedStyle(slideDiv).position === 'static') {
        slideDiv.style.position = 'relative'
      }
      slideDiv.appendChild(button)
    }
  })
}
