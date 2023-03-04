const { users } = require("../data")

const resolvers = {
    Query: {
        getUsers() {
            return users
        },
    }
};


module.exports = { resolvers };