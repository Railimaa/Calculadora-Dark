import calculate from "./calculate.js"

const input = document.querySelector('#input')


export function handleButtonPress(ev){
    const value = ev.currentTarget.dataset.value             //Esse currentTarget sempre vai ser o nosso botao, quando o botao for clicado esse evento vai ser disparado
    input.value += value                                     //data-set para acessar os atributos 'data'...
}

export function handleClearButton(){
    input.value = ''
    input.focus()
}

export function handleTyping(ev){
    ev.preventDefault()
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", ""] //Botões que o usuario vai poder digitar, apenas esses.
    if(allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1) //vai pegar da posicao 0 aé -1, -1 pq ele vai pegar ate o penultimo caracter, vai excluir o ultimo
    }
    if(ev.key === 'Enter'){
        calculate() 
    }
}