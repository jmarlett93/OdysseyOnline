//Require mongoose package
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let DBAccess = require('../dbaccess');
let conn = new DBAccess().getConnection();


//Define BucketlistSchema with title, description and category
let schema = new Schema({
    userName: { type: String,required: true},
    emailAddress: {type: String, required: true}
});

const User = conn.model('user', schema );

module.exports = User;