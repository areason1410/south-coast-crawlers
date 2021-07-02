//---------------- libraries ----------------//

    const path       =   require("path");
    const express    =   require("express");
    const app        =   express();
    const mongoose   =   require("mongoose");
    require("dotenv").config()
//---------------- libraries ----------------//


//--------------------------- mongoose ---------------------------//

    //connect to the local database using mongodb
    mongoose.connect(process.env.DB_URL,
    {  useNewUrlParser:      true,
       useUnifiedTopology:   true
    });

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("connected to db"));

//--------------------------- mongoose -------﻿--------------------//


//---------------------------- express ----------------------------//

    //routers
    const accountRouter = require("./routes/accounts")
    const eventRouter = require("./routes/events")

    //use
    app.use(express.json());
    app.use(express.static('public'));
    app.use("/south-coast-crawlers/accounts", accountRouter);
    app.use("/south-coast-crawlers/events", eventRouter);
    
    //webpage directiories
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "public/index.html"));
    })
    //
    


    app.listen(3001, () => console.log("server started on port 3001"));

//---------------------------- express ----------------------------//

