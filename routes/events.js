//---------------- libraries ----------------//

    const express    =   require("express");
    const router     =   express.Router();
    const Event      =   require("../models/event");
    const path       =   require("path");

//---------------- libraries ----------------//


//--------------------------- requests ---------------------------//

    //remember to delete this later this is just for dev
    router.get("/", async (req, res) => {
        const events = await Event.find();
        res.json(events);
    })

    router.get("/:userID", async (req, res) => {
        const events = await Event.find({"ownerID": req.params.userID});
        res.json(events);
    })
    //get a single event
    router.get("/:userID/:eventID", getEvent, (req,res) => {
        res.send(res.event);

    })

    //create an event
    router.post("/", async (req,res) => {
        const event = new Event({
            ownerID: req.body.ownerID,
            eventName: req.body.eventName,
            ruleset: req.body.ruleset,
            creationDate: req.body.creationDate,
            startDate: req.body.startDate
        })
        try{
            const newEvent = await event.save();
            res.status(201).json({message: "Created Event", event: newEvent});
        }catch(err){
            res.status(400).json({message:err})
        }
    })


    //edit an event
    router.patch("/:userID/:eventID", (req,res) => {
        //TODO: complete this
    })

    //delete an event
    router.delete("/:userID/:eventID", getEvent, async (req,res) => {
        try{
            await res.event.remove();
            res.json({message: "Deleted Event", event: res.event})
        }catch(err){
            res.status(500).json({message:err})
        }
    })

    async function getEvent(req, res, next){

        let event;
        try{
            event = await Event.findById(req.params.eventID);
            if(event == null){
                return res.status(404).json({message: "Cannot find that event"});
            }
        }catch(err){
            return res.status(500).json({message: err.message})
        }
        res.event = event;
        next();
    }


//--------------------------- requests ---------------------------//


//--------- export ---------//
    module.exports = router;
//--------- export ---------//