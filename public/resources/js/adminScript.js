var EndEventButton = document.querySelector('.endEvent')
console.log(EndEventButton)

EndEventButton.addEventListener('click', function(){
    // addElements()
    console.log("hi")
})
// http://localhost:3001/south-coast-crawlers/events/60acf26b00f321e4e88ec902/60ab6bac861e918a606f942f
databaseRequest("http://localhost:3001/south-coast-crawlers/events/60acf26b00f321e4e88ec902/60ab6bac861e918a606f942f", "GET")
.then(data => {
    // console.log(data.users)
   data.users.forEach(user => {
    //    console.log(user)
       databaseRequest(`http://localhost:3001/south-coast-crawlers/accounts/${user.userID}`, "GET")
       .then(info => {
        //    console.log(info.username)
        
       })
   })  
})


// function addElements() {
//     document.getElementById("List").innerHTML = "test"   
// }





                  
