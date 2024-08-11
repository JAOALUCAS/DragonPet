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

});
