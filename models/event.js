const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    ownerID:{
        type: String,
        required: true
    },    
    eventName:{
        type: String,
        required: true
    },
    ruleset:{
        type: String,
        required: true
    },
    users:[
        {
            userID: String,
            points: Number,
            roundsCompleted: String
        }
    ],
    moderators:[
        String
    ],
    creationDate:{
        type: Date,
        required: true,
        default: Date.now()
    },
    startDate:{
        type: Date,
        required: true,
        default: Date.now()
    },
    eventPicture:{
        type: String,
        required: true,
        default: "https://images.dailyhive.com/20180424105459/shutterstock_717270061.jpg"
    }
    
})

module.exports = mongoose.model("Event", eventSchema)