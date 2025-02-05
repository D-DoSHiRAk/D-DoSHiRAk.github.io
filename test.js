document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.style.textAlign = "center";
    document.body.appendChild(container);

    for (let i = 1; i <= 5; i++) {
        const button = document.createElement("button");
        button.innerText = `Кнопка ${i}`;
        button.style.margin = "5px";
        button.style.padding = "10px";
        button.style.fontSize = "16px";
        button.style.transform = "translate(100px, 50px)"

        button.addEventListener("click", function () {
            alert(`Вы нажали кнопку ${i}`);
        });

        container.appendChild(button);
    }
});
