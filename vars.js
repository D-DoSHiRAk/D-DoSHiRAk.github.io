document.addEventListener("DOMContentLoaded", function() {
    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    const text = getQueryParam('usert');
    if (text) {
        const origText = document.getElementById('title').textContent;
        document.getElementById('title').textContent = origText + " " + text;
    }
});