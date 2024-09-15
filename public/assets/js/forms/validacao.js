document.addEventListener("DOMContentLoaded", ()=>{

    const form = document.getElementById("form");

    const nickV = document.querySelector(".nick-required");

    const emailV = document.querySelector(".email-required");

    const senhaV = document.querySelector(".senha-required");

    const nickSpan = document.querySelector(".nick-span-required");

    const emailSpan = document.querySelector(".email-span-required");

    const senhaSpan = document.querySelector(".senha-span-required");

    const fotoV = document.querySelector(".foto-required");

    const fotoPerfil = document.querySelector(".foto-perfil");

    const fotoSpan = document.querySelector(".foto-span-required");

    const ocultarSenha = document.querySelector(".ocultar-senha");

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    let possuiErro = false;

    form.addEventListener("submit", (event)=>{

        event.preventDefault();

        if(nickV !== null){
        
            nameValidate();
    
        }
        
        if(emailV !== null){
    
            emailValidate();
    
        }
        
        if(senhaV !== null){
    
            passwordValidate();
    
        }

        if(fotoV !== null){

            fileValidate();

        }

        if(!possuiErro){

            form.submit();

        }

    });

    if(nickV !== null){
        
        nickV.addEventListener("input", nameValidate);

    }
    
    if(emailV !== null){

        emailV.addEventListener("input", emailValidate);

    }
    
    if(senhaV !== null){

        senhaV.addEventListener("input", passwordValidate);

    }

    if(fotoV !== null){

        fotoV.addEventListener("input", fileValidate);

    }

    function setError(error){

        possuiErro = true;

        if(error == "email"){

            emailV.style.border = "2px #e63636 solid";

            emailSpan.style.display = "block";

        }else if(error == "nick"){

            nickV.style.border = "2px #e63636 solid";

            nickSpan.style.display = "block";

        }else if(error == "senha"){

            senhaV.style.border = "2px #e63636 solid";

            senhaSpan.style.display = "block";

            if(ocultarSenha.classList.length > 1){

                ocultarSenha.style.marginTop = "-14px";

            }else{

                ocultarSenha.style.marginTop = "-4px";

            }

        }else if(error == "foto"){

            fotoPerfil.style.border = "2px #e63636 solid";

            fotoSpan.style.display = "block";

        }

    }

    function removeError(error){

        possuiErro = false;

        if(error == "email"){

            emailV.style.border = "";

            emailSpan.style.display = "none";

        }else if(error == "nick"){

            nickV.style.border = "";

            nickSpan.style.display = "none";

        }else if(error == "senha"){

            senhaV.style.border = "";

            senhaSpan.style.display = "none";

            if(ocultarSenha.classList.length > 1){

                ocultarSenha.style.marginTop = "1px";

            }else{

                ocultarSenha.style.marginTop = "12px";

            }

        }else if(error == "foto"){

            fotoPerfil.style.border = "";

            const fotoImg = document.querySelector(".foto-img");

            fotoImg.style.display = "none";

            const nomeArquivo = document.querySelector(".nome-arquivo");
            
            nomeArquivo.style.display = "block";

            nomeArquivo.textContent = fotoV.files[0].name;

            fotoSpan.style.display = "none";

        }

    }

    function nameValidate(){

        if(nickV.value.length <3){

            setError("nick");

        }else{

            removeError("nick");

        }

    }

    function emailValidate(){

        if(!emailRegex.test(emailV.value)){

            setError("email");

        }else{

            removeError("email");

        }

    }

    function passwordValidate(){

        if(senhaV.value.length < 8){

            setError("senha");

        }else{

            removeError("senha");

        }

    }

    function fileValidate(){

        if(fotoV.files.length == 0){

            setError("foto");

        }else{

            removeError("foto");

        }

    }

});