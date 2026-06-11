let tamanhoFonte = 16;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    tamanhoFonte -= 2;

    if (tamanhoFonte < 12) {
        tamanhoFonte = 12;
    }

    document.body.style.fontSize = tamanhoFonte + "px";
}