document.addEventListener("DOMContentLoaded", ()=>{

    let error = document.querySelectorAll(".error");

    let aviso = document.querySelectorAll(".aviso");

    if(error){        

        Array.from(error).forEach((error)=>{            

            error.addEventListener("click", ()=>{
            
                error.classList.add("error-reverse");

                setInterval(()=>{

                    error.style.display = "none";

                    error.classList.remove("error-reverse");
                
                },1000);
            
            });

            error.addEventListener("mouseover", ()=>{

                error.style.backgroundColor = "white";

                error.style.color = "#e63636";

                Array.from(aviso).forEach((aviso)=>{
                        
                    aviso.style.border = "2px #e63636 solid";

                    aviso.style.color = "#e63636";

                });

            });

            error.addEventListener("mouseout", ()=>{

                error.style.backgroundColor = "#e63636";

                error.style.color = "white";

                Array.from(aviso).forEach((aviso)=>{
                        
                    aviso.style.border = "2px white solid";

                    aviso.style.color = "white";

                });

            });

        });

    }

    let certo = document.querySelectorAll(".certo");

    Array.from(certo).forEach((certo)=>{

        certo.addEventListener("click", ()=>{

            certo.remove();

        });

    });

});