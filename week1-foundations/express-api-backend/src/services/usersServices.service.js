import pool from "../models/db";

exports.getAllUsers = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    } catch (error) {
        res.status(500).json("Failed to get users")
    }
};

exports.addUser = async (name) => {
    try {
        console.log("Adding user into db...")
        const addedUser = await pool.query("INSERT INTO users(name) VALUES ($1) RETURNING *", [name]);
        console.log("Added user to db")
        return addedUser.rows[0]
    } catch (error) {
        res.status(500).json("Failed to add user")
    }
};

exports.deleteUser = async (id) => {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
};

exports.getUserById = async (id) => {
    const getUserById = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return getUserById.rows[0];
};