var ftpClient = require('ftp-client'),
   config = {
      host: 'localhost',
      port: 21,
      user: 'anonymous',
      password: 'anonymous'
   },
   options = {
      logging: 'basic'
   },
   client = new ftpClient(config, options);

client.connect(function () {

   client.download('./test', './test', {
      overwrite: 'all'
   }, function (result) {
      console.log(result);
   });

});