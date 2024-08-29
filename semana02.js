document.addEventListener('DOMContentLoaded', () => {
    const dataAtualElement = document.getElementById('dataAtual');

    function formatarData(data) {
        const diasSemana = [
            'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
            'Quinta-feira', 'Sexta-feira', 'Sábado'
        ];
        const meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];

        const diaSemana = diasSemana[data.getDay()];
        const dia = data.getDate();
        const mes = meses[data.getMonth()];
        const ano = data.getFullYear();

        return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    }

    const dataAtual = new Date();
    dataAtualElement.textContent = formatarData(dataAtual);
});

// Função Exibir relógio , hora atual
function atualizarRelogio() {
    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const horarioFormatado = `${horas}:${minutos}:${segundos}`;
    
    document.getElementById("relogio").textContent = horarioFormatado;

    
    setTimeout(atualizarRelogio, 1000);
}

atualizarRelogio();

//Função Palíndromo
function verificarPalindromo() {
    
    var texto = document.getElementById("entradaTexto").value;//digitação do texto 
    var textoSemEspaco = texto.replace(/\s+/g, '');//remove espaços
    var Positivo = textoSemEspaco === textoSemEspaco.split('').reverse().join('');//verificação

    if (Positivo) {
        alert('O texto é um palíndromo!\nÉ a mesma palavra escrita de trás para frente');
    } else {
        alert('O texto não é um palíndromo.\nA palavra muda o sentido ao ser montada de trás para frente');
    }
}

