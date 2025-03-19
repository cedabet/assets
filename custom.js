
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
  	    let customSection2 = document.createElement("div");
            customSection2.id = "custom-section-4";
            customSection2.classList.add("section", "custom-section");

            /*customSection.innerHTML = `
       <div id="custom-section-9" class="section custom-section">
					<div class="container">
						<div class="row">
							<div class="col-12 col-lg-6 col-xl-3 mt-2 mt-md-0 d-flex">
								<a href="tournaments" class="d-flex">
									<div class="box d-flex justify-content-evenly align-items-center gap-3 rounded-4 px-4 py-3">
										<div class="box-icon icon-tournament rounded-3 p-3">
											<i class="icon fa-solid fa-trophy fs-3 align-middle text-center text-black"></i>
										</div>
										<p class="mb-0 text-white opacity-75">Join Cedabet tournaments, defeat rivals, and win rewards!</p>
									</div>
								</a>
							</div>
							<div class="col-12 col-lg-6 col-xl-3 mt-2 mt-md-0 d-flex">
								<a href="vip" class="d-flex">
									<div class="box d-flex justify-content-evenly align-items-center gap-3 rounded-4 px-4 py-3">
										<div class="box-icon icon-vip rounded-3 p-3">
											<i class="icon fa-solid fa-crown fs-3 align-middle text-center text-black"></i>
										</div>
										<p class="mb-0 text-white opacity-75">Become a VIP and enjoy exclusive bonuses and opportunities!</p>
									</div>
								</a>
							</div>
							<div class="col-12 col-lg-6 col-xl-3 mt-2 mt-lg-0 d-flex">
								<a href="promotions" class="d-flex">
									<div class="box d-flex justify-content-evenly align-items-center gap-3 rounded-4 px-4 py-3">
										<div class="box-icon icon-promotion rounded-3 p-3">
											<i class="icon fa-solid fa-gift fs-3 align-middle text-center text-black"></i>
										</div>
										<p class="mb-0 text-white opacity-75">Boost your earnings with instant, weekly, and monthly bonuses!</p>
									</div>
								</a>
							</div>
							<div class="col-12 col-lg-6 col-xl-3 mt-2 mt-lg-0 d-flex">
							  <a href="casino/group/enhanced-rtp" class="d-flex">
									<div class="box d-flex justify-content-evenly align-items-center gap-3 rounded-4 px-4 py-3">
										<div class="box-icon icon-rtp rounded-3 p-3">
											<i class="icon fa-solid fa-chart-pie fs-3 align-middle text-center text-black"></i>
										</div>
										<p class="mb-0 text-white opacity-75">Achieve big wins with special offers!</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
    <div id="custom-section-4" class="section custom-section">
          <div class="container">
            <div class="position-relative m-auto mt-lg-4">
              <div class="landing casino overflow-hidden position-relative rounded-4 p-3 px-md-5 py-md-4">
                <div class="landing-inner position-relative text-white p-2 p-sm-4">
                  <div class="d-block mb-2 mb-sm-3 mb-lg-5">
                    <h1 class="fw-bold lh-sm mb-0">Countless ways to achieve big wins with thousands of exciting games.</h1>
                  </div>
                  <div class="d-block">
                    <div class="landing-image-mobile mx-auto d-block d-lg-none">
                      <img class="w-100 h-100" src="https://mobkcaj.github.io/assets/images/4w85hndbspgjxrqc.webp" alt="Casino Character">
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
                <img class="w-100 h-100 pe-none" src="https://mobkcaj.github.io/assets/images/4w85hndbspgjxrqc.webp" alt="Casino Character">
              </div>
            </div>
            <div class="position-relative m-auto mt-lg-5">
              <div class="landing sports overflow-hidden position-relative rounded-4 p-3 px-md-5 py-md-4 mt-4">
                <div class="landing-inner position-relative text-white p-2 p-sm-4">
                  <div class="d-block mb-2 mb-sm-3 mb-lg-5">
                    <h1 class="fw-bold lh-sm mb-0">Be part of the game by betting on the biggest moments in sports.</h1>
                  </div>
                  <div class="d-block">
                    <div class="landing-image-mobile mx-auto d-block d-lg-none">
                      <img class="w-100 h-100" src="https://mobkcaj.github.io/assets/images/7xmhb6qu3prt4sza.webp" alt="Sports Character">
                    </div>
                    <div class="details px-4 py-3 rounded-3 d-flex justify-content-start justify-content-md-evenly gap-3 gap-md-4 overflow-x-scroll mb-4 mb-sm-5 flex-wrap flex-sm-nowrap">
                      <div class="item d-flex align-items-center gap-3">
                        <i class="fa-solid fa-futbol fs-2"></i>
                        <a href="sportsbook/sports" class="d-block">
                          <span class="icon-text fw-bold text-nowrap">Sports</span>
                        </a>
                      </div>
                      <div class="item d-flex align-items-center gap-3">
                        <i class="fa-solid fa-gamepad fs-2"></i>
                        <a href="sportsbook" class="d-block">
                          <span class="icon-text fw-bold text-nowrap">Esports</span>
                        </a>
                      </div>
                      <div class="item d-flex align-items-center gap-3">
                        <i class="fa-solid fa-play-circle fs-2"></i>
                        <a href="sportsbook/live-betting" class="d-block">
                          <span class="icon-text fw-bold text-nowrap">Live Streams</span>
                        </a>
                      </div>
                      <div class="item d-flex align-items-center gap-3">
                        <i class="fa-solid fa-bolt fs-2"></i>
                        <a href="sportsbook" class="d-block">
                          <span class="icon-text fw-bold text-nowrap">Boosted Odds</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="d-block text-end text-lg-start pt-2 pt-sm-0">
                    <a href="javascript:void(0);" class="landing-button d-inline-block align-middle rounded-3 text-center" data-href="sportsbook">Explore the Sports Section</a>
                  </div>
                </div>
              </div>
              <div class="landing-image position-absolute bottom-0 ps-4 pt-4 d-none d-lg-block">
                <img class="w-100 h-100 pe-none" src="https://mobkcaj.github.io/assets/images/7xmhb6qu3prt4sza.webp" alt="Sports Character">
              </div>
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

  div[style*="grid-template-columns: repeat(4, 1fr)"]::-webkit-scrollbar {
    display: none !important;
  }

  div[style*="grid-template-columns: repeat(4, 1fr)"] {
    -ms-overflow-style: none !important; 
    scrollbar-width: none !important; 
  }
}
</style>
    `;*/

		customSection.innerHTML = `
  <style>
    .steps-section {
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
        max-width: 1200px;
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
    @media (min-width: 768px) {
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

<div class="container">
    <div class="steps-section">
        <!-- Steps container -->
        <div class="steps-container">
            <!-- Step 1 -->
            <div class="step">
                <span class="step-number">01</span>
                <span class="step-text">Register an account</span>
            </div>
            
            <!-- Divider -->
            <div class="divider"></div>
            
            <!-- Step 2 -->
            <div class="step">
                <span class="step-number">02</span>
                <span class="step-text">Make a Deposit &amp; Play</span>
            </div>
            
            <!-- Divider -->
            <div class="divider"></div>
            
            <!-- Step 3 -->
            <div class="step">
                <span class="step-number">03</span>
                <span class="step-text">Get 10% Weekly Cashback</span>
            </div>
        </div>
        
        <!-- Join Now Button -->
        <div class="button-container">
            <button class="join-button">Join Now</button>
        </div>
    </div>
</div>`;
customSection2.innerHTML = `
    <div class="container">
        <div class="position-relative m-auto mt-lg-4">
            <div class="landing casino overflow-hidden position-relative rounded-4 p-3 px-md-5 py-md-4">
                <div class="landing-inner position-relative text-white p-2 p-sm-4">
                    <div class="d-block mb-2 mb-sm-3 mb-lg-5">
                        <h1 class="fw-bold lh-sm mb-0">Countless ways to achieve big wins with thousands of exciting games.</h1>
                    </div>
                    <div class="d-block">
                        <div class="landing-image-mobile mx-auto d-block d-lg-none">
                            <img class="w-100 h-100" src="https://mobkcaj.github.io/assets/images/4w85hndbspgjxrqc.webp" alt="Casino Character">
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
                <img class="w-100 h-100 pe-none" src="https://mobkcaj.github.io/assets/images/4w85hndbspgjxrqc.webp" alt="Casino Character">
            </div>
        </div>
    
    </div>
`
                   mainContent.appendChild(customSection);
		   mainContent.appendChild(customSection2);

        }

    }

