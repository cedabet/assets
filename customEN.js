
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
        // setTimeout(createSigninModal, 2000);
        CreateCedaOriginal();
        CreateCedaOriginalTwo();
        insertCedaTVButton();
        createLeagueSection();
	checkModal();
        var sportspath = window.location.pathname;
        if (sportspath === "/en/sportsbook") {
        
        } else if (sportspath === "/en/trade") {
         
        } else if (sportspath === "/en/e-sport") {
            var sidebar = document.getElementById("sidebar");

        } else if (sportspath === "/en/vip") {
            createVipExperience();

        }
   else if (sportspath === "/en/latest-big-wins") {
          LandingPage();
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
	  checkModal();
          if (path === "/en/") {
              clearDynamicContent()
              loadVipFeatures();
              setTimeout(loadh2Title, 1000);
              addMenuElement();
              addMenuElementTwo();
              setTimeout(updateCopyrightYear, 1000);

              CreateCedaOriginal();
              CreateCedaOriginalTwo();
              createLeagueSection();
          } else if (path === "/en/vip") {
              clearDynamicContent();
              createVipExperience();
          } else if (path === "/en/casino") {
              clearDynamicContent()
              CreateCedaOriginal();
              CreateCedaOriginalTwo();
          } else if (path === "/en/sportsbook") {
           
              clearDynamicContent()


          } else if (path === "/en/trade") {

              clearDynamicContent()

          } else if (path === "/en/e-sport") {
              clearDynamicContent()

          } else if (path !== "/en/sportsbook") {

              clearDynamicContent()
          }
	    else if (path === "/en/latest-big-wins") {
          LandingPage();
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


function checkModal() {

    const modal = document.getElementById('global-modal');

    if (modal) {
        modal.style.display = 'none';  // Modal'ı gizle
    } 

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
/*  if (document.getElementById('ceda-tv-button')) {
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

  headerActions.insertBefore(cedaTVLink, headerActions.firstChild);*/
  const headerActions = document.querySelector('.header__actions');
  if (!headerActions) return;

  // Partnership butonu ekle
  if (!document.getElementById('partnership-button')) {
    const partnershipLink = document.createElement('a');
    partnershipLink.id = 'partnership-button';
    partnershipLink.href = '/en/affiliate'; // Gerekirse değiştirin
  //  partnershipLink.target = '_blank';
    partnershipLink.className = 'header-custom-button custom d-flex px-3 align-items-center text-white';

    const partnershipIcon = document.createElement('i');
    partnershipIcon.className = 'fa-solid fa-handshake';

    const partnershipText = document.createTextNode('Partnership');

    partnershipLink.appendChild(partnershipIcon);
    partnershipLink.appendChild(partnershipText);

    headerActions.insertBefore(partnershipLink, headerActions.firstChild);
  }

  // Ceda TV butonu ekle
  if (!document.getElementById('ceda-tv-button')) {
    const cedaTVLink = document.createElement('a');
    cedaTVLink.id = 'ceda-tv-button';
    cedaTVLink.href = 'https://cedabettv.com';
    cedaTVLink.target = '_blank';
    cedaTVLink.className = 'header-custom-button custom d-flex px-3 align-items-center text-white';

    const cedaIcon = document.createElement('i');
    cedaIcon.className = 'fa-solid fa-tv';

    const cedaText = document.createTextNode('Ceda TV');

    cedaTVLink.appendChild(cedaIcon);
    cedaTVLink.appendChild(cedaText);

    // Partnership butonundan sonra eklemek için
    const partnershipButton = document.getElementById('partnership-button');
    if (partnershipButton && partnershipButton.nextSibling) {
      headerActions.insertBefore(cedaTVLink, partnershipButton.nextSibling);
    } else {
      headerActions.appendChild(cedaTVLink);
    }
  }
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
        "custom-section-7",
        "league-wrapper",
        "custom-section-landing"
    ];

    const styleIdsToRemove = [
        "big-wins-style"
        // buraya kaldırmak istediğin style id'lerini ekle
    ];

    idsToRemove.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.remove();
            console.log(`${id} temizlendi.`);
        }
    });

    styleIdsToRemove.forEach(id => {
        const styleEl = document.getElementById(id);
        if (styleEl) {
            styleEl.remove();
            console.log(`${id} style etiketi kaldırıldı.`);
        }
    });
}

function LandingPage() {
     // p-not-found divini kaldır
     const notFoundDiv = document.querySelector('.p-not-found');
     if (notFoundDiv) notFoundDiv.remove();

     // container.section.section--first divini bul
     const firstSectionDiv = document.querySelector('.container.section.section--first');
     if (!firstSectionDiv) {
         console.error('.container.section.section--first div bulunamadı!');
     } else {
         if (!document.getElementById("big-wins-style")) {
             const style = document.createElement("style");
             style.id = "big-wins-style";
             style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@@400;500;600;700;800&display=swap');

.containers {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
}

/* Logo Section */
.logo-section {
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
}

.logo {
    font-size: 2.5rem;
    font-weight: 700;
    color: #4a9bff;
    text-shadow: 0 0 20px rgba(74, 155, 255, 0.5);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo::before {
    content: "★";
    margin-right: 10px;
    font-size: 2rem;
}

.logo::after {
    content: "★";
    margin-left: 10px;
    font-size: 2rem;
}

.tagline {
    color: #7fb3d3;
    font-size: 1rem;
    font-weight: 500;
}

/* Common Section Styles */
.feature-section, .winners-section, .jackpot-section, .providers-section {
    background: linear-gradient(135deg, rgba(13, 25, 42, 0.95) 0%, rgba(16, 30, 48, 0.95) 100%);
    border-radius: 16px;
    padding: 30px;
    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 1200px;
    backdrop-filter: blur(10px);
}

.feature-section {
    border: 1px solid rgba(74, 155, 255, 0.2);
}

.winners-section {
    border: 1px solid rgba(74, 155, 255, 0.2);
    height: 500px;
}

.jackpot-section {
    border: 1px solid rgba(255, 198, 41, 0.3);
}

.providers-section {
    border: 1px solid rgba(74, 155, 255, 0.2);
}

/* Section Before Elements */
.feature-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #4a9bff, #2a6cb9, #4a9bff);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
}

.winners-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #4a9bff, #2a6cb9, #4a9bff);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
}

.jackpot-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ffc629, #e6a800, #ffc629);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
}

.providers-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #4a9bff, #2a6cb9, #4a9bff);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
    0%, 100% { background-position: -200% 0; }
    50% { background-position: 200% 0; }
}

