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
            if (sportspath === "/az/sportsbook") {
                var sidebar = document.getElementById("sidebar");
                sidebar.className = "";
                sidebar.classList.add("sidebar", "active");
            }
            isFirstLoad = false;
        }

      

        var sidebarBtn = document.querySelector(".sidebar__btn");

        sidebarBtn.addEventListener("click", function () {
            var sportspath2 = window.location.pathname;
            if (sportspath2 === "/az/sportsbook") {
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
            if (path === "/az/") {
                /*  alert("Anasayfaya hoş geldiniz!");*/
                loadVipFeatures();
	        setTimeout(loadh2Title, 1000);   
		    addMenuElement();
		    addMenuElementTwo();
		      setTimeout(updateCopyrightYear, 1000);  

		  
            } else if (path === "/az/vip") {
                /* alert("VIP sayfasına hoş geldiniz!");*/
            }

            else if (path === "/az/sportsbook") {
                var sportspath = window.location.pathname;
                if (sportspath === "/az/sportsbook") {
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
    })
	    ();

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
                     	<img src="https://cedabet.github.io/assets/images/azerbaycanda.jpg" alt="Dikey Resim" style="/* height: 600px; */ width: 100%; margin: 0 auto; display: block;">
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
 const titles = document.querySelectorAll('h2.section__title');

    titles.forEach(function(title) {
     
        if (title.textContent.trim() === 'Mini Games' || 
            title.textContent.trim() === 'Mini oyunlar' || 
            title.textContent.trim() === 'Мини -игры') {
            
          title.innerHTML = '<svg class="svg-icon"><use href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#mini-games" xlink:href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#mini-games"></use></svg>Ceda Originals';

        }
    });
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
   newAnchor.href = '/az/casino/group/table-games';
 
   const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
   svgIcon.classList.add('svg-icon');
   const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
   use.setAttribute('href', '/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#table-games');
   svgIcon.appendChild(use);
 
 
   const span = document.createElement('span');
   span.textContent = 'Yeni';
 
 
   newAnchor.appendChild(svgIcon);
   newAnchor.appendChild(document.createTextNode(' Cədvəl Oyunları'));
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
                 <a id="${elementId}" class="sidebar__link-small sidebar__link-small--purple" href="/az/casino" style="background: url('https://cedabet.github.io/assets/images/promotionBtn.jpg') left center / cover no-repeat;"></a>
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

        if (title.textContent.trim().includes('Yuxarı oyunlar')) {
            url = '/az/casino/group/lobby';
        }
        if (title.textContent.trim().includes('Populyar oyunlar')) {
            url = '/az/casino/group/new-releases';
        }
        if (title.textContent.trim().includes('Yeni buraxılışlar')) {
            url = '/az/casino/group/new-releases';
        }
        if (title.textContent.trim().includes('Yüksək rtp')) {
            url = '/az/casino/group/enhanced-rtp';
        }
        if (title.textContent.trim().includes('Bonus almaq')) {
            url = '/az/casino/group/bonus-buy';
        }

	 if (url) {
	    if (!title.nextElementSibling || title.nextElementSibling.tagName !== 'A') {
            const newLink = document.createElement('a');
            newLink.href = url;
            newLink.textContent = `Hamısını Gör`;
            newLink.style.background = 'rgba(55, 162, 221, 0.13)'; 
            newLink.style.padding = '5px 12px 5px 12px';
            newLink.style.borderRadius = '4px';
            newLink.style.fontSize = '12px';
            newLink.style.color = 'white'; 
            newLink.style.border = '1px solid rgba(41, 154, 217, 0.33)'; 

            title.insertAdjacentElement('afterend', newLink);
	    }
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


            let customSection5 = document.createElement("div");
            customSection5.id = "custom-section-7";
            customSection5.classList.add("section", "custom-section");


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
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmaticplay.svg", alt: "Pragmatic Play", url: "/az/providers/pragmaticplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Evolution%20Gaming.svg", alt: "Evolution", url: "/az/providers/evolution" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmatic-live-light.svg", alt: "Pragmatic Live", url: "/az/providers/pragmaticlive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hacksaw.svg", alt: "HackSaw Gaming", url: "/az/providers/hacksaw" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/egt.svg", alt: "EGT", url: "/az/providers/egt" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/NoLimitCity.svg", alt: "No Limit City", url: "/az/providers/nolimitcity" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netent.svg", alt: "Netent", url: "/az/providers/netent" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ezugi.svg", alt: "Ezugi", url: "/az/providers/ezugi" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amusnet.svg", alt: "Amusnet", url: "/az/providers/egt-interactive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1x2gaming.svg", alt: "1x2 Gaming", url: "/az/providers/1x2gaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/5men.svg", alt: "5men", url: "/az/providers/5men" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/endorphina.svg", alt: "Endorphina", url: "/az/providers/endorphina" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mrslotty.svg", alt: "MrSlotty", url: "/az/providers/mrslotty" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amatic.svg", alt: "Amatic", url: "/az/providers/amatic" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Tiger%20Gaming.svg", alt: "Red Tiger", url: "/az/providers/redtiger" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/softswiss.svg", alt: "BGAMING", url: "/az/providers/bgaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg", alt: "Booming Games", url: "/az/providers/booming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1spin4win.svg", alt: "1spin4win", url: "/az/providers/1spin4win" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/avatarux.svg", alt: "AvatarUX", url: "/az/providers/avatarux" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/belatra.svg", alt: "Belatra", url: "/az/providers/belatra" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/beterlive.svg", alt: "Beter.Live", url: "/az/providers/beterlive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/evoplay.svg", alt: "Evoplay Entertainment", url: "/az/providers/evoplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gamezix.svg", alt: "Gamzix", url: "/az/providers/gamzix" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/igtech.svg", alt: "iGTech", url: "/az/providers/igtech" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/playson.svg", alt: "Playson", url: "/az/providers/playson" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mascot.svg", alt: "Mascot Gaming", url: "/az/providers/mascotgaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mancala.svg", alt: "Mancala Gaming", url: "/az/providers/mancala" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/onlyplay.svg", alt: "OnlyPlay", url: "/az/providers/onlyplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/oryx.svg", alt: "ORYX", url: "/az/providers/oryx" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/platipus.svg", alt: "Platipus", url: "/az/providers/platipus" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/popiplay.svg", alt: "Popiplay", url: "/az/providers/popiplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/quickspin.svg", alt: "Quickspin", url: "/az/providers/quickspin" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/reevo.svg", alt: "Reevo", url: "/az/providers/reevo" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/slotmill.svg", alt: "Slotmill", url: "/az/providers/slotmill" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/smartsoft.svg", alt: "SmartSoft", url: "/az/providers/smartsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spadegaming.svg", alt: "Spadegaming", url: "/az/providers/spadegaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spribe.svg", alt: "Spribe", url: "/az/providers/spribe" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/thunderkick.svg", alt: "Thunderkick", url: "/az/providers/thunderkick" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tomhorn.svg", alt: "Tom Horn", url: "/az/providers/tomhornnative" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/truelab.svg", alt: "Truelab", url: "/az/providers/truelab" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/turbogames.svg", alt: "Turbo Games", url: "/az/providers/turbogames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betradar%20Virtual%20sports.svg", alt: "BetRadar VS", url: "/az/providers/betradarvs" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/betsoft.svg", alt: "BetSoft", url: "/az/providers/betsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CQ9.svg", alt: "CQ9", url: "/az/providers/cq9" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/habanero.svg", alt: "Habanero", url: "/az/providers/habanero" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "Leander", url: "/az/providers/leander" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leap.svg", alt: "Leap", url: "/az/providers/leap" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Live%20Games.svg", alt: "Live Games", url: "/az/providers/livegames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/luckystreak.svg", alt: "Lucky Streak", url: "/az/providers/luckystreak" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Playtech%20slots.svg", alt: "PlayTech", url: "/az/providers/playtech" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/SA%20Gaming.svg", alt: "SA Gaming", url: "/az/providers/sagaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Vivo%20Gaming.svg", alt: "Vivo Gaming", url: "/az/providers/vivogaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/yggdrasil.svg", alt: "YGG Drasil", url: "/az/providers/yggdrasil" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Pocket%20Games%20Soft.svg", alt: "PGSoft", url: "/az/providers/pgsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/golden%20hero.svg", alt: "Golden Hero", url: "/az/providers/goldenhero" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fugaso.svg", alt: "Fugaso", url: "/az/providers/fugaso" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/originals.svg", alt: "Ebetlab", url: "/az/providers/ebetlab" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imageinelive.svg", alt: "Imagine Live", url: "/az/providers/imagine-live" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imoon.svg", alt: "Imoon", url: "/az/providers/imoon" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/InOut.svg", alt: "InOut", url: "/az/providers/inout" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Jiliasia.svg", alt: "Jiliasia", url: "/az/providers/jiliasia" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Zeus%20Play.svg", alt: "Zeus Play", url: "/az/providers/zeus-play" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Peter%20And%20Sons.svg", alt: "Peter And Sons", url: "/az/providers/peter-and-sons" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/topspin.svg", alt: "TopSpin", url: "/az/providers/topspin" },
            { alt: "Popok", url: "/az/providers/popok" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg", alt: "Bet Games", url: "/az/providers/betgames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "Raw Games", url: "/az/providers/rawgames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "YGR Games", url: "/az/providers/ygrgames" }
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


		mainContent.appendChild(customSection5);

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
