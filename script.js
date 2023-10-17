
let somaNotas = 0;
let cinquenta = 50
let dez = 10;
let cinco = 5;
let um = 1;
let contador50 = 0;
let contador10 = 0;
let contador5 = 0;
let contador1 = 0;
let saque = Number(prompt("Qual o valor do saque?"));


while (saque != somaNotas) {
    if (saque < um) {
        document.write("Valor de saque inválido! Somente notas a partir de R$1,00");
    } else if (somaNotas + cinquenta <= saque) {
        somaNotas = somaNotas + cinquenta
        contador50++
    } else if (somaNotas + dez <= saque) {
        somaNotas = somaNotas + dez
        contador10++
    } else if (somaNotas + cinco <= saque) {
        somaNotas = somaNotas + cinco
        contador5++
    } else if (somaNotas + um <= saque) {
        somaNotas = somaNotas + um
        contador1++
    }
};

document.write(`GC$ 50,00 -> ${contador50}<br>`);
document.write(`GC$ 10,00 -> ${contador10}<br>`);
document.write(`GC$ 5,00 -> ${contador5}<br>`);
document.write(`GC$ 1,00 -> ${contador1}<br>`);
