var tempo = document.getElementById("tempo")
var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var iniciaPara = document.getElementById("iniciaPara")

var tempoCorrido
var elementoAlarme
var alarmeAtivo = false
var som = new Audio("alarme.mp3")
som.loop = true

function mostraTempo() {
    var agora = new Date()
    tempoCorrido = agora.toLocaleTimeString()

    if(tempoCorrido == elementoAlarme){
        som.play()
    }

    tempo.textContent = tempoCorrido
    setTimeout(mostraTempo, 1000)
}
mostraTempo()

function adicionaHora(id){
    var select = id
    var min = 23

    for(i = 0; i <= min; i++){
        select.options[select.options.length] = new Option(i < 10? "0" + i : i)
    }
}

function adicionaMinSeg(id){
    var select = id
    var min = 59

    for(i = 0; i <= min; i++){
        select.options[select.options.length] = new Option(i < 10? "0" + i : i)
    }
}
adicionaHora(horas)
adicionaMinSeg(minutos)
adicionaMinSeg(segundos)


iniciaPara.onclick = function(){
    if(alarmeAtivo == false){
        horas.disabled = true
        minutos.disabled = true
        segundos.disabled = true

        elementoAlarme = horas.value + ":" + minutos.value + ":" + segundos.value
        this.textContent = "Limpar alarme"
        alarmeAtivo = true
    }else{
        horas.disabled = false
        minutos.disabled = false
        segundos.disabled = false

        som.pause()
        this.textContent = "Salvar Alarme"
        alarmeAtivo = false
    }
}