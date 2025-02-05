document.addEventListener("DOMContentLoaded", function() {
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

    function createProductCards(value){
        const parts = value.split(",");

        parts.forEach((value1, index) => {
            let x = -150;
            let y = 200*index + 800;
            createElement("text", "text", value1+index, x-20, y-14, "________________________________", 20);
            createElement("text", "text", value1+index, x, y, value1, 48);
            createElement("text", "text", value1+index, x + 150, y + 64, value1, 20);
            createElement("button", "button", value1+index, x, y + 65, "Купить", 32);
        });
    }

    //window.location.search
    //products=VPN,Server,Test
    const params = new URLSearchParams(window.location.search);

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