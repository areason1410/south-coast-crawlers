//placeholder event = 60acf26b00f321e4e88ec902/60ab6bac861e918a606f942f
const dbUrl = "http://localhost:3000/south-coast-crawlers/";
databaseRequest(dbUrl+ "events/60acf26b00f321e4e88ec902/60ab6bac861e918a606f942f", "GET").then(data => {
    data.users.sort((a, b) => a.points - b.points);
    var index = 1;
    data.users.forEach(user => {
        console.log(user)
        const aPosition = document.createElement("div");
        const position = document.createElement("p");
        const dot = document.createElement("span");
        const name = document.createElement("name");
        
        aPosition.classList.add("aPosition");
        position.classList.add("position");
        dot.classList.add("dot");
        name.classList.add("name");

        position.innerHTML = index;
        databaseRequest(dbUrl + `accounts/${user.userID}`, "GET").then(user => {
            name.innerHTML = user.name
        })

        aPosition.appendChild(position)
        aPosition.appendChild(dot)
        aPosition.appendChild(name)
        document.querySelector(".leaderboard").appendChild(aPosition)


        index++;
    });
})
