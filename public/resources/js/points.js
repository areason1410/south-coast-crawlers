const dbUrl = "http://localhost:3000/south-coast-crawlers/";
var points = Number(localStorage.getItem("points"));
updatePoints();

databaseRequest(dbUrl + "ruleset/60e1c43bd63c1a3e66a17024", "GET").then(data => {
    Object.entries(data).forEach(entry => {
        if(entry[0] !== "_id" && entry[0] !== "ruleset") {
            addPen(entry)
            console.log(entry)
        }
    })
})

function addPen(penalty) {
    //create elements
    var penaltyCard = document.createElement("div");
    var penaltyName = document.createElement("p");
    var penaltyVal = document.createElement("p");
    var buttonDiv = document.createElement("div");
    var penaltyIncrement = document.createElement("div");
    var penaltyDecrement = document.createElement("div");
    
    
    //add classlists
    penaltyCard.classList.add("penaltyCard");
    penaltyName.classList.add("penaltyName");
    penaltyVal.classList.add("penaltyVal");
    buttonDiv.classList.add("pointButtons")
    penaltyIncrement.classList.add("pointButton");
    penaltyIncrement.classList.add("increment");
    penaltyDecrement.classList.add("pointButton");
    penaltyDecrement.classList.add("decrement");
    
    //adding inner texts
    penaltyName.innerText = penalty[0];
    penaltyVal.innerText = penalty[1];
    penaltyIncrement.innerText = "+";
    penaltyDecrement.innerText = "-";
    
    //append to the main div
    penaltyCard.appendChild(penaltyName);
    penaltyCard.appendChild(penaltyVal);
    buttonDiv.appendChild(penaltyDecrement);
    buttonDiv.appendChild(penaltyIncrement);
    penaltyCard.appendChild(buttonDiv);
    
    //adding event listeners
    penaltyIncrement.addEventListener("click", () => {
        points += penalty[1];
        updatePoints();
    })
    
    penaltyDecrement.addEventListener("click", () => {
        
        if ((points - penalty[1]) >= 0) {
            points -= penalty[1];
            updatePoints();
        }
    })
    
    document.querySelector(".content").appendChild(penaltyCard);
}

function updatePoints() {
    document.getElementById("points").innerText = points;
}

window.onbeforeunload = () => {
    localStorage.setItem("points", points)
}