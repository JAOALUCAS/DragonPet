document.addEventListener("DOMContentLoaded", ()=>{

    const matchingDiv = document.getElementById("matching");

    const voltarMatching = document.getElementById("voltarMatching");

    const matchingSoundAudio = new Audio("/public/assets/midias/audios/matchingSound.aac");

    voltarMatching.addEventListener("click", ()=>{

        matchingDiv.style.display = "none";
        
        matchingSoundAudio.pause();

        matchingSoundAudio.currentTime = 0;

    });

    const imageNames = [
        "abner.jpg",
        "andre.jpg",
        "animeGirl.jpg",
        "bizarro.webp",
        "bizarro2.jpg",
        "bolsonaro.jpg",
        "cachorro.jpg",
        "caraEmo.jpg",
        "carlinhos.jpeg",
        "chegouMensagem.jpg",
        "coelho.jpg",
        "cr7.jpg",
        "diggo.jpg",
        "draw.jpg",
        "draw2.png",
        "emo.jpg",
        "emo2.jpg",
        "escoliose.jpg",
        "enzo.jpg",
        "eu.jpg",
        "fujikawa.jpg",
        "girl.jpg",
        "girl2.jpg",
        "gokuBizarro.jpg",
        "guerra.jpg",
        "kaka.jpg",
        "kakashi.jpg",
        "killua.jpg",
        "luffy1.jpg",
        "luffyMongo.jpg",
        "man.jpg",
        "manoel.jpg",
        "messi.jpg",
        "miles.jpg",
        "mini7.jpg",
        "mob.jpg",
        "naruto.jpg",
        "nerd.jpg",
        "neymar.jpg",
        "reflexivo.jpg",
        "robloxFace1.jpg",
        "roblox2.jpg",
        "shh.png",
        "shinji.jpg",
        "toto.png",
        "vegeta.webp",
        "jojo.webp",
        "burro.jpg",
        "tartaruga.jpg",
        "yoshi.jpg",
        "jesse.jpg",
        "aizen.jpg",
        "toji.jpg",
        "eu2.jpg",
        "cearense.jpg",
        "kanye.jpg",
        "ruim.webp",
        "shadow.jpg",
        "mario.jpg",
        "sabo.jpg",
        "plug.jpg"
      ];

      
      let imgAd = document.getElementById("adImg");

      const finalizarBtn = document.getElementById("finalizar");

      finalizarBtn.addEventListener("click", ()=>{

        matchingDiv.style.display = "flex";
        
        setInterval(girarImagens, 600);

        matchingSound();

      });

      function matchingSound(){
        
        const verificarAudioState = verificarAudio();
                    
        if(verificarAudioState === "mudo"){

            matchingSoundAudio.pause();

        }else{
        
            matchingSoundAudio.play();

        }

      }

      function girarImagens(){

            let girarNumeroImagens = Math.floor(Math.random() * imageNames.length);

            let src = `http://localhost:8000/public/assets/midias/bots/${imageNames[girarNumeroImagens]}`;

            imgAd.src = src;

      }

      function verificarAudio(){

        return localStorage.getItem("audio");

    }

});