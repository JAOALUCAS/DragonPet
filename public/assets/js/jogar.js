document.addEventListener("DOMContentLoaded", ()=>{

    let moeda = 10;

    let numCard = null;

    let seMoveuNosSlots = false;

    const cards = document.querySelectorAll(".card");

    const divMoeda = document.getElementById("moeda");

    const desc = document.querySelectorAll(".desc");

    const varPer = document.querySelectorAll(".var-per");

    const slots = document.querySelectorAll(".slots");
    
    const atualizar =  document.getElementById("atualizar");

    const congelar = document.getElementById("congelar");

    const vender = document.getElementById("vender");

    const gelo = document.querySelectorAll(".gelo");

    const descongelar = document.getElementById("descongelar");

    atualizarMoeda(0);

    function atualizarMoeda(decremento){

        moeda+=decremento;

        divMoeda.innerHTML = moeda + "/10";

    }

    cards.forEach((card)=>{

        card.addEventListener("dragstart",()=>{

            numCard = card;

        });

    });

    slots.forEach((slot)=>{

        slot.addEventListener("dragover",(event)=>{

            event.preventDefault();

        });

        slot.addEventListener("drop", (event)=>{

            const selecionarSound = new Audio("/public/assets/midias/audios/selecionarSound.mp3");

            selecionarSound.play();

            congelar.style.display = "none";

            const classList = slot.classList;

            Array.from(classList).forEach((classe)=>{

                if(classe == "slot1" || classe == "slot2" || classe == "slot3" 
                    || classe == "slot4" || classe == "slot5"){

                    cards.forEach((card)=>{

                        if(card == numCard){

                            const cardClasses = card.classList;

                            Array.from(cardClasses).forEach((slotC) => {

                                if(slotC == "slot1" || slotC == "slot2" || slotC == "slot3" || 
                                    slotC == "slot4" || slotC == "slot5"){
            
                                    if(slotC !== classe){

                                        seMoveuNosSlots = true;

                                    }

                                    card.classList.replace(slotC, classe);
            
                                }else{

                                    card.classList.add(classe);
                                    card.classList.add("slots");

                                }
            
                            });

                            if(!seMoveuNosSlots){

                                atualizarMoeda(-3);

                            }

                        }

                    });

                }

            });

        });

    });

    let cardVendido = null;
    let cardCongelado = null;

    document.addEventListener("click",(event)=>{

        const elemento = event.target;

        if(elemento.classList.contains("card") || elemento.classList.contains("desc") 
            || elemento.classList.contains("var-per")){

            cardCongelado = elemento;
            cardVendido = elemento;
            
            if(elemento.classList.contains("slot1") || elemento.classList.contains("slot2")
                || elemento.classList.contains("slot3") || elemento.classList.contains("slot4")
                || elemento.classList.contains("slot5")){

                vender.style.display = "block";

            }else{

                vender.style.display = "none";
                congelar.style.display = "block";

            }

        }else{

            congelar.style.display = "none";
            vender.style.display = "none";

            if(!elemento.classList.contains("gelo")){

                descongelar.style.display = "none";

            }

        }

    });


    atualizar.addEventListener("click", ()=>{

        const moedaSound = new Audio("/public/assets/midias/audios/moedaSound.mp3");

        moedaSound.play();

        atualizarMoeda(-1);

    });

    vender.addEventListener("click",()=>{

        const vender = new Audio("/public/assets/midias/audios/venderSound.mp3");

        vender.play();

        cards.forEach((card)=>{

            if(card == cardVendido){

                card.remove();

            }

        });

    });

    congelar.addEventListener("click",()=>{

        const congelar = new Audio("/public/assets/midias/audios/congelarSound.mp3");

        congelar.play();

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

    });

    let numGelo = null;

    gelo.forEach((gelo)=>{

        gelo.addEventListener("click", ()=>{

            numGelo = gelo;

            descongelar.style.display = "block";

        });

    });

    descongelar.addEventListener("click",()=>{

        const descongelarSound = new Audio("/public/assets/midias/audios/descongelarSound.mp3");

        descongelarSound.play();

        gelo.forEach((gelo)=>{

            if(gelo == numGelo){

                gelo.style.display = "none";

            }

        });

        cards.forEach((card)=>{

            if(card == cardCongelado){

                card.classList.remove("congelado");

            }

        });

        descongelar.style.display = "none";

    });
    
});