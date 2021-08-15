

darwAll()

function darwAll(){

    const body = document.getElementById('body');
    let size = 58
    let sizeV = 23
    let counterV = 0
    for (let i = 1; i < size+1; i++) {
    body.innerHTML += "<img src=\"../assets/img/" + i + "i.png\">"
        const decider = Math.random() * 100
        if(decider < 30 && counterV < sizeV+1){
            counterV = counterV + 1
             body.innerHTML += "<video autoplay muted loop controls=\"controls\">" +
             "<source src=\"../assets/vid/v (" + counterV + ").webm\"" + 
             "</video>"
            // body.innerHTML += "<div>" + counterV + "</div>"
        }
    }

}