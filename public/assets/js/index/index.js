document.addEventListener("DOMContentLoaded", ()=>{

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

   

    removerPopUp();
    
    adicionarOuRemoverAnimacao();

});