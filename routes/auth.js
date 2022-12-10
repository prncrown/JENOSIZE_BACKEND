const express = require('express')
const router = express.Router()

const { initializeApp } = require('firebase-admin/app');


router.use((req, res, next) => {
    var user = firebase.auth().currentUser;
    res.locals.currentUser = user;
    next();
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    res.redirect('/');
})

router.get('/logout', function (req, res) {
    firebase.auth().signOut().then(() => {
        res.redirect('/login');
    }).catch((error) => {
        // An error happened.
    });
});

module.exports = router