document.addEventListener("DOMContentLoaded", ()=>{

    const sl = document.getElementById("sl");
               
    sl.src = "http://localhost:5500/public/assets/midias/silder/1.png";

    const shopUp = document.querySelector(".shop-up");

    shopUp.innerHTML = "nova customização disponível";

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

    const img = document.createElement("img");

    const cImg = document.querySelector(".img");

    img.src = "/public/assets/midias/popUps/" + personagens[index];

    cImg.appendChild(img);

    function adicionarOuRemoverAnimacao(){
    
        shopUp.addEventListener("mouseover", ()=>{

            shopUp.classList.add("hover");

            setTimeout(()=>{

                const opacity = getComputedStyle(shopUp)

                img.style.opacity = opacity.opacity;

            },700);

        });


        shopUp.addEventListener("mouseout", () => {

            shopUp.classList.remove("hover");

            setTimeout(()=>{

                const opacity = getComputedStyle(shopUp)

                img.style.opacity = opacity.opacity;

            });

        });

        img.addEventListener("mouseover",()=>{

            shopUp.classList.add("hover");

            setTimeout(()=>{

                const opacity = getComputedStyle(shopUp)

                img.style.opacity = opacity.opacity;

            },700);

        });

        img.addEventListener("mouseout",()=>{

            shopUp.classList.remove("hover");

            setTimeout(()=>{

                const opacity = getComputedStyle(shopUp)

                img.style.opacity = opacity.opacity;

            });

        });

    }


    function removerPopUp(){
        
        shopUp.addEventListener("click", ()=>{

            shopUp.remove();
            cImg.remove();
            img.remove();

        });

        img.addEventListener("click",()=>{

            shopUp.remove();
            cImg.remove();
            img.remove();

        });

        setTimeout(()=>{

            shopUp.remove();
            cImg.remove();
            img.remove();
    
        }, 100000);

    }

   const shopBtn = document.getElementById("shop");

   const shopContainer = document.querySelector(".shop");

   const voltar = document.getElementById("voltar");

   shopBtn.addEventListener("click", ()=>{

        shopContainer.style.display = "grid";

   });

   voltar.addEventListener("click", ()=>{

        shopContainer.classList.add("sClose");

        const filhosDiretos = shopContainer.children;

        Array.from(filhosDiretos).forEach((filho)=>{

            filho.classList.add("cClose");

        });

        setTimeout(()=>{

            shopContainer.style.display = "none";
            
            shopContainer.classList.remove("sClose");

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
      
   setInterval(sliderMove, 7000);

    removerPopUp();
    
    adicionarOuRemoverAnimacao();

});