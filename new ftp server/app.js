const FtpSrv = require('ftp-srv');

const port = 21;
const ftpServer = new FtpSrv({
   url: "ftp://127.0.0.1:" + port,
   anonymous: true
});

ftpServer.on('login', ({ connection, username, password }, resolve, reject) => {
   if (username === 'anonymous' && password === 'anonymous') {
      return resolve({ root: "/" });
   }
   return reject(new errors.GeneralError('Invalid username or password', 401));
});

ftpServer.listen().then(() => {
   console.log('Server running');
});