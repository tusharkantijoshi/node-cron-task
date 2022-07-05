import ftp from "basic-ftp"; //! ftp client
import schedule from 'node-schedule'; //! for scheduling a job
import XLSX from "xlsx"; //! for converting excel data to json
import nodemailer from 'nodemailer'; //! for mailing

//! for downloading files from the ftp server
const ftpClient = async (req, res) => {
   const client = new ftp.Client()

   client.ftp.verbose = true
   try {
      await client.access({
         host: "127.0.0.1",
         port: 21,
         user: "anonymous",
         password: "anonymous",
      })
      await client.downloadToDir("test", "src")
   }
   catch (err) {
      console.log(err)
   }
   client.close()
}

//! for running a cron job 
export const jsonData = (req, res) => {
   //! Node Cron
   schedule.scheduleJob('*/5 * * * * *', () => {

      ftpClient();

      console.log('Downloading file every 5 seconds');
      try {
         //! Excel to JSON
         const workbook = XLSX.readFile("./test/demo.xlsx");
         let noOfSheet = workbook.SheetNames;

         let data = [];
         noOfSheet.forEach((entry) => {
            let worksheet = workbook.Sheets[entry];
            data = XLSX.utils.sheet_to_json(worksheet);
         });
         console.log(data);
      } catch (error) {
         console.log(error);
      }
   });
}

// //! for downloading files from the ftp server
// const ftpClient = async (req, res) => {
//    const client = new ftp.Client()

//    client.ftp.verbose = true
//    try {
//       await client.access({
//          host: "127.0.0.1",
//          port: 21,
//          user: "anonymous",
//          password: "anonymous",
//          // secure: true
//       })
//       // console.log(await client.list())
//       // await client.uploadFrom("README.md", "README_FTP.md")
//       // await client.downloadTo("./test", "./src/demo.xlsx")

//       // await client.ensureDir("src"); //! it will make a new directory
//       await client.downloadToDir("test", "src")
//       // await client.list("src")
//    }
//    catch (err) {
//       console.log(err)
//    }
//    client.close()

//    // res.send("File Downloaded")
// }

// //! for running a cron job
// export const jsonData = (req, res) => {
//    //! Node Cron
//    schedule.scheduleJob('*/5 * * * * *', () => {

//       ftpClient();

//       console.log('Downloading file every 5 seconds');

//       // res.sendStatus(200);
//       // res.setHeader('X-Foo', 'json')

//       // res.send("hitting the end point every 5 seconds")
//       try {
//          //! Excel to JSON
//          const workbook = XLSX.readFile("./test/demo.xlsx");

//          let noOfSheet = workbook.SheetNames;
//          // console.log(noOfSheet); // Sheet1, Sheet2, ...

//          let data = [];
//          noOfSheet.forEach((entry) => {
//             let worksheet = workbook.Sheets[entry];
//             // console.log(worksheet); //getting the complete sheet

//             // let data = [];
//             data = XLSX.utils.sheet_to_json(worksheet);
//          });

//          // console.log(data);

//          // res.sendStatus(200);
//          // res.setHeader('X-Foo', 'Express')
//          // res.setHeader('Content-Type', 'application/json');
//          // return res.status(400).json

//          // console.log('data');
//          // console.log(req.headers);

//          // res.statusCode = 200;
//          // res.setHeader('Content-Type', 'json');
//          // res.send(data)
//          console.log(data);

//          // return res.status(400).json
//       } catch (error) {
//          console.log(error);
//       }
//    });
// }


//! Sending Email
// let transporter = nodemailer.createTransport({
//    service: 'gmail', //! gmail or yahoo or outlook etc...
//    auth: {
//       user: 'sender@gmail.com',
//       pass: 'sender email password'
//    }
// });

// let mailOptions = {
//    from: 'sender@gmail.com',
//    to: 'receive-1@gmail.com, receiver-2@gmail.com',
//    subject: 'Sending Email using Node.js',
//    text: 'Email Content'
// };

// transporter.sendMail(mailOptions, (error, info) => {
//    if (error) {
//       console.log(error);
//    } else {
//       console.log('Email sent: ' + info.response);
//    }
// });