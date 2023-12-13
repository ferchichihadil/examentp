const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
const mysql = require('mysql');

// Create an instance of Handlebars with a specified extension
const hbs = exphbs.create({ extname: 'hbs' });

// Configure Express to use Handlebars engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'news',
  port: 3306, 
});

connection.connect();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/add.html'));
});

app.get('/addnews', function (req, res) {
  var untitre = req.query.titre;
  var unedesc = req.query.description;
  var sql = 'insert into actualites (titre,description) values(?,?)';

  connection.query(sql, [untitre, unedesc], function (error, results, fields) {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Close MySQL connection when the Node.js process is terminated
process.on('SIGINT', function () {
  connection.end();
  process.exit();
});
