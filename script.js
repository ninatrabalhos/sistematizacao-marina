document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuToggle = document.querySelector(".menu-toggle");
    const links = document.querySelectorAll("a[href^='#']");
    const header = document.querySelector("header");

    function toggleMenu() {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    }

    function ajustarScroll(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const headerHeight = document.querySelector("header").offsetHeight;
            const isMobile = window.innerWidth <= 900;
            const offset = isMobile ? headerHeight - 20 : headerHeight + 20;
    
            const targetPosition = targetSection.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    }

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            ajustarScroll(targetId);

            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                menuToggle.classList.remove("open");
            }
        });
    });

    menuToggle.addEventListener("click", toggleMenu);
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    function sanitizeInput(value) {
        return value
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const cidade = document.getElementById("cidade");
        const estado = document.getElementById("estado");

        const sanitizedNome = sanitizeInput(nome.value.trim());
        const sanitizedEmail = sanitizeInput(email.value.trim());
        const sanitizedCidade = sanitizeInput(cidade.value.trim());
        const sanitizedEstado = sanitizeInput(estado.value.trim());

        if (!sanitizedNome || !sanitizedEmail || !sanitizedCidade || !sanitizedEstado) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(sanitizedNome)) {
            alert("Nome inválido.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
            alert("E-mail inválido.");
            return;
        }

        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(sanitizedCidade)) {
            alert("Cidade inválida.");
            return;
        }

        if (!/^[a-zA-Z]{2,3}$/.test(sanitizedEstado)) {
            alert("Estado inválido (use a sigla).");
            return;
        }

        alert("Sucesso, sua vida financeira está prestes a mudar! Logo entraremos em contato.");

        form.reset();
    });
});
