import ftp from "basic-ftp"; //! ftp client
import schedule from 'node-schedule'; //! for scheduling a job
import XLSX from "xlsx"; //! for converting excel data to json
// import nodemailer from 'nodemailer'; //! for mailing
import express from "express";
const app = express();
const PORT = 5000;

//! for downloading files from the ftp server
const ftpClient = async () => {
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

//! Node Cron
schedule.scheduleJob('*/5 * * * * *', () => {

   ftpClient();

   console.log('Downloading file every 5 seconds');

   //! Parsing Excel file and converting it into JSON
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


app.listen(PORT, () => console.log(`FTP Client Server running on port: http://localhost:${PORT}`));