.section-title {
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 25px;
    font-weight: 600;
    text-align: center;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4a9bff, #2a6cb9);
    border-radius: 2px;
}

.winners-section .section-title::after {
    background: linear-gradient(90deg, #4a9bff, #2a6cb9);
}

.jackpot-section .section-title::after {
    background: linear-gradient(90deg, #ffc629, #e6a800);
}

.providers-section .section-title::after {
    background: linear-gradient(90deg, #4a9bff, #2a6cb9);
}

/* Slider Container for Games */
.slider-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 15px 0;
    mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
    -webkit-mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
    background-color:unset!important;
}

.slider-track {
    display: flex;
    animation: games-scroll 35s linear infinite;
    width: max-content;
}

.slider-track:hover {
    animation-play-state: paused;
}

@keyframes games-scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-160px * 7));
    }
}

/* Game Items - Now as clickable links */
.game-item {
    width: 140px;
    margin-right: 20px;
    background: linear-gradient(135deg, rgba(16, 30, 48, 0.9) 0%, rgba(20, 36, 56, 0.9) 100%);
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
    overflow: hidden;
    border: 1px solid rgba(74, 155, 255, 0.3);
    position: relative;
    backdrop-filter: blur(5px);
    text-decoration: none;
    color: inherit;
    display: block;
}

.game-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(74, 155, 255, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
}

.game-item:hover::before {
    transform: translateX(100%);
}

.game-item:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.5),
        0 0 20px rgba(74, 155, 255, 0.3);
    border-color: #4a9bff;
}

.game-item img {
    width: 100%;
    height: 120px;
    object-fit: contain;
    border-radius: 12px 12px 0 0;
}

.game-item p {
    color: #e8f4fd;
    margin: 12px 0;
    font-weight: 600;
    font-size: 12px;
    padding: 0 10px;
}
          .playing-count {
  font-size: 12px;
  color: #27ae60; /* Elit yeşil */
  margin-top: 2px;
  display: block;
}
/* Winners Container */
.win-container {
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: relative;
    padding: 0;
    margin-top: 10px;
}

.win-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0;
}

.win-item {
    background: linear-gradient(135deg, rgba(16, 30, 48, 0.8) 0%, rgba(20, 36, 56, 0.8) 100%);
    margin: 8px 0;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 14px;
    opacity: 1;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(74, 155, 255, 0.3);
    backdrop-filter: blur(5px);
}

.win-item:nth-child(even) {
    background: linear-gradient(135deg, rgba(20, 36, 56, 0.8) 0%, rgba(16, 30, 48, 0.8) 100%);
    border-color: rgba(74, 155, 255, 0.3);
}

.win-item p {
    margin: 0;
    color: #fff;
    line-height: 1.4;
    font-weight: 500;
}

.win-item p strong {
    color: #4a9bff;
    font-size: 1.1em;
    font-weight: 700;
}

.win-item p:last-child {
    margin-top: 8px;
    font-style: italic;
    color: #7fb3d3;
    font-size: 12px;
}

/* Animation for new winners after initial load */
.win-item.animated {
    opacity: 0;
    animation: slide-in 1.2s forwards, fade-in 1.5s forwards;
}

@keyframes slide-in {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes pulse-glow {
    0% {
        text-shadow: 0 0 10px rgba(255, 198, 41, 0.5);
    }
    100% {
        text-shadow: 0 0 20px rgba(255, 198, 41, 0.8), 0 0 30px rgba(255, 198, 41, 0.4);
    }
}

/* Jackpot Section Styles - Grid Layout with Space Theme Colors */
.jackpot-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 10px;
}

.jackpot-card {
    background: linear-gradient(135deg, rgba(16, 30, 48, 0.9) 0%, rgba(20, 36, 56, 0.9) 100%);
    border: 1px solid rgba(255, 198, 41, 0.3);
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.jackpot-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 198, 41, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
}

.jackpot-card:hover::before {
    transform: translateX(100%);
}

.jackpot-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    border-color: #ffc629;
}

.jackpot-title {
    font-size: 1.2rem;
    color: #ffc629;
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.jackpot-amount {
    font-size: 2.2rem;
    color: #ffffff;
    font-weight: 800;
    margin-bottom: 10px;
    text-shadow: 0 0 10px rgba(255, 198, 41, 0.5);
    animation: pulse-glow 2s ease-in-out infinite alternate;
}

.jackpot-description {
    color: #7fb3d3;
    font-size: 0.9rem;
    line-height: 1.4;
}

.mega-jackpot {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, rgba(20, 36, 56, 0.9) 0%, rgba(16, 30, 48, 0.9) 100%);
    border-color: rgba(255, 198, 41, 0.4);
    padding: 35px;
}

