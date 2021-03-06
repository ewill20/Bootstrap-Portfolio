const passport = require('../config/passport/passport.js');

var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/landing', authController.landing);

    app.get('/about', authController.about);

    app.get('/contact', authController.contact);

    app.get('/home', authController.home);

    app.get('/webPort', authController.webPort);

    app.get('/design', authController.design);

    app.get('/experience', authController.experience);

    app.get('/education', authController.education);

    app.get('/photo', authController.photo);

    app.get('/skills', authController.skills);

    app.get('/video', authController.video);

    app.get('/travel', authController.travel);

    app.get('/lang', authController.lang);

    app.get('/homeFR', authController.homeFR);

    app.get('/aboutFR', authController.aboutFR);

    app.get('/contactFR', authController.contactFR);

    app.get('/designFR', authController.designFR);

    app.get('/educationFR', authController.educationFR);

    app.get('/experienceFR', authController.experienceFR);

    app.get('/langFR', authController.langFR);

    app.get('/travelFR', authController.travelFR);

    app.get('/photoFR', authController.photoFR);

    app.get('/skillsFR', authController.skillsFR);

    app.get('/videoFR', authController.videoFR);

    app.get('/webPortFR', authController.webPortFR);

    app.get('/homeDE', authController.homeDE);

    app.get('/aboutDE', authController.aboutDE);

    app.get('/contactDE', authController.contactDE);

    app.get('/designDE', authController.designDE);

    app.get('/educationDE', authController.educationDE);

    app.get('/experienceDE', authController.experienceDE);

    app.get('/langDE', authController.langDE);

    app.get('/travelDE', authController.travelDE);

    app.get('/photoDE', authController.photoDE);

    app.get('/skillsDE', authController.skillsDE);

    app.get('/videoDE', authController.videoDE);

    app.get('/webPortDE', authController.webPortDE);

    app.get('/homeCN', authController.homeCN);

    app.get('/aboutCN', authController.aboutCN);

    app.get('/contactCN', authController.contactCN);

    app.get('/webPortCN', authController.webPortCN);

    app.get('/designCN', authController.designCN);

    app.get('/experienceCN', authController.experienceCN);

    app.get('/educationCN', authController.educationCN);

    app.get('/langCN', authController.langCN);

    app.get('/travelCN', authController.travelCN);

    app.get('/photoCN', authController.photoCN);

    app.get('/skillsCN', authController.skillsCN);

    app.get('/videoCN', authController.videoCN);

    app.post('/landing', function(req, res, next) {
        console.log("whatever");
        passport.authenticate('local-signup');
        passport.authenticate('local-signup', function(err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            console.log("whatever 2");
            console.log(email);
            try {
                res.render('/profile');
            } catch (err) {
                console.log(err)
                res.redirect('/signup')
            }
        });
    });


    app.get('/profile', isLoggedIn, authController.profile);


    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local'),
        function(req, res) {
            res.redirect('/profile' + req.user.handle)
        });




    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }


}