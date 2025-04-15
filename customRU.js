
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
            if (sportspath === "/ru/sportsbook") {
                var sidebar = document.getElementById("sidebar");
                sidebar.className = "";
                sidebar.classList.add("sidebar", "active");
            }
            isFirstLoad = false;
        }

      

        var sidebarBtn = document.querySelector(".sidebar__btn");

        sidebarBtn.addEventListener("click", function () {
            var sportspath2 = window.location.pathname;
            if (sportspath2 === "/ru/sportsbook") {
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
            if (path === "/ru/") {
                /*  alert("Anasayfaya hoş geldiniz!");*/
                loadVipFeatures();
	        setTimeout(loadh2Title, 1000);   
		    addMenuElement();
		    addMenuElementTwo();
		      setTimeout(updateCopyrightYear, 1000);  

		  
            } else if (path === "/ru/vip") {
                /* alert("VIP sayfasına hoş geldiniz!");*/
            }

            else if (path === "/ru/sportsbook") {
                var sportspath = window.location.pathname;
                if (sportspath === "/ru/sportsbook") {
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
                     
                     	<img src="https://cedabet.github.io/assets/images/azerbaycanda.jpg" alt="Dikey Resim" style="/* height: 600px; */ width: 100%; margin: 0 auto; display: block;">
                     
       
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
            title.textContent.trim() === 'Mini Oyunlar' || 
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
   newAnchor.href = '/ru/casino/group/table-games';
 
   const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
   svgIcon.classList.add('svg-icon');
   const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
   use.setAttribute('href', '/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#table-games');
   svgIcon.appendChild(use);
 
 
   const span = document.createElement('span');
   span.textContent = 'Новый';
 
 
   newAnchor.appendChild(svgIcon);
   newAnchor.appendChild(document.createTextNode(' Настольные игры'));
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
                 <a id="${elementId}" class="sidebar__link-small sidebar__link-small--purple" href="/ru/casino" style="background: url('https://cedabet.github.io/assets/images/promotionBtn.jpg') left center / cover no-repeat;"></a>
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
                        <span>Акция</span>
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

        if (title.textContent.trim().includes('Лучшие игры')) {
            url = '/ru/casino/group/lobby';
        }
        if (title.textContent.trim().includes('Популярные игры')) {
            url = '/ru/casino/group/new-releases';
        }
        if (title.textContent.trim().includes('Новые выпуски')) {
            url = '/ru/casino/group/new-releases';
        }
        if (title.textContent.trim().includes('Высокий RTP')) {
            url = '/ru/casino/group/enhanced-rtp';
        }
        if (title.textContent.trim().includes('Купить бонус')) {
            url = '/ru/casino/group/bonus-buy';
        }

        if (url) {
			 if (!title.nextElementSibling || title.nextElementSibling.tagName !== 'A') {
            const newLink = document.createElement('a');
            newLink.href = url;
            newLink.textContent = `Посмотреть все`;
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
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmaticplay.svg", alt: "Pragmatic Play", url: "/ru/providers/pragmaticplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Evolution%20Gaming.svg", alt: "Evolution", url: "/ru/providers/evolution" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmatic-live-light.svg", alt: "Pragmatic Live", url: "/ru/providers/pragmaticlive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hacksaw.svg", alt: "HackSaw Gaming", url: "/ru/providers/hacksaw" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/egt.svg", alt: "EGT", url: "/ru/providers/egt" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/NoLimitCity.svg", alt: "No Limit City", url: "/ru/providers/nolimitcity" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netent.svg", alt: "Netent", url: "/ru/providers/netent" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ezugi.svg", alt: "Ezugi", url: "/ru/providers/ezugi" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amusnet.svg", alt: "Amusnet", url: "/ru/providers/egt-interactive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1x2gaming.svg", alt: "1x2 Gaming", url: "/ru/providers/1x2gaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/5men.svg", alt: "5men", url: "/ru/providers/5men" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/endorphina.svg", alt: "Endorphina", url: "/ru/providers/endorphina" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mrslotty.svg", alt: "MrSlotty", url: "/ru/providers/mrslotty" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amatic.svg", alt: "Amatic", url: "/ru/providers/amatic" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Tiger%20Gaming.svg", alt: "Red Tiger", url: "/ru/providers/redtiger" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/softswiss.svg", alt: "BGAMING", url: "/ru/providers/bgaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg", alt: "Booming Games", url: "/ru/providers/booming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1spin4win.svg", alt: "1spin4win", url: "/ru/providers/1spin4win" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/avatarux.svg", alt: "AvatarUX", url: "/ru/providers/avatarux" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/belatra.svg", alt: "Belatra", url: "/ru/providers/belatra" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/beterlive.svg", alt: "Beter.Live", url: "/ru/providers/beterlive" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/evoplay.svg", alt: "Evoplay Entertainment", url: "/ru/providers/evoplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gamezix.svg", alt: "Gamzix", url: "/ru/providers/gamzix" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/igtech.svg", alt: "iGTech", url: "/ru/providers/igtech" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/playson.svg", alt: "Playson", url: "/ru/providers/playson" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mascot.svg", alt: "Mascot Gaming", url: "/ru/providers/mascotgaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mancala.svg", alt: "Mancala Gaming", url: "/ru/providers/mancala" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/onlyplay.svg", alt: "OnlyPlay", url: "/ru/providers/onlyplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/oryx.svg", alt: "ORYX", url: "/ru/providers/oryx" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/platipus.svg", alt: "Platipus", url: "/ru/providers/platipus" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/popiplay.svg", alt: "Popiplay", url: "/ru/providers/popiplay" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/quickspin.svg", alt: "Quickspin", url: "/ru/providers/quickspin" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/reevo.svg", alt: "Reevo", url: "/ru/providers/reevo" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/slotmill.svg", alt: "Slotmill", url: "/ru/providers/slotmill" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/smartsoft.svg", alt: "SmartSoft", url: "/ru/providers/smartsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spadegaming.svg", alt: "Spadegaming", url: "/ru/providers/spadegaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spribe.svg", alt: "Spribe", url: "/ru/providers/spribe" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/thunderkick.svg", alt: "Thunderkick", url: "/ru/providers/thunderkick" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tomhorn.svg", alt: "Tom Horn", url: "/ru/providers/tomhornnative" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/truelab.svg", alt: "Truelab", url: "/ru/providers/truelab" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/turbogames.svg", alt: "Turbo Games", url: "/ru/providers/turbogames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betradar%20Virtual%20sports.svg", alt: "BetRadar VS", url: "/ru/providers/betradarvs" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/betsoft.svg", alt: "BetSoft", url: "/ru/providers/betsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CQ9.svg", alt: "CQ9", url: "/ru/providers/cq9" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/habanero.svg", alt: "Habanero", url: "/ru/providers/habanero" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "Leander", url: "/ru/providers/leander" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leap.svg", alt: "Leap", url: "/ru/providers/leap" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Live%20Games.svg", alt: "Live Games", url: "/ru/providers/livegames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/luckystreak.svg", alt: "Lucky Streak", url: "/ru/providers/luckystreak" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Playtech%20slots.svg", alt: "PlayTech", url: "/ru/providers/playtech" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/SA%20Gaming.svg", alt: "SA Gaming", url: "/ru/providers/sagaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Vivo%20Gaming.svg", alt: "Vivo Gaming", url: "/ru/providers/vivogaming" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/yggdrasil.svg", alt: "YGG Drasil", url: "/ru/providers/yggdrasil" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Pocket%20Games%20Soft.svg", alt: "PGSoft", url: "/ru/providers/pgsoft" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/golden%20hero.svg", alt: "Golden Hero", url: "/ru/providers/goldenhero" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fugaso.svg", alt: "Fugaso", url: "/ru/providers/fugaso" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/originals.svg", alt: "Ebetlab", url: "/ru/providers/ebetlab" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imageinelive.svg", alt: "Imagine Live", url: "/ru/providers/imagine-live" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imoon.svg", alt: "Imoon", url: "/ru/providers/imoon" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/InOut.svg", alt: "InOut", url: "/ru/providers/inout" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Jiliasia.svg", alt: "Jiliasia", url: "/ru/providers/jiliasia" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Zeus%20Play.svg", alt: "Zeus Play", url: "/ru/providers/zeus-play" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Peter%20And%20Sons.svg", alt: "Peter And Sons", url: "/ru/providers/peter-and-sons" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/topspin.svg", alt: "TopSpin", url: "/ru/providers/topspin" },
            { alt: "Popok", url: "/ru/providers/popok" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg", alt: "Bet Games", url: "/ru/providers/betgames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "Raw Games", url: "/ru/providers/rawgames" },
            { src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg", alt: "YGR Games", url: "/ru/providers/ygrgames" }
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
