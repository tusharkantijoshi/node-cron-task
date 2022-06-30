var ftpClient = require('ftp-client'),
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

   client.download('/public', 'test/',
      {
         overwrite: 'none'
      }, function (result) {
         console.log(result);
      });
});