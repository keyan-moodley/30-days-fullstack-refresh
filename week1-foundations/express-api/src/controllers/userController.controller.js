const userService = require("../services/usersServices.service")

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Server error when getting users" });
    }
};

exports.addUser = async (req, res) => {
    try {
        console.log("Adding user...")
        if (!req.body.name) {
            return res.status(400).json({ error: "Name required" });
        }
        console.log("Fetching user info...")
        const users = await userService.addUser(req.body.name);
        console.log("Added user!")
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ error: "Server error when adding users" });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.json({ message: `Deleted user ${req.params.id}` });
    } catch (error) {
        res.status(500).json({ error: "Server error when deleting users" });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const users = await userService.getUserById(req.params.id);
        if (!users) {
            return res.sttaus(404).json({ error: "User not found" });
        }
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: "Server error when finding user by id" });
    }
};