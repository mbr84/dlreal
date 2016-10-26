const express = require('express');
const path = require('path');
const app = express();
// const transporter = require('./transporter');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dolanrealtyca@gmail.com',
    pass: process.env.PASSWORD,
  },
});

function handleAgentRequest(req, res) {
  const text = `
  Dear ${req.body.fname} ${req.body.last},
  We received your request to speak with an agent regarding the property
  at ${req.body.street}, ${req.body.city}. An agent will be in touch
  with you at ${req.body.email} soon.

  Dolan Realty
  `;

  const mailOptions = {
    from: 'dolanrealtyca@gmail.com',
    to: `${req.body.email}`,
    subject: 'Confirmation from Dolan Realty',
    text,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.json({ yo: 'error' });
    } else {
      res.json({ yo: 'success' });
    }
  });
}

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.render('index.html', { root: path.join(__dirname, './views') });
});

app.get('/contact', (req, res) => {
  res.render('contact.html', { root: path.join(__dirname, './views') });
});

app.get('/about', (req, res) => {
  res.render('about.html', { root: path.join(__dirname, './views') });
});

app.post('/', (req, res) => {
  handleAgentRequest(req, res);
});

app.listen(port);
