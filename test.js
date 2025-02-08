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
            const response = await fetch(url, {
                redirect: "follow",
                method: "GET",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            });
            if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
            const data = await response.json();
            console.log("Данные из Google Sheets:", data);
            return data;
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            return null;
        }
    }

    async function main(){
        const url = "https://script.google.com/macros/s/AKfycbzHoRz9YJeE2dIq8UipPmy6st9aptSm2VrA-gDMTQMHQON75KwO-AF7oE5m4yJctN3GGQ/exec";
        const data = await fetchGoogleSheetJSON(url);

        data.forEach((value1, index) => {
            createElement('text', 'text', `test`, 0, 900 + index * 100, data[index].name + " " + data[index].describe + " " + data[index].price, 32);
        });
    }

    main();
});
