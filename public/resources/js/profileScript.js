databaseRequest("http://localhost:3000/south-coast-crawlers/accounts/60a7bc09a4f3c1d60f58d1f9", "GET")
.then(data => {
    document.getElementById('profilePic').src = data.profilePicture
    document.getElementById('profileName').innerHTML = "username: " + data.username 
    if(data.isAdmin == false) {
        document.getElementById('profileStatus').innerHTML = "Account Status: User"
    } else if (data.isAdmin == true) {
        document.getElementById('profileStatus').innerHTML = "Account Status: Admin"
        document.getElementById('button').style.display = "none"
    } 
    document.getElementById('profileEmail').innerHTML = "email: " + data.email
    var creationDate = data.creationDate;
    var creationDateTemp = creationDate.indexOf("T");
    creationDate = creationDate.slice(0, creationDateTemp);
    creationDate = `${creationDate.slice(8, 10)}/${creationDate.slice(5, 7)}/${creationDate.slice(0,4)}`
    document.getElementById('profileDate').innerHTML = "Joined: " + creationDate;
})

