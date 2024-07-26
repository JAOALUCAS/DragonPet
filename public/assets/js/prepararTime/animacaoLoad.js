window.addEventListener("load", ()=>{

    const elements = document.querySelectorAll(".load");

    elements.forEach((element)=>{

        element.classList.remove("hidden");

        setTimeout(()=>{

            element.style.display = "none";

        }, 1500);

    });

});