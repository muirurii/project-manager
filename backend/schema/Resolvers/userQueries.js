const { users } = require("../../data");

const UserQueries = {
    getUser: () => {
        return users[0]
    },
    getUsers: () => {
        return users;
    },
}

module.exports = UserQueries;