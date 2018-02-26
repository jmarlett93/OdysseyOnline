const User = '../../dataAccess/models/user';

const UserController = {
    login: login
};


// create and validate user if none exists,
// or return logged in user
function login(userFormData) {

    return checkIfUserExists(userFormData)
        .then(userExists => {
            if (userExists) {
                return logInExistingUser(userFormData.emailAddress);
            } else {
                return validateAndSaveNewUserData(userFormData);
            }
        }).then(userResult => {

        })
}

function checkIfUserExists(userFormData) {
    let promise = User.findOne({ emailAddress: userFormData.emailAddress }).exec();
    return promise
        .then(user => {
            if (user === null) {
                return false;
            } else {
                return true;
            }
        });
}

function logInExistingUser(email) {
    return User.findAndUpdate(
        { emailAddress: email },
        { $set: { lastLoginDate: new Date().toUTCString() } }).exec();
}

function validateNewUser() {

}

function validateNewUserData(userFormData) {
    return new User(userFormData).validate();
}