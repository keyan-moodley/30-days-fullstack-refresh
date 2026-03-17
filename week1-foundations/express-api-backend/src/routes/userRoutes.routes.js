import userController from "../controllers/userController.controller";
import express from "express";
const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById)
router.post("/users", userController.addUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;