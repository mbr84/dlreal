const express = require('express');
const path = require('path');
const app = express();

const hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index.html', { root: path.join(__dirname, './views') });
});

app.listen(3000);
