//let fechasArray = [];
const proximasFechasElement = document.querySelector("#fechas");
const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const videosWrapper = document.querySelector("#videosWrapper");
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
    if(array.length<=0){
        //console.log("Empty array");
        let sinFechasElement = document.createElement("h2");
        sinFechasElement.textContent = "Por el momento no hay fechas disponibles";
        sinFechasElement.style.textAlign = "center";
        proximasFechasElement.append(sinFechasElement);
    }
    array.forEach(element => {
        //if(todavia no pasa la fecha){}
        let elementFecha = new Date(element.fecha+"T23:59:59");
        let fechaHoy = new Date();
        if(elementFecha>fechaHoy){
            proximasFechasElement.append(generadorFecha(element));
        }
        
    });
}

fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=UU30TuJU_DOVSxHBmn4rjm6A&key=AIzaSyDt8iAkMrFpafMHw7rW7R4tu39vGYF36Fw')
    .then(reponse => reponse.json())
    .then(json => {
        //console.log(json);
        for(let i=0; i<=4 ; i++){
            videosWrapper.append(generadorVideo(json.items[i]));
        }
    })

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

    //console.log(fecha.ciudad +": " + fecha.fecha);
    let fechaDate = new Date(fecha.fecha+"T00:00:00");
    //console.log(fechaDate);
    diaElemento.textContent = fechaDate.getDate();
    //console.log(fechaDate.getMonth());
    mesElemento.textContent = mesesNombres[fechaDate.getMonth()];
    ciudadElemento.textContent = fecha.ciudad;
    lugarElemento.textContent = fecha.lugar;

    boletosBtn.target = "_blank";
    boletosBtn.href = fecha.linkBoletera;
    boletosBtn.classList.add("fecha-boton");

    if(!fecha.soldOut){
        boletosBtn.textContent = "Boletos"
    } else{
        boletosBtn.classList.add("fecha-boton-agotados");
        boletosBtn.textContent = "Agotados"
    }

    

    fechaElemento.append(diaElemento, mesElemento, ciudadElemento, lugarElemento, boletosBtn);


    return fechaElemento;
}

function generadorVideo(video){
    let videoContainerElement = document.createElement("a");
    let videoThumbnailElement = document.createElement("img");
    let videoTitleElement = document.createElement("div");

    videoContainerElement.href = `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`;
    videoContainerElement.target = "_blank";
    videoContainerElement.classList.add("videoContainer");

    videoThumbnailElement.src = video.snippet.thumbnails.maxres.url;
    videoThumbnailElement.alt = `La imagen thumbnail para el video: "${video.snippet.title}"`;
    videoThumbnailElement.classList.add("videoThumbnail");

    videoTitleElement.textContent = video.snippet.title;
    videoTitleElement.classList.add("videoTitle");

    videoContainerElement.append(videoThumbnailElement, videoTitleElement);

    return videoContainerElement;
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




/*

*/