const express = require("express");
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

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = {
        id: users.length +1,
        name: req.body.name
    };

    users.push(newUser);

    res.json(newUser);
});

app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    users = users.filter(user => user.id !== id);

    res.json({message: "User deleted"});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});