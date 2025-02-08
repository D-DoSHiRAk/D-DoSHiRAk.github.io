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

    function fetchGoogleSheetJSON(url) {
        try {
            createElement('text', 'text', `log2`, 0, 600, "2", 32);
            const response = UrlFetchApp.fetch(url);
            createElement('text', 'text', `log3`, 100, 700, "3", 32);
            if (!response.ok){
                createElement('text', 'text', `err1`, 0, 700, "error1", 32);
                throw new Error(`Ошибка: ${response.status}`);
            }
            const data = response.json();
            createElement('text', 'text', `log4`, 0, 800, "4", 32);
            return data;
        } catch (error) {
            createElement('text', 'text', `err2`, 200, 700, "error2", 32);
            return null;
        }
    }

    function main() {
        const url = "https://script.google.com/macros/s/AKfycbzUnbxsQ7ZZnZ0bx8D5Sfisvv3d6DeIGDCOiMJ-xaCuYq8s1I2NiQb-l_-Xt3I92TASlQ/exec";
        createElement('text', 'text', `log1`, 0, 500, "1", 32);
        const data = fetchGoogleSheetJSON(url);
        createElement('text', 'text', `log5`, 0, 900, "5", 32);
        if (data && Array.isArray(data)) {
            data.forEach((item, index) => {
                createElement('text', 'text', `test-${index}`, 0, 100 + index * 40, item.name, 32);
            });
        }
    }

    main();
});
