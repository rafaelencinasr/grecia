//let fechasArray = [];
const proximasFechasElement = document.querySelector("#fechas");
const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

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
    const diaElemento = document.createElement("div");
    const mesElemento = document.createElement("div");
    const ciudadElemento = document.createElement("div");
    const lugarElemento = document.createElement("div");
    const boletosBtn = document.createElement("a");

    fechaElemento.classList.add("fechaGrid");
    diaElemento.classList.add("fecha-dia");
    mesElemento.classList.add("fecha-mes");
    ciudadElemento.classList.add("fecha-ciudad");
    lugarElemento.classList.add("fecha-lugar");
    boletosBtn.classList.add("fecha-boton");
    boletosBtn.textContent = "Boletos"
    boletosBtn.target = "_blank"

    console.log(fecha.ciudad +": " + fecha.fecha);
    let fechaDate = new Date(fecha.fecha+"T00:00:00");
    console.log(fechaDate);
    diaElemento.textContent = fechaDate.getDate();
    console.log(fechaDate.getMonth());
    mesElemento.textContent = mesesNombres[fechaDate.getMonth()];
    ciudadElemento.textContent = fecha.ciudad;
    lugarElemento.textContent = fecha.lugar;
    boletosBtn.href = fecha.linkBoletera;

    fechaElemento.append(diaElemento, mesElemento, ciudadElemento, lugarElemento, boletosBtn);


    return fechaElemento;
}


const galeria1 = document.querySelector("#galeria1");

galeria1.addEventListener("click",()=>{
    console.log("Clicked on image 1");

    /*
    galeria1.style.position = "fixed";
    galeria1.style.width = "75vw";
    galeria1.style.height = "auto";
    galeria1.style.top = "0";
    galeria1.style.right = "0";
*/

})

