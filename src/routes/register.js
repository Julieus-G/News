const express = require('express');
const registerRouter = express.Router();
// const {} = require("../firebase/firebase.util")
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { getCurrentUser } = require('../firebase/firebase.util');



registerRouter.get('', (req, res) => {
    res.render('register', {
        error: "",
        display: "none"
    });
});
registerRouter.post('', (req, res) => {
    const { email, password, passwordConfirm } = req.body;
   
     if (password !== passwordConfirm) {
        res.render('register', {
            error: "Password does not match",
            display: "block"
        });
    }
    else {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                res.redirect("/login_landing")
            })
            .catch(err => {
                res.render('register', {
                    error: err.message,
                    display: "block"
                });
            });
    }
});

module.exports = registerRouter;