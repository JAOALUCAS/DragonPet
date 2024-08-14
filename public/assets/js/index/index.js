document.addEventListener("DOMContentLoaded", ()=>{

    const sl = document.getElementById("sl");
               
    sl.src = "http://localhost:5500/public/assets/midias/silder/1.png";

    const popUp = document.querySelectorAll(".pop-up");

    const overlay = document.querySelector(".overlay");

    const personagens = [
        "android8.png",
        "bora.png",
        "buyon.png",
        "chiaotzu.png",
        "commander-red.png",
        "frieza.png",
        "general-blue.png",
        "goku-adult.png",
        "goku-kid.png",
        "grandfather.png",
        "jackie-chun.png",
        "kaiyo.png",
        "korin.png",
        "krilin.png",
        "launch.png",
        "masterroshi.png",
        "mrpopo.png",
        "oolong.png",
        "oozaru.png",
        "piccolo.png",
        "piccolo-jr.png",
        "pilaf.png",
        "shu.png",
        "taopaipai.png",
        "taopaipaicyborg.png",
        "tienshinhan.png",
        "uranaibaba.png",
        "world-tournament-announcer.png",
        "yajirobe.png",
        "yamcha.png"
    ];
      
    const index = Math.floor(Math.random() * 30);

    const imgShop = document.getElementById("imgShop");

    imgShop.src = "/public/assets/midias/popUps/" + personagens[index];

    function adicionarOuRemoverAnimacao(){

        popUp.forEach((popUp)=>{

            const imgElements = popUp.getElementsByTagName('img');

            popUp.addEventListener("mouseover", ()=>{

                popUp.classList.add("hover");

                setTimeout(()=>{

                    const opacity = getComputedStyle(popUp);

                    Array.from(imgElements).forEach((imgElement) => {

                        imgElement.style.opacity = opacity.opacity;

                    });

                },700);

            });
                
            popUp.addEventListener("mouseout", () => {

                popUp.classList.remove("hover");

                setTimeout(()=>{

                    const opacity = getComputedStyle(popUp);

                    Array.from(imgElements).forEach((imgElement) => {

                        imgElement.style.opacity = opacity.opacity;

                    });

                });

            });
                
            Array.from(imgElements).forEach((imgElement)=>{
                    
                imgElement.addEventListener("mouseover",()=>{

                    popUp.classList.add("hover");

                    setTimeout(()=>{

                        const opacity = getComputedStyle(popUp);
                        
                        imgElement.style.opacity = opacity.opacity;

                    },700);

                });

                imgElement.addEventListener("mouseout",()=>{

                    popUp.classList.remove("hover");

                    setTimeout(()=>{

                        const opacity = getComputedStyle(popUp);

                        imgElement.style.opacity = opacity.opacity;

                    });

                });

            });

        });

    }


    function removerPopUp(){

        popUp.forEach((popUp)=>{

            popUp.addEventListener("click", ()=>{

                popUp.remove();

            });

            setTimeout(()=>{

                popUp.remove();
        
            }, 1000000);

        });

    }

   const shopBtn = document.getElementById("shop");

   const rankingBtn = document.getElementById("ranking");

   const shopContainer = document.querySelector(".shop");

   const rankingContainer = document.querySelector(".ranking");

   const voltarShop = document.getElementById("voltarShop");

   const voltarRanking = document.getElementById("voltarRanking");


   shopBtn.addEventListener("click", ()=>{

        overlay.style.display = "flex";

        shopContainer.style.display = "grid";

   });

   rankingBtn.addEventListener("click", ()=>{
    
        overlay.style.display = "flex";

        rankingContainer.style.display = "flex";

   });

   voltarShop.addEventListener("click", ()=>{

        shopContainer.classList.add("sClose");

        const filhosDiretos = shopContainer.children;

        Array.from(filhosDiretos).forEach((filho)=>{

            filho.classList.add("cClose");

        });

        setTimeout(()=>{

            overlay.style.display = "none";

            shopContainer.style.display = "none";
            
            shopContainer.classList.remove("sClose");

            Array.from(filhosDiretos).forEach((filho)=>{

                filho.classList.remove("cClose");
    
            });

        }, 2000)

   });

   voltarRanking.addEventListener("click", ()=>{

        rankingContainer.classList.add("rClose");

        const filhosDiretos = rankingContainer.children;

        Array.from(filhosDiretos).forEach((filho)=>{

            filho.classList.add("cClose");

        });

        setTimeout(()=>{

            overlay.style.display = "none";

            rankingContainer.style.display = "none";
            
            rankingContainer.classList.remove("rClose");

            Array.from(filhosDiretos).forEach((filho)=>{

                filho.classList.remove("cClose");

            });

        }, 2000)

   });

   let idx = 0;

   function sliderMove(){

        idx++;

        if(idx > 4){

            idx = 1;

        }
           
        sl.src = `/public/assets/midias/silder/${idx}.png`;

   }

   const creditos = document.getElementById("creditos");

   const creditosContainer = document.querySelector(".creditos");

   const voltarCreditos = document.getElementById("voltarCreditos");

   voltarCreditos.addEventListener("click", ()=>{

        creditosContainer.style.display = "none";

   });

   creditos.addEventListener("click", ()=>{

        creditosContainer.style.display = "block";

        setInterval(fecharCredito, 27000);

   });

   function fecharCredito(){

        creditosContainer.classList.add("crClose");

        setTimeout(()=>{

            creditosContainer.classList.remove("crClose");

            creditosContainer.style.display = "none";

        },5000);

   }
      
   setInterval(sliderMove, 7000);

    removerPopUp();
    
    adicionarOuRemoverAnimacao();

});