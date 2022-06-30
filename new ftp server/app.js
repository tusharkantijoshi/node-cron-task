const FtpSrv = require('ftp-srv');

const port = 21;
const ftpServer = new FtpSrv({
   url: "ftp://127.0.0.1:" + port,

   anonymous: false, //! If true, will allow clients to authenticate using the username anonymous, not requiring a password from the user.

   greeting: "Connection Successful" //! A human readable array of lines or string to send when a client connects.
});

ftpServer.on('login', ({ connection, username, password }, resolve, reject) => {
   if (username === 'anonymous' && password === 'anonymous') {
      return resolve({ root: "./public/demo.xlsx" });
   }
   return reject(new errors.GeneralError('Invalid username or password', 401));
});

ftpServer.listen().then(() => {
   console.log('Server running');
});


//! Events: login: Occurs when a client is attempting to login. Here you can resolve the login request by username and password.