document.addEventListener("DOMContentLoaded", ()=>{

    const cutscene = document.querySelector(".cutscene");

    const closeBtn = document.querySelector(".close-button");

    const inicio = document.querySelector(".inicio");

    const background = document.querySelector(".background");

    const apresentador = document.querySelector(".apresentador");

    const falas = document.querySelector(".falas");

    const final = document.querySelector(".final");

    const divisoria = document.querySelector(".divisoria");

    const manchete = document.querySelector(".manchete");

    const emissora = document.querySelector(".emissora");

    const goku = document.querySelector(".goku");

    const tvButton = document.querySelector(".tv-buttons");

    const comercial = document.querySelector(".comercial");

    const marcas = document.querySelectorAll(".marca");

    function close(){

        closeBtn.addEventListener("click", ()=>{

            closeBtn.style.display = "none";

            cutscene.classList.add("aClose");

            setTimeout(()=>{

                cutscene.style.display = "none";

            },1000);

        });

    }

    const animacaoInicio = new Promise((resolve)=>{

        setTimeout(()=>{

            inicio.style.display = "none";

            background.style.display = "block";

            manchete.style.display = "flex";

            emissora.style.display = "block";

            apresentador.style.display = "block";

            falas.style.display = "block";

        },2000);

        resolve(true);

    });

    const mudarGrayScale = new Promise((resolve) => {
        
        falas.innerHTML = "Porque estou tão pálido, maldita tv!, Ahh.. Estamos Ao Vivo?";
       
        resolve(true);

    });

    const falaInicio =  new Promise((resolve) => {
    
        setTimeout(()=>{

            falas.innerHTML = "Olá, lutadores e fãs de artes marciais! Aqui é o seu anfitrião do Torneio Mundial de Artes Marciais, trazendo as últimas notícias diretamente do ringue!";

            background.classList.add("grayScale");
        
            apresentador.classList.add("grayScale");

            apresentador.classList.add("pulse");

            goku.style.display = "block";

        }, 7000);

        resolve(true);

    });

    const segundaFala = new Promise((resolve) => {
        
        setTimeout(()=>{

            goku.style.display = "none";

            falas.innerHTML = "No torneio de hoje, vimos batalhas eletrizantes! Goku e Vegeta estão no auge de sua forma, enquanto Piccolo e Gohan nos surpreenderam com técnicas novas. A competição está mais acirrada do que nunca!";

            divisoria.style.display = "block";

            setTimeout(()=>{

                divisoria.style.display = "none";
             
            },8000);

        }, 15000);

        resolve(true);

    });

    const terceiraFala =  new Promise((resolve) => {

        setTimeout(()=>{

            falas.innerHTML = "Mas, espere! Temos algo muito especial para vocês. Um novo jogo que vai trazer diversão e emoção ao seu dia a dia! Depois dos comerciais";

        }, 24000);

        resolve(true);
        
    });

    const exibirComercial = new Promise((resolve) => {

        setTimeout(()=>{

            background.style.display = "none";
            
            apresentador.style.display = "none";

            falas.style.display = "none";

            manchete.style.display = "none";

            emissora.style.display = "none";
                    
            final.style.display = "none";

            comercial.style.display = "block";

            const videoFiles = [
                "abertura-dragonball",
                "dragonball-sparking-zero",
                "manga-dragonball",
                "trailer-dragonball-daima"
            ];

            const video = document.getElementById("img");
        
            let index = Math.floor(Math.random() * 4);
        
            video.src = "/public/assets/midias/cutscene/comerciais/" + videoFiles[index]  + ".gif";

            if(index != 2){

                setTimeout(()=>{
        
                    video.src = "/public/assets/midias/cutscene/comerciais/" + videoFiles[index] + "2.gif";
            
                }, 56000);

            }
            
        }, 26000);

    });

    const animacaoFinal = new Promise((resolve) => {
       
        setTimeout(()=>{

            final.style.display = "block";

            comercial.style.display = "none";

            background.style.display = "none";

            apresentador.style.display = "none";

            falas.style.display = "none";

            sumir();

        },130000);

        resolve(true);

    });

    function sumir(){

        setTimeout(()=>{
            
            manchete.style.display = "none";

            emissora.style.display = "none";
                    
            final.style.display = "none";

            tvButton.style.display = "none";

            marcas.forEach((marca)=>{

                marca.style.display = "none";

            });

            closeBtn.style.display = "none";

            cutscene.classList.add("aClose");

            setTimeout(()=>{

                cutscene.style.display = "none";

            },1000);

        },1000);

    }

    close();

   animacaoInicio.then((data)=>{

        mudarGrayScale.then((data)=>{

            falaInicio.then((data)=>{

                segundaFala.then((data)=>{
    
                    terceiraFala.then((data)=>{

                        exibirComercial.then((data)=>{
                            
                            animacaoFinal.then((data)=>{})

                        });

                    });
                
                });
    
            });

        });
       
   });

});