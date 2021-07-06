const mongoose = require("mongoose")

const rulesetSchema = new mongoose.Schema({
    ruleset:{
        type: String,
        required: true
    },
    reverse:{
        type: Number
    },
    gate:{
        type: Number
    },
    roll:{
        type: Number
    },
    boundary:{
        type: Number
    },
    reposition:{
        type: Number
    },
    winch:{
        type: Number
    },
    handWinch:{
        type: Number
    },
    dnf:{
        type: Number
    },
    dns:{
        type: Number
    }
})

module.exports = mongoose.model("Ruleset", rulesetSchema)