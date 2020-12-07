console.log('*** Consumo de api ***');

const equipos = "https://www.balldontlie.io/api/v1/teams";

const getData = (api) => {

    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            imprimirEquipos(json)
        })
        .catch((error) => {
            console.log("Error: ", error)
        })

}

//let TodoDatos = "";
const imprimirEquipos = (datos) => {
    //TodoDatos = datos;
    //Paginar();

    let html = "";
    datos.data.forEach(matachito => {
        html += `<div class="Cards">`;
        html += `<div>`;
        html += `<h1 class="txth1">${matachito.name}</h1>`;
        html += `<br/>`
        html += `</div>`;
        html += `<div>`;
        if (matachito.name == "Hawks") {
            html += `<img class="foto" src="assets/img/Equipos/Hawks.png">`;
        } else if(matachito.name == "Celtics"){
            html += `<img class="foto" src="assets/img/Equipos/Celtic.png">`;
        } else if(matachito.name == "Nets"){
            html += `<img class="foto" src="assets/img/Equipos/Nets.png">`;
        } else if(matachito.name == "Hornets"){
            html += `<img class="foto" src="assets/img/Equipos/Hornets.png">`;
        } else if(matachito.name == "Bulls"){
            html += `<img class="foto" src="assets/img/Equipos/Bulls.png">`;
        } else if(matachito.name == "Cavaliers"){
            html += `<img class="foto" src="assets/img/Equipos/Cavaliers.png">`;
        } else if(matachito.name == "Mavericks"){
            html += `<img class="foto" src="assets/img/Equipos/Mavericks.png">`;
        } else if(matachito.name == "Nuggets"){
            html += `<img class="foto" src="assets/img/Equipos/Nuggets.png">`;
        } else if(matachito.name == "Pistons"){
            html += `<img class="foto" src="assets/img/Equipos/Pistons.png">`;
        } else if(matachito.name == "Warriors"){
            html += `<img class="foto" src="assets/img/Equipos/Warriors.png">`;
        } else if(matachito.name == "Rockets"){
            html += `<img class="foto" src="assets/img/Equipos/Rockets.png">`;
        } else if(matachito.name == "Pacers"){
            html += `<img class="foto" src="assets/img/Equipos/Pacers.png">`;
        } else if(matachito.name == "Clippers"){
            html += `<img class="foto" src="assets/img/Equipos/Clippers.png">`;
        } else if(matachito.name == "Lakers"){
            html += `<img class="foto" src="assets/img/Equipos/Lakers.jpg">`;
        } else if(matachito.name == "Grizzlies"){
            html += `<img class="foto" src="assets/img/Equipos/Grizzlies.png">`;
        } else if(matachito.name == "Heat"){
            html += `<img class="foto" src="assets/img/Equipos/Heat.png">`;
        } else if(matachito.name == "Bucks"){
            html += `<img class="foto" src="assets/img/Equipos/Bucks.png">`;
        } else if(matachito.name == "Timberwolves"){
            html += `<img class="foto" src="assets/img/Equipos/Timberwolves.png">`;
        } else if(matachito.name == "Pelicans"){
            html += `<img class="foto" src="assets/img/Equipos/Pelicans.png">`;
        } else if(matachito.name == "Knicks"){
            html += `<img class="foto" src="assets/img/Equipos/Knicks.png">`;
        } else if(matachito.name == "Thunder"){
            html += `<img class="foto" src="assets/img/Equipos/Thunder.png">`;
        } else if(matachito.name == "Magic"){
            html += `<img class="foto" src="assets/img/Equipos/Magic.png">`;
        } else if(matachito.name == "76ers"){
            html += `<img class="foto" src="assets/img/Equipos/76ers.png">`;
        } else if(matachito.name == "Suns"){
            html += `<img class="foto" src="assets/img/Equipos/Suns.png">`;
        } else if(matachito.name == "Trail Blazers"){
            html += `<img class="foto" src="assets/img/Equipos/Trail Blazers.png">`;
        } else if(matachito.name == "Kings"){
            html += `<img class="foto" src="assets/img/Equipos/Kings.png">`;
        } else if(matachito.name == "Spurs"){
            html += `<img class="foto" src="assets/img/Equipos/Spurs.png">`;
        } else if(matachito.name == "Raptors"){
            html += `<img class="foto" src="assets/img/Equipos/Raptors.png">`;
        } else if(matachito.name == "Jazz"){
            html += `<img class="foto" src="assets/img/Equipos/Jazz.png">`;
        } else if(matachito.name == "Wizards"){
            html += `<img class="foto" src="assets/img/Equipos/Wizards.png">`;
        }

        html += `</div>`;
        html += `</div>`;

    });

    document.getElementById("contenido").innerHTML = html;
}


/*  const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

btnPrev.addEventListener('click', () => {

    getData(TodoDatos.meta.prev);


})

btnNext.addEventListener('click', () => {

    getData(TodoDatos.meta.next_page);
    
})

const Paginar = () => {

    if(TodoDatos.meta.prev == null){
        console.log(" Ya no hay mas paginas previas ");
        btnPrev.style = "display: none";
    } else {
        console.log(" Si hay mas paginas previas ");
        btnPrev.style = "display: "
        
    }

    if(TodoDatos.meta.next_page == null){
        console.log(" Ya no hay mas paginas siguientes ");
        btnNext.style = "display: none";

    } else {
        console.log(" Si hay mas paginas siguientes ");
        btnNext.style = "display: "

    }
}*/


getData(equipos)
