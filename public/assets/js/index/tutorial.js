document.addEventListener("DOMContentLoaded", ()=>{

    const tutorialBtn = document.getElementById("tutorial");

    const tutorialContainer = document.querySelector(".tutorial");

    const voltarTutorial = document.getElementById("voltarTutorial");
    
    const overlay = document.querySelector(".overlay");

    tutorialBtn.addEventListener("click", ()=>{

        overlay.style.display = "flex";

        tutorialContainer.style.display = "flex";
        
        mudarDialogosTutorial();

    });

    voltarTutorial.addEventListener("click", ()=>{
        
        tutorialContainer.classList.add("rClose");

        setTimeout(()=>{

            tutorialContainer.classList.remove("rClose");

            tutorialContainer.style.display = "none";

            overlay.style.display = "none";

        }, 2000);

    });

    const tutorialSenhorKaio = [

        "Olá, pequeno gafanhoto! Eu sou o Senhor Kaio, o maior mestre das artes marciais do universo! Hoje vou te ensinar como se tornar um verdadeiro campeão em Dragon Pet!",

        "Prepare-se, porque você está prestes a entrar em um jogo onde apenas os mais fortes prevalecem. E lembre-se: foco e estratégia são as chaves para a vitória!",
    
        "Primeiro, vamos aprender a navegar pelo menu. Veja só, aqui você pode iniciar uma nova partida ou ajustar as configurações do jogo para que tudo fique do seu jeito. Simples, não é?",

        "E não se esqueça de conferir o histórico de partidas, onde você pode ver suas gloriosas vitórias e aprender com as derrotas... se é que você vai perder, claro!",
    
        "Agora, chegou a hora de escolher os seus guerreiros! Lembre-se, cada personagem tem habilidades únicas, então escolha com sabedoria. Como diria o Goku, é hora de lutar com tudo o que tem!",

        "Uma equipe bem balanceada é crucial. Não coloque só atacantes! Um bom defensor pode fazer a diferença entre a vitória e a derrota.",
    
        "Ah, o campo de batalha! É aqui que seus guerreiros vão mostrar o que sabem fazer. Posicione-os com estratégia, e observe como eles se comportam no combate. Só assim você dominará o jogo!",

        "Durante a batalha, use seus recursos com sabedoria. Às vezes, esperar o momento certo para atacar é o que garante a vitória!",
    
        "Subir no ranking não é fácil, mas com determinação e uma boa estratégia, você chegará ao topo! Continue lutando e verá como a prática leva à perfeição!",

        "Você também pode desbloquear novos personagens e habilidades incríveis! Continue jogando e se tornando mais forte. Quem sabe um dia você não se torna um verdadeiro campeão, digno de treinar comigo?",
    
        "Quer uma dica do mestre? Combine personagens com habilidades complementares para criar combos devastadores! Assim como na luta, o trabalho em equipe é essencial!",

        "E lembre-se: cada oponente é diferente, então adapte sua estratégia a cada batalha. A vitória pertence a quem consegue se adaptar rapidamente!",
    
        "Muito bem, pequeno gafanhoto, agora você está pronto para enfrentar qualquer desafio que aparecer! Use o que aprendeu e se torne o maior guerreiro de Dragon Pet! Boa sorte!",

        "Eu estarei observando de perto! Quem sabe um dia você não vem treinar comigo aqui no Planeta Kaio, hein?"
    ];
   
    const falasTutoriais = document.querySelector(".falas-tutorial");

    const imagemProjetor = document.querySelector(".imagem-projetor");

    async function mudarDialogosTutorial(){
            
        for (let idx = 0; idx < tutorialSenhorKaio.length; idx++) {

            if(idx == 2){

                imagemProjetor.src = "/public/assets/midias/imgs/imagem-projetor2.png";

            }else if(idx == 3){

                imagemProjetor.src = "/public/assets/midias/imgs/imagem-projetor3.png";

            }else if(idx == 4){

                imagemProjetor.src = "/public/assets/midias/imgs/imagem-projetor4.png";

            }else if(idx == 8){

                imagemProjetor.src = "/public/assets/midias/imgs/imagem-projetor5.png";

            }else if(idx > 8){

                imagemProjetor.src = "/public/assets/midias/imgs/imagem-projetor1.png";

            }

            falasTutoriais.innerHTML = tutorialSenhorKaio[idx];
    
            await new Promise(resolve => setTimeout(resolve, 10000));

        }

    }

});