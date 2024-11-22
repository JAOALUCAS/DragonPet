document.addEventListener("DOMContentLoaded", () => {
    
    const shopCard = document.querySelector(".shop-card");

    const shopBkg = document.querySelector(".shop-backgrounds");
    
    const shopTitu = document.querySelector(".shop-titulos");

    const shopPer = document.querySelector(".shop-perfil");

    const forms = document.getElementsByTagName("form");

    Array.from(forms).forEach((form) => {

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            const comprarDiv = form.parentNode;

            const itemDiv = comprarDiv.parentNode;

            const custoElement = itemDiv.querySelector(".custo");

            let custo = '';

            if (custoElement) {

                const custoP = custoElement.getElementsByTagName("p")[0];

                if (custoP) {

                    custo = custoP.innerHTML;

                }

            }

            let categoriaSemSeparar;

            Array.from(itemDiv.classList).forEach((classe) => {

                categoriaSemSeparar = classe.split("-");

            });

            const numeroClasses = categoriaSemSeparar.length;

            let categoria;

            if (numeroClasses > 1) {

                if (categoriaSemSeparar[0] == "prod") {

                    categoria = categoriaSemSeparar[1];

                } else {

                    categoria = categoriaSemSeparar[0];

                }

            } else {

                categoria = categoriaSemSeparar[0];

            }

            let nomeItem = '';

            if (categoria == "card" || categoria == "background" || categoria == "gif") {

                const tituloCard = itemDiv.querySelector(".titulo-card");

                if (tituloCard) {

                    const h2 = tituloCard.getElementsByTagName("h2")[0];

                    if (h2) {

                        nomeItem = h2.innerHTML;

                    }

                }

            } else if (categoria == "titulo") {

                const tc = itemDiv.querySelector(".tc");

                if (tc) {

                    nomeItem = tc.innerHTML;

                }

            }

            let inputHidden = document.createElement("input");

            inputHidden.setAttribute("type", "hidden");

            inputHidden.setAttribute("name", "infoItem");

            inputHidden.setAttribute("value", `${categoria}, ${nomeItem}, ${custo}, equipado`);

            form.appendChild(inputHidden);

            form.submit();

        });

    });

});
