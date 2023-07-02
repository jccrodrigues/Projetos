function handleClick(event) {

  /*

  event.preventDefault() = O comando possibilita que o valor inputNumber.value que está dentro do 
  console.log seja retornado no console do navegador e permace para ser visto... Digo isso, pois se 
  o comando  event.preventDefault() não estivesse nessa função, o inputNumber.value não iria 
  ficar visível no console do navegador.

  */
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  console.log(inputNumber.value)
}
