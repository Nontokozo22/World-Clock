function selectCity(event){
 if(event.target.value === "Perth"){
let perthTime = moment().tz("Australia/Perth").format("LLLL");
alert(`It is ${perthTime} in ${event.target.value}`)
}

if(event.target.value === "Jamaica"){
    let jamaicaTime = moment().tz("America/Jamaica").format("LLLL");
    alert(`It is ${jamaicaTime} in ${event.target.value}`);
}
if(event.target.value === "Nairobi"){
    let nairobiTime = moment().tz("Africa/Nairobi").format("LLLL");
    alert(`It is ${nairobiTime} in ${event.target.value}`)
}

 

}


let displayTime = document.querySelector("#capital-city");
displayTime.addEventListener("change", selectCity)

