const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
});

const Users = mongoose.model('Users', userSchema);

module.exports = { Users }
