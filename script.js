document.addEventListener("DOMContentLoaded", function() {
    function createElement(className, objName, id, x, y, text, size){
        const container = document.createElement(objName);
        container.className = className;
        container.id = id;
        container.style.position = "absolute";
        container.style.top = y + "%";
        container.style.left = x + "%";
        container.style.fontSize = size + "vw";
        container.textContent = text;
        document.body.appendChild(container);
    }

    function createProductCards(value){
        const parts = value.split(",");

        let scale = window.innerWidth/1344/2;

        parts.forEach((value1, index) => {
            let x = 15;
            let y = 30*index + 100;
            createElement("text", "text", value1+index, x-10, y-7, "________________________________", 20 * scale);
            createElement("text", "text", value1+index, x, y, value1, 48 * scale);
            createElement("text", "text", value1+index, x + 155 * scale, y + 14, value1, 20 * scale);
            createElement("button", "button", value1+index, x, y + 14, "Купить", 32 * scale);
        });
    }

    //window.location.search
    //products=VPN,Server,Test
    const params = new URLSearchParams("products=VPN,Server,Test");

    const trueVars = ["products"];

    params.forEach((value, key) => {
        if(trueVars.includes(key)){
            if(key=="products"){
                createProductCards(value);
            }else{
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = value;
                }
            }
        }
    });

    const button = document.getElementById("button");

    if (button) {
            button.addEventListener("click", function() {
                alert("Кнопка нажата!");
            });
    }
});