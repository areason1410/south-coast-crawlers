
fetch("http://localhost:3000/south-coast-crawlers/accounts")
.then(response => response.json())
.then(data => console.log(data))
