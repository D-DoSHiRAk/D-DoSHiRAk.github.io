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
        document.body.appendChild(rectangle);
    }

    function createProductCards(value){
        const parts = value.split(",");

        parts.forEach((value1, index) => {
            let x = -170;
            let y = 200*index + 700;
            createRect(value1+index, x - 35 + "px", y + "px", "500px", "180px", 'lightgray')
            createElement("text", "text", value1+index, x, y + 15, value1, 48);
            createElement("text", "text", value1+index, x + 180, y + 15, value1, 20);
            createElement("button", "button", value1+index, x, y + 85, "Купить", 32);
        });
    }

    createRect("background-rect", "-50%", "62%", "100%", "1080px", '#1b232a');

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