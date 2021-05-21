//---------------- libraries ----------------//

    const path       =   require("path");
    const express    =   require("express");
    const app        =   express();
    const mongoose   =   require("mongoose");

//---------------- libraries ----------------//


//--------------------------- mongoose ---------------------------//

    //connect to the local database using mongodb
    mongoose.connect("mongodb://localhost/south-coast-crawlers",
    {  useNewUrlParser:      true,
       useUnifiedTopology:   true
    });

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("connected to db"));

//--------------------------- mongoose ---------------------------//


//---------------------------- express ----------------------------//

    //use
    app.use(express.json());
    app.use(express.static('public'));
    
    //webpage directiories
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "public/index.html"));
    })
    //
    
    //routers
    const accountRouter = require("./routes/accounts")
    app.use("/south-coast-crawlers/accounts", accountRouter);


    app.listen(3000, () => console.log("server started on port 3000"));

//---------------------------- express ----------------------------//

