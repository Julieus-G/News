const express = require("express");
const businessNews = express.Router();
var axios = require("axios").default;
const request = require("request");

businessNews.get("", (req, res) => {


  // setting request 'options' parameter
  var options = {
    method: "GET",
    url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
    params: { lang: "en", q:"business", media: "true", page_size:20 },
    headers: {
      "x-rapidapi-host": "newscatcher.p.rapidapi.com",
      "x-rapidapi-key": "478f85a7b5msh8f8921cd90e6026p1ecf9cjsnb299c30b5770",
    },
  };


  axios
    .request(options)
    .then(function (response) {
      // console.log(response.status);

      // console.log(response.data.articles[0].summary.length);
      let contents = response.data.articles;

      res.render("pages", { contents: contents });
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = businessNews;
