window.addEventListener("load",()=>{

    function loadObjects(){

        const slots = document.querySelectorAll(".slots");

        const sessionCards = JSON.parse(sessionStorage.getItem("cards"));

        const sessionGame = JSON.parse(sessionStorage.getItem("game"));

        const gelos = document.querySelectorAll(".gelo");

        const moedas = document.getElementById("moeda");

        const vida = document.getElementById("vida");

        const turno = document.getElementById("turno");

        const vitorias = document.getElementById("vitorias");

        const container = document.getElementById("container");

        if(sessionGame != null){

            sessionGame.forEach((game)=>{

                const geloClasses = Object.values(game.gelo);

                const moedasValue = game.moedas;

                const vidaValue = game.vida;

                const turnoValue = game.turno;

                const vitoriasValue = game.vitorias;

                let slotsArray =  game.slots;

                if(slotsArray){

                    slotsArray.forEach((classeSlot)=>{

                        slots.forEach((slot)=>{

                            if(slot.classList.contains(classeSlot))  slot.classList.add("ocupado");

                        });

                    });

                }

                if(geloClasses.length != 0){

                    geloClasses.forEach((gelo)=>{

                        gelos.forEach((gelos)=>{

                            if(gelos.classList.contains(gelo[1])) gelos.style.display = "flex";

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

