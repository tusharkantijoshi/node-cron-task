import fs from 'fs'
import path from 'path'
import axios from "axios";



async function download() {


   const url = "http://localhost:3000/ftp/demo.xlsx";

   const filePath = path.resolve(__dirname, 'data', 'demo.xlsx')


   const writer = fs.createWriteStream(filePath)


   const response = await axios({
      url: url,
      method: GET,
      responseType: 'stream'

   })

   response.data.pipe(writer)

}

download()