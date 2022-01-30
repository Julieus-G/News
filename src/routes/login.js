const express = require('express');
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const { logIn } = require('../firebase/firebase.util');
const loginRouter = express.Router();



loginRouter.get('', (req, res) => {
    console.log("Login page rendered");
    res.render('login', {
        error: "",
        display: "none"
    });
});

loginRouter.post("", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(() => {
        res.redirect('/');
    }).catch(err => {
        res.render('login', {
            error: err.message,
            display: "block"
        });

    })

});

module.exports = loginRouter;