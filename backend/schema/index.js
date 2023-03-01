const { projects } = require("../data/idex");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } = require("graphql");

projects[0].clientId

const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        clientId: {
            type: GraphQLID
        }
    })
})


const RootQuery = new GraphQLObjectType({
    name: "Root",
    fields: () => ({
        client: {
            type: ClientType,
            args: {
                _id: {
                    type: GraphQLID
                }
            }
        }
    })
})