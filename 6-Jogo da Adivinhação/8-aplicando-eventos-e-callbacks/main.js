
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// função callback
function handleTryClick(event) {
  /*
  Quando um botão está dentro de um formulário, o comportamento padrão dele é funcionar 
  como um gatilho para o processo de envio desse formulário... No caso, é como se a página 
  se atualiza-se... Para o processo em questão dar certo, precisamos do event.preventDefault(), 
  para que ele tire o comportamento padrão desse botão dentro do formulário.

  */
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector(
      '.screen2 h2'
    ).innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}

// Eventos
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', function () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  xAttempts = 1
})
