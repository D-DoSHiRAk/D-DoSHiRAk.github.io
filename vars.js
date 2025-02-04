document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);

    const trueVars = ["products"];

    params.forEach((value, key) => {
        let checker = false;

        trueVars.forEach((value1, key1) =>{
            if(value1 == key){
                checker = true;
                return;
            }
        });

        if(checker){
            if(key=="products"){
                const parts = value.split(",");
                parts.forEach((value1, index) => {
                    let x = 150*index;
                    let y = 100*index;
                    const container = document.createElement("button");
                    container.className = "button";
                    container.id = value1;
                    container.style.position = "absolute";
                    container.style.top = y + "px";
                    container.style.left = x + "px";
                    container.textContent = value1;
                    document.body.appendChild(container);
                });
            }else{
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = value;
                }
            }
            //id
        }
    });
});