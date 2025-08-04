const areajogo = document.getElementById('area-jogo');
const iniciarBtn = document.getElementById('iniciar');
const respostaDiv = document.getElementById('resposta');
const inputResposta = document.getElementById('inputResposta');
const enviarBtn = document.getElementById('enviar');
const resultado = document.getElementById('resultado');
let totalQuadrados = 0;

function gerarQuadrados() {
    areajogo.innerHTML = '';
    totalQuadrados = Math.floor(Math.random() * 6) + 5;
    for (let i = 0; i < totalQuadrados; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.left = Math.random() * 270 + 'px';
        square.style.top = Math.random() * 270 + 'px';
        areajogo.appendChild(square);
    }
}
iniciarBtn.addEventListener('click', () => {
    respostaDiv.style.display = 'none';
    resultado.textContent = '';
    gerarQuadrados();
    iniciarBtn.disabled = true;
    setTimeout(() => {
        areajogo.innerHTML = '';
        respostaDiv.style.display = 'block';
        inputResposta.focus();
    }, 3000);
});

enviarBtn.addEventListener('click', () => {
    const valor = parseInt(inputResposta.value);
    if (isNaN(valor)) return;
    if (valor === totalQuadrados) {
        resultado.textContent = '✅ Acertou! Parabéns!';
        resultado.style.color = `ligthgreen`;
} else {
    resultado.textContent = `❌ Errou! Era ${totalQuadrados}.`;
    resultado.style.color = 'tomato';
}
iniciarBtn.disabled = false;
});
