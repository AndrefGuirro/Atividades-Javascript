    
function solicitarNumero() {
    let numero;

    do {
        numero = prompt("Por favor, digite um número inteiro positivo:");
        
        // Tente converter o número em inteiro
        numero = parseInt(numero, 10);
        
        // Verifique se o número é um inteiro positivo
        if (Number.isInteger(numero) && numero > 0) {
            break;
        } else {
            alert("Entrada inválida. Por favor, digite um número inteiro positivo.");
        }
    } while (true);

    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
}

solicitarNumero();