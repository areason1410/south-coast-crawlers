databaseRequest("http://localhost:3000/south-coast-crawlers/accounts/60a7bc09a4f3c1d60f58d1f9", "GET")
.then(data => {
    console.log(data)
    document.getElementById('profileName').innerHTML = "Name: " + data.name 
    if(data.isAdmin == false) {
        document.getElementById('profileStatus').innerHTML = "Account Status: User"
        document.getElementById('button').style.display = "none"
    } else if (data.isAdmin == true) {
        document.getElementById('profileStatus').innerHTML = "Account Status: Admin"
    } 
    document.getElementById('profileEmail').innerHTML = "email: " + data.email
    document.getElementById('profileDate').innerHTML = "Joined: " + data.creationDate  
})

