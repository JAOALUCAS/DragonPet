document.addEventListener("DOMContentLoaded", ()=>{

    let vida = null;

    let turno = null;
    
    let vitorias = null;

    const sessionGame = JSON.parse(sessionStorage.getItem("game"));

    if (sessionGame != null){

        sessionGame.forEach((game) => {

            const vidaValue = game.vida;

            const turnoValue = game.turno;

            const vitoriasValue = game.vitorias;

            vida = parseInt(vidaValue);

            turno = parseInt(turnoValue);

            vitorias = parseInt(vitoriasValue, 10);
            
        });

    } else {

        vida = 5;

        turno = 1;

        vitorias = 0;

    }

    const divVida = document.getElementById("vida");

    const divTurno = document.getElementById("turno");

    const divVitorias = document.getElementById("vitorias");

    function escreverVariaveis() {

        divVida.innerHTML = vida;

        divTurno.innerHTML = turno;

        divVitorias.innerHTML = vitorias;

    }

    escreverVariaveis();

});
