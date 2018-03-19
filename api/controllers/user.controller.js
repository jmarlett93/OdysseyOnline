'use strict';

const User = require('../../dataAccess/models/user');

const UserController = {
    login: login
};

// create and validate user if none exists,
// or return logged in user
function login(userFormData) {
//check if user exists

//if yes return user

// if no add user and return 

    return checkIfUserExists(userFormData)
        .then(userExists => {
            if (userExists !== null) {
                return logInExistingUser(userFormData.emailAddress);
            } else {
                return createNewUser(userFormData);
            }
        })
        .then(userResult => {
                return "hi philo";
        })
}

function checkIfUserExists(userFormData) {
    return User.findOne({ emailAddress: userFormData.emailAddress }).exec();
}

function logInExistingUser(email) {
    return User.findAndUpdate(
        { emailAddress: email },
        { $set: { lastLoginDate: new Date().toUTCString() } }).exec();
}

function createNewUser(userFormData) {

}

function validateNewUserData(userFormData) {
    return new User(userFormData).validate();
}

module.exports = UserController;