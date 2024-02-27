const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// POST endpoint for sending emails
app.post('/api/send-email', (req, res) => {
  const { email, subject, message } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lorenzojaypantalla@gmail.com',
      pass: 'bourgeoisie'
    }
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'lorenzojaypantalla@gamil.com',
    subject: subject,
    text: message
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
