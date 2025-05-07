let btn = document.getElementById('btn')
let clear_btn = document.getElementById('clean')
let result = document.getElementById('resultado')

let nomes = []

function cadastrar(){
    let nome_form = document.getElementById('nome').value

    nomes.push(nome_form[0].toUpperCase()+nome_form.substring(1))
    console.table(nomes)
    
    result.innerHTML = ''

    for(let i=0; i < nomes.length; i++){
        result.innerHTML += `<tr>
                                <td> ${i}</td>
                                <td> ${nomes[i]}</td>
                             </tr>`
    }

    clear()
}

function clear(){
    document.getElementById('nome').value = ''
    document.getElementById('nome').focus()
}

function clean(){
    nomes = []
    result.innerHTML = ''
}

btn.addEventListener('click', cadastrar)
document.getElementById('nome').addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        cadastrar()
    }
})

clear_btn.addEventListener('click', clean)