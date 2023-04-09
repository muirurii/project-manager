const User = require("../../../../db/Models/User");
const Project = require("../../../../db/Models/Project");
const bcrypt = require("bcrypt");
const { customError } = require("../../../Errors");
const { setCookie, refreshToken, getToken } = require("../../../../auth/token");

exports.getUser = async(parent, args, { res }) => {
    const { username, password } = args.input;

    const user = await User.findOne({ username }).populate("projects");
    if (!user) {
        return customError("account not registered", "BAD_USER_INPUT");
    }

    const matchPasswords = await bcrypt.compare(password, user.password);
    if (!matchPasswords) {
        return customError("wrong credentials", "BAD_USER_INPUT");
    }

    setCookie(res, { username, _id: user._id });
    user.accessToken = getToken({ username, _id: user._id },
        process.env.ACCESS_SECRET
    );

    return user;
};

exports.refreshUser = async(parent, args, { res, req }) => {
    refreshToken(req);

    const { authName, authId } = req.auth;
    if (!authName || !authId) {
        return customError("not logged", "BAD_USER_INPUT");
    }

    const user = await User.findOne({ username: authName }).populate("projects");
    if (!user) {
        return customError("account not registered", "BAD_USER_INPUT");
    }

    setCookie(res, { username: authName, _id: authId });
    user.accessToken = getToken({ username: authName, _id: authId },
        process.env.ACCESS_SECRET
    );

    return user;
};

exports.viewUser = async() => {
    const { username } = args;
    const user = await User.findOne({ username });

    if (!user) {
        return customError("account not registered", "BAD_USER_INPUT");
    }

    return user;
};

exports.getUsers = () => {
    return [];
};