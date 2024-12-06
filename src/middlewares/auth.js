const adminAuth = (req, res, next) => {
    const token = 'xyz';
    console.log('Admin is getting authorized!!')
    const isAdminAuthorized = token === 'xyz';
    if (!isAdminAuthorized) {
        res.status(401).send('Admin Unauthorized');
        console.log('Admin Unauthorized');
    } else {
        console.log('Admin Authorized');
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = 'xyz';
    console.log('User is getting Authorized');
    const isUserAuthorized = token === 'xyz';
    if (!isUserAuthorized) {
        console.log('User UnAuthorized');
        res.status(401).send('User UnAuthorized');
    } else {
        console.log('User Authorized');
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth,
}