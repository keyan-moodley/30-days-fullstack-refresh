const userController = require("../controllers/userController.controller.js")

Router.get("/users", userController.getUsers);
Router.post("/users", userController.addUser);
Router.delete("/users/:id", userController.deleteUser);