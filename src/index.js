function selectCity(event){
 if( event.target.value.length > 0 ){
    let currentTime = moment().tz(event.target.value).format("LLLL");
    
    alert(`It is ${currentTime} in ${event.target.value}`)
 }

}


let displayTime = document.querySelector("#capital-city");
displayTime.addEventListener("change", selectCity)