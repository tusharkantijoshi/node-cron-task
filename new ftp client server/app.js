const ftp = require("basic-ftp") //! ftp client
const schedule = require('node-schedule'); //! for scheduling a job
const XLSX = require("xlsx") //! for converting excel data to json
const nodemailer = require('nodemailer'); //! for mailing
const express = require("express");


const app = express();
const PORT = 5000;

async function ftpClient() {

   const client = new ftp.Client()

   client.ftp.verbose = true
   try {
      await client.access({
         host: "127.0.0.1",
         port: 21,
         user: "anonymous",
         password: "anonymous",
         // secure: true
      })
      // console.log(await client.list())
      // await client.uploadFrom("README.md", "README_FTP.md")
      // await client.downloadTo("./test", "./src/demo.xlsx")
      // client.ensureDir("./src")

      // await client.ensureDir("src"); //! it will make a new directory
      await client.downloadToDir("test", "src")
      // await client.list("src")
   }
   catch (err) {
      console.log(err)
   }
   client.close()
}

app.get('/', (req, res) => {
   res.send("Server Started")
})

app.get('/file', (req, res) => {
   ftpClient();
   res.send("files downloaded")
})

app.get('/data', (req, res) => {

   //! Node Cron
   schedule.scheduleJob('*/5 * * * * *', () => {
      // console.log('running a task every 5 seconds');

      res.sendStatus(200);
      res.setHeader('X-Foo', 'bar')
      
      res.send("hitting the end point every 5 seconds")



      /*  //! Excel to JSON
       const workbook = XLSX.readFile("./test/demo.xlsx");
 
       let noOfSheet = workbook.SheetNames;
       // console.log(noOfSheet); // Sheet1, Sheet2, ...
 
       let data = [];
 
       noOfSheet.forEach((entry) => {
          let worksheet = workbook.Sheets[entry];
          // console.log(worksheet); //getting the complete sheet
 
          // let data = [];
          data = XLSX.utils.sheet_to_json(worksheet);
       });
 
       // console.log(data);
       res.send(data) */
   });
})






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



app.listen(PORT, () => console.log(`FTP Server running on port: http://localhost:${PORT}`));