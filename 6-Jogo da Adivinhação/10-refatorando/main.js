/*

Resumo dos processos.

1-Guarde a seleção do elemento na variável.

2-O evento especifica através de qual ação a função será chamada e 
chama a função em questão.

3-A função é chamada e executa a linha de código em questão.



*/



// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})


// funções
function handleTryClick(event) {
    event.preventDefault() // nao faca o padrao

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        /*

        InnerText, faz a substituição de todo o texto da tag h2, pelo texto especificado 
        depois do sinal de =

        */

        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

/*

toogle faz o seguinte, ele troca o estado da classe, tipo, se hide está ativo ele desativa, se 
hide está desativado ele ativa.

No caso abaixo, screen 1 não tem hide, então screen 1 recebe hide e fica invisível, como 
screen 2 já tem hide na sua tag, isso quer dizer que screen 2 , vai perder o hide, pois o toogle
entende que se screen 2 já tem i hide, agora screen 2 vai perder o hide.

*/
function toggleScreen() {

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}