me diga qual a diferença dos dois codigos

document.addEventListener("DOMContentLoaded", ()=>{ 
    
    let container = document.getElementById("container");
    
    let sessionCards = JSON.parse(sessionStorage.getItem("cards"));

    if(sessionCards != null){

        sessionCards.forEach((cardBuscado)=>{

            let novoCard = document.createElement("div");

            novoCard.innerHTML = cardBuscado;

            container.appendChild(novoCard);

        });

    }
    
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

    if(sessionCards == null){
        
        exibirCard();

    }

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

    const congelar = document.getElementById("congelar");

    const vender = document.getElementById("vender");

    const gelo = document.querySelectorAll(".gelo");

    const descongelar = document.getElementById("descongelar");

    const pareceAtualizar = document.getElementById("parece-atualizar");

    atualizarMoeda(0);

    function verificarAudio(qualSom){

        const verificarAudioState = localStorage.getItem("audio");

        if(verificarAudioState !== "mudo"){

            const soundEffect = new Audio("/public/assets/midias/audios/"+qualSom+"Sound.mp3");

            soundEffect.play();

        }

    }

    function atualizarMoeda(decremento){

        moeda+=decremento;
        
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

    let penultimoElementoClicado = null;

    let ultimoElementoClicado = null;

    function cardClickDrop(){
        
        atualizarMoeda(0);

        let style = null;

        document.addEventListener("click", (event)=>{

            const elementoAtual = event.target;

            // Atualiza o penúltimo elemento clicado
            penultimoElementoClicado = ultimoElementoClicado;
        
            // Atualiza o último elemento clicado
            ultimoElementoClicado = elementoAtual;

            let isPenultimoCard = penultimoElementoClicado?.classList?.contains("card");

            let isUltimoSlot = ultimoElementoClicado.classList.contains("slots");

            if(!isPenultimoCard){

                cards.forEach((card)=>{

                    if(card.contains(penultimoElementoClicado) || card == penultimoElementoClicado){
                        
                        penultimoElementoClicado = card;

                        isPenultimoCard = true;

                    }

                });

            }

            if(!isUltimoSlot){

                let transformarUltimoElementoEmSlot = false;

                areas.forEach((area)=>{

                    if(area.contains(ultimoElementoClicado) || area == ultimoElementoClicado){
                        
                        ultimoElementoClicado = area;
                        
                        transformarUltimoElementoEmSlot = true;

                    }

                });

                if(transformarUltimoElementoEmSlot){

                    slots.forEach((slot)=>{
                        
                        let verificarNumberSlot = ultimoElementoClicado.classList[1].split('')[4];

                        let stringClassSlot = `${slot.classList[2]}`;

                        if(stringClassSlot.includes(verificarNumberSlot)){

                            ultimoElementoClicado = slot;

                            isUltimoSlot = true;

                        }

                    });

                }

            }

            if(isPenultimoCard && isUltimoSlot && !ultimoElementoClicado.classList.contains("ocupado")){
                
                congelar.style.display = "none";

                const slotTop = getComputedStyle(ultimoElementoClicado).getPropertyValue("top");

                const slotLeft = getComputedStyle(ultimoElementoClicado).getPropertyValue("left");

                const slotClass = ultimoElementoClicado.classList[2];

                const cardClone = document.querySelector(`.${penultimoElementoClicado.classList[1]}Clone`);

                if (cardClone) {

                    if (cardClone.classList.contains("slots")) {

                        cardClone.classList.replace(cardClone.classList[4], slotClass);

                    } else {

                        ultimoElementoClicado.classList.add("ocupado");

                        cardClone.style.top = slotTop;

                        cardClone.classList.add("slots", slotClass);

                        atualizarMoeda(-3);

                    }

                } else {

                    if (penultimoElementoClicado.classList.contains("slots")) {

                        penultimoElementoClicado.classList.replace(penultimoElementoClicado.classList[3], slotClass);

                    } else {

                        ultimoElementoClicado.classList.add("ocupado");

                        penultimoElementoClicado.style.top = slotTop;

                        penultimoElementoClicado.classList.add("slots", slotClass);

                        atualizarMoeda(-3);

                    }

                }

                
                if(slotLeft == "auto"){

                    penultimoElementoClicado.style.left = "15%";

                }else{
                    
                    penultimoElementoClicado.style.left = slotLeft;

                }
    
                verificarAudio("selecionar");

            } else if (isUltimoSlot && ultimoElementoClicado.classList.contains("ocupado")) {

                verificarAudio("error");

            }

        });

    }
    function sumirBotaoAoClicarFora(){
                
        document.addEventListener("click", (event)=>{

            const elemento = event.target;

            if(elemento.classList.contains("card")){

                cardCongelado = elemento;

                cardVendido = elemento;

                cards.forEach((card)=>{

                    if(card.classList.contains("slots")){
                            
                        congelar.style.display = "none";

                        vender.style.display = "block";

                    }else{
                            
                        vender.style.display = "none";

                        congelar.style.display = "block";

                    }

                });

            }else if(elemento.classList.contains("item") || elemento.classList.contains("img")){

                itemCongelado = elemento;

                congelar.style.display = "block";

            }else if(elemento.classList.contains("foto-p")){

                let congelarBtnVerificarImg = false;

                let venderBtnVerificar = false;

                cards.forEach((card)=>{

                    if(card.contains(elemento)){

                        cardCongelado = card;

                        cardVendido = card;

                        if(card.classList.contains("slots")){

                            venderBtnVerificar = true;

                        }else{

                            congelarBtnVerificarImg = true;

                        }

                    }

                });

                if(congelarBtnVerificarImg){

                    congelar.style.display = "block";                    

                }else if(venderBtnVerificar){

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
            
            verificarAudio("moeda");

            atualizarMoeda(-1);
            
            exibirCard();

            exibirItem();

        });

    }

    function venderClick(){
        
        vender.addEventListener("click",()=>{
            
            verificarAudio("vender");

            cards.forEach((card)=>{

                if(card == cardVendido){

                    localStorage.setItem("vendido", card.classList[1]);

                    atualizarMoeda(1);

                    card.style.display = "none";

                    card.classList.remove("slots");

                    let slotCardOcupado = card.classList[3];

                    card.classList.remove(card.classList[3]);

                    if(slotCardOcupado !== null){

                        slots.forEach((slot)=>{

                            if(slot.classList[2] == slotCardOcupado){

                                slot.classList.remove("ocupado");

                            }

                        });

                    }

                }

                vendeuCarta = true;

            });

        });

    }

    function congelarClick(){

        document.addEventListener("click", (event)=>{

            ultimoElementoClicado = event.target;

        });

        congelar.addEventListener("click",()=>{
            
            verificarAudio("congelar");

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

    function descongelarClick() {

        document.addEventListener('click', (event) => {

            ultimoElementoClicado = event.target;

        });
    
        descongelar.addEventListener("click", () => {

            verificarAudio("descongelar");
    
            // Esconde o gelo correspondente
            gelo.forEach((geloElemento) => {

                if (geloElemento === numGelo) {

                    geloElemento.style.display = "none";

                }

            });
    
            // Mapeia as classes de gelo para os elementos correspondentes
            const geloMap = {
                gelo1: ".card1",
                gelo2: ".card2",
                gelo3: ".card3",
                gelo4: ".card4",
                gelo5: ".card5",
                gelo6: ".item1",
                gelo7: ".item2"
            };
    
            // Verifica qual elemento foi clicado e descongela
            for (let geloClass in geloMap) {

                if (ultimoElementoClicado.classList.contains(geloClass)) {

                    const elemento = document.querySelector(geloMap[geloClass]);

                    if (elemento) {

                        elemento.classList.remove("congelado");

                    }

                    break; // Sai do loop após encontrar o primeiro elemento correspondente

                }

            }
    
            // Esconde o botão de descongelar
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
                        
                        verificarAudio("moeda");
            
                        atualizarMoeda(-4);     
                        
                        const itemEfect = document.createElement("div");

                        itemEfect.classList.add("itemEfect");

                        itemEfect.style.display = "block";

                        card.appendChild(itemEfect);
                        
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

            verificarAudio("error");

        });

    }

    const setas = document.querySelectorAll(".seta");

    const areas = document.querySelectorAll(".area");

    function qualTirarSeta(){
        
        let numSlotOcupado = [];

        slots.forEach((slot)=>{

            if(slot.classList.contains("ocupado")){
                    
                let number = slot.classList[2].split('')[4];

                numSlotOcupado.push(number);

            }

        });

        if(numSlotOcupado !== null){

            numSlotOcupado.forEach((num)=>{

                let setaSumir = document.querySelector(".seta"+num);

                if (setaSumir) setaSumir.style.display = "none";
                
                let areaSumir = document.querySelector(".area"+num);

                if (areaSumir) areaSumir.style.display = "none";

            });

        }

    }

    function mostrarSeta(event){
       
        setas.forEach((seta)=>{seta.style.display = "block";});

        areas.forEach((area)=>{area.style.display = "block"});

        qualTirarSeta();

    }

    function tirarSeta(){

        setas.forEach((seta)=>{seta.style.display = "none";});

        areas.forEach((area)=>{area.style.display = "none"});

    }

    cards.forEach((card)=>{

        card.addEventListener("dragstart", mostrarSeta);

        card.addEventListener("dragend", tirarSeta);

    });

    function verificarTirarSeta(ultimoElementoClicado) {

        let setaMostrada = false; 
    
        cards.forEach((card) => {

            if (card === ultimoElementoClicado || card.contains(ultimoElementoClicado)) {

                mostrarSeta();

                setaMostrada = true; 
            }

        });
    
        if (!setaMostrada) {

            tirarSeta();

        }
        
    }

    document.addEventListener("click", (event)=>{

        ultimoElementoClicado = event.target;

        verificarTirarSeta(ultimoElementoClicado);

    });


   verificarTirarSeta();

    cardClickDrop();

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