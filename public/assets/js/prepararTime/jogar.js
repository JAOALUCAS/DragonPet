document.addEventListener("DOMContentLoaded", ()=>{   

    let moeda = null;

    const sessionGame = JSON.parse(sessionStorage.getItem("game"));

    if(sessionGame != null){

        sessionGame.forEach((game)=>{

            const moedasValue = game.moedas;

            moeda = parseInt(moedasValue);

        });

    }else{

        moeda = 10;

    }

    let numCard = null;
    
    let numItem = null;
    
    let imgItem = null;

    let cardVendido = null;

    let cardCongelado = null;

    let itemCongelado = null;

    let numGelo = null;

    let seMoveuNosSlots = false;

    const cards = document.querySelectorAll(".card");

    const itens = document.querySelectorAll(".item");

    const img = document.querySelectorAll(".img");

    const dm = document.querySelector(".moeda");

    const divMoeda = document.getElementById("moeda");

    const slots = document.querySelectorAll(".slots");

    const iClass = document.querySelectorAll(".i");

    const container = document.getElementById("container");
    
    const atualizar =  document.getElementById("atualizar");

    const congelar = document.getElementById("congelar");

    const vender = document.getElementById("vender");

    const gelo = document.querySelectorAll(".gelo");

    const descongelar = document.getElementById("descongelar");

    atualizarMoeda(0);

    function atualizarMoeda(decremento){

        moeda+=decremento;

        if(moeda < 3){

            cards.forEach((card)=>{

                if(!card.classList.contains("slots")){
                    
                    card.draggable = false;

                }


            });

        }
        
        if(moeda < 1){

            atualizar.style.display = "none";

        }else{

            atualizar.style.display = "block";

        }

        if(decremento >= 0){
   
            dm.style.background = "green";

            setTimeout(()=>{

                dm.style.background = "white";

            },100);

        }else{

            dm.style.background = "yellow";

            setTimeout(()=>{

                dm.style.background = "white";

            },100);

        }

        divMoeda.innerHTML = moeda;

        return moeda;

    }

    function definirNumCard(){

        cards.forEach((card)=>{

            card.addEventListener("dragstart",()=>{
    
                numCard = card;
    
            });
    
        });

    }

    function mostrarCard(){

        cards.forEach((card)=>{

            if(card !== null){
    
                card.style.display = "block";
    
            }
    
        });

    }

    function cardDragAndDrop(){

        let style = null;

        slots.forEach((slot)=>{

            slot.addEventListener("dragover",(event)=>{

                event.preventDefault();

                style = getComputedStyle(slot);

            });

            slot.addEventListener("drop", (event)=>{

                congelar.style.display = "none";

                const elemento = event.target;

                if(elemento.classList.contains("slots") && !elemento.classList.contains("ocupado")){

                    cards.forEach((card)=>{

                        if(card == numCard){

                            if(card.classList.contains("slots")){

                                card.classList.replace(card.classList[3], slot.classList[2]);

                            }else{

                                slot.classList.add("ocupado")
                                card.classList.add("slots");
                                card.classList.add(slot.classList[2]);

                                atualizarMoeda(-3);

                            }

                            if(style.left == "auto"){

                                card.style.left = "15%";

                            }else{
                                
                                card.style.left = style.left;

                            }

                        }

                    });

                    const selecionarSound = new Audio("/public/assets/midias/audios/selecionarSound.mp3");

                    selecionarSound.play();

                }else{

                    const errorSound = new Audio("/public/assets/midias/audios/errorSound.mp3");

                    errorSound.play();

                }

            });

        });

    }

    function sumirBotaoAoClicarFora(){
                
        document.addEventListener("click", (event)=>{

            const elemento = event.target;

            if(elemento.classList.contains("card")){

                cardCongelado = elemento;

                cardVendido = elemento;

                if(elemento.classList.contains("slot1") || elemento.classList.contains("slot2")
                    || elemento.classList.contains("slot3") || elemento.classList.contains("slot4")
                    || elemento.classList.contains("slot5")){

                    congelar.style.display = "none";

                    vender.style.display = "block";

                }else{

                    vender.style.display = "none";

                    congelar.style.display = "block";

                }

            }else if(elemento.classList.contains("item") || elemento.classList.contains("img")){

                itemCongelado = elemento;

                congelar.style.display = "block";

            }else{

                congelar.style.display = "none";
                
                vender.style.display = "none";

                if(!elemento.classList.contains("gelo")){

                    descongelar.style.display = "none";

                }

            }

        });

    }

    function atualizarClick(){
   
        atualizar.addEventListener("click", ()=>{

            const moedaSound = new Audio("/public/assets/midias/audios/moedaSound.mp3");

            moedaSound.play();

            atualizarMoeda(-1);

        });

    }


    function venderClick(){
        
        vender.addEventListener("click",()=>{

            const vender = new Audio("/public/assets/midias/audios/venderSound.mp3");

            vender.play();

            cards.forEach((card)=>{

                if(card == cardVendido){

                    atualizarMoeda(1);

                    card.remove();

                }

            });

        });

    }


    function congelarClick(){

        let ultimoElementoClicado = null;

        document.addEventListener('click', (event)=>{

            ultimoElementoClicado = event.target;

        });

        congelar.addEventListener("click",()=>{

            const congelar = new Audio("/public/assets/midias/audios/congelarSound.mp3");

            congelar.play();

            if(cardCongelado == ultimoElementoClicado){

                cards.forEach((card)=>{

                    if(card == cardCongelado){
    
                        card.classList.add("congelado");
    
                    }
    
                });
                
                switch (true){

                    case cardCongelado.classList.contains("card1"):

                        const gelo1 = document.querySelector(".gelo1");

                        gelo1.style.display = "flex";

                        break;

                    case cardCongelado.classList.contains("card2"):

                        const gelo2 = document.querySelector(".gelo2");

                        gelo2.style.display = "flex";

                        break;

                    case cardCongelado.classList.contains("card3"):

                        const gelo3 = document.querySelector(".gelo3");

                        gelo3.style.display = "flex";

                        break;

                    case cardCongelado.classList.contains("card4"):

                        const gelo4 = document.querySelector(".gelo4");

                        gelo4.style.display = "flex";

                        break;

                    case cardCongelado.classList.contains("card5"):

                        const gelo5 = document.querySelector(".gelo5");

                        gelo5.style.display = "flex";

                        break;

                }

            }else if(itemCongelado == ultimoElementoClicado){
                
                itens.forEach((item)=>{

                    if(item == itemCongelado){

                        item.classList.add("congelado");

                    }else if(itemCongelado.classList.contains("img")){

                        if(item.contains(itemCongelado)){

                            item.classList.add("congelado");

                        }

                    }

                });

                if(itemCongelado.classList.contains("item1")){

                    const gelo6 = document.querySelector(".gelo6");

                    gelo6.style.display = "flex";                    

                }else if(itemCongelado.classList.contains("item2")){

                    const gelo7 = document.querySelector(".gelo7");

                    gelo7.style.display = "flex";

                }else if(itemCongelado.classList.contains("img")){

                    itens.forEach((item)=>{

                        if(item.contains(itemCongelado)){

                            itemCongelado = item;

                            if(item.classList.contains("item1")){

                                const gelo6 = document.querySelector(".gelo6");

                                gelo6.style.display = "flex";   

                            }else{

                                const gelo7 = document.querySelector(".gelo7");

                                gelo7.style.display = "flex";   

                            }

                        }

                    });

                }

            }

        });

    }



    function mostrarDescongelar(){
    
        gelo.forEach((gelo)=>{

            gelo.addEventListener("click", ()=>{

                numGelo = gelo;

                descongelar.style.display = "block";

            });

        });

    }

    function descongelarClick(){

        let ultimoElementoClicado = null;

        document.addEventListener('click', (event)=>{

            ultimoElementoClicado = event.target;

        });
  
        descongelar.addEventListener("click",()=>{

            const descongelarSound = new Audio("/public/assets/midias/audios/descongelarSound.mp3");

            descongelarSound.play();

            gelo.forEach((gelo)=>{

                if(gelo == numGelo){

                    gelo.style.display = "none";

                }

            });
            
            switch(true){

                case ultimoElementoClicado.classList.contains("gelo1"):

                    const card1 = document.querySelector(".card1");

                    card1.classList.remove("congelado")

                    break;

                case ultimoElementoClicado.classList.contains("gelo2"):

                    const card2 = document.querySelector(".card2");

                    card2.classList.remove("congelado")

                    break;

                case ultimoElementoClicado.classList.contains("gelo3"):

                    const card3 = document.querySelector(".card3");

                    card3.classList.remove("congelado")

                    break;

                case ultimoElementoClicado.classList.contains("gelo4"):

                    const card4 = document.querySelector(".card4");

                    card4.classList.remove("congelado")

                    break;

                case ultimoElementoClicado.classList.contains("gelo5"):

                    const card5 = document.querySelector(".card5");

                    card5.classList.remove("congelado")

                    break;

                case ultimoElementoClicado.classList.contains("gelo6"):

                    const item1 = document.querySelector(".item1");

                    item1.classList.remove("congelado")

                    break;

                case ultimoElementoClicado.classList.contains("gelo7"):

                    const item2 = document.querySelector(".item2");

                    item2.classList.remove("congelado")

                    break;
                    
            }

            descongelar.style.display = "none";

        });

    }

    function definirNumItem(){

        itens.forEach((item)=>{

            item.addEventListener("click", ()=>{
    
                img.forEach((img)=>{
    
                    if(item.contains(img)){
    
                        imgItem = img.src;

                        if(moeda >= 4){

                            numItem = item;

                        }else{

                            numItem = null;

                        }
                       
                        
                    }
    
                });
    
            });
    
        });

    }

    function efeitoItem(){
        
        cards.forEach((card)=>{

            card.addEventListener("click", ()=> {

                if(card.classList.contains("slots")){

                    if(numItem != null){

                        itens.forEach((item)=>{

                            if(item == numItem){

                                item.remove();

                            }

                        });
                                            
                        const moedaSound = new Audio("/public/assets/midias/audios/moedaSound.mp3");

                        moedaSound.play();
            
                        atualizarMoeda(-4);     
                        
                        const itemEfect = document.createElement("div");

                        itemEfect.classList.add("itemEfect");

                        itemEfect.style.display = "block";

                        container.appendChild(itemEfect);

                        const cardLeft = getComputedStyle(card);

                        itemEfect.style.left = cardLeft.left;

                        let valorI = 1;

                        iClass.forEach((i)=>{

                            const newI = document.createElement("div");

                            newI.classList.add("i");

                            newI.classList.add(`i${valorI}`);

                            const imgNewI = document.createElement("img");

                            imgNewI.src = imgItem;

                            newI.appendChild(imgNewI);

                            itemEfect.appendChild(newI);

                            valorI++;

                        });

                    }

                    numItem = null;

                }

            });

        });

    }

    mostrarCard();

    definirNumCard();

    cardDragAndDrop();

    sumirBotaoAoClicarFora();

    atualizarClick();

    venderClick();

    congelarClick();

    mostrarDescongelar();

    descongelarClick();

    definirNumItem();

    efeitoItem();

});