.mega-jackpot .jackpot-title {
    font-size: 1.5rem;
    color: #ffc629;
    margin-bottom: 20px;
}

.mega-jackpot .jackpot-amount {
    font-size: 3rem;
    color: #ffc629;
    text-shadow: 0 0 15px rgba(255, 198, 41, 0.6);
}

.mega-jackpot::before {
    background: linear-gradient(45deg, transparent 30%, rgba(255, 198, 41, 0.2) 50%, transparent 70%);
}

.mega-jackpot:hover {
    border-color: #ffc629;
}

/* Providers Section - Infinity Scroll */
.providers-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 15px 0;
    mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
    -webkit-mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
}

.providers-track {
    display: flex;
    animation: providers-scroll 40s linear infinite;
    width: max-content;
}

.providers-track:hover {
    animation-play-state: paused;
}

@keyframes providers-scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-170px * 8));
    }
}

/* Provider Cards - Now as clickable links */
.provider-card {
    width: 150px;
    margin-right: 20px;
    background: linear-gradient(135deg, rgba(16, 30, 48, 0.9) 0%, rgba(20, 36, 56, 0.9) 100%);
    border: 1px solid rgba(74, 155, 255, 0.3);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    text-decoration: none;
    color: inherit;
    display: block;
}

.provider-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(74, 155, 255, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
}

.provider-card:hover::before {
    transform: translateX(100%);
}

.provider-card:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.5),
        0 0 20px rgba(74, 155, 255, 0.3);
    border-color: #4a9bff;
}

.provider-logo {
    width: 80px;
    height: 80px;
    background: #0a1017;
    border: 1px solid rgba(74, 155, 255, 0.3);
    border-radius: 50%;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    transition: all 0.3s ease;
}

.provider-card:hover .provider-logo {
    border-color: #4a9bff;
    box-shadow: 0 0 15px rgba(74, 155, 255, 0.3);
}

.provider-name {
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 5px;
}

.provider-games {
    color: #7fb3d3;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    body {
        padding: 15px;
    }

    .logo {
        font-size: 2rem;
    }
  .logo-section {
    margin-top: 75px;
  }
    .feature-section,
    .winners-section,
    .jackpot-section,
    .providers-section {
        padding: 20px;
    }

    .winners-section {
        height: 350px;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .game-item {
        width: 120px;
        margin-right: 12px;
    }

    .game-item img {
        height: 80px;
    }

    .game-item p {
        font-size: 11px;
        margin: 10px 0;
    }

    .win-item {
        font-size: 12px;
        padding: 15px;
    }

    .jackpot-container {
        grid-template-columns: 1fr;
    }

    .mega-jackpot {
        grid-column: 1;
        padding: 25px;
    }

    .jackpot-amount {
        font-size: 1.8rem;
    }

    .mega-jackpot .jackpot-amount {
        font-size: 2.5rem;
    }

    @keyframes providers-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-170px * 8));
        }
    }

    @keyframes games-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-132px * 7));
        }
    }
}

@media (max-width: 480px) {
    body {
        padding: 10px;
    }

    .container {
        gap: 20px;
    }

    .logo {
        font-size: 1.8rem;
    }

    .section-title {
        font-size: 1.3rem;
    }

    .game-item {
        width: 100px;
        margin-right: 10px;
    }

    .game-item img {
        height: 70px;
    }

    .winners-section {
        height: 370px;
    }

    .jackpot-card {
        padding: 20px;
    }

    .jackpot-amount {
        font-size: 1.5rem;
    }

    .mega-jackpot .jackpot-amount {
        font-size: 2rem;
    }

    @keyframes providers-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-145px * 8));
        }
    }

    @keyframes games-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-110px * 7));
        }
    }
}
             `; // CSS buraya daha sonra dinamik olarak eklenebilir
             document.head.appendChild(style);
         }

         const customContainer = document.createElement('div');
         customContainer.classList.add('section', 'custom-section');
	 customContainer.id = 'custom-section-landing';
         customContainer.innerHTML = `
             <div class="containers">
                 <!-- Logo Section -->
                 <div class="logo-section">
                     <div class="logo">CedaBet</div>
                     <div class="tagline">Premium Gaming Experience</div>
                 </div>

                 <!-- Feature Games Section -->

