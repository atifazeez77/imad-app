var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one'; {
        title:  'Article one 1   Atif Azeez',
        heading: 'Article One',
        date: 'Sep 4, 2017',
         content:
        <p>
          This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article.
         </p>
            <p>
                This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article.
           </p>
            <p>
                This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article This is the content for my first article
            </p>
    },
    'article-two'; {
        title:  'Article two 2   Atif Azeez',
        heading: 'Article Two',
        date: 'Sep 4, 2017',
        content:
        <p>
         This is the content for my second article
         </p>
},
         'article-three'; {
        title:  'Article three 3   Atif Azeez',
        heading: 'Article Three',
        date: 'Sep 4, 2017',
        content:
        <p>
         This is the content for my third article
         </p>
},
function createTemplate (data) {}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
};

var counter = 0;
app.get('/counter' , function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function(req, res) { //URL: /submit-name?name=xxxxx
   //Get the name from the request
   var name = req.query.name;
   
    names.push(name);
   //JSON: Javascript Object Notation
    res.send(JSON.stringify(names));
});

var port = 80; //Use 80 for local development because ypu might already have apache running on 80
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
