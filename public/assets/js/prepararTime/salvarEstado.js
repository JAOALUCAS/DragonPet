window.addEventListener("beforeunload", ()=>{ 

    const cards = document.querySelectorAll(".card");

    const gelos = document.querySelectorAll(".gelo");

    const moedas = document.getElementById("moeda");

    const vida = document.getElementById("vida");

    const turno = document.getElementById("turno");

    const vitorias = document.getElementById("vitorias");


    function cardSaveSessionStorage(){

        const cardObjects = [];

        cards.forEach((card)=>{

            if(card !== null){

                const cardSerializado = card.outerHTML;

                cardObjects.push({
                    "classes": card.classList,
                    "div": cardSerializado
                });

            }

        });

        sessionStorage.setItem("cards", JSON.stringify(cardObjects));

    }

    function gameSaveSessionStorage(){

        const gameObjects = [];
        const geloArray = [];

        gelos.forEach((gelo)=>{

            if(gelo.style.display == "flex"){

                geloArray.push(gelo.classList);

            }

        });

        gameObjects.push({
            "gelo": geloArray,
            "moedas": moedas.innerText,
            "vida": vida.textContent,
            "turno": turno.textContent,
            "vitorias": vitorias.textContent
        });

        sessionStorage.setItem("game", JSON.stringify(gameObjects));

    }

    cardSaveSessionStorage();
    gameSaveSessionStorage();

});