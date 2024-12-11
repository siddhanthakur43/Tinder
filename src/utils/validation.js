const validator = require('validator');

const validateSignUpData = (req) => {
    const { firstName, lastName, emailId, password } = req.body;
    if (!firstName || !lastName) {
        throw new Error("Please enter the name properly");
    } else if (!firstName.length >= 4) {
        throw new Error('Please proide the Name within the character limit 4 to 40')
    } else if (!validator.isEmail(emailId)) {
        throw new Error('Please provide the valid email');
    } else if (!validator.isStrongPassword(password)) {
        throw new Error("please provide the strong password");
    }
}

module.exports = { validateSignUpData };
