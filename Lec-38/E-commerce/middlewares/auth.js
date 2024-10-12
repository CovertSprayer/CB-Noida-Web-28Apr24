
module.exports.isLoggedIn = (req, res, next) => {
    if(req.xhr && !req.isAuthenticated()){
        res.status(401).json({
            success: false,
            message: 'Unauthorized user!'
        })
    }
    
    if(!req.isAuthenticated()){
        req.flash('error', 'Please Login!')
        res.redirect('/login');
        return;
    }
    next();
}

module.exports.isSeller = (req, res, next) => {
    if(req.user?.role !== 'seller'){

        req.flash('error', 'Not Authorized!');
        res.redirect('back');
        return;
    }
    next();
}