<section class="feature-section">
   <h2 class="section-title">Featured Games</h2>

    <div class="slider-container">
        <div class="slider-track">

            <a href="/en/casino/games/pragmaticplay-zeus-vs-hades-gods-of-war" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/9U9cVku8AkxfX28glr2ecCFaM8B1TaqJORdGWatq.avif" alt="Zeus vs Hades Gods of War">
                <p>Zeus vs Hades Gods of War</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-wild-west-gold" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/1dpsT7tnCkM7cjbtUCikCdnFdJ4Qlh99pY3BpzXz.avif" alt="Wild West Gold">
                <p>Wild West Gold</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-buffalo-king" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/rHhgFaBGHxn71tJXVAOPQKYaTkiQxlXFb315yBDZ.avif" alt="Buffalo King">
                <p>Buffalo King</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-fruit-party" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/Xf04XdDGKxBPh3VZMbc3gm1iK6FnzF3I9F3aATq1.avif" alt="Fruit Party">
                <p>Fruit Party</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-the-dog-house-dog-or-alive" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/IXIbm2lJsiOJpfiQ34a4Xjtklsei1ZTbrwKKZhPl.avif" alt="The Dog House Dog or Alive">
                <p>The Dog House Dog or Alive</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-starlight-princess" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/G5xNO6W86jGBlHaHCL06o1sr5j1H6cySJvdSSRrA.avif" alt="Starlight Princess">
                <p>Starlight Princess</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-the-dog-house-multihold" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/Do8FlFiEPlyzErc9dy2Jqu7lhqX8XaL7AOawkqKh.avif" alt="The Dog House Multihold">
                <p>The Dog House Multihold</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-sugar-rush-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/jNoaroKVGDwdRDelCNlu70ADVbyAvMw1qCpJrhP9.avif" alt="Sugar Rush 1000">
                <p>Sugar Rush 1000</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-gates-of-olympos-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/jpygjMVafhuLu4QEnILFs3oBE6wX7bD2ygoADiI9.avif" alt="Gates of Olympos 1000">
                <p>Gates of Olympos 1000</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-sweet-bonanza-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/nIwpbBsTqVta4IXzWc1jxgKVX4dPnNzO9nOKu4GK.avif" alt="Sweet Bonanza 1000">
                <p>Sweet Bonanza 1000</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-big-bass-hold-spinner-megaways" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/uygXx82uD3oiUy86HOPuu4GsuTeNJCPgRgZG24TX.avif" alt="Big Bass Hold & Spinners Megaways">
                <p>Big Bass Hold & Spinners Megaways</p>
            </a>
      <!-- Duplicated games with links -->

         <a href="/en/casino/games/pragmaticplay-zeus-vs-hades-gods-of-war" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/9U9cVku8AkxfX28glr2ecCFaM8B1TaqJORdGWatq.avif" alt="Zeus vs Hades Gods of War">
                <p>Zeus vs Hades Gods of War</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-wild-west-gold" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/1dpsT7tnCkM7cjbtUCikCdnFdJ4Qlh99pY3BpzXz.avif" alt="Wild West Gold">
                <p>Wild West Gold</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-buffalo-king" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/rHhgFaBGHxn71tJXVAOPQKYaTkiQxlXFb315yBDZ.avif" alt="Buffalo King">
                <p>Buffalo King</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-fruit-party" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/Xf04XdDGKxBPh3VZMbc3gm1iK6FnzF3I9F3aATq1.avif" alt="Fruit Party">
                <p>Fruit Party</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-the-dog-house-dog-or-alive" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/IXIbm2lJsiOJpfiQ34a4Xjtklsei1ZTbrwKKZhPl.avif" alt="The Dog House Dog or Alive">
                <p>The Dog House Dog or Alive</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-starlight-princess" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/G5xNO6W86jGBlHaHCL06o1sr5j1H6cySJvdSSRrA.avif" alt="Starlight Princess">
                <p>Starlight Princess</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-the-dog-house-multihold" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/Do8FlFiEPlyzErc9dy2Jqu7lhqX8XaL7AOawkqKh.avif" alt="The Dog House Multihold">
                <p>The Dog House Multihold</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-sugar-rush-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/jNoaroKVGDwdRDelCNlu70ADVbyAvMw1qCpJrhP9.avif" alt="Sugar Rush 1000">
                <p>Sugar Rush 1000</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-gates-of-olympos-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/jpygjMVafhuLu4QEnILFs3oBE6wX7bD2ygoADiI9.avif" alt="Gates of Olympos 1000">
                <p>Gates of Olympos 1000</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-sweet-bonanza-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/nIwpbBsTqVta4IXzWc1jxgKVX4dPnNzO9nOKu4GK.avif" alt="Sweet Bonanza 1000">
                <p>Sweet Bonanza 1000</p>
            </a>

            <a href="/en/casino/games/pragmaticplay-big-bass-hold-spinner-megaways" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/uygXx82uD3oiUy86HOPuu4GsuTeNJCPgRgZG24TX.avif" alt="Big Bass Hold & Spinners Megaways">
                <p>Big Bass Hold & Spinners Megaways</p>
            </a>
        </div>
    </div>
