import { getAllUsers, createUser, deleteUserById, getUser } from "../../services/usersServices.service.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Server error when getting users" });
    }
};

export const addUser = async (req, res) => {
    try {
        const name = req.body.name;
        if (!name || name.trim() === "") {
            return res.status(400).json({ error: "Name required" });
        }
        const users = await createUser(name);
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ error: "Server error when adding users" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await deleteUserById(req.params.id);
        res.json({ message: `Deleted user ${req.params.id}` });
    } catch (error) {
        res.status(500).json({ error: "Server error when deleting users" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const users = await getUser(req.params.id);
        if (!users) {
            return res.sttaus(404).json({ error: "User not found" });
        }
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: "Server error when finding user by id" });
    }
};