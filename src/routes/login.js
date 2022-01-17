const express = require('express');
const loginRouter = express.Router();


loginRouter.get('', (req, res) => {
    console.log("Login page rendered");
    res.render('login');
});

loginRouter.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    // res.render("login");
});

module.exports = loginRouter;