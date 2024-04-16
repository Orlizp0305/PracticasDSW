//Funcion para regresar
function Regresar() {
    window.open('practica26.html');
  }

//Creacion de arreglos donde guardaremos las respuestas y las imagenes.
let Personaje = ["Sub-zero.svg", "kirbin.svg", "Steve.svg", "dead.svg", "Sonic.svg","Mario.svg","Master-chief.svg","Megaman.svg","Roblox.svg","amongus.svg"];
let correcta = [1,0,2,1,2,0,1,0,1,2];
let opciones = [];

//Con el  push se ingresan los elementos al arreglo 
opciones.push(["dead", "Sub zero", "kirbin","Roblox"]);
opciones.push(["kirbin", "Mario", "Steve","Megaman"]);
opciones.push(["Sonic", "Master chief", "Steve", "Sub zero"]);
opciones.push(["Mario", "dead", "Master chief","Megaman"]);
opciones.push(["Sub zero", "Mario", "Sonic","Roblox"]);
opciones.push(["Mario", "dead", "Sub zero", "amongus"]);
opciones.push(["kirbin", "Master chief", "Steve","dead"]);
opciones.push(["Megaman", "Master chief", "Steve", "Mario"]);
opciones.push(["amongus", "Roblox", "Megaman","Steve"]);
opciones.push(["Roblox", "Sonic", "amongus","kirbin"]);

//Contadores
let posActual = 0;
let cantidadAcertadas = 0;

//iniciamos
function comenzarJuego(){
    //Contadores
    posActual = 0;
    cantidadAcertadas = 0;
    //Obtiene elementos del html por su id y se utiliza el metodo style para indicar como se mostraran en pantalla
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    //llamada a Personaje
    cargarPersonaje();

}

//Funcion para cargar los svg de las Personaje
function cargarPersonaje(){
    //Lee el tamaño del arreglo de las Personaje para terminar el juego
    if(Personaje.length <= posActual){
        //Terminar juego
        terminarJuego();
    }
    else{
        //Limpiar opciones
        limpiarOpciones();

        //Optiene los ids del archivo html
        document.getElementById("imgPersonaje").src = "img/" + Personaje[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];

    }
}

//Limpia opciones del juego
function limpiarOpciones(){
    //Optiene los ids del archivo html
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

//Comprobar las respuestas
function comprobarRespuesta(opElegida){
//Condicion para la opcion correcta
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        //Suma de acertadas
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    //suma al contador de Personaje
    posActual++;
    setTimeout(cargarPersonaje,1000);
}

//Terminar el juego
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //Respuestas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = Personaje.length - cantidadAcertadas;
}

//Volver a iniciar el juego
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}