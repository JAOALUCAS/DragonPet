document.addEventListener("DOMContentLoaded", ()=>{  
    
    let cards = document.querySelectorAll(".card");

    let cardVendido = localStorage.getItem("vendido");

    cardVendido = JSON.stringify(cardVendido);
    
    const atualizar =  document.getElementById("atualizar");

    let vendeuCarta = false;

    if(cardVendido !== null && cardVendido !== "null"){

        vendeuCarta = true;

    }

    function exibirCard(){  

        const tipoCard = document.getElementById("tipoCard");

        const CardTemplate = document.getElementById(tipoCard.value);

        let nomes = [];

        let ataques = [];

        let defesas = [];
        
        let personagensObjeto = localStorage.getItem("personagens");

        if(personagensObjeto){
            
            let personagensObjetoSeparado = personagensObjeto.split("{");

            let arrayCaracteristicaString = [];

            Array.from(personagensObjetoSeparado).forEach((personagemObjetoSeparado)=>{

                let caracteristicaString = personagemObjetoSeparado.split(",");

                arrayCaracteristicaString.push(caracteristicaString);

            });
            
            Array.from(arrayCaracteristicaString).forEach((fraseCaracteristicaString)=>{

                Array.from(fraseCaracteristicaString).forEach((palavraCaracteristicaString)=>{
                                
                    let palavra = palavraCaracteristicaString.split('"');

                    palavra.forEach((caracteristica, index)=>{

                        if(caracteristica == "nome"){
                            
                            nomes.push(palavra[index+2]);

                        }else if(caracteristica == "vida" || caracteristica == "ataque"){

                            let numTratar = palavra[index+1];

                            numTratar = numTratar.replace(":" , "");

                            numTratar = parseInt(numTratar);

                            if(caracteristica == "vida"){

                                defesas.push(numTratar);

                            }else{

                                ataques.push(numTratar);

                            }

                        }

                    });                        

                });

            });
                
            if(cards.length !== 0){
                    
                let cardsNaoSlotOuCongelado = [];

                cards.forEach((card)=>{
                    
                    let verificarClone = document.querySelector("." + card.classList[1] + "Clone");

                    if(!card.classList.contains("slots") && !card.classList.contains("congelado")){

                        cardsNaoSlotOuCongelado.push(card.classList[1]);

                    }

                    if(verificarClone !== null && !verificarClone.classList.contains("slots")){

                        cardsNaoSlotOuCongelado.push(card.classList[1] + "Clone");

                    }

                });
                
                if(cardsNaoSlotOuCongelado.length !== 0){

                    let qualClonar = [];

                    cards.forEach((card, index)=>{

                        if(card.classList.contains("slots")){

                            qualClonar.push(card.classList[1]);

                        }

                    });

                    qualClonar.forEach((cartaoClonado)=>{

                        let cardClonar = document.querySelector("." + cartaoClonado);
                        
                        let verificarClone = document.querySelector("." + cartaoClonado + "Clone");

                        if(verificarClone == null || verificarClone.classList.contains("slots")){

                            let clone = cardClonar.cloneNode(true); 
                            
                            let number = cartaoClonado.split('')[4];

                            clone.style.top = "45%";
    
                            if(number == 1){
                                
                                clone.style.left = "15%";
    
                            }else if(number == 2){
                                
                                clone.style.left = "27%";
    
                            }else if(number == 3){
    
                                clone.style.left = "39%";
    
                            }else if(number == 4){
    
                                clone.style.left = "51%";
    
                            }else{
                                
                                clone.style.left = "63%";
    
                            }
    
                            clone.classList.add(cartaoClonado + "Clone");

                            clone.classList.remove("slots");

                            for(let i = 1; i <= 5; i++){

                                if(clone.classList.contains(`slot${i}`)){
        
                                    clone.classList.remove(`slot${i}`);
        
                                }
        
                            }
                            
                            let container = document.getElementById("container");
    
                            container.appendChild(clone);
                            
                        }

                    });

                } 

                if(nomes.length !== 0){
                    
                    if(vendeuCarta){

                        cards.forEach((card)=>{

                            if(card == cardVendido){

                                card.style.display =  "block";

                                card.style.top = "45%";

                                if(card.classList[1] == "card1"){

                                    card.style.left = "15%";

                                }else if(card.classList[1] == "card2"){

                                    card.style.left = "27%";

                                } else if(card.classList[1] == "card3"){

                                    card.style.left = "39%";

                                } else if(card.classList[1] == "card4"){

                                    card.style.left = "51%";

                                } else{

                                    card.style.left = "63%";

                                }

                            }

                        });

                        vendeuCarta = false;

                        localStorage.removeItem("vendido");

                    }

                    cardsNaoSlotOuCongelado.forEach((cardMudar, index)=>{       

                        let nome = nomes[index];

                        let vida = defesas[index];

                        let ataque = ataques[index];

                        let maldade = document.querySelector("." + cardMudar);

                        maldade.classList.add("roletar");

                        let mudarImagem = document.querySelector("." + cardMudar).querySelector(".foto-p");

                        if(nome == "Pilaf" || nome == "Tartaruga do Mestre Kame"){                        

                            mudarImagem.src = `http://localhost:8000/public/assets/midias/personagens/${nome}.png`;
                            
                            mudarImagem.style.height = "120px";

                            mudarImagem.style.marginLeft = "0px";

                            if(nome == "Pilaf"){

                                mudarImagem.style.marginLeft = "20px";

                            }else{

                                mudarImagem.style.height = "80px";

                                
                                mudarImagem.style.marginLeft = "10px";

                            }

                        }else{

                            mudarImagem.src = `http://localhost:8000/public/assets/midias/personagens/${nome}.webp`;
                            
                            mudarImagem.style.height = "120px";

                            mudarImagem.style.marginLeft = "0px";

                        }
                            
                        if(tipoCard.value === "Cardfuturista") {

                            let mudarVida = document.querySelector("." + cardMudar).querySelector(".vidap");

                            mudarVida.innerHTML = vida;

                            let mudarAtaque = document.querySelector("." + cardMudar).querySelector(".ataquep");

                            mudarAtaque.innerHTML = ataque;

                            let mudarNome = document.querySelector("." + cardMudar).querySelector(".nomep");

                            mudarNome.innerHTML = nome;

                        } else if (tipoCard.value === "CardDourado") {

                            let mudarNome = document.querySelector("." + cardMudar).querySelector(".centro .nome");
                            
                            mudarNome.innerHTML = nome;

                            let mudarVida = document.querySelector("." + cardMudar).querySelector(".def").getElementsByTagName("h1")[1];

                            mudarVida.innerHTML = vida;

                            let mudarAtaque = document.querySelector("." + cardMudar).querySelector(".atk").getElementsByTagName("h1")[1];

                            mudarAtaque.innerHTML = ataque;

                        } else if (tipoCard.value === "CardOriental") {

                            let mudarNome = document.querySelector("." + cardMudar).querySelector(".apelidop");

                            mudarNome.innerHTML = nome;

                            let mudarVida = document.querySelector("." + cardMudar).querySelector(".dep");

                            mudarVida.innerHTML = `DEF ${vida}`;

                            let mudarAtaque = document.querySelector("." + cardMudar).querySelector(".akp");

                            mudarAtaque.innerHTML = `ATK ${ataque}`;

                        } else if (tipoCard.value === "CardNormal") {

                            let mudarNome = document.querySelector("." + cardMudar).querySelector(".desc .nome p");

                            mudarNome.innerHTML = nome;

                            let mudarVida = document.querySelector("." + cardMudar).querySelector(".var-per p:nth-child(2)");

                            mudarVida.innerHTML = vida;

                            let mudarAtaque = document.querySelector("." + cardMudar).querySelector(".var-per p:nth-child(4)");

                            mudarAtaque.innerHTML = ataque;

                        }   

                    });

                }

            }else{

                for(let i = 1; i <= nomes.length; i++){
            
                    let nome = nomes[i-1];

                    let vida = defesas[i-1];

                    let ataque = ataques[i-1];
                    
                    let clone = CardTemplate.content.cloneNode(true);

                    let cardMudar = clone.querySelectorAll(".card");

                    Array.from(cardMudar).forEach((cardMudarClasses)=>{

                        let cardNumClasse = `card${i}`;

                        cardMudarClasses.classList.replace(cardMudarClasses.classList[1], cardNumClasse);

                    });
                    
                    let mudarImagem = clone.querySelector(".foto-p");

                    if(nome == "Pilaf" || nome == "Tartaruga do Mestre Kame"){                        

                        mudarImagem.src = `http://localhost:8000/public/assets/midias/personagens/${nome}.png`;
                        
                        mudarImagem.style.height = "120px";

                        mudarImagem.style.marginLeft = "0px";

                        if(nome == "Pilaf"){

                            mudarImagem.style.marginLeft = "20px";

                        }else{

                            mudarImagem.style.height = "80px";

                            
                            mudarImagem.style.marginLeft = "10px";

                        }

                    }else{

                        mudarImagem.src = `http://localhost:8000/public/assets/midias/personagens/${nome}.webp`;
                        
                        mudarImagem.style.height = "120px";

                        mudarImagem.style.marginLeft = "0px";

                    }

                    if (tipoCard.value === "Cardfuturista") {

                        let mudarNomeVida = clone.querySelector(".vidap");

                        mudarNomeVida.innerHTML = vida;

                        let mudarNomeAtaque = clone.querySelector(".ataquep");

                        mudarNomeAtaque.innerHTML = ataque;

                        let mudarNome = clone.querySelector(".nomep");

                        mudarNome.innerHTML = nome;

                    } else if (tipoCard.value === "CardDourado") {

                        let mudarNome = clone.querySelector(".centro .nome");
                        
                        mudarNome.innerHTML = nome;

                        let mudarVida = clone.querySelector(".def").getElementsByTagName("h1")[1];

                        mudarVida.innerHTML = vida;

                        let mudarAtaque = clone.querySelector(".atk").getElementsByTagName("h1")[1];

                        mudarAtaque.innerHTML = ataque;

                    } else if (tipoCard.value === "CardOriental") {

                        let mudarNome = clone.querySelector(".apelidop");

                        mudarNome.innerHTML = nome;

                        let mudarVida = clone.querySelector(".dep");

                        mudarVida.innerHTML = `DEF ${vida}`;

                        let mudarAtaque = clone.querySelector(".akp");

                        mudarAtaque.innerHTML = `ATK ${ataque}`;

                    } else if (tipoCard.value === "CardNormal") {

                        let mudarNome = clone.querySelector(".desc .nome p");

                        mudarNome.innerHTML = nome;

                        let mudarVida = clone.querySelector(".var-per p:nth-child(2)");

                        mudarVida.innerHTML = vida;

                        let mudarAtaque = clone.querySelector(".var-per p:nth-child(4)");

                        mudarAtaque.innerHTML = ataque;

                    }

                    let container = document.getElementById("container");

                    container.appendChild(clone);

                }
                
                return cards = document.querySelectorAll(".card");

            }

        }

    }


    function exibirItem(){
        
        let itensObjeto = localStorage.getItem("itens");

        let nomes = [];

        if(itensObjeto){
            
            let itensObjetoSeparado = itensObjeto.split("{");

            let arrayCaracteristicaString = [];

            Array.from(itensObjetoSeparado).forEach((itemObjetoSeparado)=>{

                let caracteristicaString = itemObjetoSeparado.split(",");

                arrayCaracteristicaString.push(caracteristicaString);

            });
            
            Array.from(arrayCaracteristicaString).forEach((fraseCaracteristicaString)=>{

                Array.from(fraseCaracteristicaString).forEach((palavraCaracteristicaString)=>{
                                
                    let palavra = palavraCaracteristicaString.split('"');

                    palavra.forEach((caracteristica, index)=>{

                        if(caracteristica == "nome"){
                            
                            nomes.push(palavra[index+2]);

                        }

                    });                        

                });

            });

            if(nomes.length !== 0){

                for(let i = 0; i < nomes.length; i++){
                    
                    let item = document.getElementById(`item${i+1}`);

                    item.src = `http://localhost:8000/public/assets/midias/itens/${nomes[i]}.png`;

                }

            }

        }

    }

    exibirCard();

    exibirItem();

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

    let cardCongelado = null;

    let itemCongelado = null;

    let numGelo = null;

    let seMoveuNosSlots = false;

    const itens = document.querySelectorAll(".item");

    const img = document.querySelectorAll(".img");

    const dm = document.querySelector(".moeda");

    const divMoeda = document.getElementById("moeda");

    const slots = document.querySelectorAll(".slots");

    const iClass = document.querySelectorAll(".i");

    const container = document.getElementById("container");

    const congelar = document.getElementById("congelar");

    const vender = document.getElementById("vender");

    const gelo = document.querySelectorAll(".gelo");

    const descongelar = document.getElementById("descongelar");

    const pareceAtualizar = document.getElementById("parece-atualizar");

    atualizarMoeda(0);

    function verificarAudio(){

        return localStorage.getItem("audio");

    }

    function atualizarMoeda(decremento){

        moeda+=decremento;

        if(moeda < 3){

            document.querySelectorAll("*").forEach(element => {

                element.setAttribute("draggable", "false");
                
            });

        }
        
        if(moeda < 1){

            atualizar.style.display = "none";

            pareceAtualizar.style.display = "block";

        }else{
            
            pareceAtualizar.style.display = "none";

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

    function cardDragAndDrop(){

        atualizarMoeda(0);

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

                            let verificarClone = document.querySelector("." + card.classList[1] + "Clone");

                            if(verificarClone !== null && verificarClone.classList[1] == card.classList[1]){
                                    
                                if(verificarClone.classList.contains("slots")){

                                    verificarClone.classList.replace(verificarClone.classList[4], slot.classList[2]);

                                }else{
                                    
                                    slot.classList.add("ocupado");

                                    let top = getComputedStyle(slot).getPropertyValue("top");

                                    verificarClone.style.top = top;

                                    verificarClone.classList.add("slots");

                                    verificarClone.classList.add(slot.classList[2]);

                                    atualizarMoeda(-3);

                                }                           

                            }else{
                                    
                                if(card.classList.contains("slots")){

                                    card.classList.replace(card.classList[3], slot.classList[2]);

                                }else{

                                    slot.classList.add("ocupado");

                                    let top = getComputedStyle(slot).getPropertyValue("top");

                                    card.style.top = top;

                                    card.classList.add("slots");

                                    card.classList.add(slot.classList[2]);

                                    atualizarMoeda(-3);

                                }


                            }

                            if(style.left == "auto"){

                                card.style.left = "15%";

                            }else{
                                
                                card.style.left = style.left;

                            }

                        }

                    });
                    
                    const verificarAudioState = verificarAudio();

                    const selecionarSound = new Audio("/public/assets/midias/audios/selecionarSound.mp3");
                                
                    if(verificarAudioState === "mudo"){

                        selecionarSound.pause();

                    }else{
                    
                        selecionarSound.play();

                    }

                }else{
                    
                    const verificarAudioState = verificarAudio();

                    const errorSound = new Audio("/public/assets/midias/audios/errorSound.mp3");
                                
                    if(verificarAudioState == "mudo"){

                        errorSound.pause();

                    }else{
                    
                        errorSound.play();

                    }

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

            }else if(elemento.classList.contains("foto-p")){

                let congImg = 0;

                let vendImg = 0;

                cards.forEach((card)=>{

                    if(card.contains(elemento)){

                        cardCongelado = card;

                        cardVendido = card;

                        if(card.classList.contains("slots")){

                            vendImg = 1;

                        }else{

                            congImg = 1;

                        }

                    }

                });

                if(congImg == 1){

                    congelar.style.display = "block";                    

                }else if(vendImg == 1){

                    vender.style.display = "block";

                }else{
                    
                    congelar.style.display = "none";
                    
                    vender.style.display = "none";

                }

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
            
            const verificarAudioState = verificarAudio();

            const moedaSound = new Audio("/public/assets/midias/audios/moedaSound.mp3");
                        
            if(verificarAudioState == "mudo"){

                moedaSound.pause();

            }else{
            
                moedaSound.play();

            }

            atualizarMoeda(-1);
            
            exibirCard();

            exibirItem();

        });

    }


    function venderClick(){
        
        vender.addEventListener("click",()=>{
            
            const verificarAudioState = verificarAudio();

            const vender = new Audio("/public/assets/midias/audios/venderSound.mp3");
                       
            if(verificarAudioState == "mudo"){

                vender.pause();

            }else{
            
                vender.play();

            }

            cards.forEach((card)=>{

                if(card == cardVendido){

                    localStorage.setItem("vendido", card.classList[1]);

                    atualizarMoeda(1);

                    card.style.display = "none";

                    card.classList.remove("slots");

                    let slotCardOcupado = null;

                    for(let i = 1; i <= 5; i++){

                        if(card.classList.contains(`slot${i}`)){

                            slotCardOcupado = `slot${i}`;

                            card.classList.remove(`slot${i}`);

                        }

                    }

                    if(slotCardOcupado !== null){

                        slots.forEach((slot)=>{

                            if(slot.classList[2] == slotCardOcupado){

                                slot.classList.remove("ocupado")

                            }

                        });

                    }

                }

                vendeuCarta = true;

            });

        });

    }


    function congelarClick(){

        let ultimoElementoClicado = null;

        document.addEventListener("click", (event)=>{

            ultimoElementoClicado = event.target;

        });

        congelar.addEventListener("click",()=>{
            
            const verificarAudioState = verificarAudio();

            const congelar = new Audio("/public/assets/midias/audios/congelarSound.mp3");
                      
            if(verificarAudioState == "mudo"){

                congelar.pause();

            }else{
            
                congelar.play();

            }

            if(cardCongelado == ultimoElementoClicado || cardCongelado.contains(ultimoElementoClicado)){

                cards.forEach((card)=>{

                    if(card == cardCongelado){
    
                        card.classList.add("congelado");
    
                    }
    
                });

                let number = cardCongelado.classList[1].split('')[4];

                let geloFrase = `.gelo${number}`;

                let gelo = document.querySelector(geloFrase);

                gelo.style.display = "flex";

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
            
            const verificarAudioState = verificarAudio();

            const descongelarSound = new Audio("/public/assets/midias/audios/descongelarSound.mp3");
                     
            if(verificarAudioState == "mudo"){

                descongelarSound.pause();

            }else{
            
                descongelarSound.play();

            }

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
                        
                        const verificarAudioState = verificarAudio();
                                            
                        const moedaSound = new Audio("/public/assets/midias/audios/moedaSound.mp3");

                        if(verificarAudioState == "mudo"){

                            moedaSound.pause();
            
                        }else{
                        
                            moedaSound.play();
            
                        }
            
                        atualizarMoeda(-4);     
                        
                        const itemEfect = document.createElement("div");

                        itemEfect.classList.add("itemEfect");

                        itemEfect.style.display = "block";

                        container.appendChild(itemEfect);

                        let cardLeft = getComputedStyle(card);

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

                        card.classList.add("comEfeitoItem");
                        
                        let nomeItemClasse = imgItem.replace(/^.*\/|\.[^.]*\??.*$/g, '');

                        card.classList.add(nomeItemClasse);


                    }

                    numItem = null;

                }

            });

        });

    }

    function pareceAtualizarF(){

        pareceAtualizar.addEventListener("click", ()=>{

            const verificarAudioState = verificarAudio();

            const errorSound = new Audio("/public/assets/midias/audios/errorSound.mp3");
                        
            if(verificarAudioState == "mudo"){

                errorSound.pause();

            }else{
            
                errorSound.play();

            }

        });

    }

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

    pareceAtualizarF();

});