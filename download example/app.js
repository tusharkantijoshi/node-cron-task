import fs from "fs";

import axios from 'axios';


const url = 'http://localhost:3000/demo.xlsx';

function download(url, path) {
   const localPath = fs.createWriteStream(path)

   let request = axios.get(url, function (res) {
      console.log(res);
      res.pipe(localPath);
   })
}


download(url, "./data/" + "demo.xlsx")


// https.get(url, (res) => {
//    const fileStream = fs.createWriteStream("demo.xlsx")
//    res.pipe(fileStream);

//    fileStream.on('finished', () => {
//       fileStream.close();
//    })
// })
