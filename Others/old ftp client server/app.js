const schedule = require('node-schedule'); //! for scheduling a job
const XLSX = require("xlsx") //! for converting excel data to json
const nodemailer = require('nodemailer'); //! for mailing

const ftpClient = require('ftp-client'),
   config = {
      host: '127.0.0.1',
      port: 21,
      user: 'anonymous',
      password: 'anonymous'
   },
   options = {
      logging: 'basic'
   },
   client = new ftpClient(config, options);

//! After creating the new object you have to manually connect to the server by using the connect method:

client.connect(function () {

   console.log("connected");


   client.download('*', './test/',
      {
         overwrite: 'none'
      }, function (result) {
         console.log(result);
      });

   //! Node Cron 
   // schedule.scheduleJob('*/5 * * * * *', () => {
   //    console.log('running a task every 5 seconds');
   // });

   //! Excel to JSON
   /*   
   const workbook = XLSX.readFile("demo.xlsx");
  
     let noOfSheet = workbook.SheetNames;
     // console.log(noOfSheet); // Sheet1, Sheet2, ...
  
     let data = [];
  
     noOfSheet.forEach((entry) => {
        let worksheet = workbook.Sheets[entry];
        // console.log(worksheet); //getting the complete sheet
  
        // let data = [];
        data = XLSX.utils.sheet_to_json(worksheet);
     });
  
     console.log(data); 
     */


   //! Sending Email 
   /*    let transporter = nodemailer.createTransport({
         service: 'gmail', //! gmail or yahoo or outlook etc...
         auth: {
            user: 'sender@gmail.com',
            pass: 'sender email password'
         }
      });
   
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
    */

});