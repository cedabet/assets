
    let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css";

document.head.appendChild(link);

(function() {
    let lastUrl = location.href;
    let isFirstLoad = true;
    if (isFirstLoad) {
        loadVipFeatures();
        setTimeout(loadh2Title, 1000);
        addMenuElement();
        addMenuElementTwo();
        setTimeout(updateCopyrightYear, 1000);
        setTimeout(createSigninModal, 2000);
        CreateCedaOriginal();
        CreateCedaOriginalTwo();
	    insertCedaTVButton();


        var sportspath = window.location.pathname;
        if (sportspath === "/en/sportsbook") {
            var sidebar = document.getElementById("sidebar");
            sidebar.className = "";
            sidebar.classList.add("sidebar", "active");
            var sidebarLogo = document.querySelector(".header__logo");
            if (sidebarLogo) {
              //  sidebarLogo.style.setProperty('display', 'none', 'important');
            }
        }
	     else if (sportspath === "/en/trade") {
            
                    var sidebar = document.getElementById("sidebar");
                    sidebar.className = "";
                    sidebar.classList.add("sidebar", "sidebar--sport-active","active");
                    var sidebarLogo = document.querySelector(".header__logo");
                    if (sidebarLogo) {
                     //   sidebarLogo.style.setProperty('display', 'none', 'important');
                    }

            }
	      else if (sportspath === "/en/e-sport") {
             
                    var sidebar = document.getElementById("sidebar");
                    sidebar.className = "";
                    sidebar.classList.add("sidebar", "sidebar--sport-active","active");
                    var sidebarLogo = document.querySelector(".header__logo");
                    if (sidebarLogo) {
                     //   sidebarLogo.style.setProperty('display', 'none', 'important');
                    }
                  

                

            }
	          else if (sportspath === "/en/vip") {
             
                createVipExperience();

            }
        isFirstLoad = false;
    }


    function checkUrlChange() {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            handlePageScripts(location.pathname);
        }
    }

    function handlePageScripts(path) {
        setTimeout(function() {
		    insertCedaTVButton();
            if (path === "/en/") {
               
                clearDynamicContent()
                loadVipFeatures();
                setTimeout(loadh2Title, 1000);
                addMenuElement();
                addMenuElementTwo();
                setTimeout(updateCopyrightYear, 1000);

                CreateCedaOriginal();
                CreateCedaOriginalTwo();
            } else if (path === "/en/vip") {
                clearDynamicContent();
		    createVipExperience();
            } else if (path === "/en/casino") {
                clearDynamicContent()
                CreateCedaOriginal();
                CreateCedaOriginalTwo();
            } else if (path === "/en/sportsbook") {
                var sportspath = window.location.pathname;
                if (sportspath === "/en/sportsbook") {
                    var sidebar = document.getElementById("sidebar");
                    sidebar.className = "";
                    sidebar.classList.add("sidebar", "active");
                    var sidebarLogo = document.querySelector(".header__logo");
                    if (sidebarLogo) {
                     //   sidebarLogo.style.setProperty('display', 'none', 'important');
                    }
                    clearDynamicContent()

                }

            }
	    else if (path === "/en/trade") {
            
                    var sidebar = document.getElementById("sidebar");
                    sidebar.className = "";
                    sidebar.classList.add("sidebar", "sidebar--sport-active","active");
                    var sidebarLogo = document.querySelector(".header__logo");
                    if (sidebarLogo) {
                    //    sidebarLogo.style.setProperty('display', 'none', 'important');
                    }
                    clearDynamicContent()

                

            }
	      else if (path === "/en/e-sport") {
             
                    var sidebar = document.getElementById("sidebar");
                    sidebar.className = "";
                    sidebar.classList.add("sidebar", "sidebar--sport-active","active");
                    var sidebarLogo = document.querySelector(".header__logo");
                    if (sidebarLogo) {
                     //   sidebarLogo.style.setProperty('display', 'none', 'important');
                    }
                    clearDynamicContent()

                

            }
	      else if (path !== "/en/sportsbook") {
                var sidebarLogo = document.querySelector(".header__logo");
                if (sidebarLogo) {
                 //   sidebarLogo.style.setProperty('display', 'none', 'important');
                }
                clearDynamicContent()

            }
        }, 400);
    }


    new MutationObserver(checkUrlChange).observe(document, {
        subtree: true,
        childList: true
    });
    window.addEventListener('load', function() {
        checkUrlChange(); // Sayfa yüklendikten hemen sonra kontrol et
    });


    const pushState = history.pushState;
    const replaceState = history.replaceState;

    history.pushState = function() {
        pushState.apply(history, arguments);
        checkUrlChange();
    };

    history.replaceState = function() {
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
        // Başlık içeriğini kontrol ediyoruz
        if (title.textContent.trim() === 'Mini Games' ||
            title.textContent.trim() === 'Mini Oyunlar' ||
            title.textContent.trim() === 'Мини -игры') {

         //   title.innerHTML = '<svg class="svg-icon"><use href="https://cedabet.github.io/assets/images/original.svg" xlink:href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#mini-games"></use></svg>Ceda Originals';

        }
    });

}
function insertCedaTVButton() {
  // Eğer buton zaten eklenmişse tekrar ekleme
  if (document.getElementById('ceda-tv-button')) {
    return;
  }

  const headerActions = document.querySelector('.header__actions');

  if (!headerActions) {
    return;
  }

  const cedaTVLink = document.createElement('a');
  cedaTVLink.id = 'ceda-tv-button'; // Benzersiz kimlik
  cedaTVLink.href = 'https://cedabettv.com';
  cedaTVLink.target = '_blank';
  cedaTVLink.className = 'header-custom-button custom d-flex px-3 align-items-center text-white';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-tv';

  const text = document.createTextNode('Ceda TV');

  cedaTVLink.appendChild(icon);
  cedaTVLink.appendChild(text);

  headerActions.insertBefore(cedaTVLink, headerActions.firstChild);
}


