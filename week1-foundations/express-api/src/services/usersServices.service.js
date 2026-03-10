const pool = require("../models/db.js")

exports.getAllUSers = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

exports.addUsers = async (name) => {
    const addedUser = await pool.query("INSERT INTO users VALUES ($1) RETURNING *", [name]);
    return addedUser.rows[0]
};