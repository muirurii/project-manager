const User = require("../../db/Models/User");
const bcrypt = require("bcrypt");
const { customError } = require("../Errors");
const { setCookie } = require("../../auth/token");

exports.getUser = async(parent, args, { res }) => {

    const { username, password } = args.input;
    const user = await User.findOne({ username });

    if (!user) {
        return customError("account not registered", "BAD_USER_INPUT");
    }

    const matchPasswords = await bcrypt.compare(password, user.password);
    if (!matchPasswords) {
        return customError("wrong credentials", "BAD_USER_INPUT");
    }
    console.log(res)
    setCookie(res, { username, _id: user._id });

    return user;
}

exports.viewUser = async() => {
    const { username } = args;
    const user = await User.findOne({ username });

    if (!user) {
        return customError("account not registered", "BAD_USER_INPUT");
    }

    return user;
}

exports.getUsers = () => {
    return [];
}