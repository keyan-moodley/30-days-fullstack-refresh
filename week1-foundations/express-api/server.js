const express = require("express");
const pool = require("./db.js")

const app = express();

const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Alice"},
    { id: 2, name: "Bob"}
];

app.get("/", (req, res) => {
    res.send("My first Express server!");
});

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows)
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).send("Server error");
    }
});

app.post("/users", async (req, res) => {
    try {
        const name = req.body.name;
        const addUser = await pool.query("INSERT INTO users (name) VALUES ($1) RETURNING *", [name]);
        res.json(addUser.rows[0])
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).send("Server error")
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        await pool.query("DELETE FROM users WHERE id = $1", [id]);
        res.json({message: `User ${id} was deleted`})
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).send("Server error")
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});