
opcoesJogador = document.querySelectorAll(".jogador .container-opcoes img");

opcoesComputador = document.querySelectorAll('.computador .container-opcoes img');

resultadoTexto = document.querySelector(".resultado");

bodyCor = document.querySelector("body");

optJogador = "";
optComputador = "";

function resetaJogador() {
    for (var i = 0; i < opcoesJogador.length; i++) {
        opcoesJogador[i].style.opacity = 0.4;
    }
}

function resetaComputador() {
    for (var i = 0; i < opcoesComputador.length; i++) {

        opcoesComputador[i].style.opacity = 0.4;

    }
}

function jogadaComputador() {
    let rand = Math.floor(Math.random() * 3);
    resetaComputador();
    for (var i = 0; i < opcoesComputador.length; i++) {
        if (i == rand) {
            optComputador = opcoesComputador[i].getAttribute('opt');
            opcoesComputador[i].style.opacity = 1;
        }
    }
}

function resultado() {
    if (optJogador == optComputador) {
        resultadoTexto.innerHTML = "<p>E</p><p>M</p><p>P</p><p>A</p><p>T</p><p>E</p><p>!</p>";
        bodyCor.style.backgroundColor = "#7b7b7b";
    } else if (optJogador == "pedra") {
        if (optComputador == "tesoura") {
            resultadoTexto.innerHTML = "<p>G</p><p>A</p><p>N</p><p>H</p><p>O</p><p>U</p><p>!</p>";
            bodyCor.style.backgroundColor = "#bdf7a6";
        } else if (optComputador == "papel") {
            resultadoTexto.innerHTML = "<p>P</p><p>E</p><p>R</p><p>D</p><p>E</p><p>U</p><p>!</p>";
            bodyCor.style.backgroundColor = "#f7a6a6";
        }
    } else if (optJogador == "papel") {
        if (optComputador == "pedra") {
            resultadoTexto.innerHTML = "<p>G</p><p>A</p><p>N</p><p>H</p><p>O</p><p>U</p><p>!</p>";
            bodyCor.style.backgroundColor = "#bdf7a6";
        } else if (optComputador == "tesoura") {
            resultadoTexto.innerHTML = "<p>P</p><p>E</p><p>R</p><p>D</p><p>E</p><p>U</p><p>!</p>";
            bodyCor.style.backgroundColor = "#f7a6a6";
        }
    } else if (optJogador == "tesoura") {
        if (optComputador == "papel") {
            resultadoTexto.innerHTML = "<p>G</p><p>A</p><p>N</p><p>H</p><p>O</p><p>U</p><p>!</p>";
            bodyCor.style.backgroundColor = "#bdf7a6";
        } else if (optComputador == "pedra") {
            resultadoTexto.innerHTML = "<p>P</p><p>E</p><p>R</p><p>D</p><p>E</p><p>U</p><p>!</p>";
            bodyCor.style.backgroundColor = "#f7a6a6";
        }
    }
}

for (var i = 0; i < opcoesJogador.length; i++) {
    opcoesJogador[i].addEventListener("click", (t) => {
        optJogador = t.target.getAttribute("opt");
        resetaJogador();
        t.target.style.opacity = 1;

        jogadaComputador();
        resultado();
    })
}

