import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: "Username required" });
    }
    const user = {
        id: 1,
        username
    };
    const token = jwt.sign(
        user,
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
    res.json({ token });
};