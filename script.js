/*==================================================
        GAS DON ORLANDO
        SCRIPT PREMIUM
        Desarrollado por Luis Muñoz
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.querySelector(".loader");
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const toTop = document.querySelector(".to-top");

    window.addEventListener("load", () => {
        if (loader) {
            setTimeout(() => loader.classList.add("hidden"), 700);
        }
    });

    window.addEventListener("scroll", () => {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 80);
        }

        if (toTop) {
            toTop.classList.toggle("show", window.scrollY > 500);
        }
    });

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        document.querySelectorAll(".menu a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    if (toTop) {
        toTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            document.querySelectorAll(".faq-answer").forEach(item => {
                if (item !== answer) item.style.display = "none";
            });

            if (answer) {
                answer.style.display = answer.style.display === "block" ? "none" : "block";
            }
        });
    });

    const counters = document.querySelectorAll(".stat h2");
    const statsSection = document.querySelector(".stats");
    let countersStarted = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const originalText = counter.innerText;
            const number = parseInt(originalText.replace(/\D/g, ""), 10);
            const suffix = originalText.replace(/[0-9.]/g, "");

            if (isNaN(number)) return;

            let current = 0;
            const increment = Math.ceil(number / 45);

            const updateCounter = () => {
                current += increment;

                if (current >= number) {
                    counter.innerText = originalText;
                } else {
                    counter.innerText = current + suffix;
                    requestAnimationFrame(updateCounter);
                }
            };

            updateCounter();
        });
    };

    window.addEventListener("scroll", () => {
        if (!statsSection || countersStarted) return;

        if (statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
            countersStarted = true;
            animateCounters();
        }
    });

    const heroImage = document.querySelector(".hero-image img");

    window.addEventListener("scroll", () => {
        if (heroImage && window.innerWidth > 768) {
            heroImage.style.transform = `translateY(${window.scrollY * 0.04}px)`;
        }
    });

    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        if (!link.href.includes("text=")) {
            const mensaje = encodeURIComponent(
                "Hola 👋, me gustaría solicitar información sobre cilindros Gasco con despacho en Conchalí."
            );

            link.href = "https://wa.me/56995074786?text=" + mensaje;
            link.setAttribute("target", "_blank");
        }
    });

    document.querySelectorAll("#productos .card").forEach(card => {
        const title = card.querySelector("h3")?.innerText || "cilindro Gasco";
        const button = card.querySelector("a");

        if (button) {
            const mensaje = encodeURIComponent(
                `Hola 👋, me gustaría solicitar un ${title} Gasco para despacho en Conchalí. ¿Me podrían indicar disponibilidad y valor? Gracias.`
            );

            button.href = "https://wa.me/56995074786?text=" + mensaje;
            button.setAttribute("target", "_blank");
        }
    });

    document.querySelectorAll(".year").forEach(item => {
        item.innerText = new Date().getFullYear();
    });

    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    /*==============================
        LIGHTBOX GALERÍA
    ==============================*/

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");

    if (lightbox && lightboxImg) {
        document.querySelectorAll(".galeria-item img").forEach(img => {
            img.addEventListener("click", () => {
                lightbox.classList.add("active");
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                document.body.style.overflow = "hidden";
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove("active");
            lightboxImg.src = "";
            document.body.style.overflow = "";
        };

        if (lightboxClose) {
            lightboxClose.addEventListener("click", closeLightbox);
        }

        lightbox.addEventListener("click", e => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener("keydown", e => {
            if (e.key === "Escape" && lightbox.classList.contains("active")) {
                closeLightbox();
            }
        });
    }

    console.log("%cGas Don Orlando 🚚🔥", "color:#009245; font-size:22px; font-weight:bold;");
    console.log("%cSitio desarrollado por Luis Muñoz", "color:#0057B8; font-size:14px;");

});