</section>

                 <!-- Winners Section with Dynamic Animation -->
                 <section class="winners-section">
                   <h2 class="section-title">Recent Big Wins</h2>

                     <div class="win-container">
                         <div class="win-list" id="win-list">
                             <!-- Kazananlar buraya dinamik olarak eklenecek -->
                         </div>
                     </div>
                 </section>

                 <!-- Jackpot Section -->
                 <section class="jackpot-section">
                  <h2 class="section-title">Active Jackpots</h2>

                     <div class="jackpot-container">
                         <!-- Mega Jackpot -->
                         <div class="jackpot-card mega-jackpot">
                             <div class="jackpot-title">🎰 Mega Jackpot</div>
                             <div class="jackpot-amount" id="mega-jackpot">₺2.847.592</div>
                             <div class="jackpot-description">
				A massive jackpot accumulated from all games! It grows with every bet.
                             </div>
                         </div>

                         <!-- Mini Jackpots -->
                         <div class="jackpot-card">
                             <div class="jackpot-title">🏆 Major Jackpot</div>
                             <div class="jackpot-amount" id="major-jackpot">₺456.789</div>
                             <div class="jackpot-description">
                                 Big winning opportunity! Try your luck.
                             </div>
                         </div>

                         <div class="jackpot-card">
                             <div class="jackpot-title">💎 Minor Jackpot</div>
                             <div class="jackpot-amount" id="minor-jackpot">₺89.234</div>
                             <div class="jackpot-description">
                            The perfect choice for instant wins – fast, fun, and rewarding!
                             </div>
                         </div>

                         <div class="jackpot-card">
                             <div class="jackpot-title">⚡ Mini Jackpot</div>
                             <div class="jackpot-amount" id="mini-jackpot">₺12.567</div>
                             <div class="jackpot-description">
                              The frequently hitting mini jackpot!
                             </div>
                         </div>
                     </div>
                 </section>

                 <!-- Game Providers Section -->
              <section class="providers-section">
    <h2 class="section-title">🎮 Game Providers</h2>
    <div class="providers-container">
        <div class="providers-track">
            <!-- 15 seçilmiş sağlayıcı -->
            <a href="/en/providers/pragmatic-play" class="provider-card">
                <div class="provider-logo">PG</div>
                <div class="provider-name">Pragmatic Play</div>
                <div class="provider-games">150+ Game</div>
            </a>

            <a href="/en/providers/evolution" class="provider-card">
                <div class="provider-logo">EV</div>
                <div class="provider-name">Evolution</div>
                <div class="provider-games">100+ Game</div>
            </a>

            <a href="/en/providers/netent" class="provider-card">
                <div class="provider-logo">NT</div>
                <div class="provider-name">NetEnt</div>
                <div class="provider-games">130+ Game</div>
            </a>

            <a href="/en/providers/egt" class="provider-card">
                <div class="provider-logo">EG</div>
                <div class="provider-name">EGT</div>
                <div class="provider-games">90+ Game</div>
            </a>

            <a href="/en/providers/quickspin" class="provider-card">
                <div class="provider-logo">QS</div>
                <div class="provider-name">Quickspin</div>
                <div class="provider-games">70+ Game</div>
            </a>

            <a href="/en/providers/red-tiger" class="provider-card">
                <div class="provider-logo">RT</div>
                <div class="provider-name">Red Tiger</div>
                <div class="provider-games">80+ Game</div>
            </a>

            <a href="/en/providers/yggdrasil" class="provider-card">
                <div class="provider-logo">YG</div>
                <div class="provider-name">Yggdrasil</div>
                <div class="provider-games">60+ Game</div>
            </a>

            <a href="/en/providers/playtech" class="provider-card">
                <div class="provider-logo">PT</div>
                <div class="provider-name">PlayTech</div>
                <div class="provider-games">110+ Game</div>
            </a>

            <a href="/en/providers/thunderkick" class="provider-card">
                <div class="provider-logo">TK</div>
                <div class="provider-name">Thunderkick</div>
                <div class="provider-games">50+ Game</div>
            </a>

            <a href="/en/providers/booming-games" class="provider-card">
                <div class="provider-logo">BG</div>
                <div class="provider-name">Booming Games</div>
                <div class="provider-games">120+ Game</div>
            </a>

            <a href="/en/providers/microgaming" class="provider-card">
                <div class="provider-logo">MG</div>
                <div class="provider-name">Microgaming</div>
                <div class="provider-games">140+ Game</div>
            </a>

            <a href="/en/providers/spadegaming" class="provider-card">
                <div class="provider-logo">SG</div>
                <div class="provider-name">Spadegaming</div>
                <div class="provider-games">100+ Game</div>
            </a>

            <a href="/en/providers/slotmill" class="provider-card">
                <div class="provider-logo">SM</div>
                <div class="provider-name">Slotmill</div>
                <div class="provider-games">60+ Game</div>
            </a>

            <a href="/en/providers/fugaso" class="provider-card">
                <div class="provider-logo">FG</div>
                <div class="provider-name">Fugaso</div>
                <div class="provider-games">90+ Game</div>
            </a>

            <a href="/en/providers/platipus" class="provider-card">
                <div class="provider-logo">PL</div>
                <div class="provider-name">Platipus</div>
                <div class="provider-games">80+ Game</div>
            </a>

            <!-- Duplicate for seamless scroll -->
            <a href="/en/providers/pragmatic-play" class="provider-card">
                <div class="provider-logo">PG</div>
                <div class="provider-name">Pragmatic Play</div>
                <div class="provider-games">150+ Game</div>
            </a>

            <a href="/en/providers/evolution" class="provider-card">
                <div class="provider-logo">EV</div>
                <div class="provider-name">Evolution</div>
                <div class="provider-games">100+ Game</div>
            </a>

            <a href="/en/providers/netent" class="provider-card">
                <div class="provider-logo">NT</div>
                <div class="provider-name">NetEnt</div>
                <div class="provider-games">130+ Game</div>
            </a>

            <a href="/en/providers/egt" class="provider-card">
                <div class="provider-logo">EG</div>
                <div class="provider-name">EGT</div>
                <div class="provider-games">90+ Game</div>
            </a>

            <a href="/en/providers/quickspin" class="provider-card">
                <div class="provider-logo">QS</div>
                <div class="provider-name">Quickspin</div>
                <div class="provider-games">70+ Game</div>
            </a>

            <a href="/en/providers/red-tiger" class="provider-card">
                <div class="provider-logo">RT</div>
                <div class="provider-name">Red Tiger</div>
                <div class="provider-games">80+ Game</div>
            </a>

            <a href="/en/providers/yggdrasil" class="provider-card">
                <div class="provider-logo">YG</div>
                <div class="provider-name">Yggdrasil</div>
                <div class="provider-games">60+ Game</div>
            </a>

            <a href="/en/providers/playtech" class="provider-card">
                <div class="provider-logo">PT</div>
                <div class="provider-name">PlayTech</div>
                <div class="provider-games">110+ Game</div>
            </a>

            <a href="/en/providers/thunderkick" class="provider-card">
                <div class="provider-logo">TK</div>
                <div class="provider-name">Thunderkick</div>
                <div class="provider-games">50+ Game</div>
            </a>

            <a href="/en/providers/booming-games" class="provider-card">
                <div class="provider-logo">BG</div>
                <div class="provider-name">Booming Games</div>
                <div class="provider-games">120+ Game</div>
            </a>

            <a href="/en/providers/microgaming" class="provider-card">
                <div class="provider-logo">MG</div>
                <div class="provider-name">Microgaming</div>
                <div class="provider-games">140+ Game</div>
            </a>

            <a href="/en/providers/spadegaming" class="provider-card">
                <div class="provider-logo">SG</div>
                <div class="provider-name">Spadegaming</div>
                <div class="provider-games">100+ Game</div>
            </a>

            <a href="/en/providers/slotmill" class="provider-card">
                <div class="provider-logo">SM</div>
                <div class="provider-name">Slotmill</div>
                <div class="provider-games">60+ Game</div>
            </a>

            <a href="/en/providers/fugaso" class="provider-card">
                <div class="provider-logo">FG</div>
                <div class="provider-name">Fugaso</div>
                <div class="provider-games">90+ Game</div>
            </a>

            <a href="/en/providers/platipus" class="provider-card">
                <div class="provider-logo">PL</div>
                <div class="provider-name">Platipus</div>
                <div class="provider-games">80+ Game</div>
            </a>
        </div>
    </div>
