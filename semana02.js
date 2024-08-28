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
