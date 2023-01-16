export default function(ev){   //Parametro ev para selecionar o botao, 
    const button = ev.currentTarget
    if(button.innerText === 'Copy') {
         button.innerText = 'Copied!'
         button.classList.add('success')
         navigator.clipboard.writeText(document.querySelector('#result').value)
    } else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}