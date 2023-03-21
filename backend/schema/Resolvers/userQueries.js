const User = require("../../db/Models/User");
const bcrypt = require("bcrypt");
const { customError } = require("../Errors");

const UserQueries = {
    getUser: async(parent, args) => {

        const { username, password } = args.input;
        const user = await User.findOne({ username });

        if (!user) {
            return customError("account not registered", "BAD_USER_INPUT");
        }

        const matchPasswords = await bcrypt.compare(password, user.password);
        if (!matchPasswords) {
            return customError("wrong credentials", "BAD_USER_INPUT");
        }
        return user;
    },
    viewUser: async() => {
        const { username } = args;
        const user = await User.findOne({ username });

        if (!user) {
            return customError("account not registered", "BAD_USER_INPUT");
        }

        return user;
    },
    getUsers: () => {
        return users;
    },
}

module.exports = UserQueries;