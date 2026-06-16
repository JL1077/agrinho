
// ====================
// SLIDES PRINCIPAIS
// ====================

let slideAtual = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(indice){

    slides.forEach(slide=>{
        slide.classList.remove("ativo");
    });

    slideAtual = indice;

    if(slideAtual >= slides.length){
        slideAtual = 0;
    }

    if(slideAtual < 0){
        slideAtual = slides.length - 1;
    }

    slides[slideAtual].classList.add("ativo");
}

function mudarSlide(direcao){
    mostrarSlide(slideAtual + direcao);
}

setInterval(()=>{
    mudarSlide(1);
},5000);


// ====================
// CURIOSIDADES
// ====================

let curiosidadeAtual = 0;
const curiosidades =
document.querySelectorAll(".curiosidade");

function mostrarCuriosidade(){

    curiosidades.forEach(item=>{
        item.classList.remove("ativa-curiosidade");
    });

    curiosidades[curiosidadeAtual]
    .classList.add("ativa-curiosidade");

    curiosidadeAtual++;

    if(curiosidadeAtual >= curiosidades.length){
        curiosidadeAtual = 0;
    }
}

setInterval(mostrarCuriosidade,4000);


// ====================
// ACESSIBILIDADE
// ====================

let tamanhoFonte = 16;

function aumentarFonte(){
    tamanhoFonte += 2;
    document.body.style.fontSize =
    tamanhoFonte + "px";
}

function diminuirFonte(){

    tamanhoFonte -= 2;

    if(tamanhoFonte < 12){
        tamanhoFonte = 12;
    }

    document.body.style.fontSize =
    tamanhoFonte + "px";
}


// ====================
// BRILHO
// ====================

let brilho = 100;

function aumentarBrilho(){

    brilho += 10;

    document.body.style.filter =
    `brightness(${brilho}%)`;
}

function diminuirBrilho(){

    brilho -= 10;

    if(brilho < 50){
        brilho = 50;
    }

    document.body.style.filter =
    `brightness(${brilho}%)`;
}
