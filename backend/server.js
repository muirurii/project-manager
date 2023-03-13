const express = require("express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const PORT = process.env.PORT || 5000;
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/TypeDefs");
const TaskQueries = require("./schema/Resolvers/taskQueries")
const UserQueries = require("./schema/Resolvers/userQueries")
const ProjectQueries = require("./schema/Resolvers/projectQueries")

const app = express();

const startServer = async() => {
    const server = new ApolloServer({
        typeDefs,
        resolvers: {
            Query: {
                getUser: UserQueries.getUser,
                getUsers: UserQueries.getUsers,
                getProject: ProjectQueries.getProject,
                getProjects: ProjectQueries.getProjects,
                getTask: TaskQueries.getTask,
                getTasks: TaskQueries.getTasks,
            },
        },
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground
        ]
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => console.log(`graphql server started on ${server.graphqlPath}`));
}

app.get("/api", () => console.log(`API working on ${PORT}`));

startServer();