//let fechasArray = [];
const proximasFechasElement = document.querySelector("#proximasFechas");

//Obtiene las fechas desde el archivo fechas.json
fetch('./fechas.json')
    .then(response => response.json())
    .then(json => {
        //console.log(json.fechas);
        //fechasArray=[...json.fechas]
        //console.log(fechasArray);
        agregarFechas(json.fechas);
    });

function agregarFechas(array){
    array.forEach(element => {
        proximasFechasElement.append(generadorFecha(element));
    });
}

//Funcion para generar cada fecha como un elemento renglon
function generadorFecha(fecha){
    const fechaElemento = document.createElement("div");
    fechaElemento.textContent = fecha.ciudad;
    if(fecha.soldOut){
        fechaElemento.textContent = "No hay boletos :(";
    }
    return fechaElemento;
}