function createVipExperience() {
   // vip class'ına sahip div'i bul
   const vipContainer = document.querySelector('.vip');
 
   if (document.querySelector('#vip-container')) {
     console.log("VIP container already exists. Skipping creation.");
     return; 
   }
 
   // İçeriği temizle
   vipContainer.innerHTML = '';
 
   // Create and style the new div (vip-container)
   const newDiv = document.createElement('div');
   newDiv.id = 'vip-container';
   newDiv.style.backgroundColor = '#03121a';
   newDiv.style.width = '100%';
   newDiv.style.height = '500px';
   newDiv.style.position = 'relative';
   newDiv.style.borderRadius = '8px';
   newDiv.style.overflow = 'hidden';
 
   vipContainer.appendChild(newDiv);

   // Ekran boyutunu dinamik olarak alacak fonksiyon
   function getContainerWidth() {
     return newDiv.offsetWidth;
   }
 
   // Add text content in the middle
   const textContent = document.createElement('div');
   textContent.style.position = 'absolute';
   textContent.style.left = '0';
   textContent.style.right = '0';
   textContent.style.top = '50%';
   textContent.style.transform = 'translateY(-50%)';
   textContent.style.zIndex = '10';
   textContent.style.textAlign = 'center';
 
   const heading = document.createElement('h1');
   heading.style.color = '#ffffff';
   heading.style.fontSize = '42px';
   heading.style.fontFamily = "'Montserrat', 'Arial', sans-serif";
   heading.style.fontWeight = '800';
   heading.style.margin = '0 0 12px 0';
   heading.style.letterSpacing = '1.5px';
   heading.style.textTransform = 'uppercase';
   heading.style.background = 'linear-gradient(to right, #ffffff 20%, #229de1 80%)';
   heading.style.webkitBackgroundClip = 'text';
   heading.style.webkitTextFillColor = 'transparent';
   heading.style.display = 'inline-block';
   heading.style.textShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
   heading.textContent = 'The Unrivaled VIP Experience';
 
   const paragraph = document.createElement('p');
   paragraph.style.color = '#e6e6e6';
   paragraph.style.fontSize = '17px';
   paragraph.style.fontFamily = "'Open Sans', 'Helvetica', sans-serif";
   paragraph.style.fontWeight = '400';
   paragraph.style.maxWidth = '650px';
   paragraph.style.margin = '0 auto';
   paragraph.style.lineHeight = '1.6';
   paragraph.style.letterSpacing = '0.4px';
   paragraph.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.5)';
   paragraph.textContent = 'Unlock exclusive benefits and receive instantly withdrawable bonuses without any strings attached.';
 
   textContent.appendChild(heading);
   textContent.appendChild(paragraph);
   newDiv.appendChild(textContent);
 
   // Add Google Fonts link for the custom fonts
   const fontLink = document.createElement('link');
   fontLink.rel = 'stylesheet';
   fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Open+Sans:wght@400&display=swap';
   document.head.appendChild(fontLink);
 
   // Astronaut image sources with custom classes
   const vipAstronauts = [
     { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nonvip.jpg-OkEYbdiUYPy8WPuZHfhDJ64dgloVMX.jpeg', class: 'vip-nonvip-icon', position: 'top' },
     { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bronze.jpg-kJ1LdK8seS1op7PHwubpz8ZimigSan.jpeg', class: 'vip-bronze-icon', position: 'top' },
     { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/silver.jpg-b0ee8wIwVWLtvDUXRMprSD7yapZLVL.jpeg', class: 'vip-silver-icon', position: 'top' },
     { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gold.jpg-OHt1qVSHhN3ZNAk2OyyP3DXpLomar9.jpeg', class: 'vip-gold-icon', position: 'top' },
     { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/platinum.jpg-epz0rV2QG1ZG1nNSsYPyILFSMSWaqr.jpeg', class: 'vip-platinum-icon', position: 'bottom' },
     { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamond.jpg-tA22xTawtLy1kEzYS2ZV62u0t0Ifcc.jpeg', class: 'vip-diamond-icon', position: 'bottom' },
     { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ceda.jpg-xUU80CihSslZ88xS1pPUaCGPlEEoi4.jpeg', class: 'vip-ceda-icon', position: 'bottom' }
   ];
 
   // Get the container width dynamically
   const astronautWidth = 100;
 
   // Filter astronauts by position
   const topAstronauts = vipAstronauts.filter(a => a.position === 'top');
   const bottomAstronauts = vipAstronauts.filter(a => a.position === 'bottom');
 
   // Calculate spacing for top row (3 astronauts)
   function calculateSpacing(astronauts, isTopRow) {
     const containerWidth = getContainerWidth(); // Get updated width
     const totalWidth = astronauts.length * astronautWidth;
     const spacing = (containerWidth - totalWidth) / (astronauts.length + 1);
 
     astronauts.forEach((astronaut, index) => {
       const astronautElement = document.createElement('div');
 
       const leftPosition = spacing + (index * (astronautWidth + spacing));
       const leftPercentage = (leftPosition / containerWidth) * 100;
 
       astronautElement.style.position = 'absolute';
       astronautElement.style.width = '100px';
       astronautElement.style.height = '100px';
       astronautElement.style.borderRadius = '100%';
       astronautElement.style.border = '1px solid rgba(34, 55, 64, 1)';
       astronautElement.style.overflow = 'hidden';
       astronautElement.style.zIndex = '1';
       astronautElement.style.transition = 'transform 0.3s ease';
       astronautElement.style.left = `${leftPercentage}%`;
       astronautElement.style[isTopRow ? 'top' : 'bottom'] = '25px';
 
       astronautElement.className = astronaut.class;
 
       const img = document.createElement('img');
       img.src = astronaut.src;
       img.alt = `VIP ${astronaut.class}`;
       img.style.width = '100%';
       img.style.height = '100%';
       img.style.objectFit = 'cover';
       img.style.borderRadius = '100%';
       img.style.opacity = '0.7';
 
       astronautElement.appendChild(img);
       newDiv.appendChild(astronautElement);
 
       animateVipIcon(astronautElement, index, isTopRow ? 'top' : 'bottom');
     });
   }
 
   // Create top row astronauts
   calculateSpacing(topAstronauts, true);
 
   // Create bottom row astronauts
   calculateSpacing(bottomAstronauts, false);
 
   function animateVipIcon(element, index, position) {
     // Daha yavaş bir zıplama animasyonu
     element.style.animation = `bounce 4s ease ${index * 1}s infinite`;

     // Create style element and append keyframes animation
     const style = document.createElement('style');
     style.textContent = `
       @keyframes bounce {
         0%, 100% {
           transform: translateY(0);
         }
         50% {
           transform: translateY(-15px);
         }
       }
     `;
     document.head.appendChild(style);
   }
 
   // Hover effects for astronaut icons
   document.querySelectorAll('[class^="vip-"]').forEach(element => {
     element.addEventListener('mouseover', function() {
       this.style.transform = 'scale(1.2)';
       this.style.zIndex = '5';
       this.querySelector('img').style.opacity = '0.9';
     });
 
     element.addEventListener('mouseout', function() {
       this.style.transform = '';
       this.style.zIndex = '1';
       this.querySelector('img').style.opacity = '0.7';
     });
   });

   // Resize event listener to update spacing and positions when window size changes
   window.addEventListener('resize', function() {
    clearAstronauts();
  
     calculateSpacing(topAstronauts, true);
     calculateSpacing(bottomAstronauts, false);
   });
}

function clearAstronauts() {

  const existingAstronauts = document.querySelectorAll('#vip-container .vip-nonvip-icon, #vip-container .vip-bronze-icon, #vip-container .vip-silver-icon, #vip-container .vip-gold-icon, #vip-container .vip-platinum-icon, #vip-container .vip-diamond-icon, #vip-container .vip-ceda-icon');
  existingAstronauts.forEach(astronaut => astronaut.remove());
}


function clearDynamicContent() {
    const idsToRemove = [
        "mini-games-wrapper-2",
        "custom-section-7"
    ];

    idsToRemove.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.remove();
            console.log(`${id} temizlendi.`);
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
    newAnchor.href = '/en/casino/group/table-games';

 
	const icon = document.createElement("i");
icon.className = "fa-solid fa-certificate";
icon.style.color = "#5c7382";
icon.style.height = "22px";
icon.style.width = "22px";
icon.style.fontSize = "22px";

    const span = document.createElement('span');
    span.textContent = 'New';


    newAnchor.appendChild(icon);
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

        // Başlık metnine göre URL belirle
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

        // Eğer URL varsa ve başlığın hemen sonrasında zaten bir <a>etiketi yoksa
    if (url) {

    if (!title.nextElementSibling || title.nextElementSibling.tagName !== 'A') {
    const newLink = document.createElement('a');
    newLink.href = url;
    newLink.textContent = `See All`;
    newLink.style.background = 'rgba(55, 162, 221, 0.13)';
    newLink.style.padding = '5px 12px 5px 12px';
    newLink.style.borderRadius = '4px';
    newLink.style.fontSize = '12px';
    newLink.style.color = 'white';
    newLink.style.border = '1px solid rgba(41, 154, 217, 0.33)';

    // Yeni <a> etiketi oluşturulacak, sonrasına ekliyoruz
        title.insertAdjacentElement('afterend', newLink);
        }
        }
        });
        }

        function CreateCedaOriginal() {

        const games = [{
        name: "Plinko",
        url: "https://cedabet.com/en/casino/games/ebetlab-plinko-originals",
        img: "https://cedabet.github.io/assets/images/plinko.jpg"
        },
        {
        name: "Mines",
        url: "https://cedabet.com/en/casino/games/ebetlab-mines-originals",
        img: "https://cedabet.github.io/assets/images/mines.jpg"
        },
        {
        name: "Keno",
        url: "https://cedabet.com/en/casino/games/ebetlab-keno-originals",
        img: "https://cedabet.github.io/assets/images/keno.jpg"
        },
        {
        name: "Limbo",
        url: "https://cedabet.com/en/casino/games/hacksaw-limbo",
        img: "https://cedabet.github.io/assets/images/limbo.jpg"
        },
        {
        name: "Dice",
        url: "https://cedabet.com/en/casino/games/ebetlab-dice-originals",
        img: "https://cedabet.github.io/assets/images/dice.jpg"
        },
        {
        name: "Blackjack",
        url: "https://cedabet.com/en/casino/games/evolution-blackjack",
        img: "https://cedabet.github.io/assets/images/blackjack.jpg"
        },
        {
        name: "Aviator",
        url: "https://cedabet.com/en/casino/games/spribe-aviator",
        img: "https://cedabet.github.io/assets/images/aviator.jpg"
        }
        ];

        // Stil sadece bir kez eklensin
        if (!document.getElementById("mini-games-style")) {
        const style = document.createElement("style");
        style.id = "mini-games-style";
        style.textContent = `


        .section__title {
        font-size: 24px;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 8px;
        }
        .section__title svg { width: 24px; height: 24px; }
        .section-wrapper { display: flex; flex-direction: column; gap: 20px; }
        .game-list-wrapper { position: relative; }
        .game-list {
        display: flex;
        overflow-x: auto;
        gap: 16px;
        padding-top: 8px;
        }
        .game-list a {
        flex: 0 0 calc(10% - 0);
        max-width: calc(10% - 0);
        text-decoration: none;
        display: flex;
        justify-content: center;
        border-radius:12px;
        }
        .game-card {
        aspect-ratio: 105 / 142;
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        transition: transform 0.3s ease;
        }
        .game-card:hover { transform: translateY(-8px); }
        .game-card img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        }
        @media (max-width: 1024px) {
        .game-list a {
        flex: 0 0 calc(33.33% - 26px);
        max-width: calc(33.33% - 26px);
        }
        }
        @media (max-width: 480px) {
        .game-list a {
        flex: 0 0 calc(50% - 26px);
        max-width: calc(50% - 26px);
        }
        }

        @media (max-width: 1024px) {
        #mini-games-wrapper-2 .mini-game-list a {
        flex: 0 0 calc(50% - 26px) !important;
        max-width: calc(50% - 26px)!important;
        }
        }


        @media (max-width: 480px) {
        #mini-games-wrapper-2 .mini-game-list a {

        flex: 0 0 calc(33% - 10px)!important;
        max-width: calc(33% - 10px)!important;
        }
        }

        `;
        document.head.appendChild(style);
        }

        const miniGamesWrapper = document.querySelector("#mini-games-wrapper");
        if (!miniGamesWrapper) {
       // console.error("mini-games-wrapper bulunamadı!");
        return;
        }

        const container = miniGamesWrapper.querySelector(".container");
        if (!container) {
       // console.error("container bulunamadı!");
        return;
        }

        const oldRow = container.querySelector(".row");
        if (oldRow) oldRow.remove();

        const row = document.createElement("div");
        row.className = "row";
        row.style.display = "flex";
        row.style.flexDirection = "column";
        row.style.gap = "20px";

        const colTitle = document.createElement("div");
        colTitle.className = "col-12";
        const h2 = document.createElement("h2");
        h2.className = "section__title";

   
		const icon = document.createElement("i");
icon.className = "fa-solid fa-certificate";
icon.style.color = "#219fe3";
icon.style.height = "28px";
icon.style.width = "28px";
icon.style.fontSize = "28px";
h2.appendChild(icon);

        h2.append("Ceda Originals");

        colTitle.appendChild(h2);
        row.appendChild(colTitle);

        const colGames = document.createElement("div");
        colGames.className = "col-12";
        colGames.style.width = "100%";

        const sectionWrapper = document.createElement("div");
        sectionWrapper.className = "section-wrapper";

        const gameListWrapper = document.createElement("div");
        gameListWrapper.className = "game-list-wrapper";

        const gameList = document.createElement("div");
        gameList.className = "game-list";

        games.forEach(game => {
        const a = document.createElement("a");
        a.href = game.url;

        const card = document.createElement("div");
        card.className = "game-card";

        const img = document.createElement("img");
        img.src = game.img;
        img.alt = game.name;
        img.loading = "lazy";

        card.appendChild(img);
        a.appendChild(card);
        gameList.appendChild(a);
        });

        gameListWrapper.appendChild(gameList);
        sectionWrapper.appendChild(gameListWrapper);
        colGames.appendChild(sectionWrapper);
        row.appendChild(colGames);
        //divi yerlestir
        container.appendChild(row);

        var miniGamesWrapper2 = document.getElementById('mini-games-wrapper');
        var highRtpGamesWrapper = document.getElementById('main-slider');
        var changeLine = document.getElementById('custom-section-7');

        if (miniGamesWrapper2 && highRtpGamesWrapper && changeLine) {
        highRtpGamesWrapper.insertAdjacentElement('afterend', miniGamesWrapper2);
        miniGamesWrapper.insertAdjacentElement('afterend', changeLine);
        }

        }



        function CreateCedaOriginalTwo() {

        const games = [{
        name: "Poker",
        url: "https://cedabet.com/en/casino/games/evolution-poker-lobby",
        img: "https://cedabet.github.io/assets/images/poker.png",
        imgMobile: "https://cedabet.github.io/assets/images/Poker.avif"
        },
        {
        name: "BlackJack",
        url: "https://cedabet.com/en/casino/games/evolution-blackjack",
        img: "https://cedabet.github.io/assets/images/blackjack.webp",
        imgMobile: "https://cedabet.github.io/assets/images/Bj.avif"
        },
        {
        name: "roulette",
        url: "https://cedabet.com/en/casino/games/evolution-roulette",
        img: "https://cedabet.github.io/assets/images/roulette.webp",
        imgMobile: "https://cedabet.github.io/assets/images/Roulette.avif"
        }
        ];

        const popularGamesWrapper = document.querySelector("#popular-games-wrapper");
        if (!popularGamesWrapper) {
        console.error("popular-games-wrapper bulunamadı!");
        return;
        }

        const miniGamesWrapper = document.createElement("div");
        miniGamesWrapper.id = "mini-games-wrapper-2";
        miniGamesWrapper.classList.add("section");

        const container = document.createElement("div");
        container.className = "container";

        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexDirection = "column";
        row.style.gap = "20px";

        const colTitle = document.createElement("div");
        colTitle.className = "col-12";

        const h2 = document.createElement("h2");
        h2.className = "section__title";
        h2.style.fontSize = "18px";
        h2.style.fontWeight = "bold";
        h2.style.display = "flex";
        h2.style.alignItems = "center";
        h2.style.gap = "8px";

 
	const icon = document.createElement("i");
icon.className = "fa-solid fa-certificate";
icon.style.color = "#219fe3";
icon.style.height = "28px";
icon.style.width = "28px";
icon.style.fontSize = "28px";
h2.appendChild(icon);
		
        h2.append("TABLE GAMES");
        colTitle.appendChild(h2);
        row.appendChild(colTitle);

        const colGames = document.createElement("div");
        colGames.className = "col-12";
        colGames.style.width = "100%";

        const sectionWrapper = document.createElement("div");
        sectionWrapper.style.display = "flex";
        sectionWrapper.style.flexDirection = "column";
        sectionWrapper.style.gap = "20px";

        const gameListWrapper = document.createElement("div");
        gameListWrapper.style.position = "relative";

        const gameList = document.createElement("div");
        gameList.className = "mini-game-list";
        gameList.style.display = "flex";
        gameList.style.overflowX = "auto";
        gameList.style.gap = "16px";
        gameList.style.paddingTop = "8px";

        // Resimleri oluşturup saklamak için bir referans listesi tutuyoruz
        const imageElements = [];

        games.forEach((game, index) => {
        const a = document.createElement("a");
        a.href = game.url;
        a.style.flex = "0 0 calc(33% - 10px)";
        a.style.maxWidth = "calc(33% - 10px)";
        a.style.textDecoration = "none";
        a.style.display = "flex";
        a.style.justifyContent = "center";
        a.style.borderRadius = "12px";

        const card = document.createElement("div");
        card.style.width = "100%";
        card.style.cursor = "pointer";
        card.style.overflow = "hidden";
        card.style.transition = "transform 0.3s ease";

        card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        });

        const img = document.createElement("img");
        img.alt = game.name;
        img.loading = "lazy";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.objectPosition = "left bottom";

        // Başlangıçta uygun resmi ata
        img.src = window.innerWidth <= 768 ? game.imgMobile : game.img;

        // Sakla, sonra erişelim
        imageElements.push({
        img,
        game
        });

        card.appendChild(img);
        a.appendChild(card);
        gameList.appendChild(a);
        });

        gameListWrapper.appendChild(gameList);
        sectionWrapper.appendChild(gameListWrapper);
        colGames.appendChild(sectionWrapper);
        row.appendChild(colGames);
        container.appendChild(row);
        miniGamesWrapper.appendChild(container);

        popularGamesWrapper.insertAdjacentElement("afterend", miniGamesWrapper);

        // Dinamik olarak resimleri değiştirme
        window.addEventListener("resize", () => {
        const isMobile = window.innerWidth <= 768;
        imageElements.forEach(({
        img,
        game
        }) => {
        const newSrc = isMobile ? game.imgMobile : game.img;
        if (img.src !== newSrc) {
        img.src = newSrc;
        }
        });
        });
        }



        function loadVipFeatures() {

        let mainContent = document.getElementById("main-slider");

        if (!mainContent) {

        } else {
        if (document.getElementById("custom-section-7")) {
        return;
        }

        let customSection5 = document.createElement("div");
        customSection5.id = "custom-section-7";
        customSection5.classList.add("section", "custom-section");




        customSection5.innerHTML = `
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
        const logos = [{
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmaticplay.svg",
        alt: "Pragmatic Play",
        url: "/en/providers/pragmaticplay"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Evolution%20Gaming.svg",
        alt: "Evolution",
        url: "/en/providers/evolution"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmatic-live-light.svg",
        alt: "Pragmatic Live",
        url: "/en/providers/pragmaticlive"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hacksaw.svg",
        alt: "HackSaw Gaming",
        url: "/en/providers/hacksaw"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/egt.svg",
        alt: "EGT",
        url: "/en/providers/egt"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/NoLimitCity.svg",
        alt: "No Limit City",
        url: "/en/providers/nolimitcity"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netent.svg",
        alt: "Netent",
        url: "/en/providers/netent"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ezugi.svg",
        alt: "Ezugi",
        url: "/en/providers/ezugi"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amusnet.svg",
        alt: "Amusnet",
        url: "/en/providers/egt-interactive"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1x2gaming.svg",
        alt: "1x2 Gaming",
        url: "/en/providers/1x2gaming"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/5men.svg",
        alt: "5men",
        url: "/en/providers/5men"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/endorphina.svg",
        alt: "Endorphina",
        url: "/en/providers/endorphina"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mrslotty.svg",
        alt: "MrSlotty",
        url: "/en/providers/mrslotty"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amatic.svg",
        alt: "Amatic",
        url: "/en/providers/amatic"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Tiger%20Gaming.svg",
        alt: "Red Tiger",
        url: "/en/providers/redtiger"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/softswiss.svg",
        alt: "BGAMING",
        url: "/en/providers/bgaming"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg",
        alt: "Booming Games",
        url: "/en/providers/booming"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1spin4win.svg",
        alt: "1spin4win",
        url: "/en/providers/1spin4win"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/avatarux.svg",
        alt: "AvatarUX",
        url: "/en/providers/avatarux"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/belatra.svg",
        alt: "Belatra",
        url: "/en/providers/belatra"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/beterlive.svg",
        alt: "Beter.Live",
        url: "/en/providers/beterlive"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/evoplay.svg",
        alt: "Evoplay Entertainment",
        url: "/en/providers/evoplay"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gamezix.svg",
        alt: "Gamzix",
        url: "/en/providers/gamzix"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/igtech.svg",
        alt: "iGTech",
        url: "/en/providers/igtech"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/playson.svg",
        alt: "Playson",
        url: "/en/providers/playson"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mascot.svg",
        alt: "Mascot Gaming",
        url: "/en/providers/mascotgaming"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mancala.svg",
        alt: "Mancala Gaming",
        url: "/en/providers/mancala"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/onlyplay.svg",
        alt: "OnlyPlay",
        url: "/en/providers/onlyplay"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/oryx.svg",
        alt: "ORYX",
        url: "/en/providers/oryx"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/platipus.svg",
        alt: "Platipus",
        url: "/en/providers/platipus"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/popiplay.svg",
        alt: "Popiplay",
        url: "/en/providers/popiplay"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/quickspin.svg",
        alt: "Quickspin",
        url: "/en/providers/quickspin"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/reevo.svg",
        alt: "Reevo",
        url: "/en/providers/reevo"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/slotmill.svg",
        alt: "Slotmill",
        url: "/en/providers/slotmill"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/smartsoft.svg",
        alt: "SmartSoft",
        url: "/en/providers/smartsoft"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spadegaming.svg",
        alt: "Spadegaming",
        url: "/en/providers/spadegaming"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spribe.svg",
        alt: "Spribe",
        url: "/en/providers/spribe"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/thunderkick.svg",
        alt: "Thunderkick",
        url: "/en/providers/thunderkick"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tomhorn.svg",
        alt: "Tom Horn",
        url: "/en/providers/tomhornnative"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/truelab.svg",
        alt: "Truelab",
        url: "/en/providers/truelab"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/turbogames.svg",
        alt: "Turbo Games",
        url: "/en/providers/turbogames"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betradar%20Virtual%20sports.svg",
        alt: "BetRadar VS",
        url: "/en/providers/betradarvs"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/betsoft.svg",
        alt: "BetSoft",
        url: "/en/providers/betsoft"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CQ9.svg",
        alt: "CQ9",
        url: "/en/providers/cq9"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/habanero.svg",
        alt: "Habanero",
        url: "/en/providers/habanero"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg",
        alt: "Leander",
        url: "/en/providers/leander"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leap.svg",
        alt: "Leap",
        url: "/en/providers/leap"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Live%20Games.svg",
        alt: "Live Games",
        url: "/en/providers/livegames"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/luckystreak.svg",
        alt: "Lucky Streak",
        url: "/en/providers/luckystreak"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Playtech%20slots.svg",
        alt: "PlayTech",
        url: "/en/providers/playtech"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/SA%20Gaming.svg",
        alt: "SA Gaming",
        url: "/en/providers/sagaming"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Vivo%20Gaming.svg",
        alt: "Vivo Gaming",
        url: "/en/providers/vivogaming"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/yggdrasil.svg",
        alt: "YGG Drasil",
        url: "/en/providers/yggdrasil"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Pocket%20Games%20Soft.svg",
        alt: "PGSoft",
        url: "/en/providers/pgsoft"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/golden%20hero.svg",
        alt: "Golden Hero",
        url: "/en/providers/goldenhero"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fugaso.svg",
        alt: "Fugaso",
        url: "/en/providers/fugaso"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/originals.svg",
        alt: "Ebetlab",
        url: "/en/providers/ebetlab"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imageinelive.svg",
        alt: "Imagine Live",
        url: "/en/providers/imagine-live"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imoon.svg",
        alt: "Imoon",
        url: "/en/providers/imoon"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/InOut.svg",
        alt: "InOut",
        url: "/en/providers/inout"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Jiliasia.svg",
        alt: "Jiliasia",
        url: "/en/providers/jiliasia"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Zeus%20Play.svg",
        alt: "Zeus Play",
        url: "/en/providers/zeus-play"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Peter%20And%20Sons.svg",
        alt: "Peter And Sons",
        url: "/en/providers/peter-and-sons"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/topspin.svg",
        alt: "TopSpin",
        url: "/en/providers/topspin"
        },
        {
        alt: "Popok",
        url: "/en/providers/popok"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg",
        alt: "Bet Games",
        url: "/en/providers/betgames"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg",
        alt: "Raw Games",
        url: "/en/providers/rawgames"
        },
        {
        src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg",
        alt: "YGR Games",
        url: "/en/providers/ygrgames"
        }
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


        var targetElement = document.querySelector('#sidebar-content > div.sidebar__big > div.sidebar__menu > ul:nth-child(3) > li:nth-child(8) > a');

        if (targetElement) {
        targetElement.childNodes.forEach(function(child) {
        if (child.nodeType === Node.TEXT_NODE) { // Yalnızca metin düğümünü buluyoruz
        child.textContent = 'CEDABET Exclusive'; // Metni değiştiriyoruz
        }
        });
        }