</section>

             </div>
         `;

         firstSectionDiv.prepend(customContainer);
     }

     const winList = document.getElementById('win-list');
     const alphabet = 'ABCÇDEFGHIİJKLMNOÖPRSŞTÜVYZ';

     const games = [
         'Sweet Bonanza', 'Book of Dead', 'Starburst', 'Gonzo\'s Quest', 'Mega Moolah',
         'Immortal Romance', 'Dead or Alive 2', 'Jungle Spirit', 'Bonanza', 'Fruit Party',
         'Gates of Olympus', 'The Dog House', 'Razor Shark', 'Big Bass Bonanza', 'Wolf Gold'
     ];

     let currentIndex = 0;

     // LocalStorage key for jackpots
     const JACKPOT_STORAGE_KEY = 'cedabet_jackpots';
     const JACKPOT_TIMESTAMP_KEY = 'cedabet_jackpots_timestamp';

     // Default jackpot amounts
     const defaultJackpots = {
         mega: 2847592,
         major: 456789,
         minor: 89234,
         mini: 12567
     };

     // Load jackpots from localStorage or use defaults
     function loadJackpots() {
         try {
             const savedJackpots = localStorage.getItem(JACKPOT_STORAGE_KEY);
             const savedTimestamp = localStorage.getItem(JACKPOT_TIMESTAMP_KEY);

             if (savedJackpots && savedTimestamp) {
                 const jackpots = JSON.parse(savedJackpots);
                 const timestamp = parseInt(savedTimestamp);
                 const now = Date.now();

                 // Calculate how much time has passed since last save (in seconds)
                 const timeDiff = Math.floor((now - timestamp) / 1000);

                 // Simulate jackpot growth during offline time
                 // Mega: grows ~30-80 per 3 seconds, so ~10-27 per second
                 // Major: grows ~5-25 per 3 seconds, so ~2-8 per second
                 // Minor: grows ~2-12 per 3 seconds, so ~1-4 per second
                 // Mini: grows ~1-6 per 3 seconds, so ~0.3-2 per second

                 if (timeDiff > 0 && timeDiff < 86400) { // Only if less than 24 hours
                     jackpots.mega += Math.floor(timeDiff * (Math.random() * 17 + 10));
                     jackpots.major += Math.floor(timeDiff * (Math.random() * 6 + 2));
                     jackpots.minor += Math.floor(timeDiff * (Math.random() * 3 + 1));
                     jackpots.mini += Math.floor(timeDiff * (Math.random() * 1.7 + 0.3));
                 }

                 return jackpots;
             }
         } catch (error) {
             console.log('Error loading jackpots from localStorage:', error);
         }

         return { ...defaultJackpots };
     }

     // Save jackpots to localStorage
     function saveJackpots(jackpots) {
         try {
             localStorage.setItem(JACKPOT_STORAGE_KEY, JSON.stringify(jackpots));
             localStorage.setItem(JACKPOT_TIMESTAMP_KEY, Date.now().toString());
         } catch (error) {
             console.log('Error saving jackpots to localStorage:', error);
         }
     }

     // Initialize jackpots from localStorage
     let jackpots = loadJackpots();

     // Update jackpot display
     function updateJackpotDisplay() {
         document.getElementById('mega-jackpot').textContent = `₺${jackpots.mega.toLocaleString('tr-TR')}`;
         document.getElementById('major-jackpot').textContent = `₺${jackpots.major.toLocaleString('tr-TR')}`;
         document.getElementById('minor-jackpot').textContent = `₺${jackpots.minor.toLocaleString('tr-TR')}`;
         document.getElementById('mini-jackpot').textContent = `₺${jackpots.mini.toLocaleString('tr-TR')}`;
     }

     // Rastgele Türk ismi üretme - değişken yıldız sayısı ile
     function generateRandomName() {
         const firstNameLength = Math.floor(Math.random() * 4) + 3;
         const lastNameLength = Math.floor(Math.random() * 5) + 4;

         let firstName = '';
         let lastName = '';

         for (let i = 0; i < firstNameLength; i++) {
             firstName += alphabet[Math.floor(Math.random() * alphabet.length)];
         }

         for (let i = 0; i < lastNameLength; i++) {
             lastName += alphabet[Math.floor(Math.random() * alphabet.length)];
         }

         const firstNameStarsCount = Math.floor(Math.random() * 6) + 2;
         const lastNameStarsCount = Math.floor(Math.random() * 7) + 3;

         firstName = firstName.charAt(0).toUpperCase() + '*'.repeat(firstNameStarsCount);
         lastName = lastName.charAt(0).toUpperCase() + '*'.repeat(lastNameStarsCount);

         return `${firstName} ${lastName}`;
     }

     function getRandomWin() {
         const randomValue = Math.random();
         let winAmount = 0;

         if (randomValue < 0.15) {
             winAmount = Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000;
         } else {
             winAmount = Math.floor(Math.random() * (10000 - 400 + 1)) + 400;
         }

         return `₺${winAmount.toLocaleString('tr-TR')}`;
     }

     function getRandomInterval() {
         const randomType = Math.random();

         if (randomType < 0.3) {
             return Math.floor(Math.random() * 2000) + 1000;
         } else if (randomType < 0.7) {
             return Math.floor(Math.random() * 3000) + 2500;
         } else {
             return Math.floor(Math.random() * 4000) + 4000;
         }
     }

     // Jackpot güncelleme fonksiyonu - now saves to localStorage
     function updateJackpots() {
         jackpots.mega += Math.floor(Math.random() * 50) + 10;
         jackpots.major += Math.floor(Math.random() * 20) + 5;
         jackpots.minor += Math.floor(Math.random() * 10) + 2;
         jackpots.mini += Math.floor(Math.random() * 5) + 1;

         updateJackpotDisplay();
         saveJackpots(jackpots);
     }

     function createInitialWinners() {
         for (let i = 0; i < 4; i++) {
             const winnerName = generateRandomName();
             const game = games[Math.floor(Math.random() * games.length)];
             const winAmount = getRandomWin();

             const winItem = document.createElement('div');
             winItem.classList.add('win-item');
             winItem.innerHTML = `
                 <p><strong>Our player ${winnerName}</strong></p>
