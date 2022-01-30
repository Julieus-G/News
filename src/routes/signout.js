const express = require("express");
const { getAuth, signOut } = require("firebase/auth");


// Signout route
const signOutRouter = express.Router();

signOutRouter.get("", (req, res) => {
    // Firebase signout
    signOut(getAuth())
        .then(() => {
            console.log(getAuth());
            res.redirect("/");
        }).catch(err => {
            console.log(err);
        }
        );

}
);

module.exports = signOutRouter;