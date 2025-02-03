document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);

    params.forEach((value, key) => {
        document.getElementById(key).textContent = value;
    });
});