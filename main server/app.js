import express from "express";
import axios from "axios"
import XLSX from "xlsx"
import path from "path"
import fs from "fs"

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000

// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
   console.log("get");
   res.send('Server Started')
});

app.get("/file", downloadFile);

async function downloadFile(req, res) {
   //! 1
   const responseData = await axios.get('http://localhost:3000/demo.xlsx');
   console.log(responseData);
   console.log(typeof (responseData)); // output: object

   // const response = JSON.stringify(responseData)
   // console.log(typeof response);

   //! 2
   /*  const filePath = path.join(__dirname, 'data', 'demo.xlsx')
    const localPath = fs.createWriteStream(filePath)
 
    let request = await axios.get('http://localhost:3000/demo.xlsx', (responseData) => {
       console.log(typeof (responseData));
       responseData.pipe(localPath);
    })
  */

   //! download the file
   const filePath = path.resolve(__dirname, 'data', 'demo.xlsx')
   fs.createWriteStream(filePath, responseData);

   // let fileBuffer = new Blob(responseData);
   // console.log(fileBuffer);

   //! convert excel data to JSON 
   const workbook = XLSX.readFile("./data/demo.xlsx");
   let noOfSheet = workbook.SheetNames;

   noOfSheet.forEach((entry) => {
      let worksheet = workbook.Sheets[entry];

      let data = [];
      data = XLSX.utils.sheet_to_json(worksheet);
      console.log(data);
   });

   console.log('downloaded');
   res.send('downloaded')
}


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));