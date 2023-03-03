const User = require("../db/Models/User")
const Project = require("../db/Models/Project")

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean,
    GraphQLSchema,
} = require("graphql");

//Types for queries

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        projectName: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        creator: {
            type: UserType,
        },
        admins: {
            type: UserType,
        },
        assignedUsers: {
            type: UserType,
        },
        status: {
            type: GraphQLString,
        },
        estimatedHours: {
            type: GraphQLInt,
        },
        tasks: {
            type: new GraphQLList(TaskTypes)
        }
    }),
});

const UserType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        name: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        _id: {
            type: GraphQLID,
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent) {
                return projects.filter((project) => project.clientId === parent._id);
            },
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "Root",
    fields: () => ({
        client: {
            type: ClientType,
            args: {
                _id: {
                    type: GraphQLID,
                },
            },
            resolve(parent, args) {
                return clients.find((client) => client._id === args._id);
            },
        },
        project: {
            type: ProjectType,
            args: {
                _id: {
                    type: GraphQLString,
                },
            },
            resolve(parent, args) {
                return projects.find((project) => project._id == args._id);
            },
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve() {
                return clients;
            },
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve() {
                return projects;
            },
        },
    }),
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addProject: {
            type: ProjectType,
            args: {
                name: GraphQLString,
                description: GraphQLString,
                clientId: GraphQLID,
            },
            resolve(parent, args) {
                const { clientId, description, name } = args;
                projects.push({ _id: 5, clientId, description, name });
                return projects;
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});