<p>won <strong>${winAmount}</strong> from the game <strong>${game}</strong>.</p>
<p>Congratulations and good luck!</p>

                     `;

             winList.appendChild(winItem);
             currentIndex++;
         }
     }

     function addWinner() {
         const winnerName = generateRandomName();
         const game = games[Math.floor(Math.random() * games.length)];
         const winAmount = getRandomWin();

         const winItem = document.createElement('div');
         winItem.classList.add('win-item', 'animated');
         winItem.innerHTML = `
                  <p><strong>Our player ${winnerName}</strong></p>
<p>won <strong>${winAmount}</strong> from the game <strong>${game}</strong>.</p>
<p>Congratulations and good luck!</p>

                 `;

         if (winList.children.length >= 8) {
             const firstItem = winList.children[0];
             firstItem.style.animation = 'fade-out 1s forwards';
             setTimeout(() => {
                 if (firstItem.parentNode) {
                     firstItem.remove();
                 }
             }, 1000);
         }

         winList.appendChild(winItem);
         currentIndex++;
     }

     function startWinningCycle() {
         createInitialWinners();

         setTimeout(() => {
             function scheduleNext() {
                 setTimeout(() => {
                     addWinner();
                     scheduleNext();
                 }, getRandomInterval());
             }

             scheduleNext();
         }, 3000);
     }

     function startJackpotUpdates() {
         setInterval(updateJackpots, 3000);
     }
 function addRandomPlayingCounts() {
    const gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
      // 100-300 arasında random sayı üret
      const randomCount = Math.floor(Math.random() * 201) + 100;

      // Yeni bir span oluştur ve içine sayıyı yaz
      const playingSpan = document.createElement('span');
      playingSpan.className = 'playing-count';
      playingSpan.textContent = `${randomCount} user playing`;

      // Eğer önceden varsa temizle
      const existing = item.querySelector('.playing-count');
      if (existing) {
        existing.remove();
      }

      // span'i item'in en altına ekle
      item.appendChild(playingSpan);
    });
  }

  // Fonksiyonu hemen çağır
  addRandomPlayingCounts();
    updateJackpotDisplay();
startWinningCycle();
startJackpotUpdates();

     // Save jackpots when page is about to unload
     window.addEventListener('beforeunload', () => {
         saveJackpots(jackpots);
     });

     // Also save periodically (every 30 seconds)
     setInterval(() => {
         saveJackpots(jackpots);
     }, 30000);
}


function addMenuElement() {
    const sidebarNav = document.querySelector('.sidebar__nav.sidebar__nav--border');
    if (!sidebarNav) {
        return;
    }

    const menuItems = [
        {
            id: 'custom-item-menu',
            href: '/en/casino/group/table-games',
            text: 'Table Games',
            iconClass: 'fa-solid fa-certificate'
        },
        {
            id: 'custom-item-bigwins',
            href: '/en/latest-big-wins',
            text: 'Latest Big Wins',
            iconClass: 'fa-solid fa-trophy'
        }
    ];

    menuItems.forEach(item => {
        if (document.getElementById(item.id)) return;

        const newLi = document.createElement('li');
        newLi.id = item.id;

        const newAnchor = document.createElement('a');
        newAnchor.href = item.href;

        const icon = document.createElement('i');
        icon.className = item.iconClass;
        icon.style.color = '#5c7382';
        icon.style.height = '22px';
        icon.style.width = '22px';
        icon.style.fontSize = '22px';

        const span = document.createElement('span');
        span.textContent = 'New';

        newAnchor.appendChild(icon);
        newAnchor.appendChild(document.createTextNode(' ' + item.text));
        newAnchor.appendChild(span);

        newLi.appendChild(newAnchor);

        sidebarNav.appendChild(newLi);
    });
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
        const elementId2 = 'promotions-link-2'; // Büyük link için id
        const elementId3 = 'promotions-link-3'; // Büyük link için id

        // Aynı id'ye sahip bir öğe zaten var mı diye kontrol ediyoruz
        const existingMenu = document.getElementById(elementId);
        if (!existingMenu) {
            const newHTML = `
