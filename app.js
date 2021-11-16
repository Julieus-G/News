// requiring modules
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const axios = require("axios");
// const ejs = require('ejs');
const async = require("async");

const app = express();
const port = process.env.PORT || 3000;

// Allow use of the static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
// app.use('/js', express.static(__dirname + 'public/js'));

// Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const newsRouter = require("./src/routes/index");
const { response } = require("express");
const businessNews = require("./src/routes/business");
const politicsNews = require("./src/routes/politics");
const technologyNews = require("./src/routes/technology");
const economicsNews = require("./src/routes/economics");
const energyNews = require("./src/routes/energy");
const entertainmentNews = require("./src/routes/entertainment");
const foodNews = require("./src/routes/food");
const musicNews = require("./src/routes/music");
const scienceNews = require("./src/routes/science");
const sportNews = require("./src/routes/sport");
const travelNews = require("./src/routes/travel");
const worldNews = require("./src/routes/world");
const { search } = require("./src/routes/index");

app.use("/", newsRouter);
app.use('/business', businessNews);
app.use('/politics', politicsNews);
app.use('/technology', technologyNews);
app.use('/economics', economicsNews);
app.use('/energy', energyNews);
app.use('/entertainment', entertainmentNews);
app.use('/food', foodNews);
app.use('/music', musicNews);
app.use('/science', scienceNews);
app.use('/sport', sportNews);
app.use('/travel', travelNews);
app.use('/world', worldNews);
// Search functionality in the business.ejs page

// let search = req.body.search;
app.route('/pages')
.post((req, res) =>{


  var options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search',
    params: {q: 'Elon Musk', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
    headers: {
      'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
      'x-rapidapi-key': '478f85a7b5msh8f8921cd90e6026p1ecf9cjsnb299c30b5770'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
      res.render("search", { contents: contents });
  
    })
    .catch(function (error) {
      console.error(error);
    });

});



// app.route('/pages')
// .post((req, res) => {

//     let search = req.body.search;

//     var options = {
//         method: 'GET',
//         url: `https://api.newscatcherapi.com/v2/search?q=${search}`,
//         params: { lang: 'en', media: 'True' },
//         headers: {
//             'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
//         }
//     };
//     request(options, (error, response, body) => {
//         if (!error && res.statusCode == 200) { // Successful response
//             var data = JSON.parse(body);
//             // var author = data.articles[1].author;
//             var contents = data.articles;
        
//         } else {
//             console.log(error);
//         }
//         res.render('search', { contents: contents })

//     })
// });


// Listen on port 3000->backticks for tempalate strings.
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);

// 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-PAT

