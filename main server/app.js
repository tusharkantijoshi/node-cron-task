import express from "express";
const app = express();
const PORT = 5000;

app.use("/", (req, res) => {
   res.send('Server Started')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));