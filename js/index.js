

darwAll()

function darwAll(){

    const body = document.getElementById('body');
    let size = 66
    let sizeV = 27
    let counterV = 0
    for (let i = 1; i < size+1; i++) {
    body.innerHTML += "<img src=\"./assets/img/" + i + "i.png\">"
        const decider = Math.random() * 100
        if(decider < 50 && counterV < sizeV){
            counterV = counterV + 1
             body.innerHTML += "<video muted loop controls=\"controls\">" +
             "<source src=\"./assets/vid/v (" + counterV + ").webm\"" + 
             "</video>"
            // body.innerHTML += "<div>" + counterV + "</div>"
        }
    }

}