let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css";

document.head.appendChild(link);

(function () {
    let lastUrl = location.href;
    let isFirstLoad = true;
    if (isFirstLoad) {
        setTimeout(function () {
            addMenuItemsWithAuth();
            loadVipFeatures();
            setTimeout(loadh2Title, 1000);
            addMenuElement();
            addMenuElementTwo();
            setTimeout(updateCopyrightYear, 1000);
            //  setTimeout(createSigninModal, 2000);
            CreateCedaOriginal();
            CreateCedaOriginalTwo();
            insertCedaTVButton();
            createLeagueSection();
            //    checkModal();
            //     createSocialSection();
            //  addScrollingText("BİR SONRAKİ GÜNCEL ADRESİMİZ CEDABET25.COM'DUR. LÜTFEN SAHTE SİTELERE İTİBAR ETMEYİNİZ.");
            addEliteCardToSidebar();
            createCedaSocialLinks();
			createSocialSection();
            createWhatsAppBadge();
            var sportspath = window.location.pathname;
            if (sportspath === "/tr/sportsbook") {
              clearDynamicContent();
            } else if (sportspath === "/tr/trade") {
              clearDynamicContent();
            } else if (sportspath === "/tr/e-sport") {
              clearDynamicContent();
            } else if (sportspath === "/tr/vip") {
                createVipExperience();
				clearDynamicContent();
            } else if (sportspath === "/tr/latest-big-wins") {
                clearDynamicContent();
                LandingPage();
            } else if (sportspath === "/tr/challenges") {
                clearDynamicContent();
            }
			else if (sportspath !== "/tr/" && sportspath !== "/tr") {
                clearDynamicContent();
            }
            isFirstLoad = false;
        }, 400);
    }

    function checkUrlChange() {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            handlePageScripts(location.pathname);
        }
    }

    function handlePageScripts(path) {
        setTimeout(function () {
            addMenuItemsWithAuth();
            insertCedaTVButton();
            //	  checkModal();
            if (path === "/tr/" || path === "/tr") {
                clearDynamicContent();
                loadVipFeatures();
                setTimeout(loadh2Title, 1000);
                addMenuElement();
                addMenuElementTwo();
                setTimeout(updateCopyrightYear, 1000);
                CreateCedaOriginal();
                CreateCedaOriginalTwo();
                createLeagueSection();
                createCedaSocialLinks();
                createSocialSection();
                addEliteCardToSidebar();
			    createWhatsAppBadge();
            } else if (path === "/tr/vip") {
                clearDynamicContent();
                createVipExperience();
            } else if (path === "/tr/casino") {
                clearDynamicContent();
                CreateCedaOriginal();
                CreateCedaOriginalTwo();
            } else if (path === "/tr/sportsbook") {
                clearDynamicContent();
            } else if (path === "/tr/trade") {
                clearDynamicContent();
            } else if (path === "/tr/e-sport") {
                clearDynamicContent();
            } else if (path === "/tr/challenges") {
                clearDynamicContent();
            } else if (path === "/en/latest-big-wins") {
                LandingPage();
            } else if (path !== "/tr/sportsbook") {
                clearDynamicContent();
            } else {
                clearDynamicContent();
            }
        }, 400);
    }

    new MutationObserver(checkUrlChange).observe(document, {
        subtree: true,
        childList: true,
    });
    window.addEventListener("load", function () {
        checkUrlChange(); // Sayfa yüklendikten hemen sonra kontrol et
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

    window.addEventListener("popstate", checkUrlChange);

    window.addEventListener("load", checkUrlChange);
})();

function checkModal() {
    const modal = document.getElementById("global-modal");

    if (modal) {
        modal.style.display = "none"; // Modal'ı gizle
    }
}

function addScrollingText(text) {
    const existing = document.querySelector(".scrolling-text");

    if (existing) {
        const currentText = existing.querySelector("span")?.textContent;
        if (currentText === text) return; // Do nothing if the text is the same

        // Update the text if different
        existing.querySelector("span").textContent = text;
        return;
    }

    // Create the scrolling text div
    const scrollingDiv = document.createElement("div");
    scrollingDiv.className = "scrolling-text";

    const span = document.createElement("span");
    span.textContent = text;

    scrollingDiv.appendChild(span);

    // Insert after header
    const header = document.querySelector("header");
    header.insertAdjacentElement("afterend", scrollingDiv);
}

// Call the function

function updateCopyrightYear() {
    const copyrightElement = document.querySelector(".footer__copyright");

    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = "";
        copyrightElement.textContent = "© CEDABET.COM, " + currentYear;
    }
    const titles = document.querySelectorAll("h2.section__title");

    titles.forEach(function (title) {
        if (title.textContent.trim() === "Mini Games" || title.textContent.trim() === "Mini Oyunlar" || title.textContent.trim() === "Мини -игры") {
            //  title.innerHTML = '<svg class="svg-icon"><use href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#mini-games" xlink:href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#mini-games"></use></svg>Ceda Orjinalleri';
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
  cedaTVLink.href = 'https://cedabettv101.com';
  cedaTVLink.target = '_blank';
  cedaTVLink.className = 'header-custom-button custom d-flex px-3 align-items-center text-white';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-tv';

  const text = document.createTextNode('Ceda TV');

  cedaTVLink.appendChild(icon);
  cedaTVLink.appendChild(text);

  headerActions.insertBefore(cedaTVLink, headerActions.firstChild);*/

    const headerActions = document.querySelector(".header__actions");
    if (!headerActions) return;

    // Partnership butonu ekle
    if (!document.getElementById("partnership-button")) {
        const partnershipLink = document.createElement("a");
        partnershipLink.id = "partnership-button";
        partnershipLink.href = "/tr/affiliate"; // Gerekirse değiştirin
        //  partnershipLink.target = '_blank';
        partnershipLink.className = "header-custom-button custom d-flex px-3 align-items-center text-white";

        const partnershipIcon = document.createElement("i");
        partnershipIcon.className = "fa-solid fa-handshake";

        const partnershipText = document.createTextNode("Ortaklık");

        partnershipLink.appendChild(partnershipIcon);
        partnershipLink.appendChild(partnershipText);

        headerActions.insertBefore(partnershipLink, headerActions.firstChild);
    }

    // Ceda TV butonu ekle
    if (!document.getElementById("ceda-tv-button")) {
        const cedaTVLink = document.createElement("a");
        cedaTVLink.id = "ceda-tv-button";
        cedaTVLink.href = "https://cedabettv101.com";
        cedaTVLink.target = "_blank";
        cedaTVLink.className = "header-custom-button custom d-flex px-3 align-items-center text-white";

        const cedaIcon = document.createElement("i");
        cedaIcon.className = "fa-solid fa-tv";

        const cedaText = document.createTextNode("Ceda TV");

        cedaTVLink.appendChild(cedaIcon);
        cedaTVLink.appendChild(cedaText);

        // Partnership butonundan sonra eklemek için
        const partnershipButton = document.getElementById("partnership-button");
        if (partnershipButton && partnershipButton.nextSibling) {
            headerActions.insertBefore(cedaTVLink, partnershipButton.nextSibling);
        } else {
            headerActions.appendChild(cedaTVLink);
        }
    }
}

function createVipExperience() {
    // vip class'ına sahip div'i bul
    const vipContainer = document.querySelector(".vip");

    if (document.querySelector("#vip-container")) {
        console.log("VIP container already exists. Skipping creation.");
        return;
    }

    // İçeriği temizle
    vipContainer.innerHTML = "";

    // Create and style the new div (vip-container)
    const newDiv = document.createElement("div");
    newDiv.id = "vip-container";
    newDiv.style.backgroundColor = "#03121a";
    newDiv.style.width = "100%";
    newDiv.style.height = "500px";
    newDiv.style.position = "relative";
    newDiv.style.borderRadius = "8px";
    newDiv.style.overflow = "hidden";

    vipContainer.appendChild(newDiv);

    // Ekran boyutunu dinamik olarak alacak fonksiyon
    function getContainerWidth() {
        return newDiv.offsetWidth;
    }

    // Add text content in the middle
    const textContent = document.createElement("div");
    textContent.style.position = "absolute";
    textContent.style.left = "0";
    textContent.style.right = "0";
    textContent.style.top = "50%";
    textContent.style.transform = "translateY(-50%)";
    textContent.style.zIndex = "10";
    textContent.style.textAlign = "center";

    const heading = document.createElement("h1");
    heading.style.color = "#ffffff";
    heading.style.fontSize = "42px";
    heading.style.fontFamily = "'Montserrat', 'Arial', sans-serif";
    heading.style.fontWeight = "800";
    heading.style.margin = "0 0 12px 0";
    heading.style.letterSpacing = "1.5px";
    heading.style.textTransform = "uppercase";
    heading.style.background = "linear-gradient(to right, #ffffff 20%, #229de1 80%)";
    heading.style.webkitBackgroundClip = "text";
    heading.style.webkitTextFillColor = "transparent";
    heading.style.display = "inline-block";
    heading.style.textShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
    heading.textContent = "Rakipsiz VIP Deneyimi";

    const paragraph = document.createElement("p");
    paragraph.style.color = "#e6e6e6";
    paragraph.style.fontSize = "17px";
    paragraph.style.fontFamily = "'Open Sans', 'Helvetica', sans-serif";
    paragraph.style.fontWeight = "400";
    paragraph.style.maxWidth = "650px";
    paragraph.style.margin = "0 auto";
    paragraph.style.lineHeight = "1.6";
    paragraph.style.letterSpacing = "0.4px";
    paragraph.style.textShadow = "0 1px 3px rgba(0, 0, 0, 0.5)";
    paragraph.textContent = "Hiçbir koşula bağlı kalmadan özel avantajların kilidini açın ve anında çekilebilir bonuslar kazanın.";

    textContent.appendChild(heading);
    textContent.appendChild(paragraph);
    newDiv.appendChild(textContent);

    // Add Google Fonts link for the custom fonts
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Open+Sans:wght@400&display=swap";
    document.head.appendChild(fontLink);

    // Astronaut image sources with custom classes
    const vipAstronauts = [
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nonvip.jpg-OkEYbdiUYPy8WPuZHfhDJ64dgloVMX.jpeg", class: "vip-nonvip-icon", position: "top" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bronze.jpg-kJ1LdK8seS1op7PHwubpz8ZimigSan.jpeg", class: "vip-bronze-icon", position: "top" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/silver.jpg-b0ee8wIwVWLtvDUXRMprSD7yapZLVL.jpeg", class: "vip-silver-icon", position: "top" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gold.jpg-OHt1qVSHhN3ZNAk2OyyP3DXpLomar9.jpeg", class: "vip-gold-icon", position: "top" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/platinum.jpg-epz0rV2QG1ZG1nNSsYPyILFSMSWaqr.jpeg", class: "vip-platinum-icon", position: "bottom" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamond.jpg-tA22xTawtLy1kEzYS2ZV62u0t0Ifcc.jpeg", class: "vip-diamond-icon", position: "bottom" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ceda.jpg-xUU80CihSslZ88xS1pPUaCGPlEEoi4.jpeg", class: "vip-ceda-icon", position: "bottom" },
    ];

    // Get the container width dynamically
    const astronautWidth = 100;

    // Filter astronauts by position
    const topAstronauts = vipAstronauts.filter((a) => a.position === "top");
    const bottomAstronauts = vipAstronauts.filter((a) => a.position === "bottom");

    // Calculate spacing for top row (3 astronauts)
    function calculateSpacing(astronauts, isTopRow) {
        const containerWidth = getContainerWidth(); // Get updated width
        const totalWidth = astronauts.length * astronautWidth;
        const spacing = (containerWidth - totalWidth) / (astronauts.length + 1);

        astronauts.forEach((astronaut, index) => {
            const astronautElement = document.createElement("div");

            const leftPosition = spacing + index * (astronautWidth + spacing);
            const leftPercentage = (leftPosition / containerWidth) * 100;

            astronautElement.style.position = "absolute";
            astronautElement.style.width = "100px";
            astronautElement.style.height = "100px";
            astronautElement.style.borderRadius = "100%";
            astronautElement.style.border = "1px solid rgba(34, 55, 64, 1)";
            astronautElement.style.overflow = "hidden";
            astronautElement.style.zIndex = "1";
            astronautElement.style.transition = "transform 0.3s ease";
            astronautElement.style.left = `${leftPercentage}%`;
            astronautElement.style[isTopRow ? "top" : "bottom"] = "25px";

            astronautElement.className = astronaut.class;

            const img = document.createElement("img");
            img.src = astronaut.src;
            img.alt = `VIP ${astronaut.class}`;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            img.style.borderRadius = "100%";
            img.style.opacity = "0.7";

            astronautElement.appendChild(img);
            newDiv.appendChild(astronautElement);

            animateVipIcon(astronautElement, index, isTopRow ? "top" : "bottom");
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
        const style = document.createElement("style");
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
    document.querySelectorAll('[class^="vip-"]').forEach((element) => {
        element.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
            this.style.zIndex = "5";
            this.querySelector("img").style.opacity = "0.9";
        });

        element.addEventListener("mouseout", function () {
            this.style.transform = "";
            this.style.zIndex = "1";
            this.querySelector("img").style.opacity = "0.7";
        });
    });

    // Resize event listener to update spacing and positions when window size changes
    window.addEventListener("resize", function () {
        clearAstronauts();

        calculateSpacing(topAstronauts, true);
        calculateSpacing(bottomAstronauts, false);
    });
}

function clearAstronauts() {
    const existingAstronauts = document.querySelectorAll(
        "#vip-container .vip-nonvip-icon, #vip-container .vip-bronze-icon, #vip-container .vip-silver-icon, #vip-container .vip-gold-icon, #vip-container .vip-platinum-icon, #vip-container .vip-diamond-icon, #vip-container .vip-ceda-icon"
    );
    existingAstronauts.forEach((astronaut) => astronaut.remove());
}

function clearDynamicContent() {
    const idsToRemove = ["mini-games-wrapper-2", "custom-section-7", "league-wrapper", "custom-section-landing", "telegram-section" , "whatsapp-badge"];

    const styleIdsToRemove = [
        "big-wins-style",
        "telegram-style",
        "mini-games-style",
		"_wa-badge-style"
        // buraya kaldırmak istediğin style id'lerini ekle
    ];

    idsToRemove.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
            el.remove();
            console.log(`${id} temizlendi.`);
        }
    });

    styleIdsToRemove.forEach((id) => {
        const styleEl = document.getElementById(id);
        if (styleEl) {
            styleEl.remove();
            console.log(`${id} style etiketi kaldırıldı.`);
        }
    });
}

function addMenuElement() {
    const sidebarNav = document.querySelector(".sidebar__nav.sidebar__nav--border");
    if (!sidebarNav) {
        return;
    }

    const menuItems = [
        {
            id: "custom-item-menu",
            href: "/tr/casino/group/table-games",
            text: "Masa Oyunları",
            iconClass: "fa-solid fa-certificate",
        },
        {
            id: "custom-item-bigwins",
            href: "/tr/latest-big-wins",
            text: "Büyük Kazançlar",
            iconClass: "fa-solid fa-trophy",
        },
    ];

    menuItems.forEach((item) => {
        if (document.getElementById(item.id)) return;

        const newLi = document.createElement("li");
        newLi.id = item.id;

        const newAnchor = document.createElement("a");
        newAnchor.href = item.href;

        const icon = document.createElement("i");
        icon.className = item.iconClass;
        icon.style.color = "#5c7382";
        icon.style.height = "22px";
        icon.style.width = "22px";
        icon.style.fontSize = "22px";

        const span = document.createElement("span");
        span.textContent = "New";

        newAnchor.appendChild(icon);
        newAnchor.appendChild(document.createTextNode(" " + item.text));
        newAnchor.appendChild(span);

        newLi.appendChild(newAnchor);

        sidebarNav.appendChild(newLi);
    });
}

function addMenuElementTwo() {
    const sidebarLinks = document.querySelector(".sidebar__links");
    const sidebarLinksSmall = document.querySelector(".sidebar__links-small");

    if (sidebarLinksSmall) {
        const elementId = "promotions-link-small";

        const existingMenu = document.getElementById(elementId);
        if (!existingMenu) {
            const newHTMLSmall = `
                 <a id="${elementId}" class="sidebar__link-small sidebar__link-small--purple" href="/tr/casino" style="background: url('https://cedabet.github.io/assets/images/promotionBtn.jpg') left center / cover no-repeat;"></a>
             `;
            sidebarLinksSmall.insertAdjacentHTML("beforeend", newHTMLSmall);
        }
    }

    if (sidebarLinks) {
        const elementId = "promotions-link"; // Büyük link için id
        const elementId2 = "promotions-link-2"; // Büyük link için id
        const elementId3 = "promotions-link-3"; // Büyük link için id

        // Aynı id'ye sahip bir öğe zaten var mı diye kontrol ediyoruz
        const existingMenu = document.getElementById(elementId);
        if (!existingMenu) {
            const newHTML = `
               <div style="width: 100%;display:flex;gap:10px;">
                     <a id="${elementId}" class="sidebar__link sidebar__link--casino" href="/tr/promotions" style="
                         background: url('https://cedabet.github.io/assets/images/promotionBtn.jpg') left center / cover no-repeat;
                         width: 100%;
                         margin-bottom: 17px;
                         margin-top: -10px;
                         box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
                     ">
                         <span>Promosyon</span>
                     </a>
		        <a id="${elementId2}" class="sidebar__link sidebar__link--casino" target="_blank" href="https://cedabettv101.com/" style="
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
        <span>Telegram Kanalımız</span>
    </a>
</div>
             `;
            sidebarLinks.insertAdjacentHTML("afterend", newHTML);
        }
    }
}

function loadh2Title() {
    const sectionTitleElements = document.querySelectorAll(".section__title");

    sectionTitleElements.forEach((title) => {
        let url = "";

        if (title.textContent.trim().includes("En iyi oyunlar")) {
            url = "/tr/casino/group/lobby";
        }
        if (title.textContent.trim().includes("Popüler Oyunlar")) {
            url = "/tr/casino/group/new-releases";
        }
        if (title.textContent.trim().includes("Yeni sürümler")) {
            url = "/tr/casino/group/new-releases";
        }
        if (title.textContent.trim().includes("Yüksek RTP")) {
            url = "/tr/casino/group/enhanced-rtp";
        }
        if (title.textContent.trim().includes("Bonus Satın Al")) {
            url = "/tr/casino/group/bonus-buy";
        }

        if (url) {
            if (!title.nextElementSibling || title.nextElementSibling.tagName !== "A") {
                const newLink = document.createElement("a");
                newLink.href = url;
                newLink.textContent = `Tümünü Gör`;
                newLink.style.background = "rgba(55, 162, 221, 0.13)";
                newLink.style.padding = "5px 12px 5px 12px";
                newLink.style.borderRadius = "4px";
                newLink.style.fontSize = "12px";
                newLink.style.color = "white";
                newLink.style.border = "1px solid rgba(41, 154, 217, 0.33)";

                title.insertAdjacentElement("afterend", newLink);
            }
        }
    });
}
function CreateCedaOriginal() {
    const games = [
        {
            name: "Plinko",
            url: "https://cedabet.com/tr/casino/games/ebetlab-plinko-originals",
            img: "https://cedabet.github.io/assets/images/plinko.jpg",
        },
        {
            name: "Mines",
            url: "https://cedabet.com/tr/casino/games/ebetlab-mines-originals",
            img: "https://cedabet.github.io/assets/images/mines.jpg",
        },
        {
            name: "Keno",
            url: "https://cedabet.com/tr/casino/games/ebetlab-keno-originals",
            img: "https://cedabet.github.io/assets/images/keno.jpg",
        },
        {
            name: "Limbo",
            url: "https://cedabet.com/tr/casino/games/hacksaw-limbo",
            img: "https://cedabet.github.io/assets/images/limbo.jpg",
        },
        {
            name: "Dice",
            url: "https://cedabet.com/tr/casino/games/ebetlab-dice-originals",
            img: "https://cedabet.github.io/assets/images/dice.jpg",
        },
        {
            name: "Blackjack",
            url: "https://cedabet.com/tr/casino/games/evolution-blackjack",
            img: "https://cedabet.github.io/assets/images/blackjack.jpg",
        },
        {
            name: "Aviator",
            url: "https://cedabet.com/tr/casino/games/spribe-aviator",
            img: "https://cedabet.github.io/assets/images/aviator.jpg",
        },
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

    const existingSection = document.getElementById("ceda-originals");
    if (existingSection) {
        return; // varsa temizle (yeni oluşturacağız)
    }

    // Yeni section oluştur
    const section = document.createElement("div");
    section.className = "section";
    section.id = "ceda-originals";

    // İçine container ekle
    const container = document.createElement("div");
    container.className = "container";
    section.appendChild(container);

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
    icon.style.color = "#5c7382";
    icon.style.height = "22px";
    icon.style.width = "22px";
    icon.style.fontSize = "22px";
    h2.appendChild(icon);
    h2.append("Ceda Orjinalleri");

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

    games.forEach((game) => {
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
    var changeLine = document.getElementById("custom-section-7");
    if (changeLine) {
        changeLine.appendChild(section); // section ve içindekiler buraya eklenir
    } else {
        console.error("custom-section-7 elementi bulunamadı!");
    }
}

function CreateCedaOriginalTwo() {
    const games = [
        {
            name: "Poker",
            url: "https://cedabet.com/tr/casino/games/evolution-poker-lobby",
            img: "https://cedabet.github.io/assets/images/poker.png",
            imgMobile: "https://cedabet.github.io/assets/images/Poker.avif",
        },
        {
            name: "BlackJack",
            url: "https://cedabet.com/tr/casino/games/evolution-blackjack",
            img: "https://cedabet.github.io/assets/images/blackjack.webp",
            imgMobile: "https://cedabet.github.io/assets/images/Bj.avif",
        },
        {
            name: "roulette",
            url: "https://cedabet.com/tr/casino/games/evolution-roulette",
            img: "https://cedabet.github.io/assets/images/roulette.webp",
            imgMobile: "https://cedabet.github.io/assets/images/Roulette.avif",
        },
    ];

    const popularGamesWrapper = document.querySelector("#banners-wrapper");
    if (!popularGamesWrapper) {
        //  console.error("popular-games-wrapper bulunamadı!");
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
    icon.style.color = "#5c7382";
    icon.style.height = "22px";
    icon.style.width = "22px";
    icon.style.fontSize = "22px";
    h2.appendChild(icon);
    h2.append("MASA OYUNLARI");
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
            game,
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

//    popularGamesWrapper.insertAdjacentElement("afterend", miniGamesWrapper);

let sectionCount = 0;
let currentElement = popularGamesWrapper.nextElementSibling;
let targetInsertPoint = null;

while (currentElement) {
    if (currentElement.classList.contains("section")) {
        sectionCount++;
        if (sectionCount === 2) {
            targetInsertPoint = currentElement;
            break;
        }
    }
    currentElement = currentElement.nextElementSibling;
}

// Eğer 2. section bulunduysa, onun sonrasına ekle
if (targetInsertPoint) {
    targetInsertPoint.insertAdjacentElement("afterend", miniGamesWrapper);
} else {
    // Bulunamadıysa fallback olarak banners-wrapper'dan sonra ekle
    popularGamesWrapper.insertAdjacentElement("afterend", miniGamesWrapper);
}

  
    // Dinamik olarak resimleri değiştirme
    window.addEventListener("resize", () => {
        const isMobile = window.innerWidth <= 768;
        imageElements.forEach(({ img, game }) => {
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
        { name: "Serie A", country: "Italy", flagCode: "it", logo: "https://cedabet.github.io/assets/images/league-it.png" },
        { name: "Bundesliga", country: "Germany", flagCode: "de", logo: "https://cedabet.github.io/assets/images/league-de.png" },
    ];

    const duplicatedLeagues = [...leagues, ...leagues, ...leagues];

    const wrapper = document.createElement("div");
    wrapper.className = "section";
    wrapper.id = "league-wrapper";

    wrapper.innerHTML = `
    <div class="container">
      <div class="row" style="display: flex; flex-direction: column; gap: 20px;">
        <div class="col-12">
          <h2 class="section__title">
            <i class="fa-solid fa-volleyball" style="color: rgb(33, 159, 227); height: 28px; width: 28px; font-size: 28px;"></i>
            Ceda Ligleri
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

    const targetSection = document.getElementById("custom-section-7");
    if (targetSection && targetSection.parentNode) {
        targetSection.parentNode.insertBefore(wrapper, targetSection.nextSibling);
    } else {
        console.warn("mini-games-wrapper-2 bulunamadı, body sonuna ekleniyor.");
    }

    const slider = wrapper.querySelector("#league-slider");

    duplicatedLeagues.forEach((league, index) => {
        const link = document.createElement("a");
        link.href = "/tr/sportsbook";
        link.className = "league-card";
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

    const cards = slider.querySelectorAll(".league-card");
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => (isPaused = true));
        card.addEventListener("mouseleave", () => (isPaused = false));
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
            const logos = [
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmaticplay.svg",
                    alt: "Pragmatic Play",
                    url: "/tr/providers/pragmaticplay",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Evolution%20Gaming.svg",
                    alt: "Evolution",
                    url: "/tr/providers/evolution",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmatic-live-light.svg",
                    alt: "Pragmatic Live",
                    url: "/tr/providers/pragmaticlive",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hacksaw.svg",
                    alt: "HackSaw Gaming",
                    url: "/tr/providers/hacksaw",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/egt.svg",
                    alt: "EGT",
                    url: "/tr/providers/egt",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/NoLimitCity.svg",
                    alt: "No Limit City",
                    url: "/tr/providers/nolimitcity",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netent.svg",
                    alt: "Netent",
                    url: "/tr/providers/netent",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ezugi.svg",
                    alt: "Ezugi",
                    url: "/tr/providers/ezugi",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amusnet.svg",
                    alt: "Amusnet",
                    url: "/tr/providers/egt-interactive",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1x2gaming.svg",
                    alt: "1x2 Gaming",
                    url: "/tr/providers/1x2gaming",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/5men.svg",
                    alt: "5men",
                    url: "/tr/providers/5men",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/endorphina.svg",
                    alt: "Endorphina",
                    url: "/tr/providers/endorphina",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mrslotty.svg",
                    alt: "MrSlotty",
                    url: "/tr/providers/mrslotty",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amatic.svg",
                    alt: "Amatic",
                    url: "/tr/providers/amatic",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Tiger%20Gaming.svg",
                    alt: "Red Tiger",
                    url: "/tr/providers/redtiger",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/softswiss.svg",
                    alt: "BGAMING",
                    url: "/tr/providers/bgaming",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg",
                    alt: "Booming Games",
                    url: "/tr/providers/booming",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1spin4win.svg",
                    alt: "1spin4win",
                    url: "/tr/providers/1spin4win",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/avatarux.svg",
                    alt: "AvatarUX",
                    url: "/tr/providers/avatarux",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/belatra.svg",
                    alt: "Belatra",
                    url: "/tr/providers/belatra",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/beterlive.svg",
                    alt: "Beter.Live",
                    url: "/tr/providers/beterlive",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/evoplay.svg",
                    alt: "Evoplay Entertainment",
                    url: "/tr/providers/evoplay",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gamezix.svg",
                    alt: "Gamzix",
                    url: "/tr/providers/gamzix",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/igtech.svg",
                    alt: "iGTech",
                    url: "/tr/providers/igtech",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/playson.svg",
                    alt: "Playson",
                    url: "/tr/providers/playson",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mascot.svg",
                    alt: "Mascot Gaming",
                    url: "/tr/providers/mascotgaming",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mancala.svg",
                    alt: "Mancala Gaming",
                    url: "/tr/providers/mancala",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/onlyplay.svg",
                    alt: "OnlyPlay",
                    url: "/tr/providers/onlyplay",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/oryx.svg",
                    alt: "ORYX",
                    url: "/tr/providers/oryx",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/platipus.svg",
                    alt: "Platipus",
                    url: "/tr/providers/platipus",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/popiplay.svg",
                    alt: "Popiplay",
                    url: "/tr/providers/popiplay",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/quickspin.svg",
                    alt: "Quickspin",
                    url: "/tr/providers/quickspin",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/reevo.svg",
                    alt: "Reevo",
                    url: "/tr/providers/reevo",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/slotmill.svg",
                    alt: "Slotmill",
                    url: "/tr/providers/slotmill",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/smartsoft.svg",
                    alt: "SmartSoft",
                    url: "/tr/providers/smartsoft",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spadegaming.svg",
                    alt: "Spadegaming",
                    url: "/tr/providers/spadegaming",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spribe.svg",
                    alt: "Spribe",
                    url: "/tr/providers/spribe",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/thunderkick.svg",
                    alt: "Thunderkick",
                    url: "/tr/providers/thunderkick",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tomhorn.svg",
                    alt: "Tom Horn",
                    url: "/tr/providers/tomhornnative",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/truelab.svg",
                    alt: "Truelab",
                    url: "/tr/providers/truelab",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/turbogames.svg",
                    alt: "Turbo Games",
                    url: "/tr/providers/turbogames",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betradar%20Virtual%20sports.svg",
                    alt: "BetRadar VS",
                    url: "/tr/providers/betradarvs",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/betsoft.svg",
                    alt: "BetSoft",
                    url: "/tr/providers/betsoft",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CQ9.svg",
                    alt: "CQ9",
                    url: "/tr/providers/cq9",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/habanero.svg",
                    alt: "Habanero",
                    url: "/tr/providers/habanero",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg",
                    alt: "Leander",
                    url: "/tr/providers/leander",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leap.svg",
                    alt: "Leap",
                    url: "/tr/providers/leap",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Live%20Games.svg",
                    alt: "Live Games",
                    url: "/tr/providers/livegames",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/luckystreak.svg",
                    alt: "Lucky Streak",
                    url: "/tr/providers/luckystreak",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Playtech%20slots.svg",
                    alt: "PlayTech",
                    url: "/tr/providers/playtech",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/SA%20Gaming.svg",
                    alt: "SA Gaming",
                    url: "/tr/providers/sagaming",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Vivo%20Gaming.svg",
                    alt: "Vivo Gaming",
                    url: "/tr/providers/vivogaming",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/yggdrasil.svg",
                    alt: "YGG Drasil",
                    url: "/tr/providers/yggdrasil",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Pocket%20Games%20Soft.svg",
                    alt: "PGSoft",
                    url: "/tr/providers/pgsoft",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/golden%20hero.svg",
                    alt: "Golden Hero",
                    url: "/tr/providers/goldenhero",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fugaso.svg",
                    alt: "Fugaso",
                    url: "/tr/providers/fugaso",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/originals.svg",
                    alt: "Ebetlab",
                    url: "/tr/providers/ebetlab",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imageinelive.svg",
                    alt: "Imagine Live",
                    url: "/tr/providers/imagine-live",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imoon.svg",
                    alt: "Imoon",
                    url: "/tr/providers/imoon",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/InOut.svg",
                    alt: "InOut",
                    url: "/tr/providers/inout",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Jiliasia.svg",
                    alt: "Jiliasia",
                    url: "/tr/providers/jiliasia",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Zeus%20Play.svg",
                    alt: "Zeus Play",
                    url: "/tr/providers/zeus-play",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Peter%20And%20Sons.svg",
                    alt: "Peter And Sons",
                    url: "/tr/providers/peter-and-sons",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/topspin.svg",
                    alt: "TopSpin",
                    url: "/tr/providers/topspin",
                },
                {
                    alt: "Popok",
                    url: "/tr/providers/popok",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg",
                    alt: "Bet Games",
                    url: "/tr/providers/betgames",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg",
                    alt: "Raw Games",
                    url: "/tr/providers/rawgames",
                },
                {
                    src: "https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg",
                    alt: "YGR Games",
                    url: "/tr/providers/ygrgames",
                },
            ];

            const logoSlide = document.getElementById("logoSlide");
            const logoSlider = document.getElementById("logoSlider");

            if (!logoSlide || !logoSlider) {
                return;
            }

            logos.forEach((logo) => {
                const logoItem = document.createElement("div");
                logoItem.className = "logo-item";

                const link = document.createElement("a");
                link.href = logo.url;

                if (logo.src) {
                    const img = document.createElement("img");
                    img.src = logo.src;
                    img.alt = logo.alt;
                    img.loading = "lazy";
                    link.appendChild(img);
                } else {
                    const textSpan = document.createElement("span");
                    textSpan.textContent = logo.alt;
                    link.appendChild(textSpan);
                }

                logoItem.appendChild(link);
                logoSlide.appendChild(logoItem);
            });

            const clone = logoSlide.cloneNode(true);
            logoSlider.appendChild(clone);

            const animationDuration = logos.length * 1.5;
            logoSlider.style.animationDuration = animationDuration + "s";

            logoSlider.addEventListener("mouseenter", () => {
                logoSlider.style.animationPlayState = "paused";
            });

            logoSlider.addEventListener("mouseleave", () => {
                logoSlider.style.animationPlayState = "running";
            });
        }

        setTimeout(initSlider, 100);

        mainContent.appendChild(customSection5);

        addButtonsToSlider();
    }
}

function addButtonsToSlider() {
    const slideImages = document.querySelectorAll(".slide-image");

    slideImages.forEach((image) => {
        // Create a button element
        const button = document.createElement("button");
        button.className = "header__signup slider_btn";
        button.type = "button";
        button.textContent = "Show Details";

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
      
    `;

        // Get the parent slide div to properly position the button
        const slideDiv = image.closest(".slide");
        if (slideDiv) {
            // Make sure the slide div has position relative for absolute positioning to work
            if (getComputedStyle(slideDiv).position === "static") {
                slideDiv.style.position = "relative";
            }
            slideDiv.appendChild(button);
        }
    });
}
function createSocialSection() {
    // Create style element
    if (document.getElementById("telegram-section")) {
        console.log("Telegram section zaten mevcut");
        return; // Fonksiyondanm çıkıyor
    }
    const style = document.createElement("style");
    style.id = "telegram-style";
    style.textContent = `
    .social-section {
    width: 100%;
    position: relative;
    margin-top:20px;
    margin-bottom:20px;
}

    .contents {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 250px;
      gap: 1rem;
    }

    .left-side {
      margin-bottom: 0.75rem;
      position: relative;
      text-align: center;
    }

    .glow-bg {
      position: absolute;
      inset: -1rem;
      background: linear-gradient(to right, rgba(31, 160, 229, 0.1), transparent);
      border-radius: 0.5rem;
      filter: blur(1rem);
    }

    .heading {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #1fa0e5;
      margin-bottom: 0.25rem;
    }

    .icon-zap {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.5rem;
      color: #1fa0e5;
      animation: pulse 2s infinite;
    }

    .description {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
      font-size: 0.875rem;
      max-width: 28rem;
    }

    .icon-star {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.25rem;
      flex-shrink: 0;
      color: #1fa0e5;
    }

    .right-side {
      display: flex;
      align-items: center;
    }

    .telegram-container {
      position: relative;
      cursor: pointer;
      transform: scale(1);
      transition: transform 0.5s;
    }

    .telegram-container:hover {
      transform: scale(1.05);
    }

    .outer-glow {
      position: absolute;
      inset: -0.5rem;
      border-radius: 1.5rem;
      background: rgba(31, 160, 229, 0.1);
      filter: blur(0.5rem);
      transition: background 0.5s;
    }

    .telegram-container:hover .outer-glow {
      background: linear-gradient(to right, rgba(31, 160, 229, 0.3), rgba(31, 160, 229, 0.2));
    }

    .inner-glow {
      position: absolute;
      inset: -0.25rem;
      border-radius: 1rem;
      background: linear-gradient(to right, rgba(31, 160, 229, 0.2), rgba(31, 160, 229, 0.1));
      filter: blur(0.25rem);
    }

    .telegram-box {
      position: relative;
      border-radius: 1rem;
      padding: 0.75rem;
      background: #030c13;
      border: 1px solid rgba(31, 160, 229, 0.3);
      transition: all 0.3s;
    }

    .telegram-container:hover .telegram-box {
      background: linear-gradient(135deg, #1fa0e5 0%, #030c13 100%);
      border-color: #1fa0e5;
    }

    .telegram-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .icon-container {
      position: relative;
      display: none;
    }

    .rotating-ring {
      position: absolute;
      inset: -0.5rem;
      border: 2px solid rgba(31, 160, 229, 0.3);
      border-radius: 50%;
      animation: spin 3s linear infinite;
    }

    .crown-container {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-radius: 50%;
      background: linear-gradient(to bottom right, #fbbf24, #f59e0b);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .icon-crown {
      width: 1.25rem;
      height: 1.25rem;
      color: black;
    }

    .button-container {
      position: relative;
    }

    .buttons {
      display: flex;
      align-items: center;
      font-weight: 700;
      padding: 0.5rem 1.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      color: white;
      background: #1fa0e5;
      border: none;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      transition: all 0.5s;
      white-space: nowrap;
    }

    .telegram-container:hover .button {
      background: linear-gradient(45deg, #1fa0e5, #0ea5e9, #1fa0e5);
      background-size: 200% 200%;
      animation: gradient 2s ease infinite;
      box-shadow: 0 25px 50px -12px rgba(31, 160, 229, 0.5);
    }

    .button-content {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
    }

    .button-icon {
      width: 1rem;
      height: 1rem;
      margin-right: 0.25rem;
    }

    .button-shine {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
      transform: skewX(-12deg) translateX(-100%);
      transition: transform 1s;
    }

    .telegram-container:hover .button-shine {
      transform: skewX(-12deg) translateX(100%);
    }

    .chat-badge {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      background: #22c55e;
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.125rem 0.5rem;
      border-radius: 9999px;
      animation: bounce 2s infinite;
      animation-delay: 0.5s;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-25%); }
    }

    @media (min-width: 768px) {
      .contents {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
      }

      .left-side {
        margin-bottom: 0;
        margin-right: 2rem;
        text-align: left;
      }

      .heading {
        font-size: 2rem;
        justify-content: flex-start;
      }

      .icon-zap {
        width: 1.75rem;
        height: 1.75rem;
        margin-right: 0.75rem;
      }

      .description {
        font-size: 0.875rem;
        justify-content: flex-start;
      }

      .icon-star {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }

      .telegram-box {
        padding: 1.5rem;
      }

      .icon-container {
        display: block;
      }

      .button {
        padding: 1rem 2rem;
        font-size: 1rem;
        min-width: 220px;
      }

      .button-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.5rem;
      }
    }
  `;

    // Append style
    document.head.appendChild(style);

    // Create main section
    const section = document.createElement("div");
    section.className = "social-section";
    section.id = "telegram-section";

    const container = document.createElement("div");
    container.className = "container";
    const content = document.createElement("div");
    content.className = "contents";

    // LEFT SIDE
    const leftSide = document.createElement("div");
    leftSide.className = "left-side";

    const glowBg = document.createElement("div");
    glowBg.className = "glow-bg";

    const heading = document.createElement("div");
    heading.className = "heading";
    heading.innerHTML = `
    <svg class="icon-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
    Telegram Kanalımıza Katıl
  `;

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = `
    <svg class="icon-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77
                       5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
      </polygon>
    </svg>
    Her gün 20:00’da $1.000 etkinlik telegram kanalımızda!
  `;

    leftSide.append(glowBg, heading, description);

    // RIGHT SIDE
    const rightSide = document.createElement("div");
    rightSide.className = "right-side";

    const telegramContainer = document.createElement("div");
    telegramContainer.className = "telegram-container";

    const outerGlow = document.createElement("div");
    outerGlow.className = "outer-glow";

    const innerGlow = document.createElement("div");
    innerGlow.className = "inner-glow";

    const telegramBox = document.createElement("div");
    telegramBox.className = "telegram-box";

    const telegramContent = document.createElement("div");
    telegramContent.className = "telegram-content";

    const iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";

    const rotatingRing = document.createElement("div");
    rotatingRing.className = "rotating-ring";

    const crownContainer = document.createElement("div");
    crownContainer.className = "crown-container";
    crownContainer.innerHTML = `
    <svg class="icon-crown" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
    </svg>
  `;

    iconContainer.append(rotatingRing, crownContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const button = document.createElement("a");
    button.className = "buttons";
    button.href = "https://t.me/cedabet"; // Telegram kanal linkini buraya koy
    button.target = "_blank"; // yeni sekmede açar
    button.rel = "noopener noreferrer"; // güvenlik için

    button.innerHTML = `
    <span class="button-content">
      <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7
                 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8
                 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
        </path>
      </svg>
      HEMEN KATIL
    </span>
    <div class="button-shine"></div>
  `;
    buttonContainer.appendChild(button);

    telegramContent.append(iconContainer, buttonContainer);
    telegramBox.append(telegramContent);

    const chatBadge = document.createElement("div");
    chatBadge.className = "chat-badge";
    chatBadge.textContent = "CHAT";

    telegramBox.appendChild(chatBadge);
    telegramContainer.append(outerGlow, innerGlow, telegramBox);
    telegramBox.prepend(telegramContent);
    rightSide.appendChild(telegramContainer);

    // Append everything to content
    content.append(leftSide, rightSide);
    container.appendChild(content);
    section.appendChild(container);

    // Append final section to the root
    const leagueWrapper = document.getElementById("league-wrapper");
    if (leagueWrapper && leagueWrapper.parentNode) {
        leagueWrapper.parentNode.insertBefore(section, leagueWrapper);
    } else {
        document.body.appendChild(section); // fallback
    }
}

function LandingPage() {
    // p-not-found divini kaldır
    const notFoundDiv = document.querySelector(".p-not-found");
    if (notFoundDiv) notFoundDiv.remove();

    // container.section.section--first divini bul
    const firstSectionDiv = document.querySelector(".container.section.section--first");
    if (!firstSectionDiv) {
        console.error(".container.section.section--first div bulunamadı!");
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

        const customContainer = document.createElement("div");
        customContainer.classList.add("section", "custom-section");
        customContainer.id = "custom-section-landing";
        customContainer.innerHTML = `
             <div class="containers">
                 <!-- Logo Section -->
                 <div class="logo-section">
                     <div class="logo">CedaBet</div>
                     <div class="tagline">Premium Oyun Deneyimi</div>
                 </div>

                 <!-- Feature Games Section -->

<section class="feature-section">
   <h2 class="section-title">Öne Çıkan Oyunlar</h2>

    <div class="slider-container">
        <div class="slider-track">

            <a href="/tr/casino/games/pragmaticplay-zeus-vs-hades-gods-of-war" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/9U9cVku8AkxfX28glr2ecCFaM8B1TaqJORdGWatq.avif" alt="Zeus vs Hades Gods of War">
                <p>Zeus vs Hades Gods of War</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-wild-west-gold" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/1dpsT7tnCkM7cjbtUCikCdnFdJ4Qlh99pY3BpzXz.avif" alt="Wild West Gold">
                <p>Wild West Gold</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-buffalo-king" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/rHhgFaBGHxn71tJXVAOPQKYaTkiQxlXFb315yBDZ.avif" alt="Buffalo King">
                <p>Buffalo King</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-fruit-party" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/Xf04XdDGKxBPh3VZMbc3gm1iK6FnzF3I9F3aATq1.avif" alt="Fruit Party">
                <p>Fruit Party</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-the-dog-house-dog-or-alive" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/IXIbm2lJsiOJpfiQ34a4Xjtklsei1ZTbrwKKZhPl.avif" alt="The Dog House Dog or Alive">
                <p>The Dog House Dog or Alive</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-starlight-princess" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/G5xNO6W86jGBlHaHCL06o1sr5j1H6cySJvdSSRrA.avif" alt="Starlight Princess">
                <p>Starlight Princess</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-the-dog-house-multihold" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/Do8FlFiEPlyzErc9dy2Jqu7lhqX8XaL7AOawkqKh.avif" alt="The Dog House Multihold">
                <p>The Dog House Multihold</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-sugar-rush-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/jNoaroKVGDwdRDelCNlu70ADVbyAvMw1qCpJrhP9.avif" alt="Sugar Rush 1000">
                <p>Sugar Rush 1000</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-gates-of-olympos-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/jpygjMVafhuLu4QEnILFs3oBE6wX7bD2ygoADiI9.avif" alt="Gates of Olympos 1000">
                <p>Gates of Olympos 1000</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-sweet-bonanza-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/nIwpbBsTqVta4IXzWc1jxgKVX4dPnNzO9nOKu4GK.avif" alt="Sweet Bonanza 1000">
                <p>Sweet Bonanza 1000</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-big-bass-hold-spinner-megaways" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/uygXx82uD3oiUy86HOPuu4GsuTeNJCPgRgZG24TX.avif" alt="Big Bass Hold & Spinners Megaways">
                <p>Big Bass Hold & Spinners Megaways</p>
            </a>
      <!-- Duplicated games with links -->

         <a href="/tr/casino/games/pragmaticplay-zeus-vs-hades-gods-of-war" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/9U9cVku8AkxfX28glr2ecCFaM8B1TaqJORdGWatq.avif" alt="Zeus vs Hades Gods of War">
                <p>Zeus vs Hades Gods of War</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-wild-west-gold" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/1dpsT7tnCkM7cjbtUCikCdnFdJ4Qlh99pY3BpzXz.avif" alt="Wild West Gold">
                <p>Wild West Gold</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-buffalo-king" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/rHhgFaBGHxn71tJXVAOPQKYaTkiQxlXFb315yBDZ.avif" alt="Buffalo King">
                <p>Buffalo King</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-fruit-party" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/Xf04XdDGKxBPh3VZMbc3gm1iK6FnzF3I9F3aATq1.avif" alt="Fruit Party">
                <p>Fruit Party</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-the-dog-house-dog-or-alive" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/IXIbm2lJsiOJpfiQ34a4Xjtklsei1ZTbrwKKZhPl.avif" alt="The Dog House Dog or Alive">
                <p>The Dog House Dog or Alive</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-starlight-princess" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/G5xNO6W86jGBlHaHCL06o1sr5j1H6cySJvdSSRrA.avif" alt="Starlight Princess">
                <p>Starlight Princess</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-the-dog-house-multihold" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/Do8FlFiEPlyzErc9dy2Jqu7lhqX8XaL7AOawkqKh.avif" alt="The Dog House Multihold">
                <p>The Dog House Multihold</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-sugar-rush-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/jNoaroKVGDwdRDelCNlu70ADVbyAvMw1qCpJrhP9.avif" alt="Sugar Rush 1000">
                <p>Sugar Rush 1000</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-gates-of-olympos-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/jpygjMVafhuLu4QEnILFs3oBE6wX7bD2ygoADiI9.avif" alt="Gates of Olympos 1000">
                <p>Gates of Olympos 1000</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-sweet-bonanza-1000" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/nIwpbBsTqVta4IXzWc1jxgKVX4dPnNzO9nOKu4GK.avif" alt="Sweet Bonanza 1000">
                <p>Sweet Bonanza 1000</p>
            </a>

            <a href="/tr/casino/games/pragmaticplay-big-bass-hold-spinner-megaways" class="game-item">
                <img src="https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/vnnjkadsfjADGSGKSDKFWQE/games/uygXx82uD3oiUy86HOPuu4GsuTeNJCPgRgZG24TX.avif" alt="Big Bass Hold & Spinners Megaways">
                <p>Big Bass Hold & Spinners Megaways</p>
            </a>
        </div>
    </div>
</section>

                 <!-- Winners Section with Dynamic Animation -->
                 <section class="winners-section">
                   <h2 class="section-title">Son Büyük Kazançlar</h2>

                     <div class="win-container">
                         <div class="win-list" id="win-list">
                             <!-- Kazananlar buraya dinamik olarak eklenecek -->
                         </div>
                     </div>
                 </section>

                 <!-- Jackpot Section -->
                 <section class="jackpot-section">
                  <h2 class="section-title">Aktif Jackpotlar</h2>

                     <div class="jackpot-container">
                         <!-- Mega Jackpot -->
                         <div class="jackpot-card mega-jackpot">
                             <div class="jackpot-title">🎰 Mega Jackpot</div>
                             <div class="jackpot-amount" id="mega-jackpot">₺2.847.592</div>
                             <div class="jackpot-description">
			Tüm oyunlardan biriken devasa jackpot! Her bahiste büyüyor.
                             </div>
                         </div>

                         <!-- Mini Jackpots -->
                         <div class="jackpot-card">
                             <div class="jackpot-title">🏆 Major Jackpot</div>
                             <div class="jackpot-amount" id="major-jackpot">₺456.789</div>
                             <div class="jackpot-description">
                               Büyük kazanma fırsatı! Şansını dene.
                             </div>
                         </div>

                         <div class="jackpot-card">
                             <div class="jackpot-title">💎 Minor Jackpot</div>
                             <div class="jackpot-amount" id="minor-jackpot">₺89.234</div>
                             <div class="jackpot-description">
                           Anında kazançlar için mükemmel seçim – hızlı, eğlenceli ve kazandırıcı!
                             </div>
                         </div>

                         <div class="jackpot-card">
                             <div class="jackpot-title">⚡ Mini Jackpot</div>
                             <div class="jackpot-amount" id="mini-jackpot">₺12.567</div>
                             <div class="jackpot-description">
                          Sık sık kazandıran mini jackpot!
                             </div>
                         </div>
                     </div>
                 </section>

                 <!-- Game Providers Section -->
              <section class="providers-section">
    <h2 class="section-title">🎮 Sağlayıcılar</h2>
    <div class="providers-container">
        <div class="providers-track">
            <!-- 15 seçilmiş sağlayıcı -->
            <a href="/tr/providers/pragmatic-play" class="provider-card">
                <div class="provider-logo">PG</div>
                <div class="provider-name">Pragmatic Play</div>
                <div class="provider-games">150+ Oyun</div>
            </a>

            <a href="/tr/providers/evolution" class="provider-card">
                <div class="provider-logo">EV</div>
                <div class="provider-name">Evolution</div>
                <div class="provider-games">100+ Oyun</div>
            </a>

            <a href="/tr/providers/netent" class="provider-card">
                <div class="provider-logo">NT</div>
                <div class="provider-name">NetEnt</div>
                <div class="provider-games">130+ Oyun</div>
            </a>

            <a href="/tr/providers/egt" class="provider-card">
                <div class="provider-logo">EG</div>
                <div class="provider-name">EGT</div>
                <div class="provider-games">90+ Oyun</div>
            </a>

            <a href="/tr/providers/quickspin" class="provider-card">
                <div class="provider-logo">QS</div>
                <div class="provider-name">Quickspin</div>
                <div class="provider-games">70+ Oyun</div>
            </a>

            <a href="/tr/providers/red-tiger" class="provider-card">
                <div class="provider-logo">RT</div>
                <div class="provider-name">Red Tiger</div>
                <div class="provider-games">80+ Oyun</div>
            </a>

            <a href="/tr/providers/yggdrasil" class="provider-card">
                <div class="provider-logo">YG</div>
                <div class="provider-name">Yggdrasil</div>
                <div class="provider-games">60+ Oyun</div>
            </a>

            <a href="/tr/providers/playtech" class="provider-card">
                <div class="provider-logo">PT</div>
                <div class="provider-name">PlayTech</div>
                <div class="provider-games">110+ Oyun</div>
            </a>

            <a href="/tr/providers/thunderkick" class="provider-card">
                <div class="provider-logo">TK</div>
                <div class="provider-name">Thunderkick</div>
                <div class="provider-games">50+ Oyun</div>
            </a>

            <a href="/tr/providers/booming-games" class="provider-card">
                <div class="provider-logo">BG</div>
                <div class="provider-name">Booming Games</div>
                <div class="provider-games">120+ Oyun</div>
            </a>

            <a href="/tr/providers/microgaming" class="provider-card">
                <div class="provider-logo">MG</div>
                <div class="provider-name">Microgaming</div>
                <div class="provider-games">140+ Oyun</div>
            </a>

            <a href="/tr/providers/spadegaming" class="provider-card">
                <div class="provider-logo">SG</div>
                <div class="provider-name">Spadegaming</div>
                <div class="provider-games">100+ Oyun</div>
            </a>

            <a href="/tr/providers/slotmill" class="provider-card">
                <div class="provider-logo">SM</div>
                <div class="provider-name">Slotmill</div>
                <div class="provider-games">60+ Oyun</div>
            </a>

            <a href="/tr/providers/fugaso" class="provider-card">
                <div class="provider-logo">FG</div>
                <div class="provider-name">Fugaso</div>
                <div class="provider-games">90+ Oyun</div>
            </a>

            <a href="/tr/providers/platipus" class="provider-card">
                <div class="provider-logo">PL</div>
                <div class="provider-name">Platipus</div>
                <div class="provider-games">80+ Oyun</div>
            </a>

            <!-- Duplicate for seamless scroll -->
            <a href="/tr/providers/pragmatic-play" class="provider-card">
                <div class="provider-logo">PG</div>
                <div class="provider-name">Pragmatic Play</div>
                <div class="provider-games">150+ Oyun</div>
            </a>

            <a href="/tr/providers/evolution" class="provider-card">
                <div class="provider-logo">EV</div>
                <div class="provider-name">Evolution</div>
                <div class="provider-games">100+ Oyun</div>
            </a>

            <a href="/tr/providers/netent" class="provider-card">
                <div class="provider-logo">NT</div>
                <div class="provider-name">NetEnt</div>
                <div class="provider-games">130+ Oyun</div>
            </a>

            <a href="/tr/providers/egt" class="provider-card">
                <div class="provider-logo">EG</div>
                <div class="provider-name">EGT</div>
                <div class="provider-games">90+ Oyun</div>
            </a>

            <a href="/tr/providers/quickspin" class="provider-card">
                <div class="provider-logo">QS</div>
                <div class="provider-name">Quickspin</div>
                <div class="provider-games">70+ Oyun</div>
            </a>

            <a href="/tr/providers/red-tiger" class="provider-card">
                <div class="provider-logo">RT</div>
                <div class="provider-name">Red Tiger</div>
                <div class="provider-games">80+ Oyun</div>
            </a>

            <a href="/tr/providers/yggdrasil" class="provider-card">
                <div class="provider-logo">YG</div>
                <div class="provider-name">Yggdrasil</div>
                <div class="provider-games">60+ Oyun</div>
            </a>

            <a href="/tr/providers/playtech" class="provider-card">
                <div class="provider-logo">PT</div>
                <div class="provider-name">PlayTech</div>
                <div class="provider-games">110+ Oyun</div>
            </a>

            <a href="/tr/providers/thunderkick" class="provider-card">
                <div class="provider-logo">TK</div>
                <div class="provider-name">Thunderkick</div>
                <div class="provider-games">50+ Oyun</div>
            </a>

            <a href="/tr/providers/booming-games" class="provider-card">
                <div class="provider-logo">BG</div>
                <div class="provider-name">Booming Games</div>
                <div class="provider-games">120+ Oyun</div>
            </a>

            <a href="/tr/providers/microgaming" class="provider-card">
                <div class="provider-logo">MG</div>
                <div class="provider-name">Microgaming</div>
                <div class="provider-games">140+ Oyun</div>
            </a>

            <a href="/tr/providers/spadegaming" class="provider-card">
                <div class="provider-logo">SG</div>
                <div class="provider-name">Spadegaming</div>
                <div class="provider-games">100+ Oyun</div>
            </a>

            <a href="/tr/providers/slotmill" class="provider-card">
                <div class="provider-logo">SM</div>
                <div class="provider-name">Slotmill</div>
                <div class="provider-games">60+ Oyun</div>
            </a>

            <a href="/tr/providers/fugaso" class="provider-card">
                <div class="provider-logo">FG</div>
                <div class="provider-name">Fugaso</div>
                <div class="provider-games">90+ Oyun</div>
            </a>

            <a href="/tr/providers/platipus" class="provider-card">
                <div class="provider-logo">PL</div>
                <div class="provider-name">Platipus</div>
                <div class="provider-games">80+ Oyun</div>
            </a>
        </div>
    </div>
</section>

             </div>
         `;

        firstSectionDiv.prepend(customContainer);
    }

    const winList = document.getElementById("win-list");
    const alphabet = "ABCÇDEFGHIİJKLMNOÖPRSŞTÜVYZ";

    const games = [
        "Sweet Bonanza",
        "Book of Dead",
        "Starburst",
        "Gonzo's Quest",
        "Mega Moolah",
        "Immortal Romance",
        "Dead or Alive 2",
        "Jungle Spirit",
        "Bonanza",
        "Fruit Party",
        "Gates of Olympus",
        "The Dog House",
        "Razor Shark",
        "Big Bass Bonanza",
        "Wolf Gold",
    ];

    let currentIndex = 0;

    // LocalStorage key for jackpots
    const JACKPOT_STORAGE_KEY = "cedabet_jackpots";
    const JACKPOT_TIMESTAMP_KEY = "cedabet_jackpots_timestamp";

    // Default jackpot amounts
    const defaultJackpots = {
        mega: 2847592,
        major: 456789,
        minor: 89234,
        mini: 12567,
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

                if (timeDiff > 0 && timeDiff < 86400) {
                    // Only if less than 24 hours
                    jackpots.mega += Math.floor(timeDiff * (Math.random() * 17 + 10));
                    jackpots.major += Math.floor(timeDiff * (Math.random() * 6 + 2));
                    jackpots.minor += Math.floor(timeDiff * (Math.random() * 3 + 1));
                    jackpots.mini += Math.floor(timeDiff * (Math.random() * 1.7 + 0.3));
                }

                return jackpots;
            }
        } catch (error) {
            console.log("Error loading jackpots from localStorage:", error);
        }

        return { ...defaultJackpots };
    }

    // Save jackpots to localStorage
    function saveJackpots(jackpots) {
        try {
            localStorage.setItem(JACKPOT_STORAGE_KEY, JSON.stringify(jackpots));
            localStorage.setItem(JACKPOT_TIMESTAMP_KEY, Date.now().toString());
        } catch (error) {
            console.log("Error saving jackpots to localStorage:", error);
        }
    }

    // Initialize jackpots from localStorage
    let jackpots = loadJackpots();

    // Update jackpot display
    function updateJackpotDisplay() {
        document.getElementById("mega-jackpot").textContent = `₺${jackpots.mega.toLocaleString("tr-TR")}`;
        document.getElementById("major-jackpot").textContent = `₺${jackpots.major.toLocaleString("tr-TR")}`;
        document.getElementById("minor-jackpot").textContent = `₺${jackpots.minor.toLocaleString("tr-TR")}`;
        document.getElementById("mini-jackpot").textContent = `₺${jackpots.mini.toLocaleString("tr-TR")}`;
    }

    // Rastgele Türk ismi üretme - değişken yıldız sayısı ile
    function generateRandomName() {
        const firstNameLength = Math.floor(Math.random() * 4) + 3;
        const lastNameLength = Math.floor(Math.random() * 5) + 4;

        let firstName = "";
        let lastName = "";

        for (let i = 0; i < firstNameLength; i++) {
            firstName += alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        for (let i = 0; i < lastNameLength; i++) {
            lastName += alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        const firstNameStarsCount = Math.floor(Math.random() * 6) + 2;
        const lastNameStarsCount = Math.floor(Math.random() * 7) + 3;

        firstName = firstName.charAt(0).toUpperCase() + "*".repeat(firstNameStarsCount);
        lastName = lastName.charAt(0).toUpperCase() + "*".repeat(lastNameStarsCount);

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

        return `₺${winAmount.toLocaleString("tr-TR")}`;
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

            const winItem = document.createElement("div");
            winItem.classList.add("win-item");
            winItem.innerHTML = `
             <p><strong>Oyuncumuz ${winnerName}</strong></p>
<p><strong>${game}</strong> oyunundan <strong>${winAmount}</strong> kazandı.</p>
<p>Tebrikler ve bol kazançlar dileriz!</p>


                     `;

            winList.appendChild(winItem);
            currentIndex++;
        }
    }

    function addWinner() {
        const winnerName = generateRandomName();
        const game = games[Math.floor(Math.random() * games.length)];
        const winAmount = getRandomWin();

        const winItem = document.createElement("div");
        winItem.classList.add("win-item", "animated");
        winItem.innerHTML = `
           <p><strong>Oyuncumuz ${winnerName}</strong></p>
<p><strong>${game}</strong> oyunundan <strong>${winAmount}</strong> kazandı.</p>
<p>Tebrikler ve bol kazançlar dileriz!</p>


                 `;

        if (winList.children.length >= 8) {
            const firstItem = winList.children[0];
            firstItem.style.animation = "fade-out 1s forwards";
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
        const gameItems = document.querySelectorAll(".game-item");
        gameItems.forEach((item) => {
            // 100-300 arasında random sayı üret
            const randomCount = Math.floor(Math.random() * 201) + 100;

            // Yeni bir span oluştur ve içine sayıyı yaz
            const playingSpan = document.createElement("span");
            playingSpan.className = "playing-count";
            playingSpan.textContent = `${randomCount} user playing`;

            // Eğer önceden varsa temizle
            const existing = item.querySelector(".playing-count");
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
    window.addEventListener("beforeunload", () => {
        saveJackpots(jackpots);
    });

    // Also save periodically (every 30 seconds)
    setInterval(() => {
        saveJackpots(jackpots);
    }, 30000);
}

function addEliteCardToSidebar() {
    // Stil yoksa ekle
    if (!document.getElementById("elite-card-styles")) {
        const style = document.createElement("style");
        style.id = "elite-card-styles";
        style.textContent = `
      .elite-card {
          width: 100%;
          display: flex;
          align-items: center;
          background-color: #1e2235;
          border: 1.8px solid #3288ef;
          border-radius: 14px;
          padding: 12px 16px;
          box-sizing: border-box;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(50, 136, 239, 0.6);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          margin: 0;
      }
      .elite-card:hover {
          background-color: #2a2f4a;
          box-shadow: 0 6px 20px rgba(50, 136, 239, 0.9);
      }
      .elite-card__icon {
          flex-shrink: 0;
          background-color: #3288ef;
          color: white;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          margin-right: 14px;
          box-shadow: 0 0 10px rgba(50, 136, 239, 0.7);
          transition: box-shadow 0.3s ease;
      }
      .elite-card:hover .elite-card__icon {
          box-shadow: 0 0 15px rgba(50, 136, 239, 1);
      }
      .elite-card__content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }
      .elite-card__title {
          font-weight: 700;
          font-size: 15px;
          margin: 0;
          color: #cbd4fc;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }
      .elite-card__subtitle {
          font-size: 11px;
          color: #8ba1d0;
          margin: 4px 0 0 0;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }
      .elite-card__arrow {
          font-weight: 700;
          font-size: 22px;
          color: #3288ef;
          margin-left: 14px;
          flex-shrink: 0;
          transition: color 0.3s ease;
      }
      .elite-card:hover .elite-card__arrow {
          color: #a3c1ff;
      }
    `;
        document.head.appendChild(style);
    }

    const sidebarMenu = document.querySelector(".sidebar__menu");
    if (!sidebarMenu) {
        console.warn(".sidebar__menu elementi bulunamadı!");
        return;
    }

    // Eğer kart zaten varsa ekleme
    if (sidebar.querySelector(".elite-card")) {
        return;
    }

    // Kartı oluştur
    const card = document.createElement("div");
    card.className = "elite-card";

    card.onclick = () => {
        if (confirm("Mobil Uygulamamızı Yükleyin..!")) {
            window.open("https://cedabetgiris.org/CedaBet.apk", "_blank");
        }
    };

    const icon = document.createElement("div");
    icon.className = "elite-card__icon";
    icon.textContent = "📱";

    const content = document.createElement("div");
    content.className = "elite-card__content";

    const title = document.createElement("h4");
    title.className = "elite-card__title";
    title.textContent = "Mobil Uygulamamız";

    const subtitle = document.createElement("p");
    subtitle.className = "elite-card__subtitle";
    subtitle.textContent = "Hemen şimdi yükleyin! ";

    content.appendChild(title);
    content.appendChild(subtitle);

    const arrow = document.createElement("div");
    arrow.className = "elite-card__arrow";
    arrow.textContent = ">";

    card.appendChild(icon);
    card.appendChild(content);
    card.appendChild(arrow);

    sidebarMenu.appendChild(card);
}

function createCedaSocialLinks() {
    if (document.querySelector(".ceda-social-links")) {
        return;
    }

    const links = [
        {
            href: "https://www.facebook.com/people/Ceda-Bet",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="fill: #1fa6ed;"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>`,
        },
        {
            href: "https://x.com/cedabet?s=21",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22 " style="fill: #1fa6ed;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        },
        {
            href: "https://www.instagram.com/cedabet",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="fill: #1fa6ed;"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>`,
            class: "instagram",
        },
        {
            href: "https://t.me/cedabet",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: #1fa6ed;"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
        },
    ];

    const wrapper = document.createElement("div");
    wrapper.className = "ceda-social-links";

    links.forEach(({ href, svg, class: extraClass }) => {
        const a = document.createElement("a");
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = `ceda-social-link${extraClass ? " " + extraClass : ""}`;
        a.innerHTML = svg;

        const hoverBg = document.createElement("div");
        hoverBg.className = "ceda-hover-bg";

        a.appendChild(hoverBg);
        wrapper.appendChild(a);
    });

    const target = document.querySelector(".elite-card");
    if (target && target.parentNode) {
        target.parentNode.insertBefore(wrapper, target);
    }
}
function createWhatsAppBadge(phoneNumber = '905352054099') {
    if (!document.getElementById("_wa-badge-style")) {
        const style = document.createElement('style');
        style.id = '_wa-badge-style';
        style.innerHTML = `
            ._wa-badge {
                position: fixed;
                top: 50%;
                right: -120px;
                transform: translateY(-50%);
                background-color: #25D366;
                color: white;
                padding: 10px 16px;
                border-radius: 8px 0 0 8px;
                box-shadow: 0 8px 24px rgba(32, 163, 233, 0.35);
                display: flex;
                align-items: center;
                transition: right 0.4s ease;
                z-index: 9999;
                text-decoration: none;
                border: 1px solid rgba(255, 255, 255, 0.1);
                animation: _wa-pulse 2.5s ease-in-out infinite;
            }

            ._wa-badge img {
                width: 24px;
                height: 24px;
                margin-right: 10px;
                filter: brightness(0) invert(1);
                flex-shrink: 0;
            }

            ._wa-badge-text {
                white-space: nowrap;
                font-family: 'Segoe UI', 'Arial', sans-serif;
                font-size: 14px;
                opacity: 0;
                transition: opacity 0.3s ease;
                color: white;
            }

            ._wa-badge:hover {
                right: 0;
            }

            ._wa-badge:hover ._wa-badge-text {
                opacity: 1;
            }

            @keyframes _wa-pulse {
                0% {
                    transform: translateY(-50%) scale(1);
                }
                50% {
                    transform: translateY(-50%) scale(1.05);
                }
                100% {
                    transform: translateY(-50%) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Badge zaten varsa tekrar ekleme
    if (document.querySelector('._wa-badge')) return;

    // Badge elementi
    const badge = document.createElement('a');
    badge.href = `https://wa.me/${phoneNumber}`;
    badge.className = '_wa-badge';
    badge.target = '_blank';
    badge.setAttribute('aria-label', 'WhatsApp ile iletişime geç');
	badge.id = 'whatsapp-badge';

    const icon = document.createElement('img');
    icon.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    icon.alt = 'WhatsApp Icon';

    const text = document.createElement('span');
    text.className = '_wa-badge-text';
    text.textContent = 'WhatsApp Hattı';

    badge.appendChild(icon);
    badge.appendChild(text);
    document.body.appendChild(badge);
}


function addMenuItemsWithAuth() {
    const token = localStorage.getItem('bearer');

    if (!token) {
        console.error('Bearer token bulunamadı. Menü elemanları eklenmeyecek.');
        return;
    }

    const menuList = document.querySelector('.menu-list');

    if (!menuList) {
        console.error('Menu listesi bulunamadı.');
        return;
    }

    // Zaten eklenmişse tekrar ekleme
    if (menuList.querySelector('[data-custom-menu="true"]')) {
        console.error('Menü elemanları zaten eklenmiş.');
        return;
    }

    const items = [
        {
            text: 'Para Yatır',
            href: '/deposit',
            svg: `
                <svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V16" stroke="green" stroke-width="2" stroke-linecap="round"/>
                    <path d="M6 10L12 16L18 10" stroke="green" stroke-width="2" stroke-linecap="round"/>
                    <rect x="2" y="18" width="20" height="4" rx="1" fill="green"/>
                </svg>
            `
        },
        {
            text: 'Para Çek',
            href: '/withdraw',
            svg: `
                <svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22V8" stroke="red" stroke-width="2" stroke-linecap="round"/>
                    <path d="M6 14L12 8L18 14" stroke="red" stroke-width="2" stroke-linecap="round"/>
                    <rect x="2" y="2" width="20" height="4" rx="1" fill="red"/>
                </svg>
            `
        }
    ];

    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.setAttribute('data-custom-menu', 'true'); // kontrol için işaretleme

        const div = document.createElement('div');
        div.className = 'item-text text-in';
        div.innerHTML = item.svg;

        const span = document.createElement('span');
        span.className = 'item-text text-in';
        span.textContent = item.text;

        li.addEventListener('click', () => {
            window.location.href = item.href;
        });

        li.appendChild(div);
        li.appendChild(span);
        menuList.appendChild(li);
    });
}


