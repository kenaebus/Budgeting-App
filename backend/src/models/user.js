const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");

const UserSchema = new mongoose.Schem({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('User', UserSchema);