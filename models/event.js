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
    }
})

module.exports = mongoose.model("Event", eventSchema)