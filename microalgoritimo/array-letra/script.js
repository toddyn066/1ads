let btn = document.getElementById('btn')

let result = document.getElementById('resultado')


function calcular(){
    let nome = document.getElementById('nome').value

    console.log(nome.length)
    let vogal = 0

    result.innerHTML = ''

    for(let i = 0; i < nome.length; i++){
        if(nome[i] == 'a' || nome[i] == 'e' || nome[i] == 'i' || nome[i] == 'o' || nome[i] == 'u'){
            vogal++
        }
        console.log(nome)   
        result.innerHTML = ` ${vogal} vogais`
    }
}




btn.addEventListener('click', calcular)