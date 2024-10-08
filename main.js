const palavras = [
    "algoritmo",
    "binario",
    "byte",
    "cache",
    "codigo",
    "compilador",
    "computador",
    "cpu",
    "criptografia",
    "dados",
    "depuracao",
    "disco rigido",
    "dns",
    "driver",
    "es entradasaida",
    "ethernet",
    "firewall",
    "firmware",
    "fonte",
    "formatacao",
    "framework",
    "gigabyte",
    "gpu",
    "hardware",
    "hash",
    "html",
    "ide ambiente de desenvolvimento integrado",
    "injecao sql",
    "inteligencia artificial",
    "interface",
    "ip protocolo de internet",
    "kernel",
    "logica",
    "loop",
    "machine learning",
    "malware",
    "memoria",
    "modem",
    "monitor",
    "multitarefa",
    "navegador",
    "nuvem",
    "operacoes",
    "pacote",
    "padrao",
    "paridade",
    "patch",
    "periferico",
    "pixel",
    "placa-mae",
    "porta",
    "processador",
    "programacao",
    "protocolo",
    "proxy",
    "ram",
    "rede",
    "repositorio",
    "resolucao",
    "rom",
    "script",
    "seguranca",
    "semaforo",
    "sensor",
    "servidor",
    "shell",
    "simulacao",
    "sistema",
    "smtp",
    "software",
    "spam",
    "spyware",
    "ssd",
    "ssh",
    "streaming",
    "switch",
    "tarefa",
    "tcpip",
    "teclado",
    "tela",
    "template",
    "token",
    "trojan",
    "udp",
    "unicode",
    "upload",
    "usb",
    "usuario",
    "virus",
    "virtualizacao",
    "vpn",
    "web",
    "websocket",
    "wifi",
    "xml",
    "zip",
    "zeramento",
    "zona",
    "zbuffer"
];


// Lista de palavras possíveis para o jogo

let palavraEscolhida = ""; 
// Variável que armazenará a palavra escolhida

let tentativasRestantes = 6; 
// Número máximo de tentativas que o jogador tem

let letrasErradas = []; 
// Array que armazenará as letras erradas

let palavraMostrada = []; 
// Array que armazenará a palavra a ser mostrada (com letras adivinhadas)

function iniciarJogo() {
    
    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)]; 
    // Escolhe uma palavra aleatoriamente da lista

    for (let i = 0; i < palavraEscolhida.length; i++) {
        palavraMostrada[i] = "_"; 
        // Inicializa a palavra mostrada com traços para cada letra
    }

    document.getElementById("palavra").innerHTML = palavraMostrada.join(" "); 
    // Exibe os traços na tela

    document.getElementById("tentativas-restantes").innerHTML = `Tentativas restantes: ${tentativasRestantes}`; 
    // Exibe o número de tentativas restantes

    document.getElementById("letras-erradas").innerHTML = `Letras erradas: ${letrasErradas.join(", ")}`; 
    // Exibe as letras erradas (nenhuma no início)
}

function adivinharLetra() {
    const letra = document.getElementById("input-letra").value.toLowerCase(); 
    // Pega a letra digitada pelo usuário e converte para minúscula

    document.getElementById("input-letra").value = ""; 
    // Limpa o campo de input

    if (letrasErradas.includes(letra) || palavraMostrada.includes(letra)) {
        alert("Você já escolheu essa letra!"); 
        // Alerta se a letra já foi adivinhada antes
        return;
    }

    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                palavraMostrada[i] = letra; 
                // Substitui o traço pela letra correta
            }
        }
        document.getElementById("palavra").innerHTML = palavraMostrada.join(" "); 
        // Atualiza a palavra mostrada
    } else {
        letrasErradas.push(letra); 
        // Adiciona a letra errada ao array de letras erradas
        tentativasRestantes--; 
        // Diminui o número de tentativas restantes
    }

    document.getElementById("tentativas-restantes").innerHTML = `Tentativas restantes: ${tentativasRestantes}`; 
    // Atualiza o número de tentativas restantes

    document.getElementById("letras-erradas").innerHTML = `Letras erradas: ${letrasErradas.join(", ")}`; 
    // Atualiza a lista de letras erradas

    verificarFimDeJogo(); 
    // Verifica se o jogo acabou

}

function verificarFimDeJogo() {
    if (!palavraMostrada.includes("_")) {
        alert(`Parabéns! Você ganhou! A palavra era ${palavraEscolhida}`); 
        // Se não houver mais traços, o jogador venceu
        letrasErradas = [];

        for (let i = 0; i < palavraEscolhida.length; i++) {
            palavraMostrada[i] = ""; 
        }

        iniciarJogo(); 
        // Reinicia o jogo
        tentativasRestantes = 6;
        document.getElementById("tentativas-restantes").innerHTML = `Tentativas restantes: ${tentativasRestantes}`;
    } else if (tentativasRestantes === 0) {
        alert(`Você perdeu! A palavra era: ${palavraEscolhida}`); 
        // Se acabaram as tentativas, o jogador perdeu
        letrasErradas = [];

        for (let i = 0; i < palavraEscolhida.length; i++) {
            palavraMostrada[i] = ""; 
        }

        iniciarJogo(); 
        // Reinicia o jogo
        tentativasRestantes = 6;
        document.getElementById("tentativas-restantes").innerHTML = `Tentativas restantes: ${tentativasRestantes}`;
    }
}

window.onload = iniciarJogo; 
// Inicia o jogo quando a página é carregada
