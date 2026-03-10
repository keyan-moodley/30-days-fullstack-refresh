exports.getUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
};

exports.addUser = async (req, res) => {
    const name = req.body.name;
    const users = await userService.addUsers(name);
    res.json(users);
};