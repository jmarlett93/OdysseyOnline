//Require mongoose package
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let DBAccess = require('../dbaccess');
let conn = new DBAccess().getConnection();

let schema = new Schema({
    userName: { type: String, required: true, index: { unique: true } },
    emailAddress: { type: String, required: true, index: { unique: true } },
    lastLoginDate: {type: Date, required: true, default: new Date().toUTCString()}
});

const User = conn.model('user', schema);

module.exports = User;
