document.getElementById("atendimentoForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita o recarregamento da página
    const nome = document.getElementById("nome").value;
    const setor = document.getElementById("setor").value;

    // Armazenar dados para acesso na outra página
    localStorage.setItem("nome", nome);
    localStorage.setItem("setor", setor);

    // Limpa os campos após o envio
    document.getElementById("nome").value = '';
    document.getElementById("setor").value = 'Vendas'; // Define de volta para o valor padrão, se desejado

    // Notificação de sucesso (opcional)
    alert("Atendimento registrado com sucesso!");

    // Agenda a limpeza do localStorage para daqui a 30 segundos
    setTimeout(function() {
        localStorage.removeItem("nome");
        localStorage.removeItem("setor");
    }, 100000); // 30000 milissegundos = 30 segundos
});
