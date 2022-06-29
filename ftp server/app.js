import express from "express";
import serveIndex from "serve-index";

const app = express();
const PORT = 3000;

app.use(
   '/ftp',
   express.static('public/ftp'),
   serveIndex('public/ftp', { icons: true })
)
app.listen(PORT, () => console.log(`FTP Server running on port: http://localhost:${PORT}`));