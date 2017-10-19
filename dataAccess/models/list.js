//Require mongoose package
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let DBAccess = require('../dbaccess');
let conn = new DBAccess().getConnection();


//Define BucketlistSchema with title, description and category
var schema = new Schema({
    title: { type: String,required: true},
    description: String,
    category: {type: String, required: true, enum: ['High', 'Medium', 'Low']}
});

const List = conn.model('list', schema );

module.exports = List;