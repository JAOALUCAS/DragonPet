document.addEventListener("click", ()=>{

    const clicarSound = new Audio("/public/assets/midias/audios/clickSound.mp3");

    const verificarAudio = localStorage.getItem("audio");

     if(verificarAudio == "mudo"){

          clicarSound.pause();

     }else{
        
        clicarSound.play();

     }

});