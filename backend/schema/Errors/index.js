const { GraphQLError } = require("graphql");

exports.customError = (message, code) => {
    throw new GraphQLError(message, {
        extensions: {
            code,
        },
    });
};