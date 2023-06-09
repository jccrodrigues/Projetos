const visor = document.querySelector('.visor');
const botoes = document.querySelectorAll('.botoes button');
const botaoIgual = document.querySelector('.botao-igual');

botoes.forEach(botao => {


  botao.addEventListener('click', () => {
    const operador = botao.textContent;

    if (operador === 'C') {
      visor.value = '';
    } else if (operador === '.') {
      // Verificar se o último número já possui um ponto decimal
      const ultimaParte = visor.value.split(/[\s+/*-]/).pop();
      if (!ultimaParte.includes('.')) {
        visor.value += operador;
      }
    } else if ('0123456789'.includes(operador)) {
      visor.value += operador;
    } else {
      visor.value += ` ${operador} `;
    }
  });




});

botaoIgual.addEventListener('click', () => {
  try {
    const resultado = eval(visor.value.replace(/\s/g, ''));
    visor.value = resultado;
  } catch (e) {
    alert('Expressão inválida');
  }
});