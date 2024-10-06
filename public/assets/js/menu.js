document.addEventListener("DOMContentLoaded",()=>{

   const menuBtn = document.getElementById("menu");

   const config = document.querySelector(".config");

   const menuContainer = document.querySelector(".menu");

   const menuClose = document.getElementById("close-menu");
   
   const overlay = document.querySelector(".overlay");

   menuBtn.addEventListener("click", ()=>{

        config.classList.add("cConfig");

        menuContainer.style.display = "flex";

        overlay.style.display = "flex";

        setTimeout(()=>{

            config.classList.remove("cConfig");

            config.style.display = "none";

        },1200)

   });

   menuClose.addEventListener("click", ()=>{

        menuContainer.classList.add("mClose");

        setTimeout(()=>{

            menuContainer.classList.remove("mClose");

            menuContainer.style.display = "none";

        },2000)

        config.style.display = "flex";

        config.classList.add("sConfig");

        setTimeout(()=>{

            config.classList.remove("sConfig");
  
            overlayF();

        },2000);

   });

   function overlayF(){

        overlay.style.display = "none";

   }

   const fecharMenu = document.getElementById("fechar-menu");

   const configMenu = document.querySelector(".config-menu");

   const gameOpcoes = document.querySelector(".game-opcoes");

   const historicoOpcoes = document.querySelector(".historico-opcoes");

   const perfilOpcoes = document.querySelector(".perfil-opcoes");

   fecharMenu.addEventListener("click", ()=>{

        configMenu.style.display = "none";

   });

    const checkConfig = document.getElementById("checkConfig");

    const checkHistori = document.getElementById("checkHistori");

    const checkPerfil = document.getElementById("checkPerfil");

    checkConfig.addEventListener("click", ()=>{        
        
        historicoOpcoes.style.display = "none";
        
        perfilOpcoes.style.display = "none";

        gameOpcoes.style.display = "block";

        if(checkHistori.classList.contains("selecionado")){

          checkHistori.classList.remove("selecionado");

          checkConfig.classList.add("selecionado");

        }else if(checkPerfil.classList.contains("selecionado")){

          checkPerfil.classList.remove("selecionado");

          checkConfig.classList.add("selecionado");

        }else{
          
          checkConfig.classList.add("selecionado");

        }

    });

    checkHistori.addEventListener("click", ()=>{

        historicoOpcoes.style.display = "block";
        
        perfilOpcoes.style.display = "none";

        gameOpcoes.style.display = "none";
        
        if(checkConfig.classList.contains("selecionado")){

          checkConfig.classList.remove("selecionado");
          
          checkHistori.classList.add("selecionado");

        }else if(checkPerfil.classList.contains("selecionado")){

          checkPerfil.classList.remove("selecionado");

          checkHistori.classList.add("selecionado");

        }else{
          
          checkHistori.classList.add("selecionado");

        }

    });

    checkPerfil.addEventListener("click", ()=>{

        historicoOpcoes.style.display = "none";
        
        perfilOpcoes.style.display = "block";

        gameOpcoes.style.display = "none";

        
        if(checkHistori.classList.contains("selecionado")){

          checkHistori.classList.remove("selecionado");

          checkPerfil.classList.add("selecionado");

        }else if(checkConfig.classList.contains("selecionado")){

          checkConfig.classList.remove("selecionado");

          checkPerfil.classList.add("selecionado");

        }else{
          
          checkPerfil.classList.add("selecionado");

        }

    });

    
   const rederecionarConfig = document.getElementById("rederecionar-config");

   const rederecionarHistorico = document.getElementById("rederecionar-historico");
   
   const rederecionarConta = document.getElementById("rederecionar-conta");

   const rederecionar = document.querySelectorAll(".rederecionar");

   rederecionar.forEach((rederecionar)=>{

        rederecionar.addEventListener("click", ()=>{
                        
            configMenu.style.display = "flex";

        });

   });


   rederecionarConfig.addEventListener("click", ()=>{

        checkConfig.click();

        checkConfig.classList.add("selecionado");

   });

   rederecionarHistorico.addEventListener("click", ()=>{

        checkHistori.click();

        checkHistori.classList.add("selecionado");

   });

   rederecionarConta.addEventListener("click", ()=>{

        checkPerfil.click();

        checkPerfil.classList.add("selecionado");

   });

   let telaCheia = false;

  const toggleTela = document.getElementById("checkTela");

  toggleTela.addEventListener("click", () => {

      if (telaCheia) {

          if (document.exitFullscreen) {

              document.exitFullscreen();

          } else if (document.mozCancelFullScreen) { // Firefox

              document.mozCancelFullScreen();

          } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera

              document.webkitExitFullscreen();

          } else if (document.msExitFullscreen) { // IE/Edge

              document.msExitFullscreen();

          }

      } else {

          if (document.documentElement.requestFullscreen) {

              document.documentElement.requestFullscreen();

          } else if (document.documentElement.mozRequestFullScreen) { // Firefox

              document.documentElement.mozRequestFullScreen();

          } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera

              document.documentElement.webkitRequestFullscreen();

          } else if (document.documentElement.msRequestFullscreen) { // IE/Edge

              document.documentElement.msRequestFullscreen();

          }

      }
      
      telaCheia = !telaCheia;

  });

   function mutarAudio(){

     const toggleAudio = document.getElementById("checkAudio");

     let isPlaying = true;
 
     toggleAudio.addEventListener("click", ()=>{
 
         if(isPlaying){
 
             localStorage.setItem("audio", "mudo");
 
         }else {
             
             localStorage.removeItem("audio");
 
         }
 
         isPlaying = !isPlaying;
 
     });
     
     const verificarAudio = localStorage.getItem("audio");

     if(verificarAudio == "mudo"){

          toggleAudio.click();

     }

   }

   mutarAudio();

});
