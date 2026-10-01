(function () {

    const headerHTML = `
        <header class="header">

            <div class="logo">
                <span class="logo-icon">🎫</span>
                <span>Ticket System</span>
            </div>

            <!-- Desktop Navigation -->
            <nav class="desktop-nav">

                <a href="index.html" data-page="index.html">
                    🏠 Home
                </a>

                <a href="engineer.html" data-page="engineer.html">
                    👨‍🔧 Engineer
                </a>

                <a href="punch.html" data-page="punch.html">
                    📍 Punch In/Out
                </a>

                <a href="admin.html" data-page="admin.html">
                    📊 Admin
                </a>

                <a href="search.html" data-page="search.html">
                    🔍 Search
                </a>

            </nav>

            <!-- Mobile Menu Button -->
            <button
                class="mobile-menu-btn"
                onclick="toggleMobileMenu()"
                aria-label="Open menu">
                ☰
            </button>

        </header>


        <!-- Mobile Navigation -->
        <nav id="mobileNav" class="mobile-nav">

            <a href="index.html" data-page="index.html">
                🏠 Home
            </a>

            <a href="engineer.html" data-page="engineer.html">
                👨‍🔧 Engineer
            </a>

            <a href="punch.html" data-page="punch.html">
                📍 Punch In/Out
            </a>

            <a href="admin.html" data-page="admin.html">
                📊 Admin
            </a>

            <a href="search.html" data-page="search.html">
                🔍 Search
            </a>

        </nav>
    `;


    /* -----------------------------------------
       INSERT HEADER
    ----------------------------------------- */

    function loadHeader() {

        const container =
            document.getElementById("header");

        if (!container) return;

        container.innerHTML = headerHTML;

        setActiveMenu();

    }


    /* -----------------------------------------
       ACTIVE MENU
    ----------------------------------------- */

    function setActiveMenu() {

        let currentPage =
            window.location.pathname.split("/").pop();

        if (!currentPage) {
            currentPage = "index.html";
        }

        document
            .querySelectorAll("[data-page]")
            .forEach(function (link) {

                if (
                    link.getAttribute("data-page") ===
                    currentPage
                ) {

                    link.classList.add("active");

                }

            });

    }


    /* -----------------------------------------
       MOBILE MENU
    ----------------------------------------- */

    window.toggleMobileMenu = function () {

        const menu =
            document.getElementById("mobileNav");

        if (!menu) return;

        menu.classList.toggle("show");

    };


    /* -----------------------------------------
       CLOSE MOBILE MENU
    ----------------------------------------- */

    window.closeMobileMenu = function () {

        const menu =
            document.getElementById("mobileNav");

        if (!menu) return;

        menu.classList.remove("show");

    };


    /* -----------------------------------------
       CLOSE WHEN CLICKING OUTSIDE
    ----------------------------------------- */

    document.addEventListener("click", function (event) {

        const menu =
            document.getElementById("mobileNav");

        const button =
            document.querySelector(".mobile-menu-btn");

        if (!menu || !button) return;

        if (
            menu.classList.contains("show") &&
            !menu.contains(event.target) &&
            !button.contains(event.target)
        ) {

            menu.classList.remove("show");

        }

    });


    /* -----------------------------------------
       LOAD AFTER PAGE IS READY
    ----------------------------------------- */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            loadHeader
        );

    } else {

        loadHeader();

    }

})();