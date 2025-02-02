document.addEventListener("DOMContentLoaded", function() {
    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    const text = getQueryParam('user');
    if (text) {
        document.getElementById('user').textContent = text;
    }
});