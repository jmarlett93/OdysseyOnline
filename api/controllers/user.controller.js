'use strict';

const User = require('../../dataAccess/models/user');

const UserController = {
    login: login
};
function login(userFormData) {

    return checkIfUserExists(userFormData)
        .then(userExists => {
            if (userExists !== null) {
                return logInExistingUser(userFormData.emailAddress);
            } else {
                return createNewUser(userFormData);
            }
        })
        .then(userResult => {
                return (userResult);
        });
}

function checkIfUserExists(userFormData) {
    return User.findOne({ emailAddress: userFormData.emailAddress }).exec();
}

function logInExistingUser(email) {
    return User.findOneAndUpdate(
        { emailAddress: email },
        { $set: { lastLoginDate: new Date().toUTCString() } }).exec();
}

function createNewUser(userFormData) {
   const userToSave = new User(userFormData);
   let validationResult = userToSave.validateSync();
   if(validationResult && validationResult.errors.length > 0){
       return "";
   }else{
    return userToSave.save();
   }
}

module.exports = UserController;