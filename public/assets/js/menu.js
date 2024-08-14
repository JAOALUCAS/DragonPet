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

    });

    checkHistori.addEventListener("click", ()=>{

        historicoOpcoes.style.display = "block";
        
        perfilOpcoes.style.display = "none";

        gameOpcoes.style.display = "none";

    });

    checkPerfil.addEventListener("click", ()=>{

        historicoOpcoes.style.display = "none";
        
        perfilOpcoes.style.display = "block";

        gameOpcoes.style.display = "none";

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

   });

   rederecionarHistorico.addEventListener("click", ()=>{

        checkHistori.click();

   });

   rederecionarConta.addEventListener("click", ()=>{

        checkPerfil.click();

   });

});
