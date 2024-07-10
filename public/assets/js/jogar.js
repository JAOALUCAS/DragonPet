document.addEventListener("DOMContentLoaded", ()=>{

    let numCard = null;

    const cards = document.querySelectorAll(".card");

    const slots = document.querySelectorAll(".slots");

    slots.forEach((slot)=>{

        slot.addEventListener("dragover",(event)=>{

            event.preventDefault();

        });

        slot.addEventListener("drop", (event)=>{

            const classList = slot.classList;

            Array.from(classList).forEach((classe)=>{

                if(classe == "slot1" || classe == "slot2" || classe == "slot3" 
                    || classe == "slot4" || classe == "slot5"){

                    cards.forEach((card)=>{

                        const cardClasses = card.classList;

                        Array.from(cardClasses).forEach((slotC) => {

                            if(slotC == "slot1" || slotC == "slot2" || slotC == "slot3" || 
                                slotC == "slot4" || slotC == "slot5"){
            
                                card.classList.replace(slotC, classe);
            
                            }else{

                                card.classList.add(classe);
                                card.classList.add("slots");

                            }
            
                        });

                    });

                }

            });

        });

    });


    

});