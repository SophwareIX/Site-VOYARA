// Espera o carregamento total da página
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#comprar form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Aqui você pode personalizar a mensagem
        alert('Compra realizada com sucesso! ✈️\nA Voyara agradece pela preferência.');

        // Opcional: limpar o formulário após o envio
        form.reset();
    });
});
