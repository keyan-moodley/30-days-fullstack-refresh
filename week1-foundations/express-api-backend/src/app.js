const express = require("express");
const userRoutes = require("./routes/userRoutes.routes");

const app = express();

app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

module.exports = app;