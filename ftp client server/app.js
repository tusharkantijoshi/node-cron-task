import express from "express";
const app = express();
const PORT = 5000;

//! routes
import usersRoutes from "./routes/route.js";
app.use("/ftp", usersRoutes);

app.get("/", (req, res) => res.send("Server Started"));
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`FTP Server running on port: http://localhost:${PORT}`));

