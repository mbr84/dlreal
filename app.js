const express = require('express');
const path = require('path');
const app = express();
const transporter = require('./transporter')

const hbs = require('hbs');


const nodemailer = require('nodemailer');

function handleSayHello(req, res) {

  const text = 'confirmation email text';

  const mailOptions = {
    from: 'dolanrealtyca@gmail.com',
    to: `${req.body.fname}`,
    subject: 'We received your appointment request',
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ yo: 'error' });
    } else {
      console.log('Message sent: ' + info.response);
      res.render('index.html', { root: path.join(__dirname, './views') });
    }
  });
}

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index.html', { root: path.join(__dirname, './views') });
});

app.post('/', (req, res) => {
  handleAgent(req, res);
});

app.listen(3000);
