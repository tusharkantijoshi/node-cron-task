//! Nodemailer is a module for Node.js applications to allow easy as cake email sending

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
   service: 'gmail', //! gmail or yahoo or outlook etc...
   auth: {
      user: 'sender@gmail.com',
      pass: 'sender email password'
   }
});

//! sending email
let mailOptions = {
   from: 'sender@gmail.com',
   to: 'receive-1@gmail.com, receiver-2@gmail.com',
   subject: 'Sending Email using Node.js',
   text: 'Email Content'
};

transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
      console.log(error);
   } else {
      console.log('Email sent: ' + info.response);
   }
});