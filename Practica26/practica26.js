//Creacion de arreglos donde guardaremos las respuestas y las imagenes.
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
let correcta = [1,0,2,1,2,0,1];
let opciones = [];

//Con el  push se ingresan los elementos al arreglo 
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

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
    //llamada a maravilla
    cargarMaravilla();

}

//Funcion para cargar los svg de las maravillas
function cargarMaravilla(){
    //Lee el tamaño del arreglo de las maravillas para terminar el juego
    if(maravillas.length <= posActual){
        //Terminar juego
        terminarJuego();
    }
    else{
        //Limpiar opciones
        limpiarOpciones();

        //Optiene los ids del archivo html
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

//Limpia opciones del juego
function limpiarOpciones(){
    //Optiene los ids del archivo html
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
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
    //suma al contador de maravillas
    posActual++;
    setTimeout(cargarMaravilla,1000);
}

//Terminar el juego
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //Respuestas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

//Volver a iniciar el juego
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}