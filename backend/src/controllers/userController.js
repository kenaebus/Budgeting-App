exports.getUsers = async (req,res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.addUser = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const user = new Expense({
            username,
            password,
            email
        });

        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

exports.deleteUser = async(req,res) => {
    FIXME: UNFINISHED
};