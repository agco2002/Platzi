//Variables globales: Nos perrmite crear una varible por fuera de las funciones, esto con el fin de poder utilizar esta variable en cualquier funcion

let ataqueJugador
let ataqueEnemigo 

function IniciarJuego(){
    
    let botonMascotaJugador = document.getElementById('boton_mascota');
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    
    let botonFuego = document.getElementById('boton_fuego')
    botonFuego.addEventListener('click', ataqueFuego);

    let botonAgua = document.getElementById('boton_agua')
    botonAgua = document.getElementById('click', ataqueAgua); 

    let botonTierra = document.getElementById('boton_tierra')
    botonTierra = document.getElementById('click', ataqueTierra);
}


function seleccionarMascotaJugador(){
    let input1 = document.getElementById('hipodoge')
    let input2 = document.getElementById('capipepo')
    let input3 = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota_jugador')
    if(input1.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if(input2.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if(input3.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else{
        alert('No sleccionaste una mascota');
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota_enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML= 'Hipodoge'
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML= 'Capipepo'
    }else{
        spanMascotaEnemigo.innerHTML= 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}


window.addEventListener('load', IniciarJuego)