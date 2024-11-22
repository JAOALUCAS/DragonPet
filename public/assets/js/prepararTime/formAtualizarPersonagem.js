document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formAtualizar').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch('http://localhost:8000/app/controllers/jogarControllerPersonagem.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                let arrayLocalStorage = [];

                // Exibindo os dados no console
                for (let i = 1; i <= 5; i++) {
                    const personagem = data.data[`personagem${i}`];
                    if (personagem) {
                        arrayLocalStorage.push(personagem);
                    }
                }

                localStorage.setItem("personagens", JSON.stringify(arrayLocalStorage));

            } else {
                console.error('Error:', data.error);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
