import pool from "../db/db.js";

export const getAllUsers = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    } catch (error) {
        res.status(500).json("Failed to get users")
    }
};

export const createUser = async (name) => {
    try {
        const addedUser = await pool.query("INSERT INTO users(name) VALUES ($1) RETURNING *", [name]);
        return addedUser.rows[0]
    } catch (error) {
        res.status(500).json("Failed to add user")
    }
};

export const deleteUserById = async (id) => {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
};

export const getUser = async (id) => {
    const getUserById = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return getUserById.rows[0];
};