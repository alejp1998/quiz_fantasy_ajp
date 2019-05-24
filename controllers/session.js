// Middleware: Login required
exports.loginRequired = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/session?redir=' + (req.param('redir') || req.url));
    }
};


// MW that allows to pass only if the logged useer in is admin.
exports.adminRequired = (req, res, next) => {

    const isAdmin = !!req.session.user.isAdmin;

    if (isAdmin) {
        next();
    } else {
        console.log('Prohibited route: the logged in user is not an administrator.');
        res.send(403);
    }
};


// MW that allows to pass only if the logged in user is:
// - the user to manage.
exports.myselfRequired = (req, res, next) => {

    const isMyself = req.user.id === req.session.user.id;

    if (isMyself) {
        next();
    } else {
        console.log('Forbidden route: is not the user logged.');
        res.send(403);    }
};