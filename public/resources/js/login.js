let signin = document.getElementById("signin")
var email = document.getElementById("email")
var password = document.getElementById("password")

signin.onclick = function(){
        if(email.value === "" && password.value === "")
        {
                console.log("1")
        }
        else if(email.value != "" && password.value === "")
        {
                console.log("2")
        }
        else if(email.value != "" && password.value === "")
        {
                console.log("3")
        }
        else if (email.value == "" && password.value != "")
        {
                console.log("4")
        }
        else{
                 databaseRequest(`http://localhost:3000/south-coast-crawlers/accounts/${email.value}/${password.value}`, "GET")
                  .then(data => console.log(data)) 
        }

 


}
