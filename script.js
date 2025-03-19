document.getElementById('sim-button').addEventListener('click', function() {
    // Esconder a foto da veterana e a pergunta 1
    document.getElementById('foto-vet-container').style.display = 'none';
    document.getElementById('pergunta1').style.display = 'none';

    // Exibir a mensagem de agradecimento
    document.getElementById('mensagem-sim').style.display = 'block';

    // Exibir as imagens distribuídas pela tela
    document.getElementById('imagens-sim').style.display = 'flex';

    // Esconder os botões após clicar em "Sim!"
    document.getElementById('sim-button').style.display = 'none';
    document.getElementById('nao-button').style.display = 'none';

    // Mostrar o botão de "Voltar"
    document.getElementById('voltar-button').style.display = 'inline-block';
});

document.getElementById('nao-button').addEventListener('click', function() {
    // Esconder a foto da veterana e a pergunta 1
    document.getElementById('foto-vet-container').style.display = 'none';
    document.getElementById('pergunta1').style.display = 'none';

    // Exibir a pergunta 2
    document.getElementById('pergunta2').style.display = 'block';

    // Esconder os botões após clicar em "Não🙄"
    document.getElementById('sim-button').style.display = 'none';
    document.getElementById('nao-button').style.display = 'none';

    // Mostrar o botão de "Voltar"
    document.getElementById('voltar-button').style.display = 'inline-block';
});

document.getElementById('sim2-button').addEventListener('click', function() {
    // Esconder a pergunta 2 e exibir a mensagem de respeito pela decisão
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('mensagem-nao').style.display = 'block';

    // Esconder os botões após a escolha
    document.getElementById('sim2-button').style.display = 'none';
    document.getElementById('mudei-ideia-button').style.display = 'none';

    // Mostrar o botão de "Voltar"
    document.getElementById('voltar-button').style.display = 'inline-block';
});

document.getElementById('mudei-ideia-button').addEventListener('click', function() {
    // Voltar para a pergunta 1
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta1').style.display = 'block';

    // Exibir novamente os botões de resposta para a pergunta 1
    document.getElementById('sim-button').style.display = 'inline-block';
    document.getElementById('nao-button').style.display = 'inline-block';

    // Esconder o botão de "Voltar"
    document.getElementById('voltar-button').style.display = 'none';
});

// Botão de "Voltar" - Voltar para a página anterior
document.getElementById('voltar-button').addEventListener('click', function() {
    // Caso estamos na página com a mensagem de "Sim!" e as imagens
    if (document.getElementById('mensagem-sim').style.display === 'block') {
        // Esconder a mensagem e as imagens
        document.getElementById('mensagem-sim').style.display = 'none';
        document.getElementById('imagens-sim').style.display = 'none';

        // Voltar para a pergunta 1
        document.getElementById('pergunta1').style.display = 'block';

        // Exibir novamente os botões de resposta para a pergunta 1
        document.getElementById('sim-button').style.display = 'inline-block';
        document.getElementById('nao-button').style.display = 'inline-block';

        // Esconder o botão de "Voltar"
        document.getElementById('voltar-button').style.display = 'none';
    }

    // Caso estamos na página com a mensagem de "Tudo bem, respeito a decisão"
    else if (document.getElementById('mensagem-nao').style.display === 'block') {
        // Esconder a mensagem e voltar para a pergunta 2
        document.getElementById('mensagem-nao').style.display = 'none';
        document.getElementById('pergunta2').style.display = 'block';

        // Exibir novamente os botões de resposta para a pergunta 2
        document.getElementById('sim2-button').style.display = 'inline-block';
        document.getElementById('mudei-ideia-button').style.display = 'inline-block';

        // Esconder o botão de "Voltar"
        document.getElementById('voltar-button').style.display = 'inline-block';
    }

    // Caso estamos na página com a pergunta 2
    else if (document.getElementById('pergunta2').style.display === 'block') {
        // Voltar para a pergunta 1
        document.getElementById('pergunta2').style.display = 'none';
        document.getElementById('pergunta1').style.display = 'block';

        // Exibir novamente os botões de resposta para a pergunta 1
        document.getElementById('sim-button').style.display = 'inline-block';
        document.getElementById('nao-button').style.display = 'inline-block';

        // Esconder o botão de "Voltar"
        document.getElementById('voltar-button').style.display = 'none';
    }
});



