document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);

    const trueVars = ["products"];

    params.forEach((value, key) => {
        let checker = false;

        trueVars.forEach((value1, key1) =>{
            if(key1 == key){
                checker = true;
                return;
            }
        });

        if(checker){
            if(key=="products"){
                const parts = value.split(",");
                let i = 0;
                parts.forEach((value1, key1) => {
                    const container = document.createElement("div");
                    let x = 150*i;
                    let y = 100*i;
                    container.innerHTML = '<a1 class="button" id="button" style="position: absolute; top: ' + y + 'px; left: ' + x + 'px;">' + value1 + '</a1>';
                    document.body.appendChild(container);
                });
            }else{
                document.getElementById(key).textContent = value;
            }
            //id
        }
    });
});