let result = document.getElementById('resultado')
let btn = document.getElementById('btn')

function calcular(){

    let num = parseInt(document.getElementById('num').value)
    
    if(num>0){
        result.innerHTML = ''
        for (let i = 0; i<=num; i++) {
            if(i%2 == 0){
                result.innerHTML += `<div class="p-5 alert alert-success col-auto">${i}</div>`
            }else{
                result.innerHTML += `<div class="p-5 alert alert-danger col-auto">${i}</div>`
            }
        }
    } else{
        result.innerHTML = '<h2 class"danger">Número Inválido!!</h2>'
    }

}

document.getElementById('num').addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        calcular()
    }
})
