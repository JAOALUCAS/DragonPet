document.addEventListener("DOMContentLoaded", () => {

    let musicIsPlaying = false;

    let musica = null;

    const toggleMusica = document.getElementById("checkMusica");

    toggleMusica.addEventListener("click", () => {
        
        if (!musicIsPlaying) {

            tocarNovaMusica();

        }else{

            musica.pause();

            musica = null;

            musicIsPlaying = false;

        }

    });

    function tocarNovaMusica() {

        const musicas = [
            "music1",
            "music2",
            "music3",
            "music4",
            "music5",
            "music6"
        ];

        const index = Math.floor(Math.random() * musicas.length);

        musica = new Audio(`/public/assets/midias/musics/${musicas[index]}.mp3`);
        
        musica.play()
            .then(() => {

                musicIsPlaying = true;

            })
            .catch(error => {

                console.error("Erro ao tentar tocar a música:", error);

            });

        musica.addEventListener('ended', tocarNovaMusica);

    }

});
