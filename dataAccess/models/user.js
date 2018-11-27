//Require mongoose package
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let DBAccess = require('../dbaccess');
let conn = new DBAccess().getConnection();

let schema = new Schema({
    userName: { type: String, index: { unique: true } },
    emailAddress: { type: String, index: { unique: true } },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    lastLoginDate: {type: Date, required: true, default: new Date().toUTCString()}
});



const User = conn.model('user', schema);

module.exports = User;
