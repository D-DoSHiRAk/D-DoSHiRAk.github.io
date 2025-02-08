document.addEventListener("DOMContentLoaded", function() {
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
    //https://script.google.com/macros/s/AKfycbzHoRz9YJeE2dIq8UipPmy6st9aptSm2VrA-gDMTQMHQON75KwO-AF7oE5m4yJctN3GGQ/exec
    async function setUpProducts(url){
        const data = await fetchGoogleSheetJSON(url);

        data.forEach((value, index) => {
            const name = data[index].name;
            const describe = data[index].describe;
            const price = data[index].price;

            createProductCard(index, name, describe, price);
        });
    }

    function createElement(className, objName, id, x, y, text, size){
        const container = document.createElement(objName);
        container.className = className;
        container.id = id;
        container.style.position = "absolute";
        container.style.transform = "translate(" + x + "px, " + y + "px)";
        container.style.fontSize = size + "px";
        container.textContent = text;
        document.body.appendChild(container);
    }

    function createRect(id, x, y, width, height, col){
        const rectangle = document.createElement("button");
        rectangle.className = "button";
        rectangle.id = id;
        rectangle.style.position = "absolute";
        rectangle.style.width = width;
        rectangle.style.height = height;
        rectangle.style.backgroundColor = col;
        rectangle.style.transform = "translate(" + x + ", " + y + ")";
        rectangle.style.borderRadius = "8px";
        rectangle.style.cursor = "default";
        document.body.appendChild(rectangle);
    }

    function createProductCard(index, name, describe, price){
        let x = -140;
        let y = 200*index + 700;
        createRect(name+index, x - 5 + "px", y + "px", "300px", "180px", 'lightgray')
        createElement("text", "text", name+index, x, y + 5, name, 40);
        createElement("text", "text", name+index, x, y + 60, describe, 15);
        createElement("button", "button", name+index, x, y + 120, price, 24);
    }

    createRect("background-rect", "-52%", "62%", "103.9%", "1080px", '#1b232a');

    setUpProducts("https://script.google.com/macros/s/AKfycbzHoRz9YJeE2dIq8UipPmy6st9aptSm2VrA-gDMTQMHQON75KwO-AF7oE5m4yJctN3GGQ/exec");

    //window.location.search
    //products=VPN,Server,Test
//    const params = new URLSearchParams(window.location.search);
//
//    const trueVars = ["products"];
//
//    params.forEach((value, key) => {
//        if(trueVars.includes(key)){
//            if(key=="products"){
//                createProductCards(value);
//            }else{
//                const element = document.getElementById(key);
//                if (element) {
//                    element.textContent = value;
//                }
//            }
//        }
//    });
});