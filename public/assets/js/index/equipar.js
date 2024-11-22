document.addEventListener("DOMContentLoaded", ()=>{

    window.addEventListener("unload", ()=>{

        localStorage.removeItem("itens");

    });

    const itens = localStorage.getItem("itens");

    let categoria = [];

    let nomesItens = [];

    let equipado = [];

    if(itens){

        const itensArrays = itens.split(",");

        itensArrays.forEach((itemArray)=>{

            let infos = itemArray.split("=>");
            
            let categoriaVazia = true;

            let nomesItensVazio = true;

            let equipadoVazio = true;

            Array.from(infos).forEach((info)=>{
                
                let resultado = info.replace(/["\[\]]/g, '');


                if(categoriaVazia && nomesItensVazio  && equipadoVazio){

                    categoria.push(resultado);

                    categoriaVazia = false;

                }else if(categoriaVazia == false && nomesItensVazio && equipadoVazio){

                    nomesItens.push(resultado)

                    nomesItensVazio = false;

                }else if(categoriaVazia == false && nomesItensVazio == false && equipado){

                    equipado.push(resultado);

                    equipadoVazio = false;

                }

            });

        });

        Array.from(categoria).forEach((categoria, index)=>{

            if (categoria.includes("card") || categoria.includes("background") || categoria.includes("gif")){

                let cardDiv;

                if(categoria.includes("card")){
                    
                    cardDiv = document.querySelectorAll(".card");

                }else if(categoria.includes("background")){
                    
                    cardDiv = document.querySelectorAll(".backgrounds-prods");

                }else if(categoria.includes("gif")){

                    cardDiv = document.querySelectorAll(".prod-gif");

                }

                Array.from(cardDiv).forEach((cardDiv) => {

                    const tituloCard = cardDiv.querySelectorAll(".titulo-card");

                    Array.from(tituloCard).forEach((tituloCard) => {

                        const h2Card = tituloCard.getElementsByTagName("h2");

                        Array.from(h2Card).forEach((h2Card) => {

                            if (h2Card.innerHTML.trim() === nomesItens[index].trim()) {

                                const custo = cardDiv.querySelector(".custo");

                                custo.remove();

                                const comprarDiv = cardDiv.querySelector(".comprar");

                                const comprarForm = comprarDiv.getElementsByTagName("form")[0];

                                const comprarBtn = comprarDiv.getElementsByTagName("button")[0];

                                if(equipado[index].trim() == "equipado"){

                                    comprarBtn.innerHTML = "Desequipar";

                                    comprarBtn.style.backgroundColor = "#B22222";

                                    comprarBtn.addEventListener("mouseover", ()=>{

                                        comprarBtn.style.backgroundColor = "#d22f2f";

                                    });
                                    
                                    comprarBtn.addEventListener("mouseout", ()=>{

                                        comprarBtn.style.backgroundColor = "#B22222";

                                    });

                                }else{

                                    comprarBtn.innerHTML = "Equipar";

                                    comprarBtn.style.backgroundColor = "#32CD32";

                                    comprarBtn.addEventListener("mouseover", ()=>{

                                        comprarBtn.style.backgroundColor = "#3ee03e";

                                    });

                                    comprarBtn.addEventListener("mouseout", ()=>{

                                        comprarBtn.style.backgroundColor = "#32CD32";

                                    });

                                }
                                
                                comprarForm.action = "../app/models/equiparOuDesequipar.php";

                            }
                            
                        });

                    });

                });

            } else if (categoria.includes("titulo")) {
                
                const tituloDiv = document.querySelectorAll(".titulo-container");

                Array.from(tituloDiv).forEach((tituloDiv) => {

                    const pTitulo = tituloDiv.querySelector(".tc");

                    if(pTitulo.innerHTML.trim() === nomesItens[index].trim()){

                        const custo = tituloDiv.querySelector(".custo");

                        custo.remove();

                        const comprarDiv = tituloDiv.querySelector(".comprar");

                        const comprarForm = comprarDiv.getElementsByTagName("form")[0];

                        const comprarBtn = comprarDiv.getElementsByTagName("button")[0];

                        if(equipado[index].trim() == "equipado"){

                            comprarBtn.innerHTML = "Desequipar";

                            comprarBtn.style.backgroundColor = "#B22222";

                            comprarBtn.addEventListener("mouseover", ()=>{

                                comprarBtn.style.backgroundColor = "#d22f2f";

                            });
                                    
                            comprarBtn.addEventListener("mouseout", ()=>{

                                comprarBtn.style.backgroundColor = "#B22222";

                            });
                            
                            comprarForm.action = "../app/models/desequiparInventario.php";

                        }else{

                            comprarBtn.innerHTML = "Equipar";

                            comprarBtn.style.backgroundColor = "#32CD32";

                            comprarBtn.addEventListener("mouseover", ()=>{

                                comprarBtn.style.backgroundColor = "#3ee03e";

                            });

                            comprarBtn.addEventListener("mouseout", ()=>{

                                comprarBtn.style.backgroundColor = "#32CD32";

                            });
                            
                            comprarForm.action = "../app/models/equiparInventario.php";

                        }

                    }

                });

            }

        });

    }

});