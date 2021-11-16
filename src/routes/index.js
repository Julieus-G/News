const express = require("express");
const newsRouter = express.Router();
var axios = require("axios").default;
const request = require("request");

newsRouter.get("", (req, res) => {

  // setting request 'options' parameter
  var options = {
    method: "GET",
    url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
    params: { lang: "en", media: "True" },
    headers: {
      "x-rapidapi-host": "newscatcher.p.rapidapi.com",
      "x-rapidapi-key": "478f85a7b5msh8f8921cd90e6026p1ecf9cjsnb299c30b5770",
      // "User-Agent": "axios/0.21.4"
    },
  };

  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data.articles[0]);

      let name = response.data.articles[0].media;

      res.render("index", {name: name});
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = newsRouter;
