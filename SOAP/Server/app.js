const soap = require('soap');
const express = require('express');
const app = express();
/**
 * this is remote service defined in this file, that can be accessed by clients, who will supply args
 * response is returned to the calling client
 * our service calculates bmi by dividing weight in kilograms by square of height in metres
 */
const service = {
   BMI_Service: {
      BMI_Port: {
         calculateBMI(args) {
            //console.log(Date().getFullYear())
            const year = new Date().getFullYear();
            const n = args.weight / (args.height * args.height);
            console.log(n);
            return { bmi: n };
         }
      }
   }
};

// xml data is extracted from wsdl file created
const xml = require('fs').readFileSync('./bmicalculator.wsdl', 'utf8');
//create an express server and pass it to a soap server
const server = app.listen(3030, function () {
   const host = '127.0.0.1';
   const port = server.address().port;
});
soap.listen(server, '/bmicalculator', service, xml);