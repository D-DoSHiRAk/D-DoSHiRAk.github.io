document.addEventListener("DOMContentLoaded", function() {
    function createElement(className, objName, id, x, y, text, size){
        const container = document.createElement(objName);
        container.className = className;
        container.id = id;
        container.style.position = "absolute";
        container.style.transform = `translate(${x}px, ${y}px)`;
        container.style.fontSize = `${size}px`;
        container.textContent = text;
        document.body.appendChild(container);
    }

    async function fetchGoogleSheetJSON(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
            const data = await response.json();
            console.log("Данные из Google Sheets:", data);
            return data;
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            return null;
        }
    }

    const url = "https://script.google.com/macros/s/AKfycbycX2Kr8Hy21Ik0IFgRCQqMHrk9DpVSU52aOHEW0MamkTEMKqXa1N6ZWNIIr7PIWzG7WA/exec";
    const data = fetchGoogleSheetJSON(url);

    createElement('text', 'text', `test`, 0, 900, data, 32);
});
