document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formAtualizar').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(this);

        fetch(window.location.href, { 
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            
            console.log(data); 
           
        })
        .catch(error => console.error('Error:', error));
    });

    const formAtualizar = document.getElementById("formAtualizar");

    const cards = document.querySelectorAll(".card");

    cards.forEach((card)=>{

        if(card !== null){

            card.style.display = "block";

        }

    });

    formAtualizar.addEventListener("click", ()=>{

        cards.forEach((card)=>{

            if(!card.classList.contains("slots") && !card.classList.contains("congelado")){

                card.remove();

            }

        });

    });

});
