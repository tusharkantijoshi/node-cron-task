import express from "express";
import axios from "axios"
import XLSX from "xlsx"

const app = express();
const PORT = 5000

app.get("/", (req, res) => {
   console.log("get");
   res.send('Server Started')
});


app.get("/file", downloadFile);

async function downloadFile(req, res) {

   const url = 'http://localhost:3000/ftp/demo.xlsx';
   const responseData = await axios.get(url);
   // console.log(typeof (responseData)); // output: objects

   // const dataPath = path.join(__dirname, 'data', 'demo.xlsx')
   // const writer = fs.writeFileSync(dataPath);

   const workbook = XLSX.readFile(responseData);

   let noOfSheet = workbook.SheetNames;
   // console.log(noOfSheet); // Sheet1, Sheet2, ...

   noOfSheet.forEach((entry) => {
      let worksheet = workbook.Sheets[entry];
      // console.log(worksheet); //getting the complete sheet

      let data = [];
      data = XLSX.utils.sheet_to_json(worksheet);
      console.log(data);
   });

   // // const fileData = fs.createWriteStream(dataPath);
   // // responseData.data.pipe(writer)
   // fs.writeFileSync(writer, responseData);

   // //! convert excel to JSON 





   res.send('downloaded')
}


// app.get("/file", downloadFile);


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));