window.addEventListener("load",()=>{

    function loadObjects(){

        const cards = document.querySelectorAll(".card");
        const sessionCards = JSON.parse(sessionStorage.getItem("cards"));
        const sessionGame = JSON.parse(sessionStorage.getItem("game"));
        const container = document.getElementById("container");

        if(sessionCards != null){

            sessionCards.forEach((card)=>{

                const cardClasses =  Object.values(card.classes);

                let possuiTodasClasses = false;

                
                cards.forEach((cCard)=>{

                    cardClasses.forEach((classe)=>{
                        
                        if(cCard.classList.contains(classe) && !cCard.classList.contains("slots")
                            || !cCard.classList.contains("slot1") || !cCard.classList.contains("slot2") 
                            || !cCard.classList.contains("slot3") || !cCard.classList.contains("slot4")
                            || !cCard.classList.contains("slot5") && !cCard.classList.contains("congelado"))
                        {

                            possuiTodasClasses = true;

                        }else{

                            possuiTodasClasses = false;

                        }

                    });

                    if(possuiTodasClasses == true){
                    
                        const template = document.createElement("template");

                        template.innerHTML = card.div.trim();

                        const newElement = template.content.firstChild;

                        container.appendChild(cCard)

                        container.replaceChild(newElement, cCard);

                    }

                });

            });

        }
    }

    loadObjects();

});

