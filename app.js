// requiring modules
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const axios = require("axios");
// const ejs = require('ejs');
const async = require("async");

const app = express();
const port = process.env.PORT || 3000;
// const firebase = require('firebase/app');
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyC6Y2pKv2B6OpLeJZEB3EHzxPDBQcsy6o4",
  authDomain: "news-b8a71.firebaseapp.com",
  projectId: "news-b8a71",
  storageBucket: "news-b8a71.appspot.com",
  messagingSenderId: "293366423347",
  appId: "1:293366423347:web:8bcce449c26775301ba846"
};


initializeApp(firebaseConfig); // Initialize Firebase
// Allow use of the static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
// app.use('/js', express.static(__dirname + 'public/js'));

// Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
// const { search } = require("./src/routes/index");
const loginRouter = require("./src/routes/login");
const registerRouter = require("./src/routes/register");
const signOutRouter = require("./src/routes/signout");

app.use('/login_landing', newsRouter);
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
app.use('/', loginRouter);
app.use("/register", registerRouter);
app.use("/signout", signOutRouter);
// Search functionality in the business.ejs page

// let search = req.body.search;
app.route('/pages')
  .post((req, res) => {


    var options = {
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search',
      params: { q: `${req.body.search}`, lang: 'en', sort_by: 'relevancy', page: '1', media: 'True' },
      headers: {
        'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
        'x-rapidapi-key': '478f85a7b5msh8f8921cd90e6026p1ecf9cjsnb299c30b5770'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        var contents = response.data.articles;
        console.log(contents);
        res.render("search", { contents: contents });

      })
      .catch(function (error) {
        console.error(error);
      });
  });



app.get("/", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/favourites", (req, res) => {
  res.render("register");
});


// Listen on port 3000->backticks for tempalate strings.
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);

// 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-PAT

