const express = require('express');
const registerRouter = express.Router();
// const {} = require("../firebase/firebase.util")
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");



registerRouter.get('', (req, res) => {
    res.render('register', {
        error: "",
        display: "none"
    });
});
registerRouter.post('', (req, res) => {
    const { email, password, passwordConfirm } = req.body;
    if (!email && !password) {
        res.render('register', {
            error: "Please enter email and password",
            display: "block"
        });
    } else if (!email) {
        res.render('register', {
            error: "Please enter email",
            display: "block"
        });
    }
    else if (!password) {
        res.render('register', {
            error: "Please enter password",
            display: "block"
        });
    }
    else if (password !== passwordConfirm) {
        res.render('register', {
            error: "Password does not match",
            display: "block"
        });
    }
    else {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth,email, password)
            .then(() => {
                res.send("Successfully registered");
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