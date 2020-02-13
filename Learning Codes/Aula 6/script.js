function main(){
    var nome = window.prompt("Nome: ")
    var idade = window.prompt("Idade: ")
    var salar = Number(window.prompt("Salario: "))
    document.write(`Seu nome é <strong>${nome.toUpperCase()}</strong></br> `)
    document.write(`Você tem <strong>${idade}</strong> anos</br>`)
    document.write(`Você ganha <strong>${salar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>`)
}