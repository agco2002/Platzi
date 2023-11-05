
let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){let botonMascotaJugador=document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
let botonFuego=document.getElementById('boton-fuego')
botonFuego.addEventListener('click',ataqueFuego)
let botonAgua=document.getElementById('boton-agua')
botonAgua.addEventListener('click',ataqueAgua)
let botonTierra=document.getElementById('boton-tierra')
botonTierra.addEventListener('click',ataqueTierra)}

function seleccionarMascotaJugador(){
let inputHipodoge=document.getElementById('hipodoge')
let inputCapipepo=document.getElementById('capipepo')
let inputRatigueya=document.getElementById('ratigueya')
let spanMascotaJugador=document.getElementById('mascota-jugador')
if(inputHipodoge.checked){
spanMascotaJugador.innerHTML='Hipodoge'
}else if(inputCapipepo.checked){
spanMascotaJugador.innerHTML='Capipepo'
}else if(inputRatigueya.checked){
spanMascotaJugador.innerHTML='Ratigueya'
}else{alert('Selecciona una mascota')}
seleccionarMascotaEnemigo()}

function seleccionarMascotaEnemigo(){
let mascotaAleatoria=aleatorio(1,3)
let spanMascotaEnemigo=document.getElementById('mascota-enemigo')
if(mascotaAleatoria==1){
spanMascotaEnemigo.innerHTML='Hipodoge'
}else if(mascotaAleatoria==2){
spanMascotaEnemigo.innerHTML='Capipepo'
}else{
spanMascotaEnemigo.innerHTML='Ratigueya'}}

//En esta seccion de codigo cambiamos los alert por la nueva 
//funcion ataqueAleatorioEnemigo esto con el fin de que una vez el jugador seleccione
//la mascota, la pc pueda seleccionar la mascota aleatoria 
function ataqueFuego(){ataqueJugador='FUEGO'
ataqueAleatorioEnemigo()}

function ataqueAgua(){ataqueJugador='AGUA'
ataqueAleatorioEnemigo()}

function ataqueTierra(){ataqueJugador='TIERRA'
ataqueAleatorioEnemigo()}
//Esta funcion le permite a nuestra computadora seleccionar una mascota aleatoriamente 
function ataqueAleatorioEnemigo(){
let ataqueAleatorio=aleatorio(1,3)
if(ataqueAleatorio==1){
ataqueEnemigo='FUEGO'
}else if(ataqueAleatorio==2){
ataqueEnemigo='AGUA'
}else{ataqueEnemigo='TIERRA'}}

function aleatorio(min,max){return Math.floor(Math.random()*(max-min+1)+min)}
window.addEventListener('load',iniciarJuego)