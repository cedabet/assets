
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

		customSection.innerHTML = `<div class="container" style="width: 100%; background: linear-gradient(to bottom, #0a0e17, #101725); padding: 20px 0 40px 0; position: relative; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3); width: 96%; border-radius: 13px; margin-bottom: 26px; margin-top: 20px;">
        
        <!-- Steps container -->
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 40px; flex-wrap: wrap;">
            
            <!-- Step 1 -->
            <div style="display: flex; align-items: center; margin: 15px 0;">
                <span style="color: #00d2ff; font-size: 32px; font-weight: 700; margin-right: 15px; text-shadow: 0 0 10px rgba(0, 210, 255, 0.5);">01</span>
                <span style="color: white; font-size: 18px; font-weight: 500; letter-spacing: 0.5px;">Register an account</span>
            </div>
            
            <!-- Divider -->
            <div style="width: 80px; height: 1px; background: linear-gradient(to right, rgba(0, 210, 255, 0.1), rgba(0, 210, 255, 0.5), rgba(0, 210, 255, 0.1)); margin: 0 10px;"></div>
            
            <!-- Step 2 -->
            <div style="display: flex; align-items: center; margin: 15px 0;">
                <span style="color: #00d2ff; font-size: 32px; font-weight: 700; margin-right: 15px; text-shadow: 0 0 10px rgba(0, 210, 255, 0.5);">02</span>
                <span style="color: white; font-size: 18px; font-weight: 500; letter-spacing: 0.5px;">Make a Deposit &amp; Play</span>
            </div>
            
            <!-- Divider -->
            <div style="width: 80px; height: 1px; background: linear-gradient(to right, rgba(0, 210, 255, 0.1), rgba(0, 210, 255, 0.5), rgba(0, 210, 255, 0.1)); margin: 0 10px;"></div>
            
            <!-- Step 3 -->
            <div style="display: flex; align-items: center; margin: 15px 0;">
                <span style="color: #00d2ff; font-size: 32px; font-weight: 700; margin-right: 15px; text-shadow: 0 0 10px rgba(0, 210, 255, 0.5);">03</span>
                <span style="color: white; font-size: 18px; font-weight: 500; letter-spacing: 0.5px;">Get 10% Weekly Cashback</span>
            </div>
        </div>
        
        <!-- Join Now Button -->
        <div style="position: absolute; bottom: -25px; left: 0; right: 0; display: flex; justify-content: center;">
            <button style="
                background: linear-gradient(to right, #0095ff, #00d2ff); 
                color: white; 
                border: none; 
                padding: 14px 40px; 
                font-size: 18px; 
                font-weight: 600; 
                border-radius: 50px; 
                cursor: pointer; 
                box-shadow: 0 4px 15px rgba(0, 210, 255, 0.5); 
                text-transform: uppercase; 
                letter-spacing: 1px;
                transition: all 0.3s ease;
            ">Join Now</button>
        </div>
    </div>`;

                   mainContent.appendChild(customSection);

        }

    }

