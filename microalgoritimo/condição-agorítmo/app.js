// let dia = prompt("Digite um número de 1 a 7")

// dia %= 7
/*
if(dia == 1){
    console.log('Domingo')
} else if(dia==2){
    console.log('Segunda')
} else if(dia==3){
    console.log('Terça')
} else if (dia==4){
    console.log('Quarta')
} else if (dia==5){
    console.log("Quinta")
} else if(dia==6){
    console.log('Sexta')
} else if(dia==0){
    console.log('Sábado')
}else{  
    console.log('Número Inválido')
}   
*/

let resultado = document.getElementById("resultado")
let dia = parseInt(document.getElementById("dia").value)

document.getElementById("dia").addEventListener('change', () => {

    let dia = parseInt(document.getElementById("dia").value)

    switch (dia) {
        case 1:
            console.log("DOMINGO")
            resultado.innerHTML += "DOMINGO "
            break

        case 2:
            console.log("SEGUNDA-FEIRA")
            resultado.innerHTML += "SEGUNDA "
            break

        case 3:
            console.log("TERÇA-FEIRA")
            resultado.innerHTML += "TERÇA "
            break

        case 4:
            console.log("QUARTA-FEIRA")
            resultado.innerHTML += "QUARTA "
            break

        case 5:
            console.log("QUINTA-FEIRA")
            resultado.innerHTML += "QUINTA "
            break

        case 6:
            console.log("SEXTA-FEIRA")
            resultado.innerHTML += "SEXTA "
            break

        case 7:
            console.log("SÁBADO")
            resultado.innerHTML += "SÁBADO "
            break
            
            default:
                resultado.innerHTML = ""
            break
    }

})