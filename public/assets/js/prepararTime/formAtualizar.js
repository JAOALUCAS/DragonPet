document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formAtualizar').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(this);

        fetch('http://localhost:8000/app/controllers/jogarController.php', { 
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {

            if (data.success) {
                
                console.log('Response Data:', data.data);

                // Exibindo os dados no console
                for (let i = 1; i <= 5; i++) {

                    const personagem = data.data[`personagem${i}`];

                    if (personagem) {

                        console.log(`Personagem ${i}:`, personagem);

                    }

                }

            } else {

                console.error('Error:', data.error);

            }

        })
        .catch(error => console.error('Error:', error));
        
    });

    const formAtualizar = document.getElementById("formAtualizar");

    const cards = document.querySelectorAll(".card");

    const itens = document.querySelectorAll(".item");

    function roletar(){

        formAtualizar.addEventListener("click", ()=>{

            cards.forEach((card)=>{
    
                if(!card.classList.contains("slots") && !card.classList.contains("congelado")){
    
                    card.remove();
    
                }
    
            });

            itens.forEach((item)=>{

                if(!item.classList.contains("congelado")){

                    item.remove();

                }

            });
    
        });

    }

    roletar();

});
