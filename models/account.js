const mongoose = require("mongoose")

const accountSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    creationDate:{
        type: String,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model("Account", accountSchema)