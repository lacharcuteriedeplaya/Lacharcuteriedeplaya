document.addEventListener("DOMContentLoaded", () => {
    
    /* =========================================
       HEADER SCROLL EFFECT
       ========================================= */
    const header = document.querySelector(".js-header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /* =========================================
       MOBILE MENU TOGGLE
       ========================================= */
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            mobileBtn.classList.toggle("active");
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll(".nav-link");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                mobileBtn.classList.remove("active");
            });
        });
    }

    /* =========================================
       TRANSLATE FUNCTIONALITY (NATIVE)
       ========================================= */
    const translations = [
        { es: "Bodas y Eventos", en: "Weddings & Events" },
        { es: "Nosotros", en: "About Us" },
        { es: "Nuestra Galería", en: "Our Gallery" },
        { es: "Galería", en: "Gallery" },
        { es: "Contacto", en: "Contact" },
        { es: "MOMENTOS CAPTURADOS DE NUESTRAS HERMOSAS PRESENTACIONES EN EL CARIBE.", en: "MOMENTS CAPTURED FROM OUR BEAUTIFUL PRESENTATIONS IN THE CARIBBEAN." },
        { es: "Home", en: "Home" },
        { es: "Arte Gastronómico en el ", en: "Gastronomic Art in " },
        { es: "Paraíso", en: "Paradise" },
        { es: "Mesas de charcutería premium, exclusivas mesas de quesos y catering en la Riviera Maya para bodas y eventos empresariales.", en: "Premium charcuterie boards, exclusive cheese tables and catering in the Riviera Maya for weddings and corporate events." },
        { es: "Reserva tu Experiencia", en: "Book Your Experience" },
        { es: "Descubrir Más", en: "Discover More" },
        { es: "Nuestra Esencia", en: "Our Essence" },
        { es: "El Sabor de la Exclusividad", en: "The Taste of Exclusivity" },
        { es: "En La Charcuterie De Playa fusionamos la elegancia atemporal de la charcutería fina europea con el vibrante escenario de la Riviera Maya. Cada mesa es una obra maestra culinaria diseñada para sorprender y deleitar.", en: "At La Charcuterie De Playa we merge the timeless elegance of fine European charcuterie with the vibrant backdrop of the Riviera Maya. Each table is a culinary masterpiece designed to surprise and delight." },
        { es: "Seleccionamos cuidadosamente quesos artesanales, carnes curadas importadas y frutas exóticas locales para crear una experiencia sensorial única, ideal para aquellos que buscan un estilo de vida de lujo junto al mar o en un cenote mágico.", en: "We carefully select artisanal cheeses, imported cured meats, and local exotic fruits to create a unique sensory experience, ideal for those seeking a luxury lifestyle by the sea or in a magical cenote." },
        { es: "Eventos Estelares", en: "Stellar Events" },
        { es: "Ingredientes", en: "Ingredients" },
        { es: "\"La perfección en cada detalle.\"", en: "\"Perfection in every detail.\"" },
        { es: "Servicios Exclusivos", en: "Exclusive Services" },
        { es: "Celebraciones Inolvidables", en: "Unforgettable Celebrations" },
        { es: "Transformamos tus momentos más importantes con sofisticación gastronómica excepcional.", en: "We transform your most important moments with exceptional gastronomic sophistication." },
        { es: "Bodas de Destino", en: "Destination Weddings" },
        { es: "Nuestras ", en: "Our " },
        { es: " son el centro de atención perfecto para su recepción o cóctel de bienvenida, creadas con la distinción que su gran día merece.", en: " are the perfect centerpiece for your reception or welcome cocktail, created with the distinction your big day deserves." },
        { es: "Eventos Sociales", en: "Social Events" },
        { es: "Aniversarios, cumpleaños y celebraciones íntimas rediseñadas alrededor del buen gusto, con sabores importados y locales de la más alta calidad.", en: "Anniversaries, birthdays, and intimate celebrations redesigned around good taste, with imported and high-quality local flavors." },
        { es: "Encuentros Corporativos", en: "Corporate Gatherings" },
        { es: "Deleite a sus socios comerciales e invitados VIP con un catering que proyecta refinamiento, elegancia y atención al detalle.", en: "Delight your business partners and VIP guests with a catering service that projects refinement, elegance, and attention to detail." },
        { es: "Detalles a Domicilio", en: "Home Delivery Details" },
        { es: "Cajas y charolas elaboradas con la misma excelencia corporativa, enviadas de manera personalizada hasta su villa, yate u hogar.", en: "Boxes and trays crafted with the same corporate excellence, personally sent to your villa, yacht, or home." },
        { es: "Más Info", en: "More Info" },
        { es: "Contáctanos", en: "Contact Us" },
        { es: "Comencemos a Planear tu Evento", en: "Let's Start Planning Your Event" },
        { es: "Cuéntanos sobre tu visión y enviaremos una propuesta personalizada para tu evento en la Riviera Maya, Tulum o Cancún.", en: "Tell us about your vision and we will send a personalized proposal for your event in the Riviera Maya, Tulum or Cancun." },
        { es: "Riviera Maya, Quintana Roo, México", en: "Riviera Maya, Quintana Roo, Mexico" },
        { es: "El arte del buen gusto en la Riviera Maya.", en: "The art of good taste in the Riviera Maya." },
        { es: "Enlaces", en: "Links" },
        { es: "Servicios", en: "Services" },
        { es: "Síguenos", en: "Follow Us" },
        { es: "Todos los derechos reservados.", en: "All rights reserved." },
        { es: "Checa nuestros comentarios", en: "Check our reviews" }
    ];

    const inputTranslations = [
        { qs: "#name", attr: "placeholder", es: "Tu Nombre Completo", en: "Your Full Name" },
        { qs: "#email", attr: "placeholder", es: "tu@email.com", en: "your@email.com" },
        { qs: "#message", attr: "placeholder", es: "Cuéntanos más sobre tu evento (fecha estimada, número de invitados)...", en: "Tell us more about your event (date, number of guests)..." },
        { qs: "#event-type option[value='']", attr: "text", es: "Tipo de Evento", en: "Event Type" },
        { qs: "#event-type option[value='boda']", attr: "text", es: "Boda", en: "Wedding" },
        { qs: "#event-type option[value='corporativo']", attr: "text", es: "Evento Corporativo", en: "Corporate Event" },
        { qs: "#event-type option[value='privado']", attr: "text", es: "Fiesta Privada", en: "Private Party" },
        { qs: "#event-type option[value='yate']", attr: "text", es: "Experiencia en Yate", en: "Yacht Experience" },
        { qs: "#event-type option[value='otro']", attr: "text", es: "Otro", en: "Other" }
    ];

    const translateBtnCustom = document.getElementById("custom-translate-btn");
    
    if (translateBtnCustom) {
        translateBtnCustom.addEventListener("click", function (e) {
            e.preventDefault();
            let currentLang = this.getAttribute("data-lang");
            let targetLang = currentLang === "es" ? "en" : "es";

            // Translate Text Nodes
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while (node = walker.nextNode()) {
                if (node.nodeValue.trim() === "") continue;

                translations.forEach(t => {
                    let currentText = node.nodeValue;
                    if (targetLang === "en" && currentText.includes(t.es)) {
                        node.nodeValue = currentText.replace(t.es, t.en);
                    } else if (targetLang === "es" && currentText.includes(t.en)) {
                        node.nodeValue = currentText.replace(t.en, t.es);
                    }
                });
            }

            // Translate Attributes (Placeholders & Dropdown options)
            inputTranslations.forEach(t => {
                let el = document.querySelector(t.qs);
                if (el) {
                    if (t.attr === "placeholder") {
                        el.setAttribute("placeholder", targetLang === "en" ? t.en : t.es);
                    } else if (t.attr === "text") {
                        el.textContent = targetLang === "en" ? t.en : t.es;
                    }
                }
            });
            
            // Translate the static submit button text
            const submitBtn = document.querySelector('.contact-form .btn-primary');
            if(submitBtn) {
                if(targetLang === "en" && submitBtn.textContent === "Enviar Solicitud") submitBtn.textContent = "Send Request";
                else if(targetLang === "es" && submitBtn.textContent === "Send Request") submitBtn.textContent = "Enviar Solicitud";
            }

            document.documentElement.lang = targetLang;
            this.setAttribute("data-lang", targetLang);
            document.getElementById("lang-text").textContent = targetLang === "es" ? "EN" : "ES";
        });
    }

    /* =========================================
       SCROLL REVEAL ANIMATIONS
       ========================================= */
    const revealElements = document.querySelectorAll('.fade-in-up, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-up');
    
    // Check if hero elements should be visible immediately
    setTimeout(() => {
        const heroElements = document.querySelectorAll('#hero .fade-in-up');
        heroElements.forEach(el => el.classList.add('visible'));
    }, 100);

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* =========================================
       SMOOTH SCROLLING FOR ANCHORS
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});
