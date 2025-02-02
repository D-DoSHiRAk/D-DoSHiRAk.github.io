document.addEventListener("DOMContentLoaded", function () {
    // Кнопка "Наверх"
    let button = document.createElement("button");
    button.id = "scrollTopBtn";
    button.innerText = "Наверх";
    document.body.appendChild(button);

    // Показ/скрытие кнопки при прокрутке
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    // Прокрутка наверх при клике
    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Анимация появления секций при прокрутке
    let sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