<div style="width: 100%;display:flex;gap:10px;">
    <a id="${elementId}" class="sidebar__link sidebar__link--casino" href="/promotions" style="
                         background: url('https://cedabet.github.io/assets/images/promotionBtn.jpg') left center / cover no-repeat;
                         width: 100%;
                         margin-bottom: 17px;
                         margin-top: -10px;
                         box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
                     ">
        <span>Promotion</span>
    </a>
     <a id="${elementId2}" class="sidebar__link sidebar__link--casino" target="_blank" href="https://cedabettv.com/" style="
                         background: url('https://cedabet.github.io/assets/images/tvBtn.jpg') left center / cover no-repeat;
                         width: 100%;
                         margin-bottom: 17px;
                         box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
                     ">
        <span>Ceda TV</span>
    </a>
</div>
<div style="width: 100%;display:flex;gap:10px;">
     <a id="${elementId3}" class="sidebar__link sidebar__link--casino" target="_blank" href="https://t.me/cedabet" style="
                         background: url('https://cedabet.github.io/assets/images/tvBtn.jpg') left center / cover no-repeat;
                         width: 100%;
                         margin-bottom: 17px;
                         box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
                     ">
        <span>Join Our Telegram</span>
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
        var highRtpGamesWrapper2 = document.getElementById('main-slider');//originalssler en üstte cıkar
        var highRtpGamesWrapper = document.getElementById('popular-games-wrapper');//originalssler popular gamesin altında cıkar
		
        var changeLine = document.getElementById('custom-section-7');

        if (miniGamesWrapper2 && highRtpGamesWrapper && changeLine) {
        highRtpGamesWrapper.insertAdjacentElement('afterend', miniGamesWrapper2);
       // miniGamesWrapper.insertAdjacentElement('afterend', changeLine); providers orignalsin altında cıkar
	highRtpGamesWrapper2.insertAdjacentElement('afterend', changeLine); //en üstte cıkar providers
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

function createLeagueSection() {
  const leagues = [
    { name: "Trendyol Süperlig", country: "Turkey", flagCode: "tr", logo: "https://cedabet.github.io/assets/images/league-tr.png" },
    { name: "Premier League", country: "England", flagCode: "gb", logo: "https://cedabet.github.io/assets/images/league-gb.png" },
    { name: "La Liga", country: "Spain", flagCode: "es", logo: "https://cedabet.github.io/assets/images/league-es.png" },
    { name: "Ligue 1", country: "France", flagCode: "fr", logo: "https://cedabet.github.io/assets/images/league-fr.png" },
    { name: "Eredivisie", country: "Netherlands", flagCode: "nl", logo: "https://cedabet.github.io/assets/images/league-nl.png" },
    { name: "Serie A", country: "Italy", flagCode: "it", logo: "https://cedabet.github.io/assets/images/seria-a.avif" },
    { name: "Bundesliga", country: "Germany", flagCode: "de", logo: "https://cedabet.github.io/assets/images/bundesliga.jpg" }
  ];

  const duplicatedLeagues = [...leagues, ...leagues, ...leagues];

  const wrapper = document.createElement('div');
  wrapper.className = 'section';
  wrapper.id = 'league-wrapper';

  wrapper.innerHTML = `
    <div class="container">
      <div class="row" style="display: flex; flex-direction: column; gap: 20px;">
        <div class="col-12">
          <h2 class="section__title">
            <i class="fa-solid fa-volleyball" style="color: rgb(33, 159, 227); height: 28px; width: 28px; font-size: 28px;"></i>
            TOP Leagues
          </h2>
        </div>
        <div class="league-container">
          <div class="league-slider-wrapper">
            <div class="league-slider league-scrollbar-hide" id="league-slider"></div>
          </div>
        </div>
      </div>
    </div>
  `;


  const targetSection = document.getElementById('custom-section-7');
  if (targetSection && targetSection.parentNode) {
    targetSection.parentNode.insertBefore(wrapper, targetSection.nextSibling);
  } else {
    console.warn('mini-games-wrapper-2 bulunamadı, body sonuna ekleniyor.');
  }

  const slider = wrapper.querySelector('#league-slider');

  duplicatedLeagues.forEach((league, index) => {
    const link = document.createElement('a');
    link.href = "/ru/sportsbook";
    link.className = 'league-card';
    link.dataset.index = index;

    link.innerHTML = `
      <div class="league-logo-container">
        <img src="${league.logo}" alt="${league.name} logo" class="league-logo">
      </div>
      <div class="league-card-content">
        <div class="league-country-container">
          <img src="https://hatscripts.github.io/circle-flags/flags/${league.flagCode}.svg"
               alt="${league.country} flag"
               class="league-flag">
          <div class="league-country-badge">${league.country.toUpperCase()}</div>
        </div>
        <h3 class="league-name">${league.name}</h3>
      </div>
    `;

    slider.appendChild(link);
  });

  let animationId;
  let startTime;
  let position = 0;
  let isPaused = false;

  const totalWidth = leagues.length * 200;
  const speed = 0.05;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;

    if (!isPaused) {
      const elapsed = timestamp - startTime;
      position = (position + speed * elapsed) % totalWidth;
      slider.style.transform = `translateX(-${position}px)`;
    }

    startTime = timestamp;
    animationId = requestAnimationFrame(animate);
  }

  animationId = requestAnimationFrame(animate);

  const cards = slider.querySelectorAll('.league-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => isPaused = true);
    card.addEventListener('mouseleave', () => isPaused = false);
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
