opcoesJogador = document.querySelectorAll('#player img');

opcoesComputador = document.querySelectorAll('#pc img');

resultadoTexto = document.querySelector('#result h1');

bodyCor = document.querySelector('body');

optJogador = '';
optComputador = '';

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
		resultadoTexto.innerHTML = 'EMPATE!';
		bodyCor.style.backgroundColor = '#b2b2b2';
	} else if (optJogador == 'rock') {
		if (optComputador == 'scissor') {
			resultadoTexto.innerHTML = 'GANHOU!';
			bodyCor.style.backgroundColor = '#c6fab2';
		} else if (optComputador == 'paper') {
			resultadoTexto.innerHTML = 'PERDEU!';
			bodyCor.style.backgroundColor = '#f7a6a6';
		}
	} else if (optJogador == 'paper') {
		if (optComputador == 'rock') {
			resultadoTexto.innerHTML = 'GANHOU!';
			bodyCor.style.backgroundColor = '#c6fab2';
		} else if (optComputador == 'scissor') {
			resultadoTexto.innerHTML = 'PERDEU!';
			bodyCor.style.backgroundColor = '#f7a6a6';
		}
	} else if (optJogador == 'scissor') {
		if (optComputador == 'paper') {
			resultadoTexto.innerHTML = 'GANHOU!';
			bodyCor.style.backgroundColor = '#c6fab2';
		} else if (optComputador == 'rock') {
			resultadoTexto.innerHTML = 'PERDEU!';
			bodyCor.style.backgroundColor = '#f7a6a6';
		}
	}
}

for (var i = 0; i < opcoesJogador.length; i++) {
	opcoesJogador[i].addEventListener('click', (t) => {
		optJogador = t.target.getAttribute('opt');
		resetaJogador();
		t.target.style.opacity = 1;

		jogadaComputador();
		resultado();
	});
}
