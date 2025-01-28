function selectCity(event){
    

}

let currentTime = moment().tz.guess().format("LLLL");
let displayTime = document.querySelector("#capital-city");
displayTime.addEventListener("click", selectCity)