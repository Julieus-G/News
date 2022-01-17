const express = require("express");
const newsRouter = express.Router();
var axios = require("axios").default;
const request = require("request");

newsRouter.get("", (req, res) => {

  // setting request 'options' parameter

  ///////////////////////////////

  var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/latest_headlines',
    params: { lang: 'en' },
    headers: {
      'x-api-key': 'Uy5Pkq0DNnr5Fww4enIHU0SPu7q2cgBkar4Z1IhmY0E'
    }
  };


  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.articles[16]);

      //showcase- majordiv

      let firstSummary = response.data.articles[0].summary;
      let firstLink = response.data.articles[0].link;
      let secondSummary = response.data.articles[1].summary;
      let secondLink = response.data.articles[1].link;
      let thirdSummary = response.data.articles[3].summary;
      let thirdLink = response.data.articles[3].link;

      //showcase- minordiv

      let firstTitle = response.data.articles[3].title;
      let fourthLink = response.data.articles[3].link;
      let secondTitle = response.data.articles[4].title;
      let fifthLink = response.data.articles[4].link;
      // console.log(response.data.articles[8]);
      let thirdTitle = response.data.articles[5].title;
      let sixthLink = response.data.articles[5].link;
      let fourthTitle = response.data.articles[6].title;
      let seventhLink = response.data.articles[6].link;
      let fifthTitle = response.data.articles[7].title;
      let eighthLink = response.data.articles[7].link;
      let sixthTitle = response.data.articles[8].title;
      let ninthLink = response.data.articles[8].link;
      let seventhTitle = response.data.articles[9].title;
      let tenthLink = response.data.articles[9].link;


      // SUbsection - divone- content

      let fourthSummary = response.data.articles[10].summary;
      let eleventhLink = response.data.articles[10].link;
      let fifthSummary = response.data.articles[11].summary;
      let twelfthLink = response.data.articles[11].link;
      let sixthSummary = response.data.articles[12].summary;
      let thirteenthLink = response.data.articles[12].link;
      let seventhSummary = response.data.articles[13].summary;
      let fourteenthLink = response.data.articles[13].link;
      let eighthSummary = response.data.articles[14].summary;
      let fifteenthLink = response.data.articles[14].link;

      // subsection - divtwo
      let country = response.data.articles[16].country;
      let firstMedia = response.data.articles[16].media;
      let ninthSummary = response.data.articles[16].summary;



      //Rendering the home page

      res.render("index", {
        firstSummary: firstSummary, firstLink: firstLink, secondSummary: secondSummary, secondLink: secondLink, thirdSummary: thirdSummary, thirdLink: thirdLink, firstTitle: firstTitle, fourthLink: fourthLink, secondTitle: secondTitle, fifthLink: fifthLink, thirdTitle: thirdTitle, sixthLink: sixthLink, fourthTitle: fourthTitle, seventhLink: seventhLink, fifthTitle: fifthTitle, eighthLink: eighthLink, sixthTitle: sixthTitle, ninthLink: ninthLink, seventhTitle: seventhTitle, tenthLink: tenthLink, fourthSummary: fourthSummary, eleventhLink: eleventhLink, fifthSummary: fifthSummary, twelfthLink: twelfthLink, sixthSummary: sixthSummary, thirteenthLink: thirteenthLink, seventhSummary: seventhSummary, fourteenthLink: fourteenthLink, eighthSummary: eighthSummary, fifteenthLink: fifteenthLink, country: country, firstMedia: firstMedia, ninthSummary: ninthSummary
      });
    })

    .catch(function (error) {
      console.error(error);
    });
})


module.exports = newsRouter;