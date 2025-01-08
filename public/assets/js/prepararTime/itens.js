document.addEventListener("DOMContentLoaded", () => {

    let imgItem = null;

    const itens = document.querySelectorAll(".item");

    const cards = document.querySelectorAll(".card");

    const container = document.getElementById("container");

    const crosshair = document.querySelectorAll(".crosshair");
    
    let x = null;

    let y = null;

    function crosshairFunc(){

        document.body.style.cursor = 'url(/public/assets/midias/icons/icons8-definir-localização-90.png), auto';

    }

    function sumirMiraAoClicarFora(){

        document.addEventListener("click", (event)=>{

            const elemento = event.target;

            if(elemento.classList.contains("item") || elemento.classList.contains("img")){

                container.style.cursor = "none";

                itens.forEach((item)=>{

                    if(elemento.classList.contains("item")){

                        if(elemento.classList == item.classList){

                            let itemStyle = getComputedStyle(item);
                        
                            item.style.borderImage = 'url("/public/assets/midias/icons/scan.png") 80';
                            
                        }else{

                            item.style.borderImage = "none";

                        }

                    }else if(elemento.classList.contains("img")){

                        if(item.contains(elemento)){

                            let itemStyle = getComputedStyle(item);

                            item.style.borderImage = 'url("/public/assets/midias/icons/scan.png") 80';

                        }else{

                            item.style.borderImage = "none";

                        }

                    }

                });

            }else{       

                itens.forEach((item)=>{

                    item.style.borderImage = "none";

                });

                container.style.cursor = "default";

                numItem = null;

            }

        });

    }

    function mostrarItens(){

        itens.forEach((item) => {

            if (item !== null) {
    
                item.style.display = "block";
    
            }
    
        });

    }

    function mudarLeftItem(){

        

    }

    crosshairFunc();

    sumirMiraAoClicarFora();

    mostrarItens();
    
});