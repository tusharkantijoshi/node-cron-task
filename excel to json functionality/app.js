import XLSX from "xlsx"
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

