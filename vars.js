document.addEventListener("DOMContentLoaded", function() {
    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    const text = getQueryParam('usert');
    if (text) {
        document.getElementById('title').textContent = text;
    }
});