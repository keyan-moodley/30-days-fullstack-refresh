import { getUsers, getUserById, addUser, deleteUser } from "../controllers/users/userController.controller.js";
import express from "express";
const router = express.Router();
import validateUser from "../middleware/validateUser.js";
import authenticateToken from "../middleware/authMiddleware.js";

router.get("/users", getUsers);
router.get("/users/:id", getUserById)
router.post("/users", validateUser, addUser);
router.delete("/users/:id", deleteUser);

export default router;