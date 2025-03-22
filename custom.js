
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
    }) ();

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
    <button style="background-color: #00a8ff; color: white; border: none; border-radius: 30px; padding: 12px 40px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 0 15px rgba(0, 168, 255, 0.5);">JOIN NOW</button>
  </div>
</div>`;

		customSection5.innerHTML=`

<div class="container">
    <div class="divider-section" style="padding: 0;margin-bottom:30px;display:none;">
        <!-- Steps container -->
        <img src="https://cdn.midjourney.com/be3f54ee-2d18-42ad-96af-be045f1e3142/0_2.png" style="width: 100%;">
    </div>
</div>`;

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
      text-transform:unset;
      right: 1em;
      bottom: 2em;
      height: 33px !important;
      width: 100% !important;
      max-width: 165px;
      margin-right: 5px;
      padding-left: 5px !important;
      padding-right: 5px !important;
      letter-spacing: 0.5px;
      border-radius: 4px !important;
      background: rgb(218, 165, 32) !important;
      background-color: rgb(218, 165, 32);
      box-shadow: none !important;
      color: rgba(255, 255, 255, 0.95);
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
