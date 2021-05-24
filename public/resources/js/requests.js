//--------------------------- requests ---------------------------//

      //-------------------- HOW TO USE --------------------//
      //                                                    //
      //   When you want to make a request of some form to  //
      //   the database, use the databaseRequest function   //
      //   this handles the different requests and does it  //
      //   all in one function to keep it clean.            //
      //                                                    //
      //   This is still a promise however, so you can      //
      //   attach a .then after calling the function        //
      //   this would be the same as the last .then         //
      //                                                    //
      //   Also, if you are going to be using GET dont      //
      //   worry about filling in the last parameter        //
      //                                                    //
      //-------------------- HOW TO USE --------------------//


    //a set of all the requests, this makes checking if you gave
    //a valid request easier
    const requests = new Set(["GET", "POST", "DELETE", "PATCH", "PUT"])

    async function databaseRequest(url, type="", data={}) {
        
        //so you dont have to worry about caps
        type = type.toUpperCase();

        //checks if the request if a valid request
        //if invalid, throw and error
        if(!requests.has(type)) throw "Incorrect HTTP Request";

        //handles the request
        if(type == "GET") {
            const response = await fetch(url)
            return response.json();
        } else {
            const response = await fetch(url, {
                method: type,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }
    }

//--------------------------- requests ---------------------------//

databaseRequest("http://127.0.0.1:5500/profile.HTML"), "GET"
.then(data => console.log(data))

