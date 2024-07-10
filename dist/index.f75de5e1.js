AOS.init();
const dataEvento = new Date("dec 07, 2024 03:00:00");
const timeStampEvento = dataEvento.getTime();
const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaEvento = timeStampEvento - timeStampAtual;
    const minutoMs = 60000;
    const horasMs = minutoMs * 60;
    const diasMs = horasMs * 24;
    const diasEvento = Math.floor(distanciaEvento / diasMs);
    const horasEvento = Math.floor(distanciaEvento % diasMs / horasMs);
    const minutosEvento = Math.floor(distanciaEvento % horasMs / minutoMs);
    const segundosEvento = Math.floor(distanciaEvento % minutoMs / 1000);
    document.getElementById("contador").innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;
    if (distanciaEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
