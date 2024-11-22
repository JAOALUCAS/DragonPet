window.addEventListener("load",()=>{

    function loadObjects(){

        const cards = document.querySelectorAll(".card");

        const slots = document.querySelectorAll(".slots");

        const sessionCards = JSON.parse(sessionStorage.getItem("cards"));

        const sessionGame = JSON.parse(sessionStorage.getItem("game"));

        const gelos = document.querySelectorAll(".gelo");

        const moedas = document.getElementById("moeda");

        const vida = document.getElementById("vida");

        const turno = document.getElementById("turno");

        const vitorias = document.getElementById("vitorias");
        
        if(sessionCards != null){

            sessionCards.forEach((card)=>{

                const cardClasses =  Object.values(card.classes);

                let possuiTodasClasses = false;

                cards.forEach((cCard)=>{

                    if(cCard.classList.contains(cardClasses[1])){

                        if(cardClasses.length > 2 && cardClasses.length < 4){

                            cCard.classList.add(cardClasses[2]);

                        }else if(cardClasses.length == 4){

                            cCard.classList.add(cardClasses[2]);

                            cCard.classList.add(cardClasses[3]);

                            cCard.style.top = "15%";

                            slots.forEach((slot)=>{

                                if(slot.classList.contains(cardClasses[3])){

                                    slot.classList.add("ocupado");

                                    let style = getComputedStyle(slot);

                                    if(style.left == "auto"){

                                        cCard.style.left = "15%";
        
                                    }else{
                                        
                                        cCard.style.left = style.left;
        
                                    }

                                }

                            });

                        }

                    }

                });

            });

        }

        if(sessionGame != null){

            sessionGame.forEach((game)=>{

                const geloClasses = Object.values(game.gelo);

                const moedasValue = game.moedas;

                const vidaValue = game.vida;

                const turnoValue = game.turno;

                const vitoriasValue = game.vitorias;

                if(geloClasses.length != 0){

                    geloClasses.forEach((gelo)=>{

                        gelos.forEach((gelos)=>{

                            if(gelos.classList.contains(gelo[1])){

                                gelos.style.display = "flex";

                            }

                        });

                    });

                }

                moedas.innerHTML = moedasValue;

                vida.innerHTML = vidaValue;

                turno.innerHTML = turnoValue;

                vitorias.innerHTML = vitoriasValue;


            });

        }

    }

    loadObjects();

});

