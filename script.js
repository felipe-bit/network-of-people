function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    // Captura a mensagem do usuário
    const userMessage = userInput.value;

    // Adiciona a mensagem do usuário ao chat
    chatBox.innerHTML += <div class="message user-message">${userMessage}</div>;

    // Limpa o campo de entrada
    userInput.value = '';

    // Resposta do bot após um pequeno atraso
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        chatBox.innerHTML += <div class="message bot-message">${botResponse}</div>;

        // Rola para a parte inferior do chat
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotResponse(input) {
    const responses = {
        "oi": "Olá! Como posso ajudar?",
        "quais os projetos eu posso participar?": "Clique em  na area projetos que la esta os projetos recomendaddos para voce",
        "vcs pagam bem?":"Sua remuneração em algu projeto vai ser relativa a sua participação no projeto",
        "qual é o seu nome?": "Sou o 50 , e estou aqui para ajudar!",
        "tchau": "Até logo! Volte sempre!",
    };

    // Retorna a resposta do bot ou uma mensagem padrão se não encontrar
    return responses[input.toLowerCase()] || "Desculpe, não entendi sua mensagem.";
}