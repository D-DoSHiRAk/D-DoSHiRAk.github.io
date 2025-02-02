document.addEventListener("DOMContentLoaded", function() {
    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    const text = getQueryParam('text');
    if (text) {
        document.getElementById('message').textContent = text;
    }
});