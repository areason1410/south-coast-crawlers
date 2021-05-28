const mongoose = require("mongoose")

const accountSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        required: true,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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
        type: Date,
        required: true,
        default: Date.now()
    },
    iv:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Account", accountSchema)