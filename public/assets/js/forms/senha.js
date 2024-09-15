document.addEventListener("DOMContentLoaded", ()=>{

    const olhoSenhaDiv = document.querySelector(".ocultar-senha");

    const olhoSenha = olhoSenhaDiv.children;

    let mostrandoSenha = false;

    Array.from(olhoSenha).forEach((olhoSenha)=>{

        olhoSenha.addEventListener("click", ()=>{

            mostrandoSenha = !mostrandoSenha;
            
            const senha = document.querySelector(".senha");
    
            const input = senha.getElementsByTagName("input");
    
            if(mostrandoSenha){
    
                olhoSenha.src = "/public/assets/midias/icons/ocultarSenha.png";

                for(let i = 0; i < input.length; i++){
    
                    input[i].type = "text";
        
                }
    
            }else{

                olhoSenha.src = "/public/assets/midias/icons/mostrarSenha.png";
    
                for(let i = 0; i < input.length; i++){
    
                    input[i].type = "password";
        
                }
    
            }
    
        });

    });

});