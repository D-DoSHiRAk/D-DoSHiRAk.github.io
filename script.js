document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");

    if (button) {
            button.addEventListener("click", function() {
                alert("Кнопка нажата!");
            });
    }
});