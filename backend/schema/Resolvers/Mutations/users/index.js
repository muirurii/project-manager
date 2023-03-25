const User = require("../../../../db/Models/User");
const bcrypt = require("bcrypt");
const { customError } = require("../../../Errors");
const { setCookie } = require("../../../../auth/token");

exports.addUser = async(parent, args) => {
    const { username, email, password, repeatPassword } = args.input;

    if (password !== repeatPassword) {
        return customError("Passwords don't match", "BAD_USER_INPUT");
    }

    const duplicate = await User.findOne({
        $or: [{ email }, { username }],
    });

    if (duplicate) {
        const duplicateName = await User.findOne({ username });

        if (duplicateName) {
            customError("username already registered", "BAD_USER_INPUT");
        } else {
            customError("email already registered", "BAD_USER_INPUT");
        }
        customError("email and username already registered", "BAD_USER_INPUT");
    }

    const hashedPassword = await bcrypt.hash(password, 7);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    setCookie(res, { username, _id: user._id });

    return user;
};