document.addEventListener("DOMContentLoaded", ()=>{

    const categoriaBtn = document.getElementById("categoriaBtn");

    const categoriaDiv = document.querySelector(".categoria-personagens");

    const voltarBtn = document.getElementById("voltarPersonagem");

    const pcBtn = document.querySelector(".pC");

    categoriaBtn.addEventListener("click", ()=>{
        
        voltarBtn.style.display = "none";

        pcBtn.style.display = "none";

        categoriaDiv.style.display = "flex";

        setTimeout(()=>{

            voltarBtn.style.display = "block";

            pcBtn.style.display = "flex";
        
        },2000);

    });

    voltarBtn.addEventListener("click", ()=>{

        categoriaDiv.classList.add("cSumir");

        voltarBtn.style.display = "none";

        pcBtn.style.display = "none";

        setTimeout(()=>{

            categoriaDiv.classList.remove("cSumir");

            categoriaDiv.style.display = "none";

            voltarBtn.style.display = "block";

            pcBtn.style.display = "block";

        },2000);

    });

    const turno = document.getElementById("turno");

    for(let i = 1; i <= 9; i++){

        if(i > (parseInt(turno.innerHTML))){            

            let classe = `.personagem-turno${i}`;

            let imgsPerso = document.querySelector(classe).getElementsByTagName("img");

            Array.from(imgsPerso).forEach((img)=>{

                if(!img.classList.contains("dados") && !img.classList.contains("ag1") && !img.classList.contains("ag2")){
                    
                    img.style.filter = "grayscale(70%)";

                }

            });

        }

    }

    const pImg = document.querySelectorAll(".pImg");
    
    const frasePersonDiv = document.querySelector(".frasePerson");

    let mensagem = "";

    let link = "";

    pImg.forEach((pImg)=>{

        pImg.addEventListener("mouseover", ()=>{

            frasePersonDiv.style.display = "block";

            let styleTop = pImg.offsetTop - 50;

            let styleLeft = pImg.offsetLeft - 130;

            frasePersonDiv.style.top = `${styleTop}px`;

            frasePersonDiv.style.left = `${styleLeft}px`;
        
            switch (pImg.id) {
                case 'Kuririncriança':
                    mensagem = "Alguém sentiu essa?  ...";
                    link = "https://dragonball.fandom.com/wiki/Krillin";
                    break;
                case 'Taopaipai':
                    mensagem = "Tao pai pai, o assassino!  ...";
                    link = "https://dragonball.fandom.com/wiki/Tao_Pai_Pai";
                    break;
                case 'Sr.Satã(Hércules)':
                    mensagem = "Sr. Satã, o campeão!  ...";
                    link = "https://dragonball.fandom.com/wiki/Hercule_Satan";
                    break;
                case 'Gokucriança':
                    mensagem = "Goku criança, o herói!  ...";
                    link = "https://dragonball.fandom.com/wiki/Goku";
                    break;
                case 'Yamcha':
                    mensagem = "Yamcha, o guerreiro!  ...";
                    link = "https://dragonball.fandom.com/wiki/Yamcha";
                    break;
                case 'Yajirobe':
                    mensagem = "Yajirobe, o samurai!  ...";
                    link = "https://dragonball.fandom.com/wiki/Yajirobe";
                    break;
                case 'MestreKame(Tarado)':
                    mensagem = "Mestre Kame, o velho sábio!  ...";
                    link = "https://dragonball.fandom.com/wiki/Master_Roshi";
                    break;
                case 'diferente-img1':
                    mensagem = "A tartaruga do Mestre Kame!  ...";
                    link = "https://dragonball.fandom.com/wiki/Turtle";
                    break;
                case 'diferente-img2':
                    mensagem = "Pilaf, o pequeno vilão!  ...";
                    link = "https://dragonball.fandom.com/wiki/Pilaf";
                    break;
                case 'Androide18':
                    mensagem = "Androide 18, a guerreira!  ...";
                    link = "https://dragonball.fandom.com/wiki/Android_18";
                    break;
                case 'Androide17':
                    mensagem = "Androide 17, o protetor!  ...";
                    link = "https://dragonball.fandom.com/wiki/Android_17";
                    break;
                case 'Piccolo':
                    mensagem = "Piccolo, o guerreiro Namekuseijin!  ...";
                    link = "https://dragonball.fandom.com/wiki/Piccolo";
                    break;
                case 'Vegeta':
                    mensagem = "Vegeta, o príncipe dos Saiyajins!  ...";
                    link = "https://dragonball.fandom.com/wiki/Vegeta";
                    break;
                case 'Trunks':
                    mensagem = "Trunks, o guerreiro do futuro!  ...";
                    link = "https://dragonball.fandom.com/wiki/Trunks";
                    break;
                case 'Goten':
                    mensagem = "Goten, o filho de Goku!  ...";
                    link = "https://dragonball.fandom.com/wiki/Goten";
                    break;
                case 'Gohan':
                    mensagem = "Gohan, o filho de Goku!  ...";
                    link = "https://dragonball.fandom.com/wiki/Gohan";
                    break;
                case 'MestreKame(Jovem)':
                    mensagem = "Mestre Kame em sua juventude!  ...";
                    link = "https://dragonball.fandom.com/wiki/Master_Roshi";
                    break;
                case 'Chichi':
                    mensagem = "Chichi, a esposa de Goku!  ...";
                    link = "https://dragonball.fandom.com/wiki/Chi-Chi";
                    break;
                case 'Freeza':
                    mensagem = "Freeza, o tirano!  ...";
                    link = "https://dragonball.fandom.com/wiki/Frieza";
                    break;
                case 'Cell':
                    mensagem = "Cell, o monstro perfeito!  ...";
                    link = "https://dragonball.fandom.com/wiki/Cell";
                    break;
                case 'MajinBoo':
                    mensagem = "Majin Boo, o vilão adorável!  ...";
                    link = "https://dragonball.fandom.com/wiki/Majin_Buu";
                    break;
                case 'Dabura':
                    mensagem = "Dabura, o rei do inferno!  ...";
                    link = "https://dragonball.fandom.com/wiki/Dabura";
                    break;
                case 'SuperGalic.jr':
                    mensagem = "Super Galic.jr, o pequeno guerreiro!  ...";
                    link = "https://dragonball.fandom.com/wiki/Galick_Gun";
                    break;
                case 'Tenshinhan':
                    mensagem = "Tenshinhan, o lutador!  ...";
                    link = "https://dragonball.fandom.com/wiki/Tien_Shinhan";
                    break;
                case 'Goku(Base)':
                    mensagem = "Goku em sua forma base!  ...";
                    link = "https://dragonball.fandom.com/wiki/Goku";
                    break;
                case 'Vegeta(Base)':
                    mensagem = "Vegeta em sua forma base!  ...";
                    link = "https://dragonball.fandom.com/wiki/Vegeta";
                    break;
                case 'Bardock(Base)':
                    mensagem = "Bardock em sua forma base!  ...";
                    link = "https://dragonball.fandom.com/wiki/Bardock";
                    break;
                case 'Goku(SuperSaiyajinDeus)':
                    mensagem = "Goku em sua forma Super Saiyajin Deus!  ...";
                    link = "https://dragonball.fandom.com/wiki/Goku";
                    break;
                case 'Vegeta(SuperSaiyajinDeus)':
                    mensagem = "Vegeta em sua forma Super Saiyajin Deus!  ...";
                    link = "https://dragonball.fandom.com/wiki/Vegeta";
                    break;
                case 'Trunks(Futuro)':
                    mensagem = "Trunks do futuro em sua forma!  ...";
                    link = "https://dragonball.fandom.com/wiki/Trunks";
                    break;
                case 'Gohan(Ultimate)':
                    mensagem = "Gohan em sua forma Ultimate!  ...";
                    link = "https://dragonball.fandom.com/wiki/Gohan";
                    break;
                case 'SuperRageShenron':
                    mensagem = "Super Rage Shenron, o dragão poderoso!  ...";
                    link = "https://dragonball.fandom.com/wiki/Shenron";
                    break;
                case 'Goten(SuperSaiyajin)':
                    mensagem = "Goten em sua forma Super Saiyajin!  ...";
                    link = "https://dragonball.fandom.com/wiki/Goten";
                    break;
                case 'Kuririn':
                    mensagem = "Kuririn, o amigo de Goku!  ...";
                    link = "https://dragonball.fandom.com/wiki/Krillin";
                    break;
                case 'Yamchabandido':
                    mensagem = "Yamcha em sua forma bandido!  ...";
                    link = "https://dragonball.fandom.com/wiki/Yamcha";
                    break;
                case 'MestreKame(Velho)':
                    mensagem = "Mestre Kame em sua forma velha!  ...";
                    link = "https://dragonball.fandom.com/wiki/Master_Roshi";
                    break;
                case 'Goku(SuperSaiyajinBlue)':
                    mensagem = "Goku em sua forma Super Saiyajin Blue!  ...";
                    link = "https://dragonball.fandom.com/wiki/Goku";
                    break;
                case 'Vegeta(SuperSaiyajinBlue)':
                    mensagem = "Vegeta em sua forma Super Saiyajin Blue!  ...";
                    link = "https://dragonball.fandom.com/wiki/Vegeta";
                    break;
                case 'Freeza(Golden)':
                    mensagem = "Freeza em sua forma Golden!  ...";
                    link = "https://dragonball.fandom.com/wiki/Frieza";
                    break;
                case 'Cell(FormaPerfeita)':
                    mensagem = "Cell em sua forma perfeita!  ...";
                    link = "https://dragonball.fandom.com/wiki/Cell";
                    break;
                case 'MajinBoo(Puro)':
                    mensagem = "Majin Boo em sua forma pura!  ...";
                    link = "https://dragonball.fandom.com/wiki/Majin_Buu";
                    break;
                case 'Jaco':
                    mensagem = "Jaco, o patrulheiro galáctico!  ...";
                    link = "https://dragonball.fandom.com/wiki/Jaco";
                    break;
                case 'Piccolo(FundidocomKami)':
                    mensagem = "Piccolo fundido com Kami!  ...";
                    link = "https://dragonball.fandom.com/wiki/Piccolo";
                    break;
                case 'Gotenks':
                    mensagem = "Gotenks, a fusão de Goten e Trunks!  ...";
                    link = "https://dragonball.fandom.com/wiki/Gotenks";
                    break;
                case 'Vegetto':
                    mensagem = "Vegetto, a fusão de Goku e Vegeta!  ...";
                    link = "https://dragonball.fandom.com/wiki/Vegito";
                    break;
                case 'GokuInstintoSuperior':
                    mensagem = "Goku em sua forma Instinto Superior!  ...";
                    link = "https://dragonball.fandom.com/wiki/Goku";
                    break;
                case 'Jiren':
                    mensagem = "Jiren, o guerreiro mais forte!  ...";
                    link = "https://dragonball.fandom.com/wiki/Jiren";
                    break;
                case 'VegetaSuperSaiyajinDeusSuperSaiyajinEvolução':
                    mensagem = "Vegeta em sua forma Super Saiyajin Deus Super Saiyajin Evolução!  ...";
                    link = "https://dragonball.fandom.com/wiki/Vegeta";
                    break;
                    case 'MajinBooKid':
                        mensagem = "Majin Boo (kid), a forma criança!  ...";
                        link = "https://dragonball.fandom.com/wiki/Majin_Buu";
                        break;
                    case 'Hit':
                        mensagem = "Hit, o assassino!  ...";
                        link = "https://dragonball.fandom.com/wiki/Hit";
                        break;
                    case 'Toppo':
                        mensagem = "Toppo, o guerreiro da justiça!  ...";
                        link = "https://dragonball.fandom.com/wiki/Toppo";
                        break;
                    case 'BardockSuperSaiyajin':
                        mensagem = "Bardock em sua forma Super Saiyajin!  ...";
                        link = "https://dragonball.fandom.com/wiki/Bardock";
                        break;
                    case 'Cabba':
                        mensagem = "Cabba, o guerreiro Saiyajin!  ...";
                        link = "https://dragonball.fandom.com/wiki/Cabba";
                        break;
                    case 'KaleSuperSaiyajinLendário':
                        mensagem = "Kale em sua forma Super Saiyajin Lendário!  ...";
                        link = "https://dragonball.fandom.com/wiki/Kale";
                        break;
                    case 'GokuMigatteNoGokuiOmen':
                        mensagem = "Goku em Migatte no Gokui Omen!  ...";
                        link = "https://dragonball.fandom.com/wiki/Goku";
                        break;
                    case 'GokuBlackBase':
                        mensagem = "Goku Black em sua forma base!  ...";
                        link = "https://dragonball.fandom.com/wiki/Goku_Black";
                        break;
                    case 'GohanSuperSaiyajin2':
                        mensagem = "Gohan em sua forma Super Saiyajin 2!  ...";
                        link = "https://dragonball.fandom.com/wiki/Gohan";
                        break;
                    case 'BrolyBase':
                        mensagem = "Broly em sua forma base!  ...";
                        link = "https://dragonball.fandom.com/wiki/Broly";
                        break;
                    case 'GogetaSuperSaiyajin':
                        mensagem = "Gogeta em sua forma Super Saiyajin!  ...";
                        link = "https://dragonball.fandom.com/wiki/Gogeta";
                        break;
                    case 'PiccoloDespertado':
                        mensagem = "Piccolo em sua forma Despertada!  ...";
                        link = "https://dragonball.fandom.com/wiki/Piccolo";
                        break;
                    case 'EisShenron':
                        mensagem = "Eis Shenron, o dragão gelado!  ...";
                        link = "https://dragonball.fandom.com/wiki/Eis_Shenron";
                        break;
                    case 'Zamasu':
                        mensagem = "Zamasu, o deus da destruição!  ...";
                        link = "https://dragonball.fandom.com/wiki/Zamasu";
                        break;
                    case 'TrunksDoFuturoSuperSaiyajinRage':
                        mensagem = "Trunks do Futuro em sua forma Super Saiyajin Rage!  ...";
                        link = "https://dragonball.fandom.com/wiki/Trunks";
                        break;
                    case 'ShallotSuperSaiyajinBlue':
                        mensagem = "Shallot em sua forma Super Saiyajin Blue!  ...";
                        link = "https://dragonball.fandom.com/wiki/Shallot";
                        break;
                    case 'NuovaShenron':
                        mensagem = "Nuova Shenron, o dragão do frio!  ...";
                        link = "https://dragonball.fandom.com/wiki/Nuova_Shenron";
                        break;
                    case 'SuperJanemba':
                        mensagem = "Super Janemba, o demônio!  ...";
                        link = "https://dragonball.fandom.com/wiki/Janemba";
                        break;
                    case 'GohanBeast':
                        mensagem = "Gohan em sua forma Beast!  ...";
                        link = "https://dragonball.fandom.com/wiki/Gohan";
                        break;
                    case 'Super17':
                        mensagem = "Super 17, o poderoso!  ...";
                        link = "https://dragonball.fandom.com/wiki/Super_17";
                        break;
                    case 'CoolerFormaFinal':
                        mensagem = "Cooler em sua forma final!  ...";
                        link = "https://dragonball.fandom.com/wiki/Cooler";
                        break;
                    case 'SuperBaby':
                        mensagem = "Super Baby, o vilão poderoso!  ...";
                        link = "https://dragonball.fandom.com/wiki/Super_Baby";
                        break;
                    case 'Gamma2':
                        mensagem = "Gamma 2, o guerreiro android!  ...";
                        link = "https://dragonball.fandom.com/wiki/Gamma_2";
                        break;
                    case 'Gamma1':
                        mensagem = "Gamma 1, o guerreiro android!  ...";
                        link = "https://dragonball.fandom.com/wiki/Gamma_1";
                        break;
                    case 'OmegaShenron':
                        mensagem = "Omega Shenron, o dragão do desejo!  ...";
                        link = "https://dragonball.fandom.com/wiki/Omega_Shenron";
                        break;
                    case 'ZamazasuFusao':
                        mensagem = "Zamazasu em sua forma de fusão!  ...";
                        link = "https://dragonball.fandom.com/wiki/Zamasu";
                        break;
                    case 'GogetaSuperSaiyajin4':
                        mensagem = "Gogeta em sua forma Super Saiyajin 4!  ...";
                        link = "https://dragonball.fandom.com/wiki/Gogeta";
                        break;
                    case 'BrolySuperSaiyajinLendario':
                        mensagem = "Broly em sua forma Super Saiyajin Lendário!  ...";
                        link = "https://dragonball.fandom.com/wiki/Broly";
                        break;
                    case 'GogetaSuperSaiyajinBlue':
                        mensagem = "Gogeta em sua forma Super Saiyajin Blue!  ...";
                        link = "https://dragonball.fandom.com/wiki/Gogeta";
                        break;
                    case 'Bills':
                        mensagem = "Bills, o deus da destruição!  ...";
                        link = "https://dragonball.fandom.com/wiki/Bills";
                        break;
                    case 'Whis':
                        mensagem = "Whis, o anjo!  ...";
                        link = "https://dragonball.fandom.com/wiki/Whis";
                        break;
                    case 'Champa':
                        mensagem = "Champa, o deus da destruição!  ...";
                        link = "https://dragonball.fandom.com/wiki/Champa";
                        break;
                    case 'Vados':
                        mensagem = "Vados, a assistente do deus!  ...";
                        link = "https://dragonball.fandom.com/wiki/Vados";
                        break;
                    default:
                        mensagem = "Personagem desconhecido! ...";
                        link = "#";
                        break;
                }

            frasePersonDiv.innerHTML = mensagem;

        });

        pImg.addEventListener("click", ()=>{

            window.open(link, "_blank");

        });

        pImg.addEventListener("mouseout", ()=>{

            frasePersonDiv.style.display = "none";

            mensagem = "";

            link = "";

        });

    });


    const categoriaBtnPc = document.getElementById("pc");

    const personagensTurno = document.querySelector(".personagens-turno");

    const itensRaridade = document.querySelector(".itens-raridade");

    const hf = document.getElementById("hf");

    categoriaBtnPc.addEventListener("click", ()=>{

        if(categoriaBtnPc.innerHTML == "Personagens ☑"){

            categoriaBtnPc.innerHTML = "Itens ☑";

            hf.innerHTML = "Itens";
            
            itensRaridade.style.display = "block";

            personagensTurno.style.display = "none";

        }else{

            categoriaBtnPc.innerHTML = "Personagens ☑";

            hf.innerHTML = "Personagens";

            itensRaridade.style.display = "none";

            personagensTurno.style.display = "block";

        }

    });

    const iImg = document.querySelectorAll(".iImg");

    iImg.forEach((iImg)=>{

        iImg.addEventListener("mouseover", ()=>{

            frasePersonDiv.style.display = "block";

            let styleTop = iImg.offsetTop - 50;

            let styleLeft = iImg.offsetLeft - 130;

            frasePersonDiv.style.top = `${styleTop}px`;

            frasePersonDiv.style.left = `${styleLeft}px`;

            frasePersonDiv.innerHTML = mensagem;

            switch(iImg.id){
                case "Curry":
                    mensagem = 'Aumenta a velocidade de ataque em 10%  ...';
                    link = 'https://dragonball.fandom.com/wiki/Curry';
                    break;
                case "Frango":
                    mensagem = 'Aumenta a vida em 4 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Grilled_Chicken';
                    break;
                case "Ensopado":
                    mensagem = 'Aumenta a vida em 3 pontos e o ataque em 1 ponto  ...';
                    link = 'https://dragonball.fandom.com/wiki/Stew';
                    break;
                case "Bandagens":
                    mensagem = 'Aumenta a vida em 6 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Bandages';
                    break;
                case "Peso":
                    mensagem = 'Aumenta o ataque em 2 pontos e diminui a velocidade de ataque em 10%  ...';
                    link = 'https://dragonball.fandom.com/wiki/Training_Weights';
                    break;
                case "Pilula":
                    mensagem = 'Aumenta a vida em 5 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Pill';
                    break;
                case "Dinossauro":
                    mensagem = 'Aumenta o ataque em 3 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Dinosaur_Meat';
                    break;
                case "Arroz":
                    mensagem = 'Aumenta a vida em 2 pontos e a velocidade de ataque em 5%  ...';
                    link = 'https://dragonball.fandom.com/wiki/Cooked_Rice';
                    break;
                case "Frutas":
                    mensagem = 'Aumenta a vida em 3 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Fresh_Fruit';
                    break;
                case "Legumes":
                    mensagem = 'Aumenta o ataque em 1 ponto e a vida em 2 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Varied_Vegetables';
                    break;
                case "Tofu":
                    mensagem = 'Aumenta a vida em 4 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Tofu';
                    break;
                case "Macarrao":
                    mensagem = 'Aumenta a velocidade de ataque em 5% e o ataque em 1 ponto  ...';
                    link = 'https://dragonball.fandom.com/wiki/Instant_Noodles';
                    break;
                case "Radar":
                    mensagem = 'Permite encontrar uma esfera do dragão a cada 3 batalhas vencidas  ...';
                    link = 'https://dragonball.fandom.com/wiki/Dragon_Radar';
                    break;
                case "Medidor":
                    mensagem = 'Aumenta o ataque em 2 pontos e a velocidade de ataque em 5%  ...';
                    link = 'https://dragonball.fandom.com/wiki/Ki_Meter';
                    break;
                case "Nuvem":
                    mensagem = 'Aumenta a velocidade de ataque em 15%  ...';
                    link = 'https://dragonball.fandom.com/wiki/Flying_Nimbus';
                    break;
                case "Casco":
                    mensagem = 'Aumenta a vida em 10 pontos, mas diminui a velocidade de ataque em 10%..';
                    link = 'https://dragonball.fandom.com/wiki/Turtle_Shell';
                    break;
                case "Mafuba":
                    mensagem = 'Tem uma chance de 10% de selar um inimigo por 1 turno  ...';
                    link = 'https://dragonball.fandom.com/wiki/Evil_Containment_Wave';
                    break
                case "Sagrada":
                    mensagem = 'Aumenta o ataque em 3 pontos e a vida em 5 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Sacred_Water';
                    break;
                case "Injecao":
                    mensagem = 'Aumenta a vida em 8 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Injection';
                    break;
                case "Battle":
                    mensagem = 'Aumenta a defesa, reduzindo o dano recebido em 2 pontos por ataque  ...';
                    link = 'https://dragonball.fandom.com/wiki/Battle_Armor';
                    break;
                case "Tree":
                    mensagem = 'Aumenta o ataque em 4 pontos e a vida em 2 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Tree_of_Might_Fruit';
                    break;
                case "Espada":
                    mensagem = 'Aumenta o ataque em 5 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Z_Sword';
                    break;
                case "Capsula":
                    mensagem = 'Permite reviver um personagem com metade da vida uma vez por batalha  ...';
                    link = 'https://dragonball.fandom.com/wiki/Time_Capsule';
                    break;
                case "Semente":
                    mensagem = 'Recupera totalmente a vida do personagem uma vez por batalha  ...';
                    link = 'https://dragonball.fandom.com/wiki/Senzu_Bean';
                    break;
                case "Brave":
                    mensagem = 'Aumenta o ataque em 4 pontos e a velocidade de ataque em 5%  ...';
                    link = 'https://dragonball.fandom.com/wiki/Brave_Sword';
                    break;
                case "Brincos":
                    mensagem = 'Permite fusão com outro personagem, combinando suas vidas e ataques  ...';
                    link = 'https://dragonball.fandom.com/wiki/Potara_Earrings';
                    break;
                case "Esfera":
                    mensagem = 'Faça um desejo! ...';
                    link = 'https://dragonball.fandom.com/wiki/Dragon_Ball';
                    break;
                case "Great":  
                    mensagem = 'Aumenta a vida em 6 pontos e o ataque em 3 pontos  ...';
                    link = 'https://dragonball.fandom.com/wiki/Great_Saiyaman';
                    break;
                case "Weighted":
                    mensagem = 'Aumenta a vida em 8 pontos, mas diminui a velocidade de ataque em 5%  ...';
                    link = 'https://dragonball.fandom.com/wiki/Weighted_Clothing';
                    break;
                case "ses":
                    mensagem = 'Faça um desejo super poderoso! ...';
                    link = 'https://dragonball.fandom.com/wiki/Super_Dragon_Balls';
                    break;
                default:
                    mensagem = 'Item desconhecido';
                    link = '#';
            }
            
            frasePersonDiv.innerHTML = mensagem;

        });

        iImg.addEventListener("click", ()=>{

            window.open(link, "_blank");

        });

        iImg.addEventListener("mouseout", ()=>{

            frasePersonDiv.style.display = "none";

            mensagem = "";

            link = "";

        });

    });

});