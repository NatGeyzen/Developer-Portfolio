const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const mustacheExpress = require('mustache-express');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.send('Back-End base url/homepage')
});

app.get('/admin/login', (req, res) => {
    res.render('adminLogin');
    // console.log(req);
});

app.get('/admin/dashboard', (req, res) => {
    res.render('dashboard');
});

app.post('/new-project', (req, res) => {
    // store the data from the form in variables
    var name = req.body.name;
    var url = req.body.url;
    var path = req.body.path;
    var technologies = req.body.technologies;
    var description = req.body.description;

    // create a JSON object containing all the variables
    var data = {
        "name": name,
        "url": url,
        "path": path,
        "technologies": technologies,
        "description": description
    };

    // connect to MongoDB database
    mongoose.connect('mongodb+srv://admin:1dk@p81sm1!@cluster0.amfpu.mongodb.net/portfolio?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const connection = mongoose.connection;
    connection.on("error", () => console.log("Connection failed"));
    connection.once("open", () => console.log("Connection established"));

    connection.collection('projects').insertOne(data, (err, collection) => {
        if (err) throw err;
        console.log("New record added to database");
    });

    // connection.close();

    return res.redirect("/admin/dashboard");


});


app.listen(port, () => { console.log(`Listening on port ${port}`)});