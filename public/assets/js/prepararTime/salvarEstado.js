window.addEventListener("beforeunload", ()=>{ 

    const cards = document.querySelectorAll(".card");

    const gelos = document.querySelectorAll(".gelo");

    const moedas = document.getElementById("moeda");

    const vida = document.getElementById("vida");

    const turno = document.getElementById("turno");

    const vitorias = document.getElementById("vitorias");

    const tipoCard = document.getElementById("tipoCard");

    const slots = document.querySelectorAll(".slots");

    function cardSaveSessionStorage(){

        const cardObjects = [];

        cards.forEach((card)=>{

            cardObjects.push(card.outerHTML);

        });

        sessionStorage.setItem("cards", JSON.stringify(cardObjects));

    }

    function gameSaveSessionStorage(){

        const gameObjects = [];
        const geloArray = [];
        const slotsArray = [];

        gelos.forEach((gelo)=>{

            if(gelo.style.display == "flex") geloArray.push(gelo.classList);

        });

        slots.forEach((slot)=>{

            if(slot.classList.contains("ocupado")) slotsArray.push(slot.classList[2]);

        });

        gameObjects.push({
            "gelo": geloArray,
            "moedas": moedas.innerText,
            "vida": vida.textContent,
            "turno": turno.textContent,
            "vitorias": vitorias.textContent,
            "slots": slotsArray
        });

        sessionStorage.setItem("game", JSON.stringify(gameObjects));

    }

    cardSaveSessionStorage();

    gameSaveSessionStorage();

});