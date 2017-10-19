'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let dbconfig = require('../config/mongo.json');

if (process.env.NODE_ENV === 'stage') {
    dbconfig = require('../../mongo-stage.json');
}

if (process.env.NODE_ENV === 'production') {
    dbconfig = require('../../mongo-prod.json');
}

console.log("db env : " + process.env.NODE_ENV);

function DBAccess() {
    this.connectionString = dbconfig.connectionString;
    if (DBAccess.connection === undefined) {
        DBAccess.connection = mongoose.connect(this.connectionString);
    }
}

DBAccess.prototype.getConnection = function(){
    return DBAccess.connection;
};

module.exports = DBAccess;