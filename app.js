function sortear() {
    const amount = parseInt(document.getElementById("quantidade").value);
    const min = parseInt(document.getElementById("de").value);
    const max = parseInt(document.getElementById("ate").value);

    if (!amount || !min || !max) {
        alert("Preenchar todos os dado");
        return;
    }

    if ( amount > max ) {
        alert("Quantidade inválida");
        return;
    }

    const sweepstake = [];

    for (let i = 0; i < amount; i++) {
        let result;
        result = Math.floor(Math.random() * (max - min + 1) + min)

        while (sweepstake.includes(result)) {
            result = Math.floor(Math.random() * (max - min + 1) + min)
        }

        sweepstake.push(result);
    }

    document.querySelector("div[id='resultado'] > label").innerHTML = `Números sorteados: ${sweepstake}`
    document.getElementById("btn-reiniciar").setAttribute("class", "container__botao")
}

function reiniciar() {

    if (document.getElementById("btn-reiniciar").getAttribute("class") === "container__botao-desabilitado") return;

    const amount = parseInt(document.getElementById("quantidade").value = "");
    const min = parseInt(document.getElementById("de").value = "");
    const max = parseInt(document.getElementById("ate").value = "");

    document.querySelector("div[id='resultado'] > label").innerHTML = `Números sorteados:  nenhum até agora`
    document.getElementById("btn-reiniciar").setAttribute("class", "container__botao-desabilitado")
}

